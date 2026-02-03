// "use client";

// import Link from "next/link";
// import { Check, ArrowRight } from "lucide-react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import CTASection from "@/components/CTASection";

// const SERVICES = [
//     {
//         id: "digital-marketing",
//         icon: "📱",
//         title: "Digital Marketing & PR",
//         description: "Comprehensive digital marketing strategies to boost your online presence.",
//         features: [
//             "Social Media Marketing",
//             "Content Marketing",
//             "Email Campaigns",
//             "Public Relations",
//             "Influencer Marketing",
//             "Paid Advertising (PPC)"
//         ]
//     },
//     {
//         id: "seo",
//         icon: "📊",
//         title: "SEO & Analytics",
//         description: "Data-driven SEO strategies and analytics to improve your search rankings.",
//         features: [
//             "On-Page SEO",
//             "Technical SEO",
//             "Keyword Research",
//             "Analytics & Reporting",
//             "Conversion Optimization",
//             "Competitor Analysis"
//         ]
//     },
//     {
//         id: "branding",
//         icon: "🎨",
//         title: "Branding & Creative",
//         description: "Build a strong brand identity with our creative design services.",
//         features: [
//             "Brand Strategy",
//             "Logo Design",
//             "Visual Identity",
//             "Creative Campaigns",
//             "Brand Guidelines",
//             "Marketing Collateral"
//         ]
//     },
//     {
//         id: "development",
//         icon: "💻",
//         title: "Technology & Development",
//         description: "Custom web and mobile solutions to power your digital presence.",
//         features: [
//             "Website Development",
//             "Mobile Apps",
//             "E-commerce Solutions",
//             "Custom Software",
//             "API Integration",
//             "Maintenance & Support"
//         ]
//     },
//     {
//         id: "ecommerce",
//         icon: "🛒",
//         title: "E-commerce Solutions",
//         description: "End-to-end e-commerce solutions to help you sell online effectively.",
//         features: [
//             "Store Setup",
//             "Payment Integration",
//             "Inventory Management",
//             "Order Fulfillment",
//             "Marketing Automation",
//             "Customer Analytics"
//         ]
//     },
//     {
//         id: "credibility",
//         icon: "🤝",
//         title: "Relationship & Credibility",
//         description: "Build trust and credibility with your audience through strategic communication.",
//         features: [
//             "Reputation Management",
//             "Customer Engagement",
//             "Trust Building",
//             "Community Management",
//             "Crisis Communication",
//             "Review Management"
//         ]
//     }
// ];

// export default function FeaturesPage() {
//     return (
//         <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
//             <Header />

//             {/* Hero Section */}
//             <section className="pt-32 pb-20 px-6">
//                 <div className="container mx-auto max-w-6xl">
//                     <div className="text-center space-y-8 animate-fade-in max-w-4xl mx-auto">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
//                             <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
//                             <span className="text-sm font-semibold text-emerald-400">Comprehensive Solutions</span>
//                         </div>
//                         <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
//                             Our Premium <span className="text-emerald-400">Services</span>
//                         </h1>
//                         <p className="text-xl text-gray-300">
//                             Six complete service categories designed to elevate your brand and drive measurable business growth
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Services Grid */}
//             <section className="py-20 px-6">
//                 <div className="container mx-auto max-w-6xl">
//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {SERVICES.map((service, i) => (
//                             <div
//                                 key={service.id}
//                                 className="group p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-2"
//                                 style={{ animationDelay: `${i * 100}ms` }}
//                             >
//                                 {/* Icon */}
//                                 <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
//                                     {service.icon}
//                                 </div>

//                                 {/* Title & Description */}
//                                 <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
//                                     {service.title}
//                                 </h3>
//                                 <p className="text-gray-400 mb-6 text-sm leading-relaxed">
//                                     {service.description}
//                                 </p>

