"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, Clock, CheckCircle, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "14px 16px",
        backgroundColor: "rgba(8,15,9,0.8)",
        border: "1px solid rgba(201,168,76,0.2)",
        color: "#f5f0e8",
        outline: "none",
        transition: "border-color 0.3s",
        fontSize: "0.9rem",
    };

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
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <p
                            className="text-xs tracking-[0.35em] uppercase mb-6 inline-block"
                            style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
                        >
                            ✦ Let&apos;s Connect ✦
                        </p>
                        <h1
                            className="text-5xl md:text-7xl leading-tight mb-8"
                            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, color: "#f5f0e8" }}
                        >
                            Begin Your{" "}
                            <em style={{ color: "#c9a84c", fontStyle: "italic" }}>Journey</em>
                            <br />With Us
                        </h1>
                        <p className="text-lg leading-relaxed" style={{ color: "#a89880" }}>
                            Whether you have a question about our services, pricing, or simply wish to discuss your vision — our team is ready to listen.
                        </p>
                    </div>

                    {/* Main Card */}
                    <div
                        className="overflow-hidden grid lg:grid-cols-12"
                        style={{ border: "1px solid rgba(201,168,76,0.2)" }}
                    >
                        {/* Left: Info Panel */}
                        <div
                            className="lg:col-span-5 p-10 md:p-14 relative overflow-hidden flex flex-col justify-between"
                            style={{ backgroundColor: "#0a1a0c" }}
                        >
                            {/* Decorative globe icon */}
                            <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                                <Globe className="w-64 h-64" style={{ color: "#c9a84c" }} />
                            </div>

                            <div className="relative z-10">
                                <p
                                    className="text-xs tracking-[0.3em] uppercase mb-3"
                                    style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
                                >
                                    Contact Information
                                </p>
                                <h3
                                    className="text-3xl mb-3"
                                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, color: "#f5f0e8" }}
                                >
                                    Get in Touch
                                </h3>
                                <p className="text-sm mb-12" style={{ color: "#a89880" }}>
                                    Fill in the form to start a conversation.
                                </p>

                                <div className="space-y-8">
                                    {[
                                        { icon: MapPin, label: "Office", content: "123 Marketing Street,\nBengaluru, Karnataka 560001" },
                                        { icon: Phone, label: "Phone", content: "+91 98765 43210", sub: "Mon–Fri, 8am to 5pm" },
                                        { icon: Mail, label: "Email", content: "hello@marketly.com" },
                                    ].map(({ icon: Icon, label, content, sub }, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div
                                                className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                                                style={{
                                                    backgroundColor: "rgba(201,168,76,0.08)",
                                                    border: "1px solid rgba(201,168,76,0.25)",
                                                }}
                                            >
                                                <Icon size={16} style={{ color: "#c9a84c" }} />
                                            </div>
                                            <div>
                                                <p
                                                    className="text-xs tracking-widest uppercase mb-1"
                                                    style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
                                                >
                                                    {label}
                                                </p>
                                                <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "#a89880" }}>
                                                    {content}
                                                </p>
                                                {sub && <p className="text-xs mt-1" style={{ color: "#6b5f50" }}>{sub}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Response time badge */}
                            <div
                                className="relative z-10 mt-12 p-5"
                                style={{
                                    backgroundColor: "rgba(201,168,76,0.05)",
                                    border: "1px solid rgba(201,168,76,0.2)",
                                }}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <Clock size={15} style={{ color: "#c9a84c" }} />
                                    <span className="text-sm font-medium" style={{ color: "#f5f0e8", fontFamily: "var(--font-cinzel)", fontSize: "0.7rem", letterSpacing: "0.1em" }}>
                                        FAST RESPONSE
                                    </span>
                                </div>
                                <p className="text-sm" style={{ color: "#a89880" }}>
                                    We typically respond within{" "}
                                    <span style={{ color: "#c9a84c" }}>2 hours</span>{" "}
                                    during business days.
                                </p>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div
                            className="lg:col-span-7 p-10 md:p-14"
                            style={{ backgroundColor: "#0f2218" }}
                        >
                            {submitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                                    <div
                                        className="w-20 h-20 flex items-center justify-center"
                                        style={{
                                            backgroundColor: "rgba(201,168,76,0.1)",
                                            border: "1px solid rgba(201,168,76,0.3)",
                                        }}
                                    >
                                        <CheckCircle size={36} style={{ color: "#c9a84c" }} />
                                    </div>
                                    <div>
                                        <h3
                                            className="text-3xl mb-2"
                                            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, color: "#f5f0e8" }}
                                        >
                                            Message Sent
                                        </h3>
                                        <p style={{ color: "#a89880" }}>We&apos;ll get back to you shortly.</p>
                                    </div>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-sm tracking-widest uppercase transition-colors duration-300"
                                        style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#e8c97a"; }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#c9a84c"; }}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                className="block text-xs tracking-widest uppercase mb-2"
                                                style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                style={{ ...inputStyle }}
                                                onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.6)"; }}
                                                onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)"; }}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                className="block text-xs tracking-widest uppercase mb-2"
                                                style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                style={{ ...inputStyle }}
                                                onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.6)"; }}
                                                onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)"; }}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                className="block text-xs tracking-widest uppercase mb-2"
                                                style={{ color: "#a89880", fontFamily: "var(--font-cinzel)" }}
                                            >
                                                Phone <span style={{ color: "#6b5f50" }}>(Optional)</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 43210"
                                                style={{ ...inputStyle }}
                                                onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.6)"; }}
                                                onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)"; }}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                className="block text-xs tracking-widest uppercase mb-2"
                                                style={{ color: "#a89880", fontFamily: "var(--font-cinzel)" }}
                                            >
                                                Company <span style={{ color: "#6b5f50" }}>(Optional)</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Company Ltd."
                                                style={{ ...inputStyle }}
                                                onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.6)"; }}
                                                onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)"; }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            className="block text-xs tracking-widest uppercase mb-2"
                                            style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
                                        >
                                            How Can We Help?
                                        </label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            placeholder="Tell us about your project and goals..."
                                            style={{ ...inputStyle, resize: "none" }}
                                            onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.6)"; }}
                                            onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)"; }}
                                        />
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full py-4 px-6 flex items-center justify-center gap-3 text-sm tracking-widest uppercase font-bold transition-all duration-300 hover:-translate-y-0.5"
                                            style={{
                                                background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                                                color: "#080f09",
                                                fontFamily: "var(--font-cinzel)",
                                            }}
                                        >
                                            Send Message
                                            <Send size={15} />
                                        </button>
                                        <p className="text-center text-xs mt-4" style={{ color: "#6b5f50" }}>
                                            By sending this message, you agree to our privacy policy.
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-16">
                        <div
                            className="flex items-center gap-4 mb-10"
                            style={{ borderTop: "1px solid rgba(201,168,76,0.15)", paddingTop: "2.5rem" }}
                        >
                            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2))" }} />
                            <span style={{ color: "rgba(201,168,76,0.4)", fontSize: "0.5rem" }}>✦</span>
                            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.2), transparent)" }} />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { title: "View Pricing", link: "/pricing" },
                                { title: "Our Services", link: "/features" },
                                { title: "About Us", link: "/about" },
                                { title: "Support", link: "mailto:hello@marketly.com" },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.link}
                                    className="flex items-center justify-center gap-2 p-4 text-xs tracking-widest uppercase transition-all duration-300 group"
                                    style={{
                                        border: "1px solid rgba(201,168,76,0.15)",
                                        color: "#a89880",
                                        fontFamily: "var(--font-cinzel)",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.5)";
                                        (e.currentTarget as HTMLElement).style.color = "#e8c97a";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.15)";
                                        (e.currentTarget as HTMLElement).style.color = "#a89880";
                                    }}
                                >
                                    {item.title}
                                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}