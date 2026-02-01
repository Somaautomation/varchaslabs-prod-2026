import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center text-white font-bold text-lg font-display">
                VL
              </div>
              <span className="font-display font-bold text-xl">Varchaslabs</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Connecting top-tier IT talent with leading technology companies. Your career success is our primary mission.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors">All Courses</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Placement</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Permanent Staffing</li>
              <li>Contract Hiring</li>
              <li>Executive Search</li>
              <li>Career Counseling</li>
              <li>Resume Building</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>#K R Puram Bangalore 560049</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 6360134569</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>contact@Varchaslabs.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Varchaslabs.  All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all cursor-pointer">
      {icon}
    </div>
  );
}
