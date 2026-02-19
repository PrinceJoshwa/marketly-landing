"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, TrendingUp, Users, Award, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const CLIENT_LOGOS = ["Brand A", "Brand B", "Brand C", "Brand D", "Brand E"];

const STATS = [
  { icon: TrendingUp, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "120+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Zap, value: "95%", label: "Satisfaction Rate" },
];

const FEATURES = [
  { icon: "✦", title: "Strategic Planning", description: "Data-driven strategies meticulously tailored to your business goals and market position." },
  { icon: "✦", title: "Performance Analytics", description: "Real-time insights and comprehensive reporting that illuminate every facet of your growth." },
  { icon: "✦", title: "Rapid Execution", description: "Swift, precise implementation without ever compromising on quality or craftsmanship." },
  { icon: "✦", title: "Creative Innovation", description: "Distinctive ideas that elevate your brand above the noise and into lasting memory." },
  { icon: "✦", title: "Dedicated Support", description: "An expert team wholly committed to your success, available at every milestone." },
  { icon: "✦", title: "Continuous Optimisation", description: "Relentless refinement of every campaign for maximum return on your investment." },
];

const SERVICES = [
  {
    title: "Digital Marketing",
    description: "Commanding online presence through precisely crafted, data-driven campaigns.",
    features: ["Social Media Strategy", "Content Marketing", "Paid Advertising"],
    icon: "◈",
  },
  {
    title: "SEO & Analytics",
    description: "Elevate your rankings and illuminate performance with deep analytical insight.",
    features: ["On-Page SEO", "Technical SEO", "Analytics & Reporting"],
    icon: "◈",
  },
  {
    title: "Brand & Creative",
    description: "Build a memorable, enduring brand identity that resonates across generations.",
    features: ["Brand Strategy", "Visual Identity", "Content Creation"],
    icon: "◈",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080f09", color: "#f5f0e8" }}>
      <Header />

      {/* ── Hero Section ── */}
      <section className="relative min-h-screen pt-24 flex items-center overflow-hidden">
        {/* Atmospheric Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-8"
            style={{
              background: "radial-gradient(circle, #1e3d26 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 80px,
                rgba(201,168,76,0.3) 80px,
                rgba(201,168,76,0.3) 81px
              ), repeating-linear-gradient(
                90deg,
                transparent,
                transparent 80px,
                rgba(201,168,76,0.3) 80px,
                rgba(201,168,76,0.3) 81px
              )`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-reveal">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-sm"
                style={{
                  border: "1px solid rgba(201,168,76,0.35)",
                  backgroundColor: "rgba(201,168,76,0.06)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-glow-pulse"
                  style={{ backgroundColor: "#c9a84c" }}
                />
                <span
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
                >
                  Trusted by 120+ Brands Worldwide
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1]"
                  style={{ fontFamily: "var(--font-serif)", color: "#f5f0e8" }}
                >
                  Elevate Your Brand
                </h1>
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] italic gold-text"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  In The Digital Age
                </h1>
              </div>

              {/* Ornamental divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
                <span style={{ color: "#c9a84c", fontSize: "0.6rem" }}>✦</span>
              </div>

              {/* Description */}
              <p
                className="text-lg leading-relaxed max-w-xl"
                style={{ color: "#a89880", fontFamily: "var(--font-sans)" }}
              >
                Premium digital marketing solutions that drive growth, engagement, and measurable results. We transform ambitious brands into enduring market leaders.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="btn-gold group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-sm"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Begin Your Journey
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-medium tracking-widest uppercase text-sm transition-all duration-300 hover:bg-[rgba(201,168,76,0.08)]"
                  style={{
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "#c9a84c",
                    fontFamily: "var(--font-cinzel)",
                  }}
                >
                  Explore Services
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { value: "500+", label: "Projects" },
                  { value: "120+", label: "Clients" },
                  { value: "10+", label: "Years" },
                ].map((s, i) => (
                  <div key={i} className="space-y-1">
                    <div
                      className="text-3xl font-semibold gold-text"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-xs tracking-widest uppercase"
                      style={{ color: "#a89880", fontFamily: "var(--font-cinzel)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative animate-reveal-right" style={{ animationDelay: "0.2s" }}>
              <div
                className="relative rounded-sm overflow-hidden shadow-2xl"
                style={{ border: "1px solid rgba(201,168,76,0.25)" }}
              >
                <Image
                  src="/hero-premium.jpg"
                  alt="Premium Digital Marketing"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-700"
                  priority
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(8,15,9,0.35) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Floating Achievement Card */}
              <div
                className="absolute -bottom-6 -left-6 p-5 rounded-sm shadow-2xl animate-float"
                style={{
                  backgroundColor: "#0f2218",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center text-sm font-bold"
                    style={{
                      background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                      color: "#080f09",
                      fontFamily: "var(--font-cinzel)",
                    }}
                  >
                    3×
                  </div>
                  <div>
                    <div className="text-xs tracking-widest uppercase" style={{ color: "#a89880", fontFamily: "var(--font-cinzel)" }}>
                      Average Growth
                    </div>
                    <div className="text-base font-semibold" style={{ color: "#f5f0e8", fontFamily: "var(--font-serif)" }}>
                      3× in 120 Days
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner ornament */}
              <div
                className="absolute -top-3 -right-3 w-12 h-12"
                style={{
                  borderTop: "2px solid #c9a84c",
                  borderRight: "2px solid #c9a84c",
                }}
              />
              <div
                className="absolute -bottom-3 -left-3 w-12 h-12"
                style={{
                  borderBottom: "2px solid #c9a84c",
                  borderLeft: "2px solid #c9a84c",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="py-20 relative overflow-hidden" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-6">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="card-luxury p-8 rounded-sm text-center group animate-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="w-12 h-12 mx-auto mb-4 rounded-sm flex items-center justify-center"
                    style={{
                      border: "1px solid rgba(201,168,76,0.3)",
                      backgroundColor: "rgba(201,168,76,0.08)",
                    }}
                  >
                    <Icon
                      className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: "#c9a84c" }}
                    />
                  </div>
                  <div
                    className="text-4xl font-semibold mb-2 gold-text"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "#a89880", fontFamily: "var(--font-cinzel)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Features / Why Choose Section ── */}
      <section className="py-28 relative overflow-hidden" id="services">
        {/* Subtle background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-5 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, #c9a84c 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-20 space-y-6 animate-reveal">
            <span
              className="section-label"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Our Distinction
            </span>
            <h2
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: "var(--font-serif)", color: "#f5f0e8" }}
            >
              Why Choose{" "}
              <span className="italic gold-text">Marketly</span>
            </h2>
            <div className="ornament-divider mx-auto max-w-xs">
              <span className="text-xs" style={{ color: "#c9a84c" }}>✦</span>
            </div>
            <p className="text-base leading-relaxed" style={{ color: "#a89880" }}>
              Premium solutions crafted for brands that demand nothing less than excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="card-luxury p-8 rounded-sm group animate-reveal"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div
                  className="text-lg mb-5 font-bold"
                  style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-xl font-semibold mb-3 group-hover:text-[#e8c97a] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-serif)", color: "#f5f0e8" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#a89880" }}>
                  {feature.description}
                </p>
                {/* Bottom gold accent */}
                <div
                  className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ borderTop: "1px solid rgba(201,168,76,0.1)", backgroundColor: "#060d07" }}
      >
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-20 space-y-6 animate-reveal">
            <span className="section-label" style={{ fontFamily: "var(--font-cinzel)" }}>
              Our Expertise
            </span>
            <h2
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: "var(--font-serif)", color: "#f5f0e8" }}
            >
              Premium{" "}
              <span className="italic gold-text">Services</span>
            </h2>
            <div className="ornament-divider mx-auto max-w-xs">
              <span className="text-xs" style={{ color: "#c9a84c" }}>✦</span>
            </div>
            <p className="text-base leading-relaxed" style={{ color: "#a89880" }}>
              Comprehensive, bespoke solutions tailored to your unique business ambitions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="card-luxury rounded-sm overflow-hidden group animate-reveal"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {/* Card Header */}
                <div
                  className="h-44 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #0f2218 0%, #132b1a 100%)",
                    borderBottom: "1px solid rgba(201,168,76,0.15)",
                  }}
                >
                  <span
                    className="text-5xl font-bold group-hover:scale-110 transition-transform duration-500"
                    style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-cinzel)" }}
                  >
                    {service.icon}
                  </span>
                  {/* Corner ornament */}
                  <div
                    className="absolute top-3 right-3 w-8 h-8"
                    style={{
                      borderTop: "1px solid rgba(201,168,76,0.4)",
                      borderRight: "1px solid rgba(201,168,76,0.4)",
                    }}
                  />
                  <div
                    className="absolute bottom-3 left-3 w-8 h-8"
                    style={{
                      borderBottom: "1px solid rgba(201,168,76,0.4)",
                      borderLeft: "1px solid rgba(201,168,76,0.4)",
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-8 space-y-5">
                  <div>
                    <h3
                      className="text-2xl font-semibold mb-2 group-hover:text-[#e8c97a] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-serif)", color: "#f5f0e8" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#a89880" }}>
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm" style={{ color: "#c8bfb0" }}>
                        <Check size={14} style={{ color: "#c9a84c", flexShrink: 0 }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 group/link"
                    style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)", letterSpacing: "0.1em" }}
                  >
                    <span className="group-hover/link:text-[#e8c97a] transition-colors">Learn More</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Logos Section ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4 animate-reveal">
            <span className="section-label" style={{ fontFamily: "var(--font-cinzel)" }}>
              Our Clientele
            </span>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "var(--font-serif)", color: "#f5f0e8" }}
            >
              Trusted by{" "}
              <span className="italic gold-text">Leading Brands</span>
            </h2>
            <p className="text-sm" style={{ color: "#a89880" }}>
              Join 120+ distinguished companies that transformed their digital presence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CLIENT_LOGOS.map((client, index) => (
              <div
                key={index}
                className="card-luxury rounded-sm flex items-center justify-center h-20 group animate-reveal"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <span
                  className="text-sm font-medium tracking-widest uppercase group-hover:text-[#c9a84c] transition-colors duration-300"
                  style={{ color: "#a89880", fontFamily: "var(--font-cinzel)" }}
                >
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategy Visual Section ── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ borderTop: "1px solid rgba(201,168,76,0.1)", backgroundColor: "#060d07" }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4 animate-reveal">
            <span className="section-label" style={{ fontFamily: "var(--font-cinzel)" }}>
              Our Approach
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light"
              style={{ fontFamily: "var(--font-serif)", color: "#f5f0e8" }}
            >
              Digital Marketing{" "}
              <span className="italic gold-text">Strategy</span>
            </h2>
            <div className="ornament-divider mx-auto max-w-xs">
              <span className="text-xs" style={{ color: "#c9a84c" }}>✦</span>
            </div>
            <p
              className="text-base max-w-2xl mx-auto leading-relaxed"
              style={{ color: "#a89880" }}
            >
              A comprehensive, refined approach to grow your brand with data-driven insights and creative excellence
            </p>
          </div>

          <div
            className="relative max-w-5xl mx-auto rounded-sm overflow-hidden shadow-2xl group animate-scale-in"
            style={{ border: "1px solid rgba(201,168,76,0.25)" }}
          >
            <Image
              src="/strategy-planning.jpg"
              alt="Digital Marketing Strategy"
              width={1200}
              height={700}
              className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(8,15,9,0.85) 0%, rgba(8,15,9,0.2) 60%, transparent 100%)",
              }}
            />

            {/* CTA Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-10 text-center">
              <Link
                href="/features"
                className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-sm"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                View Our Strategy
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-10 h-10" style={{ borderTop: "1px solid rgba(201,168,76,0.5)", borderLeft: "1px solid rgba(201,168,76,0.5)" }} />
            <div className="absolute top-4 right-4 w-10 h-10" style={{ borderTop: "1px solid rgba(201,168,76,0.5)", borderRight: "1px solid rgba(201,168,76,0.5)" }} />
          </div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-6 animate-reveal">
            <span className="section-label" style={{ fontFamily: "var(--font-cinzel)" }}>
              The Process
            </span>
            <h2
              className="text-4xl md:text-5xl font-light"
              style={{ fontFamily: "var(--font-serif)", color: "#f5f0e8" }}
            >
              Our{" "}
              <span className="italic gold-text">Proven Process</span>
            </h2>
            <div className="ornament-divider mx-auto max-w-xs">
              <span className="text-xs" style={{ color: "#c9a84c" }}>✦</span>
            </div>
            <p className="text-base" style={{ color: "#a89880" }}>
              From strategy to sustained success — six deliberate steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "I", title: "Strategy", description: "Define goals and establish your competitive positioning with precision." },
              { step: "II", title: "Planning", description: "Craft a detailed, actionable implementation roadmap aligned to your vision." },
              { step: "III", title: "Execution", description: "Launch campaigns with surgical precision and creative excellence." },
              { step: "IV", title: "Optimisation", description: "Continuously test, refine, and elevate performance metrics." },
              { step: "V", title: "Scaling", description: "Expand successful initiatives to amplify your market presence." },
              { step: "VI", title: "Growth", description: "Achieve sustained, compounding business growth and brand authority." },
            ].map((item, index) => (
              <div
                key={index}
                className="card-luxury rounded-sm p-8 group animate-reveal relative overflow-hidden"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Gold left border accent */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 group-hover:opacity-100 opacity-40 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to bottom, transparent, #c9a84c, transparent)" }}
                />
                <div
                  className="text-4xl font-light mb-4 group-hover:opacity-100 opacity-30 transition-opacity duration-300"
                  style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-xl font-semibold mb-3 group-hover:text-[#e8c97a] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-serif)", color: "#f5f0e8" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#a89880" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial / Trust Section ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ borderTop: "1px solid rgba(201,168,76,0.1)", backgroundColor: "#060d07" }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-reveal">
            <span className="section-label" style={{ fontFamily: "var(--font-cinzel)" }}>
              Client Voices
            </span>
            <div
              className="text-5xl font-light italic leading-relaxed"
              style={{ fontFamily: "var(--font-serif)", color: "#f5f0e8" }}
            >
              <span className="gold-text text-7xl leading-none">"</span>
              <br />
              Marketly transformed our digital presence beyond recognition. The results were not just measurable — they were remarkable.
            </div>
            <div className="ornament-divider mx-auto max-w-xs">
              <span className="text-xs" style={{ color: "#c9a84c" }}>✦</span>
            </div>
            <div>
              <div
                className="text-base font-semibold tracking-widest uppercase"
                style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
              >
                Alexandra Whitmore
              </div>
              <div className="text-sm mt-1" style={{ color: "#a89880" }}>
                Chief Executive Officer, Whitmore Group
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Brand?"
        description="Let us discuss how our premium services can drive your business growth and establish lasting market authority."
        buttonText="Schedule a Consultation"
        variant="green"
      />

      <Footer />
    </div>
  );
}
