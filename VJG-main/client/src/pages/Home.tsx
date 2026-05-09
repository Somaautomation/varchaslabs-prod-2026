
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Trophy, Users, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Rocket, ChevronRight, Handshake } from "lucide-react";
import { Code2, Scale } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // WhatsApp Configuration - ADD YOUR NUMBER HERE
const whatsappNumber = "916360134569"; // Replace with your number: country code + number (no spaces)
const whatsappMessage = "Hi! I'm interested in your software development services and IT staffing solutions. Please share details on how we can collaborate.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const companies = [
    { name: "Microsoft", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg" },
    { name: "Google", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { name: "Amazon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/TCS_Logo.svg" },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Cognizant_logo_2022.svg" },
    { name: "HCL Technologies", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/HCL_Tech_Bee_Logo.svg" },
    { name: "Tech Mahindra", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Tech_Mahindra_New_Logo.svg" },
    { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Capgemini_201x_logo.svg" },
    { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
    { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
    { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* WhatsApp Floating Button - ADD THIS */}
<a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
  aria-label="Contact us on WhatsApp"
>
  <div className="whatsapp-button">
    <svg
      viewBox="0 0 32 32"
      className="whatsapp-icon"
      fill="currentColor"
    >
      <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.924 0-7.435 6.050-13.485 13.485-13.485s13.485 6.050 13.485 13.485c0 7.435-6.050 13.485-13.485 13.485zM21.98 18.668c-0.241-0.241-0.578-0.394-0.951-0.394-0.366 0-0.672 0.153-0.913 0.394l-1.263 1.263c-0.154 0.154-0.365 0.241-0.596 0.241s-0.442-0.087-0.596-0.241l-3.636-3.636c-0.154-0.154-0.241-0.365-0.241-0.596s0.087-0.442 0.241-0.596l1.263-1.263c0.241-0.241 0.394-0.547 0.394-0.913s-0.153-0.672-0.394-0.913l-2.424-2.424c-0.241-0.241-0.578-0.394-0.951-0.394-0.366 0-0.672 0.153-0.913 0.394l-1.807 1.807c-0.511 0.511-0.793 1.207-0.793 1.95 0 1.153 0.435 2.306 1.294 3.434l0.097 0.127c1.375 1.788 3.293 3.707 5.715 5.715 2.713 2.249 5.186 3.535 7.334 3.827 0.193 0.028 0.386 0.042 0.578 0.042 1.071 0 2.050-0.407 2.759-1.145l1.807-1.807c0.241-0.241 0.394-0.547 0.394-0.913s-0.153-0.672-0.394-0.913l-2.424-2.424z"/>
    </svg>
    <span className="whatsapp-text">Chat with us</span>
  </div>
</a>

      {/* HERO SECTION */}
<section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
      alt="Professionals collaborating" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-slate-900/80 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
  </div>

  <div className="container-wrapper relative z-10 grid lg:grid-cols-2 gap-12 items-center">
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white space-y-6"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-blue-100">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        Trusted by Growing Tech Companies
      </div>
      
      <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
        Connecting Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Talent</span> Real-World Delivery
      </h1>
      
      <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
        VarchasLabs bridges the gap between aspirants and industry. We hire, train, and deploy skilled engineers who co-work with client teams to deliver exceptional software solutions. ``
      </p>

      {/* PRIMARY CTAs (For Clients) */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link href="/contact">
          <Button size="lg" className="bg-primary hover:bg-blue-600 text-white px-8 h-14 rounded-xl text-lg shadow-lg shadow-primary/25">
            <Rocket className="w-5 h-5 mr-2" />
            Hire Engineers
          </Button>
        </Link>
        <Link href="/services">
          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 h-14 rounded-xl text-lg shadow-lg shadow-cyan-600/25">
            <Briefcase className="w-5 h-5 mr-2" />
            Start a Project
          </Button>
        </Link>
      </div>

      {/* SECONDARY CTA (For Talent) */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/careers#jobs">
          <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 h-12 rounded-xl text-base backdrop-blur-sm">
            Browse Openings
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>

      <div className="pt-8 flex items-center gap-8 text-sm font-medium text-slate-400 border-t border-white/10">
        <div className="flex items-center gap-2">
          <Handshake className="text-green-400 h-5 w-5" />
          <span>MNC Delivery Partners</span>
        </div>
        <div className="flex items-center gap-2">
          <Trophy className="text-yellow-400 h-5 w-5" />
          <span>15+ Years Excellence</span>
        </div>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="hidden lg:block relative"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-30 blur-2xl rounded-full" />
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
        {/* UPDATED STATS */}
        <div className="flex flex-nowrap gap-6 overflow-x-auto">
          <StatCard number="500+" label="Engineers Trained & Deployed" icon={<Users className="text-cyan-400" />} />
          <StatCard number="50+" label="Software Projects Delivered" icon={<Briefcase className="text-blue-400" />} />
          <StatCard number="200+" label="Client & Hiring Partners" icon={<Handshake className="text-green-400" />} />
          <StatCard number="15+" label="Years Industry Experience" icon={<Trophy className="text-yellow-400" />} />
        </div>
        
        {/* TAGLINE UNDER STATS */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-center text-sm text-slate-400 italic">
            Engineers trained by us, deployed within client teams, and aligned to real-world delivery standards.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</section>

{/* HOW WE WORK SECTION */}
<section className="py-24 bg-slate-900">
  <div className="container-wrapper">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-6">
        <Briefcase className="w-4 h-4" />
        Our Process
      </div>
      <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
        Our Delivery & Staffing Model
      </h2>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto">
        A proven methodology that ensures quality delivery and seamless team integration
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Step 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative group"
      >
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300">
          <div className="text-6xl font-bold text-slate-700/50 absolute top-4 right-4">01</div>
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6 shadow-lg">
            <Code2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Hire & Train</h3>
          <p className="text-slate-400">We recruit engineers and upskill them on real project stacks</p>
        </div>
      </motion.div>

      {/* Step 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative group"
      >
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300">
          <div className="text-6xl font-bold text-slate-700/50 absolute top-4 right-4">02</div>
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white mb-6 shadow-lg">
            <Rocket className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Deploy & Co-Work</h3>
          <p className="text-slate-400">Engineers integrate with your team and processes</p>
        </div>
      </motion.div>

      {/* Step 3 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative group"
      >
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300">
          <div className="text-6xl font-bold text-slate-700/50 absolute top-4 right-4">03</div>
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white mb-6 shadow-lg">
            <Scale className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Deliver & Scale</h3>
          <p className="text-slate-400">Continuous delivery with flexible scaling</p>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* SCROLLING CLIENT COMPANIES SECTION */}
      <section className="py-20 companies-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container-wrapper relative z-10">
          <motion.div   
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-4">
              <Sparkles className="w-4 h-4" />
              Our Clients & Partners
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">
              Technology Companies We Work With
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Delivering software solutions and skilled talent to growing businesses
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="scroll-container">
              <div className="scroll-content">
                {[...companies, ...companies].map((company, index) => (
                  <div key={index} className="company-card">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="company-logo"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const sibling = target.nextElementSibling as HTMLElement;
                        if (sibling) sibling.style.display = "block";
                      }}
                    />
                    <span className="company-fallback text-xl font-bold text-slate-700">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="scroll-fade-left"></div>
            <div className="scroll-fade-right"></div>
          </div>
        </div>
      </section>

{/* Blue-Purple Gradient Feature Section */}
<section className="gradient-feature-section relative overflow-hidden">
  {/* Animated Background Elements */}
  <div className="gradient-bg-left"></div>
  <div className="gradient-bg-right"></div>
  
  <div className="container-wrapper relative z-10 py-20">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-bold tracking-wide uppercase">
          <Sparkles className="w-4 h-4" />
          Why Choose Us
        </div>
        
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
          Build Software. Scale Teams. Deliver Results.
        </h2>
        
        <p className="text-lg text-white/90 leading-relaxed">
          We partner with businesses to deliver high-quality software solutions and reliable IT staffing services—helping you innovate faster and scale with confidence.
        </p>

        {/* Feature List */}
<div className="space-y-4 pt-4">
  {[
    { icon: "✓", text: "Custom software development & product engineering" },
    { icon: "✓", text: "IT staffing solutions (contract, full-time, remote)" },
    { icon: "✓", text: "Dedicated teams & resource augmentation" },
    { icon: "✓", text: "Quality-driven, agile, and secure delivery" }
  ].map((item, index) => (
    <div key={index} className="flex items-center gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold">
        {item.icon}
      </div>
      <span className="text-white/90 text-lg">{item.text}</span>
    </div>
  ))}
</div>

        <div className="pt-6">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 h-14 rounded-xl text-lg shadow-2xl">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Right Stats Cards */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 gap-6"
      >
        {[
          { number: "50+", label: "Projects Delivered", icon: "🚀" },
          { number: "200+", label: "Client Partners", icon: "🏢" },
          { number: "300+", label: "Skilled Engineers", icon: "👨‍💻" },
          { number: "24/7", label: "Support & Delivery", icon: "💬" }
        ].map((stat, index) => (
          <div
            key={index}
            className="stat-card"
          >
            <div className="text-4xl mb-3">{stat.icon}</div>
            <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
            <div className="text-white/80 text-sm font-medium">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
</section>

      {/* ABOUT PREVIEW */}
      <section className="section-padding bg-white">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="/images/homepage.png" 
                alt="Placement Process" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0" />
            </div>
            
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide uppercase">
                Expert IT Staffing
              </div>
              <h2 className="text-4xl font-display font-bold text-slate-900">
                Your Pathway to a Successful IT Career
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Varchaslabs is a leading IT solutions and placement firm. We specialize in identifying talent and matching them with the perfect roles in the industry.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {["Permanent Staffing", "Contract Hiring", "Mock Interviews", "Resume Building"].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link href="/about">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
                    About Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-wrapper relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Careers
            </h2>
            <p className="text-slate-600 text-lg">
              Explore exciting career opportunities with leading technology companies.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
  <input
      type="text"
      placeholder="Search job title..."
      className="border border-slate-200 rounded-lg px-4 py-2 w-full md:w-64"
    />

    <select className="border border-slate-200 rounded-lg px-4 py-2 w-full md:w-48">
      <option>All Locations</option>
      <option>Bangalore</option>
      <option>Hyderabad</option>
      <option>Remote</option>
    </select>

    <select className="border border-slate-200 rounded-lg px-4 py-2 w-full md:w-48">
      <option>Job Type</option>
      <option>Full Time</option>
      <option>Contract</option>
      <option>Permanent</option>
    </select>
  </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {jobs.map((job, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="h-12 w-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded uppercase font-bold text-[10px]">{job.type}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">{job.description}</p>
                <Link href="/contact">
                  <Button className="w-full" variant="outline">Apply Now</Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          {/* TECHNOLOGIES WE HIRE FOR */}
<div className="mt-20">
  <div className="text-center max-w-3xl mx-auto mb-10">
    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
      Technologies We Hire For
    </h3>
    <p className="text-slate-600 mt-3">
      We provide highly skilled software professionals across various technologies.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    
    <div className="bg-white border border-slate-100 rounded-xl p-4 text-center shadow-sm">
      Full Stack Developers
    </div>

    <div className="bg-white border border-slate-100 rounded-xl p-4 text-center shadow-sm">
      Frontend & Backend Engineers
    </div>

    <div className="bg-white border border-slate-100 rounded-xl p-4 text-center shadow-sm">
      QA & Automation Testers
    </div>

    <div className="bg-white border border-slate-100 rounded-xl p-4 text-center shadow-sm">
      DevOps Engineers
    </div>

    <div className="bg-white border border-slate-100 rounded-xl p-4 text-center shadow-sm">
      Cloud Engineers
    </div>

    <div className="bg-white border border-slate-100 rounded-xl p-4 text-center shadow-sm">
      Data Engineers & AI Specialists
    </div>

    <div className="bg-white border border-slate-100 rounded-xl p-4 text-center shadow-sm sm:col-span-2 md:col-span-3">
      Mobile App Developers
    </div>

  </div>
</div>
        </div>
      </section>

      {/* PLACEMENT BANNER */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container-wrapper relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold">
                Technology Delivery & Talent Enablement
              </h2>
              <p className="text-slate-300 text-lg">
                We help organizations build scalable software products and strengthen their engineering capabilities. Whether it’s end-to-end development or augmenting teams with skilled professionals, we ensure consistent delivery and long-term value.
              </p>
              <div className="flex gap-8 py-4">
                <div>
                  <div className="text-4xl font-bold text-accent mb-1">200+</div>
                  <div className="text-sm text-slate-400">Solutions Designed & Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-slate-400">Business Clients Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-1">150+</div>
                  <div className="text-sm text-slate-400">Technology Professionals Deployed</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
  <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">
    Active Client Engagements
  </h3>

  <div className="grid grid-cols-2 gap-4">
    {[
      {
        title: "Custom Software Development",
        subtitle: "FinTech Platform",
      },
      {
        title: "Dedicated Engineering Team",
        subtitle: "SaaS Product Company",
      },
      {
        title: "QA Automation Services",
        subtitle: "Enterprise Client",
      },
      {
        title: "IT Staffing Augmentation",
        subtitle: "Global Technology Firm",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
      >
        <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center text-xs font-bold bg-gradient-to-br from-blue-500 to-purple-600">
          VL
        </div>

        <div>
          <div className="text-sm font-bold">{item.title}</div>
          <div className="text-xs text-slate-400">{item.subtitle}</div>
        </div>
      </div>
    ))}
  </div>
</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StatCard({ number, label, icon }: { number: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
      <div className="flex justify-center mb-2 text-3xl">{icon}</div>
      <div className="text-2xl font-bold text-white mb-1">{number}</div>
      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

const jobs = [
  {
    title: "Java Developer",
    type: "Full Time",
    location: "Bangalore",
    description: "Looking for experienced Java developers with Spring Boot expertise for a top Tier-1 IT company."
  },
  {
    title: "Data Analyst",
    type: "Permanent",
    location: "Hyderabad",
    description: "Immediate opening for Data Analysts with strong SQL and Python skills for a leading fintech firm."
  },
  {
    title: "Software Tester",
    type: "Contract",
    location: "Remote",
    description: "Urgent requirement for Automation Testers with Selenium and Java experience."
  },
  {
    title: "Software Engineering Intern (QA & Development)",
    type: "Internship",
    location: "Bangalore / Remote",
    description:
      "Internship opportunity for students and freshers to work on real-time projects in Java, React, cloud technologies, and QA automation testing including Selenium and API testing.",
  }
];
