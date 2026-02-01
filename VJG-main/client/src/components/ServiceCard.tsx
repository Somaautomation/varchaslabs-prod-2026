import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <Link href="/services" className="block group">
      <div 
        className="h-full p-8 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        <div className="flex items-center text-primary font-semibold text-sm mt-auto group-hover:translate-x-1 transition-transform">
          Learn More <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </Link>
  );
}
