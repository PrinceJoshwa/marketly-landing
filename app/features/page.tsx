"use client";

import Link from "next/link";
import { Check, ArrowRight, Share2, Search, Palette, Code, ShoppingCart, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SERVICES = [
    {
        id: "digital-marketing",
        icon: Share2,
        title: "Digital Marketing & PR",
        description: "Comprehensive digital marketing strategies to boost your online presence and brand authority.",
        features: ["Social Media Marketing", "Content Marketing", "Email Campaigns", "Public Relations", "Influencer Marketing", "Paid Advertising (PPC)"],
    },
    {
        id: "seo",
        icon: Search,
        title: "SEO & Analytics",
        description: "Data-driven SEO strategies and deep analytics to improve your search rankings and visibility.",
        features: ["On-Page SEO", "Technical SEO", "Keyword Research", "Analytics & Reporting", "Conversion Optimization", "Competitor Analysis"],
    },
    {
        id: "branding",
        icon: Palette,
        title: "Branding & Creative",
        description: "Build a strong, enduring brand identity with our creative design and strategy services.",
        features: ["Brand Strategy", "Logo Design", "Visual Identity", "Creative Campaigns", "Brand Guidelines", "Marketing Collateral"],
    },
    {
        id: "development",
        icon: Code,
        title: "Technology & Development",
        description: "Custom web and mobile solutions to power your digital presence and business operations.",
        features: ["Website Development", "Mobile Apps", "E-commerce Solutions", "Custom Software", "API Integration", "Maintenance & Support"],
    },
    {
        id: "ecommerce",
        icon: ShoppingCart,
        title: "E-commerce Solutions",
        description: "End-to-end e-commerce solutions to help you sell online effectively and at scale.",
        features: ["Store Setup", "Payment Integration", "Inventory Management", "Order Fulfillment", "Marketing Automation", "Customer Analytics"],
    },
    {
        id: "credibility",
        icon: Shield,
        title: "Relationship & Credibility",
        description: "Build trust and credibility with your audience through strategic communication and engagement.",
        features: ["Reputation Management", "Customer Engagement", "Trust Building", "Community Management", "Crisis Communication", "Review Management"],
    },
];

const BENEFITS = [
    { title: "Proven Track Record", description: "500+ successful projects delivered across diverse industries" },
    { title: "Expert Team", description: "10+ years of combined experience in digital marketing" },
    { title: "Results-Driven", description: "95% client satisfaction rate with measurable ROI" },
    { title: "24/7 Support", description: "Dedicated account managers available whenever you need us" },
    { title: "Custom Solutions", description: "Tailored strategies built specifically for your business" },
    { title: "Continuous Growth", description: "Ongoing optimization to maximize your results" },
];

export default function FeaturesPage() {
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
                            ✦ Our Solutions ✦
                        </p>
                        <h1
                            className="text-5xl md:text-7xl leading-tight mb-8"
                            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, color: "#f5f0e8" }}
                        >
                            Premium{" "}
                            <em style={{ color: "#c9a84c", fontStyle: "italic" }}>Services</em>
                            <br />Built to Elevate
                        </h1>
                        <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#a89880" }}>
                            Six complete service categories designed to elevate your brand and drive measurable business growth.
                        </p>
                    </div>

                    {/* Ornamental divider */}
                    <div className="flex items-center gap-4 mb-24">
                        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3))" }} />
                        <span style={{ color: "rgba(201,168,76,0.6)", fontSize: "0.5rem" }}>✦</span>
                        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.3), transparent)" }} />
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
                        {SERVICES.map((service) => (
                            <div
                                key={service.id}
                                className="group p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    backgroundColor: "#0f2218",
                                    border: "1px solid rgba(201,168,76,0.15)",
                                }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.45)"; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.15)"; }}
                            >
                                {/* Icon + Arrow */}
                                <div className="flex justify-between items-start mb-8">
                                    <div
                                        className="w-14 h-14 flex items-center justify-center transition-colors duration-300"
                                        style={{
                                            backgroundColor: "rgba(201,168,76,0.08)",
                                            border: "1px solid rgba(201,168,76,0.25)",
                                        }}
                                    >
                                        <service.icon size={22} style={{ color: "#c9a84c" }} />
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                                        style={{
                                            border: "1px solid rgba(201,168,76,0.4)",
                                            color: "#c9a84c",
                                        }}
                                    >
                                        <ArrowRight size={15} />
                                    </Link>
                                </div>

                                <h3
                                    className="text-2xl mb-3"
                                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "#f5f0e8" }}
                                >
                                    {service.title}
                                </h3>
                                <p className="text-sm mb-8 leading-relaxed" style={{ color: "#a89880" }}>
                                    {service.description}
                                </p>

                                <div
                                    className="mt-auto space-y-3 pt-6"
                                    style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
                                >
                                    {service.features.map((feature, j) => (
                                        <div key={j} className="flex items-start gap-3">
                                            <div
                                                className="mt-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0"
                                                style={{
                                                    backgroundColor: "rgba(201,168,76,0.1)",
                                                    border: "1px solid rgba(201,168,76,0.3)",
                                                }}
                                            >
                                                <Check size={9} style={{ color: "#c9a84c" }} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm" style={{ color: "#a89880" }}>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Ornamental divider */}
                    <div className="flex items-center gap-4 mb-24">
                        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3))" }} />
                        <span style={{ color: "rgba(201,168,76,0.6)", fontSize: "0.5rem" }}>✦</span>
                        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.3), transparent)" }} />
                    </div>

                    {/* Why Choose Marketly */}
                    <div
                        className="p-10 md:p-16"
                        style={{ backgroundColor: "#0f2218", border: "1px solid rgba(201,168,76,0.2)" }}
                    >
                        <div className="text-center mb-14">
                            <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}>
                                ✦ Why Marketly ✦
                            </p>
                            <h2
                                className="text-4xl md:text-5xl"
                                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, color: "#f5f0e8" }}
                            >
                                Industry-Leading <em style={{ color: "#c9a84c" }}>Expertise</em>
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            {BENEFITS.map((benefit, i) => (
                                <div
                                    key={i}
                                    className="p-6 transition-all duration-300"
                                    style={{
                                        backgroundColor: "rgba(8,15,9,0.6)",
                                        border: "1px solid rgba(201,168,76,0.1)",
                                    }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.35)"; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.1)"; }}
                                >
                                    <h3
                                        className="text-lg mb-2"
                                        style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "#f5f0e8" }}
                                    >
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: "#a89880" }}>{benefit.description}</p>
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