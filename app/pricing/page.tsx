// "use client";

// import Link from "next/link";
// import { Check, X, ArrowRight } from "lucide-react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import CTASection from "@/components/CTASection";
// import { useState } from "react";

// const PRICING_PLANS = [
//     {
//         name: "Starter",
//         price: "$999",
//         period: "/month",
//         description: "Perfect for small businesses and startups",
//         features: [
//             "Social Media Management (2 platforms)",
//             "Content Creation (8 posts/month)",
//             "Basic SEO Optimization",
//             "Monthly Analytics Report",
//             "Email Support",
//         ],
//         notIncluded: [
//             "Paid Advertising",
//             "Custom Development",
//             "24/7 Support",
//         ],
//         highlighted: false,
//     },
//     {
//         name: "Professional",
//         price: "$2,499",
//         period: "/month",
//         description: "Ideal for growing businesses",
//         features: [
//             "Social Media Management (4 platforms)",
//             "Content Creation (20 posts/month)",
//             "Advanced SEO & Analytics",
//             "Paid Advertising Management",
//             "Weekly Performance Reports",
//             "Email & Phone Support",
//             "Quarterly Strategy Sessions",
//         ],
//         notIncluded: [
//             "Custom Development",
//         ],
//         highlighted: true,
//     },
//     {
//         name: "Enterprise",
//         price: "Custom",
//         period: "",
//         description: "For large organizations with complex needs",
//         features: [
//             "Unlimited Social Media Management",
//             "Custom Content Strategy",
//             "Full-Service SEO & SEM",
//             "Multi-Channel Advertising",
//             "Custom Development & Integrations",
//             "Real-Time Analytics Dashboard",
//             "Dedicated Account Manager",
//             "24/7 Priority Support",
//             "Monthly Strategy Sessions",
//         ],
//         notIncluded: [],
//         highlighted: false,
//     }
// ];

// const FAQS = [
//     {
//         question: "Can I change my plan later?",
//         answer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
//     },
//     {
//         question: "What payment methods do you accept?",
//         answer: "We accept all major credit cards, PayPal, and bank transfers for annual subscriptions."
//     },
//     {
//         question: "Is there a contract or can I cancel anytime?",
//         answer: "Our plans are month-to-month with no long-term contracts. You can cancel anytime with 30 days notice."
//     },
//     {
//         question: "Do you offer custom packages?",
//         answer: "Absolutely! We can create a custom package tailored to your specific needs and budget. Contact us to discuss your requirements."
//     },
//     {
//         question: "What's included in the setup?",
//         answer: "All plans include initial consultation, strategy development, account setup, and onboarding training at no additional cost."
//     },
//     {
//         question: "Do you provide reporting?",
//         answer: "Yes! All plans include regular performance reports. The frequency depends on your plan level."
//     }
// ];

// export default function PricingPage() {
//     const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
//             <Header />

//             {/* Hero Section */}
//             <section className="pt-32 pb-20 px-6">
//                 <div className="container mx-auto max-w-6xl">
//                     <div className="text-center space-y-8 animate-fade-in max-w-4xl mx-auto">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
//                             <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
//                             <span className="text-sm font-semibold text-emerald-400">Transparent Pricing</span>
//                         </div>
//                         <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
//                             Plans Built for <span className="text-emerald-400">Your Budget</span>
//                         </h1>
//                         <p className="text-xl text-gray-300">
//                             Choose the perfect plan for your business needs. All plans include our core services and expert support.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Pricing Cards */}
//             <section className="py-20 px-6">
//                 <div className="container mx-auto max-w-6xl">
//                     <div className="grid md:grid-cols-3 gap-8">
//                         {PRICING_PLANS.map((plan, i) => (
//                             <div
//                                 key={i}
//                                 className={`group relative p-8 rounded-2xl transition-all duration-300 ${
//                                     plan.highlighted
//                                         ? "bg-gradient-to-br from-emerald-900/20 to-slate-900 border-2 border-emerald-500/50 shadow-xl shadow-emerald-500/20 scale-105"
//                                         : "bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-500/10 hover:border-emerald-500/30"
//                                 } hover:shadow-xl hover:shadow-emerald-500/10`}
//                             >
//                                 {plan.highlighted && (
//                                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
//                                         MOST POPULAR
//                                     </div>
//                                 )}

