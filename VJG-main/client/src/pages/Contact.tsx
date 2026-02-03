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
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Github,
  Twitter,
  Instagram
} from "lucide-react";

export default function Contact() {
  const createInquiry = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = async (data: InsertInquiry) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "Failed to send message");
    }

    alert("Message sent successfully ✅");
    form.reset();
  } catch (error) {
    console.error(error);
    alert("Failed to send message ❌");
  }
};

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Header */}
      <div className="bg-slate-900 text-white pt-32 pb-16">
        <div className="container-wrapper text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Get in touch with us to discuss your project, hiring needs, or general
            inquiries.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">

            {/* LEFT: Contact Info */}
            <div className="bg-primary p-10 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Get In Touch
                </h2>
                <p className="text-blue-100 mb-12">
                  Fill out the form and our team will get back to you within 24
                  hours to discuss your requirements.
                </p>

                <div className="space-y-6">
                  <InfoItem
                    icon={<MapPin className="h-5 w-5" />}
                    title="Visit Us"
                    text="K R Puram, Bengaluru 560049"
                  />
                  <InfoItem
                    icon={<Phone className="h-5 w-5" />}
                    title="Call Us"
                    text="+91 6360134569"
                  />
                  <InfoItem
                    icon={<Mail className="h-5 w-5" />}
                    title="Email Us"
                    text="info@varchaslabs.com"
                  />
                  <InfoItem
                    icon={<Clock className="h-5 w-5" />}
                    title="Working Hours"
                    text="Mon - Sat: 9:00 AM - 7:00 PM"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <div className="text-sm text-blue-200">
                  Follow us on social media
                </div>
                <div className="flex gap-4 mt-4">
                  <SocialIcon
                    href="https://www.linkedin.com/company/varchaslabs"
                    icon={<Linkedin className="h-4 w-4" />}
                  />
                  <SocialIcon
                    href="https://github.com/Somaautomation"
                    icon={<Github className="h-4 w-4" />}
                  />
                  <SocialIcon
                    href="https://twitter.com/varchaslabs"
                    icon={<Twitter className="h-4 w-4" />}
                  />
                  <SocialIcon
                    href="https://instagram.com/varchaslabs"
                    icon={<Instagram className="h-4 w-4" />}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="p-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Send us a Message
              </h2>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  label="Full Name"
                  placeholder="John Doe"
                  error={form.formState.errors.name?.message}
                  {...form.register("name")}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    label="Email Address"
                    placeholder="john@example.com"
                    error={form.formState.errors.email?.message}
                    {...form.register("email")}
                  />
                  <FormField
                    label="Phone Number"
                    placeholder="+91 6360134569"
                    error={form.formState.errors.phone?.message}
                    {...form.register("phone")}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                    Your Message
                  </label>
                  <Textarea
                    {...form.register("message")}
                    placeholder="Tell us about your project, hiring requirement, or inquiry…"
                    className="min-h-[150px] bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20 resize-none"
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={createInquiry.isPending}
                  className="w-full h-12 text-lg bg-primary hover:bg-blue-600 shadow-lg shadow-primary/20"
                >
                  {createInquiry.isPending ? "Sending..." : "Submit Inquiry"}
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

/* ---------- Small Helper Components ---------- */

function InfoItem({ icon, title, text }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-blue-100 text-sm">{text}</p>
      </div>
    </div>
  );
}

function SocialIcon({ href, icon }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-9 w-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
    >
      {icon}
    </a>
  );
}

function FormField({ label, error, ...props }: any) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700 mb-1.5 block">
        {label}
      </label>
      <Input
        {...props}
        className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
