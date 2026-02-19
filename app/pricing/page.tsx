"use client";

import Link from "next/link";
import { Check, X, ArrowRight, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const PRICING_PLANS = [
    {
        name: "Starter",
        price: "₹49,999",
        period: "/month",
        description: "Perfect for small businesses and startups",
        features: ["Social Media Management (2 platforms)", "Content Creation (8 posts/month)", "Basic SEO Optimization", "Monthly Analytics Report", "Email Support"],
        notIncluded: ["Paid Advertising", "Custom Development", "24/7 Support"],
        highlighted: false,
    },
    {
        name: "Professional",
        price: "₹1,24,999",
        period: "/month",
        description: "Ideal for growing businesses",
        features: ["Social Media Management (4 platforms)", "Content Creation (20 posts/month)", "Advanced SEO & Analytics", "Paid Advertising Management", "Weekly Performance Reports", "Email & Phone Support", "Quarterly Strategy Sessions"],
        notIncluded: ["Custom Development"],
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large organizations with complex needs",
        features: ["Unlimited Social Media Management", "Custom Content Strategy", "Full-Service SEO & SEM", "Multi-Channel Advertising", "Custom Development & Integrations", "Real-Time Analytics Dashboard", "Dedicated Account Manager", "24/7 Priority Support", "Monthly Strategy Sessions"],
        notIncluded: [],
        highlighted: false,
    },
];

const FAQS = [
    { question: "Can I change my plan later?", answer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, UPI, net banking, and bank transfers for annual subscriptions." },
    { question: "Is there a contract or can I cancel anytime?", answer: "Our plans are month-to-month with no long-term contracts. You can cancel anytime with 30 days notice." },
    { question: "Do you offer custom packages?", answer: "Absolutely! We can create a custom package tailored to your specific needs and budget. Contact us to discuss your requirements." },
    { question: "What's included in the setup?", answer: "All plans include initial consultation, strategy development, account setup, and onboarding training at no additional cost." },
    { question: "Do you provide reporting?", answer: "Yes! All plans include regular performance reports. The frequency depends on your plan level." },
];

export default function PricingPage() {
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

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
                            ✦ Transparent Pricing ✦
                        </p>
                        <h1
                            className="text-5xl md:text-7xl leading-tight mb-8"
                            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, color: "#f5f0e8" }}
                        >
                            Plans Built for{" "}
                            <em style={{ color: "#c9a84c", fontStyle: "italic" }}>Your Vision</em>
                        </h1>
                        <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#a89880" }}>
                            Choose the perfect plan for your business needs. All plans include our core services and dedicated expert support.
                        </p>
                    </div>

                    {/* Ornamental divider */}
                    <div className="flex items-center gap-4 mb-24">
                        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3))" }} />
                        <span style={{ color: "rgba(201,168,76,0.6)", fontSize: "0.5rem" }}>✦</span>
                        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.3), transparent)" }} />
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-3 gap-8 items-start mb-28">
                        {PRICING_PLANS.map((plan, i) => (
                            <div
                                key={i}
                                className="relative flex flex-col transition-all duration-300"
                                style={{
                                    backgroundColor: plan.highlighted ? "#132b1a" : "#0f2218",
                                    border: plan.highlighted
                                        ? "1px solid rgba(201,168,76,0.6)"
                                        : "1px solid rgba(201,168,76,0.15)",
                                    transform: plan.highlighted ? "scale(1.03)" : "scale(1)",
                                    zIndex: plan.highlighted ? 10 : 1,
                                }}
                            >
                                {plan.highlighted && (
                                    <div
                                        className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 text-xs font-bold tracking-widest uppercase"
                                        style={{
                                            background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                                            color: "#080f09",
                                            fontFamily: "var(--font-cinzel)",
                                        }}
                                    >
                                        Most Popular
                                    </div>
                                )}

                                <div className="p-8 flex flex-col h-full">
                                    {/* Plan name */}
                                    <p
                                        className="text-xs tracking-[0.3em] uppercase mb-3"
                                        style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
                                    >
                                        {plan.name}
                                    </p>
                                    <p className="text-sm mb-6" style={{ color: "#a89880" }}>{plan.description}</p>

                                    {/* Price */}
                                    <div className="flex items-baseline gap-1 mb-8">
                                        <span
                                            className="text-5xl"
                                            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "#f5f0e8" }}
                                        >
                                            {plan.price}
                                        </span>
                                        {plan.period && (
                                            <span className="text-sm" style={{ color: "#6b5f50" }}>{plan.period}</span>
                                        )}
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        href="/contact"
                                        className="w-full py-4 flex items-center justify-center gap-2 text-xs tracking-widest uppercase font-bold mb-8 transition-all duration-300 hover:-translate-y-0.5"
                                        style={
                                            plan.highlighted
                                                ? {
                                                    background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                                                    color: "#080f09",
                                                    fontFamily: "var(--font-cinzel)",
                                                }
                                                : {
                                                    border: "1px solid rgba(201,168,76,0.3)",
                                                    color: "#c9a84c",
                                                    fontFamily: "var(--font-cinzel)",
                                                }
                                        }
                                    >
                                        Get Started
                                        <ArrowRight size={14} />
                                    </Link>

                                    {/* Features */}
                                    <div className="space-y-3 flex-grow">
                                        <p
                                            className="text-xs tracking-widest uppercase mb-3"
                                            style={{ color: "#6b5f50", fontFamily: "var(--font-cinzel)" }}
                                        >
                                            Included Features
                                        </p>
                                        {plan.features.map((feature, j) => (
                                            <div key={j} className="flex items-start gap-3">
                                                <div
                                                    className="mt-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0"
                                                    style={{
                                                        backgroundColor: plan.highlighted ? "rgba(201,168,76,0.2)" : "rgba(201,168,76,0.08)",
                                                        border: "1px solid rgba(201,168,76,0.35)",
                                                    }}
                                                >
                                                    <Check size={9} style={{ color: "#c9a84c" }} strokeWidth={3} />
                                                </div>
                                                <span className="text-sm leading-tight" style={{ color: "#a89880" }}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Not Included */}
                                    {plan.notIncluded.length > 0 && (
                                        <div
                                            className="space-y-3 mt-6 pt-6"
                                            style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
                                        >
                                            <p
                                                className="text-xs tracking-widest uppercase mb-3"
                                                style={{ color: "#4a3f30", fontFamily: "var(--font-cinzel)" }}
                                            >
                                                Not Included
                                            </p>
                                            {plan.notIncluded.map((feature, j) => (
                                                <div key={j} className="flex items-start gap-3 opacity-50">
                                                    <X size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#6b5f50" }} />
                                                    <span className="text-sm leading-tight" style={{ color: "#6b5f50" }}>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
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

                    {/* FAQ Section */}
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <p
                                className="text-xs tracking-[0.35em] uppercase mb-4"
                                style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
                            >
                                ✦ Common Questions ✦
                            </p>
                            <h2
                                className="text-4xl md:text-5xl"
                                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, color: "#f5f0e8" }}
                            >
                                Frequently Asked <em style={{ color: "#c9a84c" }}>Questions</em>
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {FAQS.map((faq, i) => (
                                <div
                                    key={i}
                                    className="overflow-hidden transition-all duration-300"
                                    style={{
                                        border: expandedFAQ === i
                                            ? "1px solid rgba(201,168,76,0.4)"
                                            : "1px solid rgba(201,168,76,0.12)",
                                        backgroundColor: expandedFAQ === i ? "#0f2218" : "rgba(15,34,24,0.4)",
                                    }}
                                >
                                    <button
                                        onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span
                                            className="font-medium text-base"
                                            style={{
                                                color: expandedFAQ === i ? "#e8c97a" : "#f5f0e8",
                                                fontFamily: "var(--font-cormorant)",
                                                fontSize: "1.15rem",
                                            }}
                                        >
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            size={18}
                                            className="flex-shrink-0 ml-4 transition-transform duration-300"
                                            style={{
                                                color: expandedFAQ === i ? "#c9a84c" : "#6b5f50",
                                                transform: expandedFAQ === i ? "rotate(180deg)" : "rotate(0deg)",
                                            }}
                                        />
                                    </button>
                                    {expandedFAQ === i && (
                                        <div
                                            className="px-6 pb-6 text-sm leading-relaxed"
                                            style={{
                                                color: "#a89880",
                                                borderTop: "1px solid rgba(201,168,76,0.1)",
                                                paddingTop: "1rem",
                                            }}
                                        >
                                            {faq.answer}
                                        </div>
                                    )}
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