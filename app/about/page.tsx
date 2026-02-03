// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Users, Target, Award, TrendingUp, Heart, Zap, ArrowRight } from "lucide-react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import CTASection from "@/components/CTASection";

// const STATS = [
//     { icon: Users, value: "10+", label: "Years of Experience" },
//     { icon: Target, value: "500+", label: "Projects Completed" },
//     { icon: Award, value: "120+", label: "Happy Clients" },
//     { icon: TrendingUp, value: "95%", label: "Client Satisfaction" },
// ];

// const GROWTH_DRIVERS = [
//     {
//         title: "Strategic Planning",
//         description: "Data-driven strategies tailored to your unique business goals and market position.",
//         icon: "🎯",
//     },
//     {
//         title: "Rapid Execution",
//         description: "Fast implementation without compromising quality, getting you to market quickly.",
//         icon: "🚀",
//     },
//     {
//         title: "Performance Tracking",
//         description: "Comprehensive analytics and reporting to measure success and optimize campaigns.",
//         icon: "📊",
//     },
//     {
//         title: "Creative Innovation",
//         description: "Fresh, innovative ideas that make your brand stand out in a crowded marketplace.",
//         icon: "💡",
//     },
//     {
//         title: "Partnership Approach",
//         description: "We work as an extension of your team, committed to your long-term success.",
//         icon: "🤝",
//     },
//     {
//         title: "Continuous Optimization",
//         description: "Ongoing refinement and improvement to ensure sustained growth and ROI.",
//         icon: "⚡",
//     }
// ];

// const TEAM_MEMBERS = [
//     { name: "Sarah Johnson", role: "CEO & Founder", specialty: "Digital Strategy" },
//     { name: "Michael Chen", role: "CTO", specialty: "Technology" },
//     { name: "Aisha Patel", role: "Creative Director", specialty: "Branding" },
//     { name: "David Rodriguez", role: "Head of Marketing", specialty: "Growth" },
//     { name: "Fatima Al-Rashid", role: "SEO Specialist", specialty: "Analytics" },
//     { name: "James Williams", role: "Client Success", specialty: "Partnerships" },
// ];

// export default function AboutPage() {
//     return (
//         <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
//             <Header />

//             {/* Hero Section */}
//             <section className="pt-32 pb-20 px-6">
//                 <div className="container mx-auto max-w-6xl">
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                         <div className="space-y-8 animate-fade-in">
//                             <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
//                                 <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
//                                 <span className="text-sm font-semibold text-emerald-400">Our Story</span>
//                             </div>
//                             <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
//                                 Premium Digital <span className="text-emerald-400">Marketing Excellence</span>
//                             </h1>
//                             <p className="text-xl text-gray-300 leading-relaxed">
//                                 We are a team of passionate digital marketing experts, designers, and developers dedicated to helping businesses maximize their online presence and achieve measurable growth.
//                             </p>
//                             <Link 
//                                 href="/contact" 
//                                 className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-200 hover:gap-3"
//                             >
//                                 Work With Us
//                                 <ArrowRight size={20} />
//                             </Link>
//                         </div>
//                         <div className="relative animate-scale-in">
//                             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-3xl"></div>
//                             <Image
//                                 src="/hero-premium.jpg"
//                                 alt="Our Team"
//                                 width={600}
//                                 height={400}
//                                 className="relative rounded-2xl shadow-2xl object-cover w-full h-96"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Stats Section */}
//             <section className="py-20 px-6 border-y border-emerald-500/20">
//                 <div className="container mx-auto max-w-6xl">
//                     <div className="grid md:grid-cols-4 gap-6">
//                         {STATS.map((stat, i) => (
//                             <div 
//                                 key={i}
//                                 className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 group"
//                                 style={{ animationDelay: `${i * 100}ms` }}
//                             >
//                                 <stat.icon className="w-10 h-10 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
//                                 <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
//                                 <div className="text-gray-400 text-sm font-semibold">{stat.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Our Approach */}
//             <section className="py-20 px-6">
//                 <div className="container mx-auto max-w-6xl">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What Drives Our Success</h2>
//                         <p className="text-xl text-gray-300 max-w-3xl mx-auto">Six core principles that guide every project and partnership</p>
//                     </div>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {GROWTH_DRIVERS.map((driver, i) => (
//                             <div 
//                                 key={i}
//                                 className="group p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
//                             >
//                                 <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{driver.icon}</div>
//                                 <h3 className="text-xl font-bold text-white mb-2">{driver.title}</h3>
//                                 <p className="text-gray-400 text-sm leading-relaxed">{driver.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Team Section */}
//             <section className="py-20 px-6 bg-slate-800/30 border-y border-emerald-500/20">
//                 <div className="container mx-auto max-w-6xl">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Meet Our Team</h2>
//                         <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experts dedicated to your success</p>
//                     </div>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {TEAM_MEMBERS.map((member, i) => (
//                             <div 
//                                 key={i}
//                                 className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 text-center hover:shadow-lg hover:shadow-emerald-500/10"
//                             >
//                                 <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full mx-auto mb-4"></div>
//                                 <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
//                                 <p className="text-emerald-400 text-sm font-semibold mb-2">{member.role}</p>
//                                 <p className="text-gray-400 text-sm">{member.specialty}</p>
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

