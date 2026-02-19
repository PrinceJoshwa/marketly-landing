"use client";

import Link from "next/link";
import { Users, Target, Award, TrendingUp, ArrowRight, Zap, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const STATS = [
    { icon: Users, value: "10+", label: "Years of Experience" },
    { icon: Target, value: "500+", label: "Projects Completed" },
    { icon: Award, value: "120+", label: "Happy Clients" },
    { icon: TrendingUp, value: "95%", label: "Client Satisfaction" },
];

const GROWTH_DRIVERS = [
    { title: "Strategic Planning", description: "Data-driven strategies tailored to your unique business goals and market position.", icon: Target },
    { title: "Rapid Execution", description: "Fast implementation without compromising quality, getting you to market quickly.", icon: Zap },
    { title: "Performance Tracking", description: "Comprehensive analytics and reporting to measure success and optimize campaigns.", icon: TrendingUp },
    { title: "Creative Innovation", description: "Fresh, innovative ideas that make your brand stand out in a crowded marketplace.", icon: Award },
    { title: "Partnership Approach", description: "We work as an extension of your team, committed to your long-term success.", icon: Heart },
    { title: "Continuous Optimization", description: "Ongoing refinement and improvement to ensure sustained growth and ROI.", icon: Zap },
];

const TEAM_MEMBERS = [
    { name: "Sarah Johnson", role: "CEO & Founder", specialty: "Digital Strategy" },
    { name: "Michael Chen", role: "CTO", specialty: "Technology" },
    { name: "Aisha Patel", role: "Creative Director", specialty: "Branding" },
    { name: "David Rodriguez", role: "Head of Marketing", specialty: "Growth" },
    { name: "Fatima Al-Rashid", role: "SEO Specialist", specialty: "Analytics" },
    { name: "James Williams", role: "Client Success", specialty: "Partnerships" },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "#080f09", color: "#f5f0e8" }}>
            <Header />

            {/* Atmospheric gold glow */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
                    style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)", filter: "blur(80px)" }}
                />
            </div>

            <main className="relative z-10 pt-36 pb-24 px-4 md:px-6">
                <div className="container mx-auto max-w-6xl">

                    {/* Hero Header */}
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <p
                            className="text-xs tracking-[0.35em] uppercase mb-6 inline-block"
                            style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
                        >
                            ✦ Our Story ✦
                        </p>
                        <h1
                            className="text-5xl md:text-7xl leading-tight mb-8"
                            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, color: "#f5f0e8" }}
                        >
                            Crafting{" "}
                            <em style={{ color: "#c9a84c", fontStyle: "italic" }}>Digital Excellence</em>
                            <br />Since 2014
                        </h1>
                        <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#a89880" }}>
                            We are a team of passionate digital marketing experts, designers, and developers dedicated to helping businesses maximize their online presence and achieve measurable growth.
                        </p>
                        <div className="mt-10">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5"
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                                    color: "#080f09",
                                    fontWeight: 700,
                                }}
                            >
                                Work With Us
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Ornamental divider */}
                    <div className="flex items-center gap-4 mb-24">
                        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3))" }} />
                        <span style={{ color: "rgba(201,168,76,0.6)", fontSize: "0.5rem" }}>✦</span>
                        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.3), transparent)" }} />
                    </div>

                    {/* Stats */}
                    <div className="grid md:grid-cols-4 gap-6 mb-28">
                        {STATS.map((stat, i) => (
                            <div
                                key={i}
                                className="p-8 text-center transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    backgroundColor: "#0f2218",
                                    border: "1px solid rgba(201,168,76,0.2)",
                                }}
                            >
                                <div
                                    className="w-12 h-12 mx-auto mb-5 flex items-center justify-center"
                                    style={{ backgroundColor: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}
                                >
                                    <stat.icon size={20} style={{ color: "#c9a84c" }} />
                                </div>
                                <div
                                    className="text-4xl mb-2"
                                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "#e8c97a" }}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-xs tracking-widest uppercase" style={{ color: "#a89880", fontFamily: "var(--font-cinzel)" }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* What Drives Success */}
                    <div className="mb-28">
                        <div className="text-center mb-16">
                            <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}>
                                ✦ Our Principles ✦
                            </p>
                            <h2
                                className="text-4xl md:text-5xl"
                                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, color: "#f5f0e8" }}
                            >
                                What Drives Our <em style={{ color: "#c9a84c" }}>Success</em>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {GROWTH_DRIVERS.map((driver, i) => (
                                <div
                                    key={i}
                                    className="p-8 group transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        backgroundColor: "#0f2218",
                                        border: "1px solid rgba(201,168,76,0.15)",
                                    }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)"; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.15)"; }}
                                >
                                    <div
                                        className="w-12 h-12 mb-6 flex items-center justify-center"
                                        style={{ backgroundColor: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)" }}
                                    >
                                        <driver.icon size={20} style={{ color: "#c9a84c" }} />
                                    </div>
                                    <h3
                                        className="text-xl mb-3"
                                        style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "#f5f0e8" }}
                                    >
                                        {driver.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed pl-4"
                                        style={{ color: "#a89880", borderLeft: "2px solid rgba(201,168,76,0.2)" }}
                                    >
                                        {driver.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ornamental divider */}
                    <div className="flex items-center gap-4 mb-28">
                        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3))" }} />
                        <span style={{ color: "rgba(201,168,76,0.6)", fontSize: "0.5rem" }}>✦</span>
                        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.3), transparent)" }} />
                    </div>

                    {/* Team Section */}
                    <div
                        className="p-10 md:p-16"
                        style={{ backgroundColor: "#0f2218", border: "1px solid rgba(201,168,76,0.2)" }}
                    >
                        <div className="text-center mb-14">
                            <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}>
                                ✦ The People ✦
                            </p>
                            <h2
                                className="text-4xl md:text-5xl"
                                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, color: "#f5f0e8" }}
                            >
                                Meet Our <em style={{ color: "#c9a84c" }}>Team</em>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {TEAM_MEMBERS.map((member, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 p-5 transition-all duration-300"
                                    style={{
                                        backgroundColor: "rgba(8,15,9,0.6)",
                                        border: "1px solid rgba(201,168,76,0.1)",
                                    }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.35)"; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.1)"; }}
                                >
                                    <div
                                        className="w-14 h-14 flex-shrink-0 flex items-center justify-center text-lg"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))",
                                            border: "1px solid rgba(201,168,76,0.3)",
                                            color: "#c9a84c",
                                            fontFamily: "var(--font-cormorant)",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {member.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-base" style={{ color: "#f5f0e8" }}>{member.name}</h3>
                                        <p className="text-xs tracking-wider uppercase mt-0.5" style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}>{member.role}</p>
                                        <p className="text-xs mt-1" style={{ color: "#6b5f50" }}>{member.specialty}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}