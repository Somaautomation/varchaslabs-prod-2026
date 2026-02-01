import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Trophy, Users, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
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
              Top Companies are Hiring Now
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
              Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Talent</span> with Tech Opportunity
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Varchaslabs bridges the gap between aspirants and industry. Get placed in top MNCs with our proven job placement program and dedicated career support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-blue-600 text-white px-8 h-14 rounded-xl text-lg shadow-lg shadow-primary/25">
                  Submit Resume
                </Button>
              </Link>
              <a href="#jobs">
                <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 h-14 rounded-xl text-lg backdrop-blur-sm">
                  Browse Openings
                </Button>
              </a>
            </div>

            <div className="pt-8 flex items-center gap-8 text-sm font-medium text-slate-400 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent h-5 w-5" />
                <span>MNC Placement Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent h-5 w-5" />
                <span>100% Placement Support</span>
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
              <div className="grid grid-cols-2 gap-8">
                <StatCard number="1000+" label="Candidates Placed" icon={<Users className="text-accent" />} />
                <StatCard number="200+" label="MNC Partners" icon={<Briefcase className="text-blue-400" />} />
                <StatCard number="15+" label="Years Experience" icon={<Trophy className="text-yellow-400" />} />
                <StatCard number="98%" label="Placement Rate" icon={<CheckCircle2 className="text-green-400" />} />
              </div>
            </div>
          </motion.div>
        </div>
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
              Hot Job Openings
            </h2>
            <p className="text-slate-600 text-lg">
              Explore immediate opportunities with our premium hiring partners.
            </p>
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
        </div>
      </section>

      {/* PLACEMENT BANNER */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container-wrapper relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold">
                100% Placement Assistance
              </h2>
              <p className="text-slate-300 text-lg">
                We persist until you secure your dream position. Our dedicated placement cell works round the clock to find the right match for you.
              </p>
              <div className="flex gap-8 py-4">
                <div>
                  <div className="text-4xl font-bold text-accent mb-1">200+</div>
                  <div className="text-sm text-slate-400">Companies</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-slate-400">Success Goal</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-1">150+</div>
                  <div className="text-sm text-slate-400">Hiring Partners</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Recent Placements</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-slate-700 overflow-hidden flex items-center justify-center text-xs font-bold bg-gradient-to-br from-blue-500 to-purple-600">
                     Varchaslabs
                    </div>
                    <div>
                      <div className="text-sm font-bold">Placed Candidate</div>
                      <div className="text-xs text-slate-400">Software Engineer</div>
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

function StatCard({ number, label, icon }: { number: string, label: string, icon: React.ReactNode }) {
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
  }
];