//                                 {/* Plan Header */}
//                                 <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
//                                 <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

//                                 {/* Price */}
//                                 <div className="mb-8">
//                                     <span className="text-5xl font-black text-white">{plan.price}</span>
//                                     {plan.period && <span className="text-gray-400 text-sm">{plan.period}</span>}
//                                 </div>

//                                 {/* CTA Button */}
//                                 <Link
//                                     href="/contact"
//                                     className={`w-full py-3 rounded-lg font-bold transition-all duration-200 flex items-center justify-center gap-2 mb-8 ${
//                                         plan.highlighted
//                                             ? "bg-emerald-500 text-white hover:bg-emerald-600"
//                                             : "bg-slate-700 text-white hover:bg-slate-600"
//                                     }`}
//                                 >
//                                     Get Started
//                                     <ArrowRight size={18} />
//                                 </Link>

//                                 {/* Features */}
//                                 <div className="space-y-4 mb-8 pb-8 border-b border-emerald-500/10">
//                                     <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Included Features</p>
//                                     {plan.features.map((feature, j) => (
//                                         <div key={j} className="flex items-start gap-3">
//                                             <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
//                                             <span className="text-gray-300 text-sm">{feature}</span>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 {/* Not Included */}
//                                 {plan.notIncluded.length > 0 && (
//                                     <div className="space-y-3">
//                                         <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Not Included</p>
//                                         {plan.notIncluded.map((feature, j) => (
//                                             <div key={j} className="flex items-start gap-3">
//                                                 <X className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
//                                                 <span className="text-gray-500 text-sm">{feature}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Comparison Section */}
//             <section className="py-20 px-6 bg-slate-800/30 border-y border-emerald-500/20">
//                 <div className="container mx-auto max-w-6xl">
//                     <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center">What's Included in Every Plan</h2>

//                     <div className="grid md:grid-cols-2 gap-8">
//                         {[
//                             { title: "Expert Consultation", description: "Initial consultation to understand your goals and challenges" },
//                             { title: "Custom Strategy", description: "Tailored marketing strategy based on your industry and audience" },
//                             { title: "Regular Reporting", description: "Transparent reporting to track progress and results" },
//                             { title: "Professional Support", description: "Dedicated support team to answer your questions" },
//                             { title: "Industry Best Practices", description: "Implementation of latest marketing methodologies" },
//                             { title: "Continuous Optimization", description: "Ongoing improvements to maximize your ROI" }
//                         ].map((item, i) => (
//                             <div key={i} className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-emerald-500/10 flex gap-4">
//                                 <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 flex items-center justify-center">
//                                     <Check className="w-4 h-4 text-white" />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-bold text-white mb-1">{item.title}</h3>
//                                     <p className="text-gray-400 text-sm">{item.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* FAQs */}
//             <section className="py-20 px-6">
//                 <div className="container mx-auto max-w-3xl">
//                     <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center">Frequently Asked Questions</h2>

//                     <div className="space-y-4">
//                         {FAQS.map((faq, i) => (
//                             <button
//                                 key={i}
//                                 onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
//                                 className="w-full text-left p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300"
//                             >
//                                 <div className="flex items-center justify-between">
//                                     <h3 className="font-bold text-white text-lg">{faq.question}</h3>
//                                     <div className={`transition-transform ${expandedFAQ === i ? "rotate-180" : ""}`}>
//                                         <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                                 {expandedFAQ === i && (
//                                     <p className="mt-4 text-gray-300 leading-relaxed">{faq.answer}</p>
//                                 )}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <CTASection />

//             <Footer />
//         </div>
//     );
// }

"use client";

import Link from "next/link";
import { Check, X, ArrowRight, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useState } from "react";

// DATA (Preserved)
const PRICING_PLANS = [
    {
        name: "Starter",
        price: "$999",
        period: "/month",
        description: "Perfect for small businesses and startups",
        features: ["Social Media Management (2 platforms)", "Content Creation (8 posts/month)", "Basic SEO Optimization", "Monthly Analytics Report", "Email Support"],
        notIncluded: ["Paid Advertising", "Custom Development", "24/7 Support"],
        highlighted: false,
    },
    {
        name: "Professional",
        price: "$2,499",
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
    }
];

