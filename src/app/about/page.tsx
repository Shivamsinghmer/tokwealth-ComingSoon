"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Amit Jain",
    role: "CEO & Co-Founder",
    description:
      "24 years across technology, operations, and investment management. B.Tech IIT Kanpur, MBA ISI India.",
  },
  {
    name: "Mohammed",
    role: "Co-Founder & COO",
    description:
      "10+ years in real estate investment and asset management. Partner at Hacken. BA Anglia Ruskin University UK.",
  },
  {
    name: "Neha Kalra",
    role: "Head of Strategy",
    description:
      "20+ years of experience, 13+ in the Middle East. B.Tech IIT Kanpur, MBA ISI India.",
  },
  {
    name: "Shashwat Gangwar",
    role: "Head of Operations",
    description:
      "8+ years in M&A, corporate strategy, and enterprise transformation. B.Tech IIT Delhi, MBA Ahmedabad.",
  },
  {
    name: "Akshat Agrawal",
    role: "Head of Product",
    description:
      "12+ years building products in Fintech, E-commerce, SAAS and Web3. B.Tech IIT Delhi, MBA US.",
  },
  {
    name: "Amit Rajoria",
    role: "Head of Compliance",
    description:
      "20+ years in banking, fintech, and virtual asset compliance. ACAMS, CFE, CCE-certified.",
  },
];

const stats = [
  { value: "15-20", label: "Years Avg. Experience" },
  { value: "10", label: "Core Team Members" },
  { value: "100%", label: "VARA Committed" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-[#0B0B0F]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.1)_0%,transparent_65%)]" />
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,107,0,0.9) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5"
      >
        <Link href="/">
          <Image
            src="https://static.wixstatic.com/media/6fd8ff_e7b2e450c17a409f9bda71037a02df7c~mv2.png/v1/fill/w_183,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TW.png"
            alt="TokWealth"
            width={140}
            height={21}
            priority
            unoptimized
          />
        </Link>
        <Link
          href="/"
          className="group flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#6B6B80] hover:text-[#FF6B00] transition-colors font-display"
        >
          <svg className="w-3 h-3 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back
        </Link>
      </motion.nav>

      {/* Hero */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-6 md:px-12 pt-12 pb-12 text-center max-w-3xl mx-auto w-full"
      >
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/5 mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(255,107,0,0.1)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#FF6B00] font-semibold font-display">About Us</span>
        </motion.div>
        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6 text-[#F0EDE6] font-display">
          Built by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF8533]">
            Experts
          </span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-base md:text-lg text-[#6B6B80] leading-relaxed max-w-xl mx-auto">
          A Dubai-based team transforming real-world asset investing through blockchain — founded by
          professionals with 15-20 years at leading global firms.
        </motion.p>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 px-6 md:px-12 py-8 border-y border-[#2A2A38]/50"
      >
        <div className="max-w-2xl mx-auto grid grid-cols-3 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-[#FF6B00] font-mono font-display drop-shadow-[0_0_6px_rgba(255,107,0,0.4)]">{s.value}</p>
              <p className="text-[10px] tracking-[0.15em] uppercase text-[#6B6B80] mt-1.5 font-display">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      
      {/* Footer */}
      <footer className="relative z-10 border-t border-[#2A2A38]/40 py-4 px-6 md:px-12 mt-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-[#6B6B80]/40 font-display">© 2026 TokWealth. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/" className="text-[10px] text-[#6B6B80]/40 hover:text-[#FF6B00] transition-colors font-display">
              Home
            </Link>
            <a href="mailto:admin@tokwealth.com" className="text-[10px] text-[#6B6B80]/40 hover:text-[#FF6B00] transition-colors font-display">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