//                                 {/* Features List */}
//                                 <div className="space-y-3 mb-6">
//                                     {service.features.map((feature, j) => (
//                                         <div key={j} className="flex items-start gap-3">
//                                             <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
//                                             <span className="text-gray-300 text-sm">{feature}</span>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 {/* CTA */}
//                                 <Link
//                                     href="/contact"
//                                     className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors group/link"
//                                 >
//                                     Learn More
//                                     <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Benefits Section */}
//             <section className="py-20 px-6 bg-slate-800/30 border-y border-emerald-500/20">
//                 <div className="container mx-auto max-w-6xl">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why Choose Marketly</h2>
//                         <p className="text-xl text-gray-300">Industry-leading expertise with proven results</p>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-8">
//                         {[
//                             { title: "Proven Track Record", description: "500+ successful projects delivered across diverse industries" },
//                             { title: "Expert Team", description: "10+ years of combined experience in digital marketing" },
//                             { title: "Results-Driven", description: "95% client satisfaction rate with measurable ROI" },
//                             { title: "24/7 Support", description: "Dedicated account managers available whenever you need us" },
//                             { title: "Custom Solutions", description: "Tailored strategies built specifically for your business" },
//                             { title: "Continuous Growth", description: "Ongoing optimization to maximize your results" }
//                         ].map((benefit, i) => (
//                             <div key={i} className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-emerald-500/10">
//                                 <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
//                                 <p className="text-gray-400">{benefit.description}</p>
//                             </div>
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
import { Check, ArrowRight, Share2, Search, Palette, Code, ShoppingCart, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

// DATA (Preserved)
const SERVICES = [
    {
        id: "digital-marketing",
        icon: Share2,
        title: "Digital Marketing & PR",
        description: "Comprehensive digital marketing strategies to boost your online presence.",
        features: ["Social Media Marketing", "Content Marketing", "Email Campaigns", "Public Relations", "Influencer Marketing", "Paid Advertising (PPC)"]
    },
    {
        id: "seo",
        icon: Search,
        title: "SEO & Analytics",
        description: "Data-driven SEO strategies and analytics to improve your search rankings.",
        features: ["On-Page SEO", "Technical SEO", "Keyword Research", "Analytics & Reporting", "Conversion Optimization", "Competitor Analysis"]
    },
    {
        id: "branding",
        icon: Palette,
        title: "Branding & Creative",
        description: "Build a strong brand identity with our creative design services.",
        features: ["Brand Strategy", "Logo Design", "Visual Identity", "Creative Campaigns", "Brand Guidelines", "Marketing Collateral"]
    },
    {
        id: "development",
        icon: Code,
        title: "Technology & Development",
        description: "Custom web and mobile solutions to power your digital presence.",
        features: ["Website Development", "Mobile Apps", "E-commerce Solutions", "Custom Software", "API Integration", "Maintenance & Support"]
    },
    {
        id: "ecommerce",
        icon: ShoppingCart,
        title: "E-commerce Solutions",
        description: "End-to-end e-commerce solutions to help you sell online effectively.",
        features: ["Store Setup", "Payment Integration", "Inventory Management", "Order Fulfillment", "Marketing Automation", "Customer Analytics"]
    },
    {
        id: "credibility",
        icon: Shield,
        title: "Relationship & Credibility",
        description: "Build trust and credibility with your audience through strategic communication.",
        features: ["Reputation Management", "Customer Engagement", "Trust Building", "Community Management", "Crisis Communication", "Review Management"]
    }
];

export default function FeaturesPage() {
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
                            Our Solutions
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Services.</span>
                        </h1>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                            Six complete service categories designed to elevate your brand and drive measurable business growth.
                        </p>
                    </div>

                    {/* SERVICES GRID */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                        {SERVICES.map((service, i) => (
                            <div
                                key={service.id}
                                className="group p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-slate-900/60 hover:border-emerald-500/30 transition-all duration-300 flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-14 h-14 bg-slate-950 rounded-2xl border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors shadow-lg">
                                        <service.icon className="w-7 h-7 text-white group-hover:text-emerald-400 transition-colors" />
                                    </div>
                                    <Link 
                                        href="/contact" 
                                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-emerald-500 hover:text-white transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                                    >
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="mt-auto space-y-3 pt-6 border-t border-white/5">
                                    {service.features.map((feature, j) => (
                                        <div key={j} className="flex items-start gap-3">
                                            <div className="mt-1 w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                                <Check className="w-2.5 h-2.5 text-emerald-400" />
                                            </div>
                                            <span className="text-sm text-slate-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* BENEFITS SECTION */}
                    <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Marketly</h2>
                            <p className="text-slate-400">Industry-leading expertise with proven results.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "Proven Track Record", description: "500+ successful projects delivered across diverse industries" },
                                { title: "Expert Team", description: "10+ years of combined experience in digital marketing" },
                                { title: "Results-Driven", description: "95% client satisfaction rate with measurable ROI" },
                                { title: "24/7 Support", description: "Dedicated account managers available whenever you need us" },
                                { title: "Custom Solutions", description: "Tailored strategies built specifically for your business" },
                                { title: "Continuous Growth", description: "Ongoing optimization to maximize your results" }
                            ].map((benefit, i) => (
                                <div key={i} className="p-6 bg-slate-950/50 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-slate-400 text-sm">{benefit.description}</p>
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