const FAQS = [
    { question: "Can I change my plan later?", answer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and bank transfers for annual subscriptions." },
    { question: "Is there a contract or can I cancel anytime?", answer: "Our plans are month-to-month with no long-term contracts. You can cancel anytime with 30 days notice." },
    { question: "Do you offer custom packages?", answer: "Absolutely! We can create a custom package tailored to your specific needs and budget. Contact us to discuss your requirements." },
    { question: "What's included in the setup?", answer: "All plans include initial consultation, strategy development, account setup, and onboarding training at no additional cost." },
    { question: "Do you provide reporting?", answer: "Yes! All plans include regular performance reports. The frequency depends on your plan level." }
];

export default function PricingPage() {
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-slate-950 relative selection:bg-emerald-500/30 selection:text-emerald-200 font-sans text-slate-200">
            <Header />

            {/* BACKGROUND MESH */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-500/10 rounded-full blur-[120px] opacity-60 mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] opacity-60 mix-blend-screen" />
            </div>

            <main className="relative z-10 pt-32 pb-20 px-4 md:px-6">
                <div className="container mx-auto max-w-7xl">

                    {/* HERO HEADER */}
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Transparent Pricing
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                            Plans Built for <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Your Budget.</span>
                        </h1>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                            Choose the perfect plan for your business needs. All plans include our core services and expert support.
                        </p>
                    </div>

                    {/* PRICING CARDS */}
                    <div className="grid md:grid-cols-3 gap-8 items-start mb-32">
                        {PRICING_PLANS.map((plan, i) => (
                            <div
                                key={i}
                                className={`relative p-8 rounded-[32px] border transition-all duration-300 flex flex-col h-full ${
                                    plan.highlighted
                                        ? "bg-slate-900/60 backdrop-blur-xl border-emerald-500 shadow-2xl shadow-emerald-500/20 scale-105 z-10"
                                        : "bg-slate-900/40 backdrop-blur-md border-white/10 hover:border-white/20"
                                }`}
                            >
                                {plan.highlighted && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-emerald-500 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg shadow-emerald-500/40">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-slate-400 text-sm mb-6 min-h-[40px]">{plan.description}</p>
                                    
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-black text-white tracking-tight">{plan.price}</span>
                                        {plan.period && <span className="text-slate-500 text-sm font-bold">{plan.period}</span>}
                                    </div>
                                </div>

                                <Link
                                    href="/contact"
                                    className={`w-full py-4 rounded-xl font-bold text-center transition-all mb-8 flex items-center justify-center gap-2 ${
                                        plan.highlighted
                                            ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20"
                                            : "bg-slate-800 text-white hover:bg-slate-700 border border-white/5"
                                    }`}
                                >
                                    Get Started
                                    <ArrowRight size={18} />
                                </Link>

                                <div className="space-y-4 mb-8 flex-grow">
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Included Features</p>
                                    {plan.features.map((feature, j) => (
                                        <div key={j} className="flex items-start gap-3">
                                            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlighted ? "bg-emerald-500 text-white" : "bg-emerald-500/10 text-emerald-400"}`}>
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm text-slate-300 leading-tight">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {plan.notIncluded.length > 0 && (
                                    <div className="space-y-4 pt-6 border-t border-white/5">
                                         <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Not Included</p>
                                        {plan.notIncluded.map((feature, j) => (
                                            <div key={j} className="flex items-start gap-3 opacity-60">
                                                <X className="w-5 h-5 text-slate-500 flex-shrink-0" />
                                                <span className="text-sm text-slate-500 leading-tight">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* FAQ SECTION (Clean Accordion) */}
                    <div className="max-w-4xl mx-auto mb-32">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {FAQS.map((faq, i) => (
                                <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${expandedFAQ === i ? "bg-slate-900/60 border-emerald-500/30" : "bg-slate-900/40 border-white/5"}`}>
                                    <button
                                        onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className={`font-bold text-lg ${expandedFAQ === i ? "text-emerald-400" : "text-white"}`}>{faq.question}</span>
                                        <ChevronDown size={20} className={`transition-transform duration-300 ${expandedFAQ === i ? "rotate-180 text-emerald-400" : "text-slate-500"}`} />
                                    </button>
                                    {expandedFAQ === i && (
                                        <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 animate-fade-in">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
            {/* <CTASection title={""} description={""} /> */}
            <Footer />
        </div>
    );
}