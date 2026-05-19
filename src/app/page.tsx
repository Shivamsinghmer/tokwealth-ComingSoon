"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Real Estate",
    description: "Fractional ownership of premium properties",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Commodities",
    description: "Gold-backed and precious metal tokens",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Cross-border Payments",
    description: "Low-cost global transactions with tokenized currencies",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-[#0B0B0F]">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-5"
      >
        <Image
          src="https://static.wixstatic.com/media/6fd8ff_e7b2e450c17a409f9bda71037a02df7c~mv2.png/v1/fill/w_183,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TW.png"
          alt="TokWealth"
          width={140}
          height={21}
          priority
          unoptimized
        />
        <Link
          href="/about"
          className="group flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-white/60 hover:text-[#FF6B00] transition-colors font-display"
        >
          About
          <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </motion.nav>

      {/* Hero Section with Video Background */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-12 text-center min-h-[100vh]">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <VideoBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/70 via-[#0B0B0F]/50 to-[#0B0B0F]/90" />
          <div className="absolute inset-0 bg-[#0B0B0F]/30" />
          {/* Dot grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,107,0,0.9) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        {/* Ambient glows */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.12)_0%,transparent_65%)] z-0" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,107,0,0.06)_0%,transparent_70%)] z-0" />

        {/* Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center w-full max-w-5xl"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/5 mb-8 backdrop-blur-sm shadow-[0_0_24px_rgba(255,107,0,0.12)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#FF6B00] font-semibold font-display">
              Platform Launching Soon
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-6 font-display"
          >
            <span className="text-white">Invest In</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-[#FF6B00]">
              Tokenized Assets
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="max-w-lg text-base md:text-lg text-white/50 leading-relaxed mb-10"
          >
            Access premium real estate, commodities, and financial instruments through secure,
            compliant tokenization.
          </motion.p>

          {/* Features grid */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mb-10"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center gap-3 px-4 py-5   rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm hover:border-[#FF6B00]/30 hover:bg-[#FF6B00]/5 transition-colors duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#FF6B00]/10 text-[#FF6B00]">
                  {f.icon}
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-white font-display">{f.title}</p>
                  <p className="text-[11px] text-white/40 mt-0.5">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 border-t border-white/[0.08] py-4 px-6 md:px-12 bg-[#0B0B0F]/80 backdrop-blur-sm"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-white/30 font-display">© 2026 TokWealth. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/about" className="text-[10px] text-white/30 hover:text-[#FF6B00] transition-colors font-display">
              About
            </Link>
            <a href="mailto:admin@tokwealth.com" className="text-[10px] text-white/30 hover:text-[#FF6B00] transition-colors font-display">
              Contact
            </a>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}
