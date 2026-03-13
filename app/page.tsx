"use client";

import Link from "next/link";
import { ArrowRight, Check, ChevronDown, ChevronUp, Search, TrendingUp, Shield, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useState } from "react";

// ── Client Logos (real brands from Figma) ───────────────────────────────────
const CLIENT_LOGOS = [
  "Wipro", "SHARP", "TVS", "Emeritus", "Brigade", "Wonderla",
  "Dr. Health", "Fortis", "Mercury", "Altius", "Hosting Raja",
  "Zamindar", "Eurokids", "MOS", "Wipro", "SHARP", "TVS", "Emeritus",
  "Brigade", "Wonderla", "Dr. Health", "Fortis", "Mercury", "Altius",
  "Hosting Raja", "Zamindar", "Eurokids", "MOS",
];

// ── Services Data ───────────────────────────────────────────────────────────
const DIGITAL_MARKETING = [
  "SEO", "Social Media", "PPC", "Digital Transformations",
  "Performance Marketing", "Demand Generation",
  "AI Marketing", "B2B & SaaS Marketing",
];

const PAID_ADVERTISING = [
  "Google Ads", "Amazon Ads", "Shopping Ads", "Facebook Ads",
  "Instagram Ads", "YouTube Ads", "LinkedIn Ads", "OTT Advertising",
];

// ── Our Approach Steps ─────────────────────────────────────────────────────
const APPROACH_STEPS = [
  {
    icon: TrendingUp,
    step: "01",
    title: "Strategic Planning\n& Goal Setting",
    description: "We start by deeply understanding your business goals, audience, and competitive landscape to craft winning strategies.",
  },
  {
    icon: Zap,
    step: "02",
    title: "Tailored Campaign\nExecution",
    description: "Every campaign is meticulously built and launched with precision, creativity, and measurable KPIs at its core.",
  },
  {
    icon: Search,
    step: "03",
    title: "Constant Monitoring\n& Optimization",
    description: "We track, analyse, and refine continuously — ensuring your campaigns deliver maximum ROI at all times.",
  },
];

// ── FAQ Data ───────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What digital marketing services does Marketly offer?",
    a: "We offer a comprehensive suite including SEO, Social Media Marketing, PPC, Performance Marketing, Demand Generation, AI Marketing, B2B & SaaS Marketing, and a full range of Paid Advertising (Google, Meta, Amazon, YouTube, LinkedIn, OTT).",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO is a long-term strategy. You can typically start seeing measurable improvements in rankings and organic traffic within 3–6 months. However, significant results compound over 6–12 months of consistent optimisation.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Absolutely. We have worked with over 5000 brands ranging from startups and entrepreneurs to large enterprises since 2012. Our strategies are tailored to your budget and growth stage.",
  },
  {
    q: "Is my business data safe with Marketly?",
    a: "Yes — your data is 100% confidential and secure. We are a Google Partner and Meta Business Partner, adhering to the highest data protection and advertising standards.",
  },
  {
    q: "How do I get started with Marketly?",
    a: "Simple — click 'Let's Talk' in the navigation, fill in a short form, and our team will schedule a free strategy consultation within 24 hours.",
  },
  {
    q: "What makes Marketly different from other agencies?",
    a: "We combine over a decade of hands-on experience, certified partnerships (Google & Meta), and AI-powered marketing tools to deliver results that generic agencies simply cannot match. Every strategy is bespoke, data-driven, and built for long-term growth.",
  },
];

