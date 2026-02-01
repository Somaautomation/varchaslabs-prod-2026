import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Eye, Globe } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

// Our Team Section
function OurTeam() {
  const team = [
    {
      name: "Varchas S",
      role: "Founder",
      img: "/images/Varchas.jpg",
    },
    {
      name: "Jashmith S",
      role: "CEO",
      img: "/images/Jashmith.jpg",
    },
    {
      name: "Vasanthi P R",
      role: "H R head",
      img: "/images/Vasanthi.jpg",
    },
  ];
  return (
    <section className="py-20 bg-slate-50">
      <motion.div
        className="container-wrapper flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Team
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-slate-600 mb-12 text-center whitespace-normal lg:whitespace-nowrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          A skilled team transforming ideas into powerful software through
          technology and innovation.
        </motion.p>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center"
          variants={containerVariants}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 30px rgba(0,0,0,0.12)",
              }}
              className="
            w-[260px]
            flex flex-col items-center
            bg-white
            rounded-xl
            p-6
            cursor-pointer
          "
            >
              {/* Image */}
              <motion.img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 180 }}
              />

              {/* Name */}
              <div className="font-semibold text-lg text-slate-900">
                {member.name}
              </div>

              {/* Role */}
              <div className="text-slate-500 text-sm mt-1">{member.role}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-slate-800 pt-[90px] pb-4 border-b border-white/10">
        <div className="container-wrapper" />
      </div>
      {/* Header */}
      <div className="relative bg-gradient-to-br from-slate-300 via-slate-700 to-slate-800 text-slate-100 pt-14 pb-20">
        {/* subtle top divider */}
        <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

        <div className="container-wrapper text-center">
          <h1 className="text-2xl md:text-3xl font-display font-bold mb-2 text-cyan-400">
            About Varchaslabs 
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Connecting top tech talent with leading organizations since 2025.
          </p>
        </div>

        {/* smooth fade into main content */}
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-slate-50" />
      </div>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-slate-900">
                Who We Are
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Varchaslabs Technologies delivers scalable software solutions and
                experienced IT professionals across industries. We empower
                businesses to innovate, optimize, and grow through our expertise
                in:
              </p>
              <p className="text-slate-600 leading-relaxed font-bold">
                Retail & E-commerce | Enterprise Applications | Cloud & DevOps | Data & Analytics | AI & Intelligent Automation | Quality Engineering & Automation 
              </p>
              <p className="text-slate-600 leading-relaxed">
                We are more than a service provider — we are your strategic technology and talent partner for sustainable success.
              </p>
            </div>
            <div className="relative">
              {/* office environment */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Our Office"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Empowering businesses to innovate and grow with cutting-edge technology and top-tier talent.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Driving innovation and growth with scalable software solutions and top-tier talent.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Reach</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                1000+ successful projects | 150+ enterprise clients | Trusted technology and talent partner.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                Why Partner with Varchaslabs? 
              </h2>
              <p className="text-slate-500">
                We combine innovative software solutions with experienced engineers to help businesses achieve operational excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
              {[
                "Expert Solutions: Industry-ready software and services crafted by seasoned professionals.",
                "Proven Excellence: Trusted by 150+ enterprise clients across multiple domains.",
                "Scalable Delivery: Agile, efficient, and high-quality project execution.",
                "Rapid Deployment: Reduce time-to-market with experienced teams.",
                "Talent Empowerment: Access to top-tier IT professionals ready to contribute immediately.",
                "End-to-End Support: From solution design and development to deployment and maintenance.",
                "Strategic Partnerships: Leverage our network and domain expertise to achieve business objectives.",
                "Innovation & Future-Readiness: Harness cutting-edge technologies and best practices to stay ahead in a rapidly evolving digital landscape."

              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-blue-600 shadow-lg shadow-primary/20"
                >
                  Join Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <OurTeam />
      <Footer />
    </div>
  );
}
