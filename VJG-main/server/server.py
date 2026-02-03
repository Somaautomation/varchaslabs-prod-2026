from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.concurrency import run_in_threadpool
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware

from motor.motor_asyncio import AsyncIOMotorClient
from pathlib import Path

from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List

import os
import uuid
import logging
from datetime import datetime, timezone

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


# -------------------------------------------------
# Load Environment Variables
# -------------------------------------------------

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")


# -------------------------------------------------
# Logging Setup
# -------------------------------------------------

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("server")


# -------------------------------------------------
# MongoDB Connection
# -------------------------------------------------

mongo_url = os.environ.get("MONGO_URL")
db_name = os.environ.get("DB_NAME")

if not mongo_url or not db_name:
    raise RuntimeError("Missing MONGO_URL or DB_NAME in .env file")

client = AsyncIOMotorClient(mongo_url)
db = client[db_name]


# -------------------------------------------------
# SMTP Configuration (Zoho)
# -------------------------------------------------

SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.zoho.in")
SMTP_PORT = int(os.environ.get("SMTP_PORT", 587))

SMTP_EMAIL = os.environ.get("SMTP_EMAIL")
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD")

RECEIVER_EMAIL = os.environ.get("RECEIVER_EMAIL", SMTP_EMAIL)

if not SMTP_EMAIL or not SMTP_PASSWORD:
    raise RuntimeError("Missing SMTP_EMAIL or SMTP_PASSWORD in .env file")


# -------------------------------------------------
# FastAPI App Setup
# -------------------------------------------------

app = FastAPI()

api_router = APIRouter(prefix="/api")


# -------------------------------------------------
# Models
# -------------------------------------------------

class InquiryCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: Optional[str] = None
    message: str = Field(..., min_length=1, max_length=2000)


class Inquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    email_sent: bool = False


# -------------------------------------------------
# Email Sending Function
# -------------------------------------------------

def send_email_notification(inquiry: Inquiry) -> bool:
    """
    Send inquiry email to company inbox using Zoho SMTP
    """

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"New Contact Inquiry from {inquiry.name}"
        msg["From"] = SMTP_EMAIL
        msg["To"] = RECEIVER_EMAIL

        # Plain Text Email
        text = f"""
New Contact Inquiry Received

Name: {inquiry.name}
Email: {inquiry.email}
Phone: {inquiry.phone or "Not Provided"}

Message:
{inquiry.message}

Received At: {inquiry.created_at.strftime("%Y-%m-%d %H:%M:%S UTC")}
"""

        # HTML Email
        html = f"""
<h2>New Contact Inquiry</h2>
<p><b>Name:</b> {inquiry.name}</p>
<p><b>Email:</b> {inquiry.email}</p>
<p><b>Phone:</b> {inquiry.phone or "N/A"}</p>
<p><b>Message:</b><br>{inquiry.message}</p>
<hr>
<p><small>Received at: {inquiry.created_at.strftime("%Y-%m-%d %H:%M:%S UTC")}</small></p>
"""

        msg.attach(MIMEText(text, "plain"))
        msg.attach(MIMEText(html, "html"))

        # Zoho SMTP Send (STARTTLS)
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_EMAIL, SMTP_PASSWORD)
            server.sendmail(SMTP_EMAIL, RECEIVER_EMAIL, msg.as_string())

        logger.info("Email sent successfully!")
        return True

    except Exception as e:
        logger.error(f"Email failed: {str(e)}")
        return False


# -------------------------------------------------
# Routes
# -------------------------------------------------

@api_router.get("/")
async def root():
    return {"message": "Backend is running successfully!"}


@api_router.post("/inquiry")
async def create_inquiry(input: InquiryCreate):
    """
    Contact Form Endpoint:
    - Save inquiry in MongoDB
    - Send email notification
    """

    try:
        inquiry_obj = Inquiry(
            name=input.name,
            email=input.email,
            phone=input.phone,
            message=input.message
        )

        # Send Email (Non-blocking)
        email_sent = await run_in_threadpool(send_email_notification, inquiry_obj)
        inquiry_obj.email_sent = email_sent

        # Save Inquiry to MongoDB
        doc = inquiry_obj.model_dump()
        doc["created_at"] = doc["created_at"].isoformat()

        await db.inquiries.insert_one(doc)

        return {
            "success": True,
            "message": "Inquiry submitted successfully!",
            "email_sent": email_sent,
            "id": inquiry_obj.id
        }

    except Exception as e:
        logger.error(f"Inquiry error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit inquiry")


@api_router.get("/inquiries", response_model=List[dict])
async def get_all_inquiries():
    """
    Admin endpoint to view all inquiries
    """
    inquiries = await db.inquiries.find({}, {"_id": 0}).to_list(1000)
    return inquiries


# -------------------------------------------------
# Middleware + Router Setup
# -------------------------------------------------

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -------------------------------------------------
# Shutdown Event
# -------------------------------------------------

@app.on_event("shutdown")
async def shutdown_db():
    client.close()
