import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import techImg from "@assets/stock_images/software_testing_dig_1a24e429.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-90 pt-60">
      <Navbar />

      {/* ================= HEADER ================= */}
      <section className="relative pt-20 pb-20 bg-slate-900/90 backdrop-blur-xl text-white">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-orange-500/80" />

        <div className="container-wrapper">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="text-left md:text-center"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-display font-bold mb-4"
            >
              Our Services
            </motion.h1>

            <motion.div
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1 }
              }}
              transition={{ duration: 0.5 }}
              className="flex justify-start md:justify-center mb-6 origin-left"
            >
              <span className="h-1 w-20 bg-orange-500 rounded-full" />
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="text-lg text-slate-300 max-w-2xl md:mx-auto"
            >
              We offer comprehensive quality engineering solutions tailored to your
              industry and technology stack, powered by AI and human expertise.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container-padding py-24">

        {/* ---------- CORE OFFERING ---------- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Image with float + parallax */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 rounded-2xl"
            />

            <motion.img
             src="/images/QualityEngineeringSolutions.png"
              alt="Quality Engineering Technology"
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-bold uppercase text-sm mb-4 inline-block">
              Core Offering
            </span>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Quality Engineering Solutions
            </h2>

            <p className="text-lg text-slate-600 mb-8">
              Our core QE services go beyond traditional testing. We implement
              shift-left strategies, continuous testing, and automated quality
              gates to ensure speed without compromising reliability.
            </p>

            <ul className="space-y-4 mb-8">
              <ServiceCheck label="End-to-end Test Automation Frameworks" />
              <ServiceCheck label="Performance & Load Testing" />
              <ServiceCheck label="Accessibility (WCAG) Compliance" />
              <ServiceCheck label="Security & Vulnerability Scanning" />
            </ul>

            <Link href="/contact">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </motion.a>
            </Link>
          </motion.div>
        </div>

        {/* ---------- SERVICES GRID ---------- */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <DetailCard title="AI Testing" description="We validate AI/ML models for bias, accuracy, and performance while using AI to optimize test coverage and predict defects." />
          <DetailCard title="Digital Engineering" description="From DevOps implementation to legacy modernization, we engineer robust digital platforms that scale." />
          <DetailCard title="Enterprise Apps" description="Specialized testing for SAP, Salesforce, Oracle, and ServiceNow implementations and upgrades." />
          <DetailCard title="Cyber Security" description="Protect your brand and data with comprehensive security assessments and penetration testing." />
          <DetailCard title="IoT & Mobile" description="Ensure seamless connectivity and user experience across the fragmented landscape of devices." />
          <DetailCard title="Managed Services" description="Flexible engagement models from staff augmentation to fully managed testing centers of excellence." />
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ================= SUPPORT COMPONENTS ================= */

function ServiceCheck({ label }) {
  return (
    <li className="flex items-center gap-3 text-slate-700 font-medium">
      <CheckCircle2 className="w-5 h-5 text-primary" />
      {label}
    </li>
  );
}

function DetailCard({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl group"
    >
      <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-slate-600 mb-4">{description}</p>

      <div className="flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all">
        Learn more <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </motion.div>
  );
}
