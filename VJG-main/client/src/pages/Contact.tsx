import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Github,
  Twitter,
  Instagram
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const createInquiry = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    defaultValues: { name: "", email: "", phone: "", message: "" }
  });

  const onSubmit = async (data: InsertInquiry) => {
    try {
      const res = await fetch("/api/contact", { // <- updated endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error();
      alert("Message sent successfully ✅");
      form.reset();
    } catch {
      alert("Failed to send message ❌");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      <Navbar />

      {/* ================= 3D GET IN TOUCH ================= */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="perspective-[1200px]"></div>
        {/* Morphing spheres */}
        <div className="absolute inset-0 -z-10">
          <div className="sphere sphere-blue" />
          <div className="sphere sphere-purple" />
        </div>

        <div className="container-wrapper">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Get in <span className="text-blue-500">Touch</span>
          </motion.h1>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-10 perspective-1000">
            <ContactCard icon={<Mail />} title="Email Us" text="info@varchaslabs.com" />
            <ContactCard icon={<Phone />} title="Call Us" text="+91 63601 34569" />
            <ContactCard
              icon={<MapPin />}
              title="Visit Us"
              text="K R Puram, Bengaluru"
            />
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="section-padding bg-slate-50 text-slate-900">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">

            {/* LEFT */}
            <div className="bg-primary p-10 text-white">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <InfoItem icon={<MapPin />} title="Visit" text="Bengaluru, India" />
                <InfoItem icon={<Phone />} title="Phone" text="+91 6360134569" />
                <InfoItem icon={<Mail />} title="Email" text="info@varchaslabs.com" />
                <InfoItem icon={<Clock />} title="Hours" text="Mon–Sat, 9AM–7PM" />
              </div>

              <div className="flex gap-4 mt-10">
                <SocialIcon href="https://linkedin.com" icon={<Linkedin />} />
                <SocialIcon href="https://github.com" icon={<Github />} />
                <SocialIcon href="https://twitter.com" icon={<Twitter />} />
                <SocialIcon href="https://instagram.com" icon={<Instagram />} />
              </div>
            </div>

            {/* RIGHT */}
            <div className="p-10">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
  
  <div>
    <label className="text-sm font-medium">Full Name</label>
    <input
      {...form.register("name")}
      className="w-full h-12 border rounded-md px-3"
    />
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label className="text-sm font-medium">Email</label>
      <input
        {...form.register("email")}
        className="w-full h-12 border rounded-md px-3"
      />
    </div>

    <div>
      <label className="text-sm font-medium">Phone</label>
      <input
        {...form.register("phone")}
        className="w-full h-12 border rounded-md px-3"
      />
    </div>
  </div>

  <textarea
    {...form.register("message")}
    className="w-full min-h-[140px] border rounded-md px-3 py-2"
  />

  <Button type="submit" className="w-full h-12">
    Submit
  </Button>

</form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ================= Components ================= */

function ContactCard({ icon, title, text }: any) {
  return (
    <motion.div
      whileHover={{ rotateX: 10, rotateY: -10, y: -12 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="card-3d"
    >
      <div className="icon-wrap">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

function InfoItem({ icon, title, text }: any) {
  return (
    <div className="flex gap-4">
      <div className="icon-wrap-sm">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-blue-100">{text}</p>
      </div>
    </div>
  );
}

function SocialIcon({ href, icon }: any) {
  return (
    <a href={href} target="_blank" className="social-icon">
      {icon}
    </a>
  );
}

function FormField({ label, ...props }: any) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <Input {...props} className="h-12" />
    </div>
  );
}