// ── FAQ Item Component ─────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="faq-item cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5 px-2 gap-4">
        <h3
          className="text-base font-semibold leading-snug"
          style={{ fontFamily: "var(--font-serif)", color: "#E6E2DA" }}
        >
          {q}
        </h3>
        <div className="flex-shrink-0" style={{ color: "#D99201" }}>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </div>
      {open && (
        <p
          className="px-2 pb-5 text-sm leading-relaxed"
          style={{ color: "#a89880" }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

// ── Score Gauge Component ──────────────────────────────────────────────────
function ScoreGauge({ score }: { score: number }) {
  const radius = 70;
  const circumference = Math.PI * radius; // half circle
  const offset = circumference - (score / 100) * circumference;
  return (
    <div className="flex flex-col items-center">
      <svg width="180" height="100" viewBox="0 0 180 100">
        {/* Background arc */}
        <path
          d="M 10 90 A 80 80 0 0 1 170 90"
          fill="none"
          stroke="rgba(217,146,1,0.15)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        {/* Score arc */}
        <path
          d="M 10 90 A 80 80 0 0 1 170 90"
          fill="none"
          stroke="url(#goldGradGauge)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={`${(score / 100) * 251} 251`}
        />
        <defs>
          <linearGradient id="goldGradGauge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D99201" />
            <stop offset="100%" stopColor="#EDB36A" />
          </linearGradient>
        </defs>
        <text x="90" y="82" textAnchor="middle" fill="#E6E2DA" fontSize="28" fontWeight="bold">
          {score}
        </text>
        <text x="90" y="96" textAnchor="middle" fill="#a89880" fontSize="9">
          /100
        </text>
      </svg>
      <div
        className="mt-1 text-xs tracking-widest uppercase font-semibold"
        style={{ color: "#D99201", fontFamily: "var(--font-cinzel)" }}
      >
        Good Visibility
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#111f14", color: "#E6E2DA" }}>
      <Header />

      {/* ══════════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen pt-36 flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d1a0f 0%, #1A3F22 55%, #142d1a 100%)",
        }}
      >
        {/* Atmospheric glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #D99201 0%, transparent 70%)", filter: "blur(90px)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #EDB36A 0%, transparent 70%)", filter: "blur(80px)" }}
          />
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, rgba(217,146,1,0.4) 0px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, rgba(217,146,1,0.4) 0px, transparent 1px, transparent 80px)`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-8 animate-reveal">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-widest uppercase"
                style={{
                  border: "1px solid rgba(217,146,1,0.4)",
                  backgroundColor: "rgba(217,146,1,0.08)",
                  color: "#EDB36A",
                  fontFamily: "var(--font-cinzel)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-glow-pulse" style={{ backgroundColor: "#EDB36A" }} />
                Bangalore&apos;s Premier Digital Agency
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1
                  className="text-5xl md:text-6xl lg:text-[68px] font-light leading-[1.1]"
                  style={{ fontFamily: "var(--font-serif)", color: "#E6E2DA" }}
                >
                  Confused about
                </h1>
                <h1
                  className="text-5xl md:text-6xl lg:text-[68px] font-semibold leading-[1.1]"
                  style={{ fontFamily: "var(--font-serif)", color: "#EDB36A" }}
                >
                  marketing?
                </h1>
                <h1
                  className="text-5xl md:text-6xl lg:text-[68px] font-light leading-[1.1]"
                  style={{ fontFamily: "var(--font-serif)", color: "#E6E2DA" }}
                >
                  We&apos;ve got you covered!
                </h1>
              </div>

              {/* Ornamental divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #D99201, transparent)" }} />
                <span style={{ color: "#D99201", fontSize: "0.6rem" }}>✦</span>
              </div>

              {/* Description */}
              <p className="text-lg leading-relaxed max-w-xl" style={{ color: "#a89880" }}>
                From SEO to Paid Ads, Social Media to AI Marketing — Marketly is your all-in-one growth partner trusted by 5000+ brands, businesses, and entrepreneurs since 2012.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="btn-orange group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-sm"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Get Started Free
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-medium tracking-widest uppercase text-sm transition-all duration-300 hover:bg-[rgba(217,146,1,0.08)]"
                  style={{ border: "1px solid rgba(217,146,1,0.35)", color: "#D99201", fontFamily: "var(--font-cinzel)" }}
                >
                  Our Services
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { value: "5000+", label: "Brands Served" },
                  { value: "12+", label: "Years Active" },
                  { value: "95%", label: "Satisfaction" },
                ].map((s, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-3xl font-semibold gold-text" style={{ fontFamily: "var(--font-serif)" }}>
                      {s.value}
                    </div>
                    <div className="text-xs tracking-widest uppercase" style={{ color: "#a89880", fontFamily: "var(--font-cinzel)" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Decorative Card */}
            <div className="relative animate-reveal-right hidden lg:block" style={{ animationDelay: "0.2s" }}>
              <div
                className="rounded-2xl p-8 space-y-6 shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(26,63,34,0.95) 0%, rgba(17,31,20,0.95) 100%)",
                  border: "1px solid rgba(217,146,1,0.3)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Floating achievement badges */}
                {[
                  { label: "Google Partner", sub: "Certified Agency" },
                  { label: "Meta Business Partner", sub: "Official Badged" },
                  { label: "AI-Powered Marketing", sub: "Next-Gen Strategy" },
                ].map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-lg animate-float"
                    style={{
                      animationDelay: `${i * 1.2}s`,
                      animationDuration: `${4 + i * 0.5}s`,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(217,146,1,0.2)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-base font-bold flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #D99201, #EDB36A)", color: "#111f14" }}
                    >
                      ✦
                    </div>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: "#E6E2DA" }}>{badge.label}</div>
                      <div className="text-xs" style={{ color: "#a89880" }}>{badge.sub}</div>
                    </div>
                  </div>
                ))}

                {/* Score preview */}
                <div className="flex items-center gap-4 pt-2" style={{ borderTop: "1px solid rgba(217,146,1,0.15)" }}>
                  <div>
                    <div className="text-xs uppercase tracking-widest" style={{ color: "#a89880", fontFamily: "var(--font-cinzel)" }}>
                      Avg. Client ROI
                    </div>
                    <div className="text-4xl font-bold gold-text" style={{ fontFamily: "var(--font-serif)" }}>3×</div>
                    <div className="text-xs" style={{ color: "#a89880" }}>in just 120 days</div>
                  </div>
                  <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(217,146,1,0.3), transparent)" }} />
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-widest" style={{ color: "#a89880", fontFamily: "var(--font-cinzel)" }}>Year Est.</div>
                    <div className="text-4xl font-bold gold-text" style={{ fontFamily: "var(--font-serif)" }}>2012</div>
                  </div>
                </div>
              </div>

              {/* Corner ornaments */}
              <div className="absolute -top-3 -right-3 w-10 h-10" style={{ borderTop: "2px solid #D99201", borderRight: "2px solid #D99201" }} />
              <div className="absolute -bottom-3 -left-3 w-10 h-10" style={{ borderBottom: "2px solid #D99201", borderLeft: "2px solid #D99201" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TRUST BAR
      ══════════════════════════════════════════════════════════════════ */}
      <div
        className="py-4 text-center"
        style={{ backgroundColor: "#D99201" }}
      >
        <p
          className="text-sm font-bold tracking-widest uppercase"
          style={{ color: "#111f14", fontFamily: "var(--font-cinzel)" }}
        >
          ✦ Trusted by 5000+ Happy Brands, Businesses, and Entrepreneurs Since 2012 ✦
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          CLIENT LOGOS MARQUEE
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ backgroundColor: "#0d1a0f", borderTop: "1px solid rgba(217,146,1,0.1)", borderBottom: "1px solid rgba(217,146,1,0.1)" }}
      >
        <div className="container mx-auto px-6 mb-10 text-center animate-reveal">
          <span className="section-label">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-light mt-3" style={{ fontFamily: "var(--font-serif)", color: "#E6E2DA" }}>
            Brands That <span className="italic gold-text">Trust Us</span>
          </h2>
        </div>

        {/* Marquee ticker */}
        <div className="marquee-container py-4">
          <div className="animate-marquee flex gap-6 whitespace-nowrap">
            {CLIENT_LOGOS.map((name, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center px-6 py-3 rounded-sm flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #1A3F22, #1e4a28)",
                  border: "1px solid rgba(217,146,1,0.2)",
                  minWidth: "140px",
                }}
              >
                <span
                  className="text-sm font-semibold tracking-widest uppercase"
                  style={{ color: "#E6E2DA", fontFamily: "var(--font-cinzel)", fontSize: "0.7rem" }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          OUR APPROACH
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ backgroundColor: "#111f14" }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-20 space-y-5 animate-reveal">
            <span className="section-label">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-light leading-tight" style={{ fontFamily: "var(--font-serif)", color: "#E6E2DA" }}>
              Our <span className="italic gold-text">Approach</span>
            </h2>
            <div className="ornament-divider mx-auto max-w-xs">
              <span className="text-xs" style={{ color: "#D99201" }}>✦</span>
            </div>
            <p className="text-base leading-relaxed" style={{ color: "#a89880" }}>
              A proven three-stage framework that transforms marketing investment into compounding growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div
              className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(217,146,1,0.3), rgba(217,146,1,0.3), transparent)" }}
            />

            {APPROACH_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="card-luxury rounded-lg p-8 text-center group animate-reveal relative"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center relative z-10"
                    style={{
                      background: "linear-gradient(135deg, #D99201, #EDB36A)",
                      boxShadow: "0 0 30px rgba(217,146,1,0.25)",
                    }}
                  >
                    <Icon size={24} style={{ color: "#111f14" }} />
                  </div>
                  <div
                    className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
                    style={{ color: "rgba(217,146,1,0.6)", fontFamily: "var(--font-cinzel)" }}
                  >
                    Step {step.step}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-4 whitespace-pre-line group-hover:text-[#EDB36A] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-serif)", color: "#E6E2DA" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#a89880" }}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section
        id="services"
        className="py-28 relative overflow-hidden"
        style={{ backgroundColor: "#0d1a0f", borderTop: "1px solid rgba(217,146,1,0.1)" }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-20 space-y-5 animate-reveal">
            <span className="section-label">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-light leading-tight" style={{ fontFamily: "var(--font-serif)", color: "#E6E2DA" }}>
              Our <span className="italic gold-text">Services</span>
            </h2>
            <div className="ornament-divider mx-auto max-w-xs">
              <span className="text-xs" style={{ color: "#D99201" }}>✦</span>
            </div>
            <p className="text-base leading-relaxed" style={{ color: "#a89880" }}>
              End-to-end digital marketing solutions engineered for measurable growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Digital Marketing Card */}
            <div className="card-luxury rounded-lg overflow-hidden animate-reveal group" style={{ animationDelay: "0.08s" }}>
              <div
                className="px-8 py-5 flex items-center gap-3"
                style={{
                  background: "linear-gradient(90deg, rgba(217,146,1,0.15), transparent)",
                  borderBottom: "1px solid rgba(217,146,1,0.2)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-sm flex items-center justify-center text-sm font-bold"
                  style={{ background: "linear-gradient(135deg,#D99201,#EDB36A)", color: "#111f14" }}
                >
                  ◈
                </div>
                <h3
                  className="text-lg font-bold tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-cinzel)", color: "#E6E2DA" }}
                >
                  Digital Marketing
                </h3>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {DIGITAL_MARKETING.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#c8bfb0" }}>
                      <Check size={14} style={{ color: "#D99201", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/features"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium group/link"
                  style={{ color: "#D99201", fontFamily: "var(--font-cinzel)", letterSpacing: "0.1em" }}
                >
                  <span className="group-hover/link:text-[#EDB36A] transition-colors">Explore All</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Paid Advertising Card */}
            <div className="card-luxury rounded-lg overflow-hidden animate-reveal group" style={{ animationDelay: "0.16s" }}>
              <div
                className="px-8 py-5 flex items-center gap-3"
                style={{
                  background: "linear-gradient(90deg, rgba(217,146,1,0.15), transparent)",
                  borderBottom: "1px solid rgba(217,146,1,0.2)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-sm flex items-center justify-center text-sm font-bold"
                  style={{ background: "linear-gradient(135deg,#D99201,#EDB36A)", color: "#111f14" }}
                >
                  ◈
                </div>
                <h3
                  className="text-lg font-bold tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-cinzel)", color: "#E6E2DA" }}
                >
                  Paid Advertising
                </h3>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {PAID_ADVERTISING.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#c8bfb0" }}>
                      <Check size={14} style={{ color: "#D99201", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/features"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium group/link"
                  style={{ color: "#D99201", fontFamily: "var(--font-cinzel)", letterSpacing: "0.1em" }}
                >
                  <span className="group-hover/link:text-[#EDB36A] transition-colors">Explore All</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TRUST BADGES — Google Partner + Meta Business Partner
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: "#111f14", borderTop: "1px solid rgba(217,146,1,0.1)" }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14 space-y-4 animate-reveal">
            <Shield size={32} className="mx-auto" style={{ color: "#D99201" }} />
            <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "var(--font-serif)", color: "#E6E2DA" }}>
              Your data is protected,{" "}
              <span className="italic gold-text">100% confidential and secure</span>
            </h2>
            <p className="text-sm" style={{ color: "#a89880" }}>
              We are officially badged by Google and Meta — the world&apos;s most trusted advertising platforms.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-2xl mx-auto">
            {/* Google Partner */}
            <div
              className="flex-1 w-full max-w-xs p-8 rounded-lg flex flex-col items-center gap-4 animate-reveal"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(217,146,1,0.2)",
                boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {["#4285F4", "#EA4335", "#FBBC05", "#34A853"].map((c, i) => (
                    <div key={i} className="w-4 h-4 rounded-full" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <span className="text-2xl font-bold" style={{ color: "#1a1a1a" }}>Google</span>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: "#1a1a1a", fontFamily: "var(--font-serif)" }}>Partner</div>
                <div className="text-xs mt-1 tracking-widest uppercase" style={{ color: "#555" }}>Certified Agency</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:flex flex-col items-center gap-2">
              <div className="w-px h-16" style={{ background: "linear-gradient(to bottom, transparent, rgba(217,146,1,0.4), transparent)" }} />
              <span style={{ color: "rgba(217,146,1,0.5)", fontSize: "0.6rem" }}>✦</span>
              <div className="w-px h-16" style={{ background: "linear-gradient(to bottom, rgba(217,146,1,0.4), transparent)" }} />
            </div>

            {/* Meta Business Partner */}
            <div
              className="flex-1 w-full max-w-xs p-8 rounded-lg flex flex-col items-center gap-4 animate-reveal"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(217,146,1,0.2)",
                boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
                animationDelay: "0.1s",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ background: "linear-gradient(135deg, #0082fb, #0096ff)" }}
                >
                  ∞
                </div>
                <span className="text-2xl font-bold" style={{ color: "#0082fb" }}>Meta</span>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: "#1a1a1a", fontFamily: "var(--font-serif)" }}>Business</div>
                <div className="text-2xl font-bold" style={{ color: "#1a1a1a", fontFamily: "var(--font-serif)" }}>Partners</div>
                <div className="text-xs mt-1 tracking-widest uppercase" style={{ color: "#555" }}>Official Badge</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          AI SEARCH VISIBILITY
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: "#0d1a0f", borderTop: "1px solid rgba(217,146,1,0.1)" }}
      >
        {/* Background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #D99201 0%, transparent 70%)", filter: "blur(80px)" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left text */}
              <div className="space-y-6 animate-reveal">
                <span className="section-label">AI Search Era</span>
                <h2 className="text-4xl md:text-5xl font-light leading-tight" style={{ fontFamily: "var(--font-serif)", color: "#E6E2DA" }}>
                  How Visible Is Your Brand{" "}
                  <span className="italic gold-text">In AI Search?</span>
                </h2>
                <div className="ornament-divider max-w-xs">
                  <span className="text-xs" style={{ color: "#D99201" }}>✦</span>
                </div>
                <p className="text-base leading-relaxed" style={{ color: "#a89880" }}>
                  AI search engines like Gemini, Perplexity, Claude, and Bing Copilot are now answering your customers' questions — without ever clicking your website. Is your brand showing up?
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#a89880" }}>
                  Marketly&apos;s AI Visibility Audit analyses your brand&apos;s presence across all major AI engines and builds a strategy to make you the go-to answer.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["Perplexity", "Gemini", "Bing Copilot", "Claude"].map((engine, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider"
                      style={{
                        border: "1px solid rgba(217,146,1,0.35)",
                        color: "#EDB36A",
                        fontFamily: "var(--font-cinzel)",
                        backgroundColor: "rgba(217,146,1,0.06)",
                      }}
                    >
                      {engine}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="btn-gold inline-flex items-center gap-3 px-7 py-3.5 rounded-sm font-bold tracking-widest uppercase text-sm"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Get Your AI Score
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Right — Score gauge card */}
              <div
                className="card-luxury rounded-xl p-8 text-center animate-reveal space-y-6"
                style={{ animationDelay: "0.15s" }}
              >
                <div
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{ color: "#D99201", fontFamily: "var(--font-cinzel)" }}
                >
                  Sample AI Visibility Score
                </div>
                <div className="flex justify-center">
                  <div
                    className="p-6 rounded-lg"
                    style={{
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid rgba(217,146,1,0.2)",
                    }}
                  >
                    <ScoreGauge score={73} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-left">
                  {[
                    { label: "Perplexity", val: "68%", color: "#EDB36A" },
                    { label: "Gemini", val: "75%", color: "#34A853" },
                    { label: "Bing Copilot", val: "71%", color: "#0082fb" },
                    { label: "Claude", val: "80%", color: "#c9a84c" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: row.color }} />
                      <span className="text-xs" style={{ color: "#a89880" }}>{row.label}</span>
                      <span className="text-xs font-bold ml-auto" style={{ color: "#E6E2DA" }}>{row.val}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs" style={{ color: "#6b5f50" }}>
                  *Sample data. Your score will vary. Book an audit to see your real numbers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FAQ SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ backgroundColor: "#111f14", borderTop: "1px solid rgba(217,146,1,0.1)" }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 space-y-5 animate-reveal">
              <span className="section-label">Got Questions?</span>
              <h2 className="text-4xl md:text-5xl font-light" style={{ fontFamily: "var(--font-serif)", color: "#E6E2DA" }}>
                Frequently Asked <span className="italic gold-text">Questions</span>
              </h2>
              <div className="ornament-divider mx-auto max-w-xs">
                <span className="text-xs" style={{ color: "#D99201" }}>✦</span>
              </div>
            </div>

            <div
              className="rounded-lg overflow-hidden animate-reveal"
              style={{
                background: "linear-gradient(135deg, #1A3F22, #1e4a28)",
                border: "1px solid rgba(217,146,1,0.2)",
              }}
            >
              <div className="divide-y divide-[rgba(217,146,1,0.1)]">
                {FAQS.map((faq, i) => (
                  <div key={i} className="px-6">
                    <FaqItem q={faq.q} a={faq.a} />
                  </div>
                ))}
              </div>
            </div>

            <p
              className="text-center mt-10 text-sm"
              style={{ color: "#a89880" }}
            >
              Still have questions?{" "}
              <Link href="/contact" style={{ color: "#EDB36A" }} className="underline underline-offset-4 hover:text-[#D99201] transition-colors">
                Talk to our team
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <CTASection
        title="Ready to 3× Your Business Growth?"
        description="Join 5000+ brands that transformed their digital presence with Marketly. Let's build your success story — starting today."
        buttonText="Let's Talk Strategy"
        variant="green"
      />

      <Footer />
    </div>
  );
}