import Image from "next/image";
import Link from "next/link";
import { Users, Target, Award, TrendingUp, ArrowRight, Zap, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

// DATA (Preserved)
const STATS = [
    { icon: Users, value: "10+", label: "Years of Experience" },
    { icon: Target, value: "500+", label: "Projects Completed" },
    { icon: Award, value: "120+", label: "Happy Clients" },
    { icon: TrendingUp, value: "95%", label: "Client Satisfaction" },
];

const GROWTH_DRIVERS = [
    {
        title: "Strategic Planning",
        description: "Data-driven strategies tailored to your unique business goals and market position.",
        icon: Users,
    },
    {
        title: "Rapid Execution",
        description: "Fast implementation without compromising quality, getting you to market quickly.",
        icon: Zap,
    },
    {
        title: "Performance Tracking",
        description: "Comprehensive analytics and reporting to measure success and optimize campaigns.",
        icon: TrendingUp,
    },
    {
        title: "Creative Innovation",
        description: "Fresh, innovative ideas that make your brand stand out in a crowded marketplace.",
        icon: Target,
    },
    {
        title: "Partnership Approach",
        description: "We work as an extension of your team, committed to your long-term success.",
        icon: Heart,
    },
    {
        title: "Continuous Optimization",
        description: "Ongoing refinement and improvement to ensure sustained growth and ROI.",
        icon: Award,
    }
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
        <div className="min-h-screen bg-slate-950 relative selection:bg-emerald-500/30 selection:text-emerald-200 font-sans text-slate-200">
            <Header />

            {/* VIVID BACKGROUND MESH (Matches Contact Page) */}
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
                            Our Story
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                            Premium Digital <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Excellence.</span>
                        </h1>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                            We are a team of passionate digital marketing experts, designers, and developers dedicated to helping businesses maximize their online presence.
                        </p>
                    </div>

                    {/* STATS SECTION (Glass Cards) */}
                    <div className="grid md:grid-cols-4 gap-4 mb-32">
                        {STATS.map((stat, i) => (
                            <div key={i} className="p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl text-center hover:border-emerald-500/30 transition-all duration-300">
                                <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* MISSION GRID */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What Drives Success</h2>
                            <p className="text-slate-400">The core principles that guide every partnership.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                            {GROWTH_DRIVERS.map((driver, i) => (
                                <div 
                                    key={i}
                                    className="p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-slate-900/60 hover:border-emerald-500/30 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-slate-950 rounded-xl border border-white/10 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 transition-colors">
                                        <driver.icon className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{driver.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-white/5 pl-4 group-hover:border-emerald-500/50 transition-colors">
                                        {driver.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TEAM SECTION (Big Card Container) */}
                    <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden relative">
                         {/* Decorative Pattern */}
                         <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <Users className="w-64 h-64 text-white" />
                        </div>

                        <div className="relative z-10 text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Meet The Team</h2>
                            <p className="text-slate-400">Experts dedicated to your success.</p>
                        </div>

                        <div className="relative z-10 grid md:grid-cols-3 gap-6">
                            {TEAM_MEMBERS.map((member, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-slate-950/50 border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-colors">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex-shrink-0" />
                                    <div className="text-left">
                                        <h3 className="text-white font-bold text-lg">{member.name}</h3>
                                        <p className="text-emerald-400 text-xs font-bold uppercase tracking-wide">{member.role}</p>
                                        <p className="text-slate-500 text-xs mt-1">{member.specialty}</p>
                                    </div>
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