import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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

  const onSubmit = (data: InsertInquiry) => {
    createInquiry.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="bg-slate-900 text-white pt-32 pb-16">
        <div className="container-wrapper text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have questions about our courses? We're here to help you start your journey.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            
            {/* Contact Info Side */}
            <div className="bg-primary p-10 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Get In Touch</h2>
                <p className="text-blue-100 mb-12">
                  Fill out the form and our team will get back to you within 24 hours to discuss your career goals.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Visit Us</h3>
                      <p className="text-blue-100 text-sm">K R Puram<br />Bengaluru 560049</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-blue-100 text-sm">+91 6360134569</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-blue-100 text-sm">Varchaslabs@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Working Hours</h3>
                      <p className="text-blue-100 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="text-sm text-blue-200">Follow us on social media</div>
                <div className="flex gap-4 mt-4">
                  {/* Social Icons Placeholder */}
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer transition-colors" />
                  ))}
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Full Name</label>
                  <Input 
                    {...form.register("name")} 
                    placeholder="John Doe" 
                    className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">Email Address</label>
                    <Input 
                      {...form.register("email")} 
                      placeholder="john@example.com" 
                      className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">Phone Number</label>
                    <Input 
                      {...form.register("phone")} 
                      placeholder="+91 6360134569" 
                      className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Your Message</label>
                  <Textarea 
                    {...form.register("message")} 
                    placeholder="Tell us about the course you are interested in..." 
                    className="min-h-[150px] bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20 resize-none"
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-xs mt-1">{form.formState.errors.message.message}</p>
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
