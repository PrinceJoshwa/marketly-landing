// "use client";

// import React from "react"

// import { useState } from "react";
// import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// export default function ContactPage() {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         message: "",
//     });
//     const [submitted, setSubmitted] = useState(false);

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log("Form submitted:", formData);
//         setSubmitted(true);
//         setFormData({ name: "", email: "", phone: "", company: "", message: "" });
//         setTimeout(() => setSubmitted(false), 5000);
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const contactInfo = [
//         {
//             icon: MapPin,
//             title: "Office Location",
//             content: "123 Marketing Street, New York, NY 10001"
//         },
//         {
//             icon: Phone,
//             title: "Phone",
//             content: "+1 (555) 123-4567"
//         },
//         {
//             icon: Mail,
//             title: "Email",
//             content: "hello@marketly.com"
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
//             <Header />

//             {/* Hero Section */}
//             <section className="pt-32 pb-20 px-6">
//                 <div className="container mx-auto max-w-6xl">
//                     <div className="text-center space-y-8 animate-fade-in max-w-4xl mx-auto">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
//                             <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
//                             <span className="text-sm font-semibold text-emerald-400">Let's Connect</span>
//                         </div>
//                         <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
//                             Ready to Get <span className="text-emerald-400">Started?</span>
//                         </h1>
//                         <p className="text-xl text-gray-300">
//                             Get in touch with our team to discuss how we can help grow your business
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Section */}
//             <section className="py-20 px-6">
//                 <div className="container mx-auto max-w-6xl">
//                     <div className="grid lg:grid-cols-2 gap-12">
//                         {/* Contact Information */}
//                         <div className="space-y-8">
//                             <div>
//                                 <h2 className="text-3xl font-black text-white mb-6">Get in Touch</h2>
//                                 <p className="text-gray-300 text-lg mb-8">
//                                     Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
//                                 </p>
//                             </div>

//                             {/* Contact Info Cards */}
//                             <div className="space-y-6">
//                                 {contactInfo.map((info, i) => {
//                                     const Icon = info.icon;
//                                     return (
//                                         <div key={i} className="flex gap-4 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
//                                             <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                                                 <Icon className="w-6 h-6 text-emerald-400" />
//                                             </div>
//                                             <div>
//                                                 <h3 className="font-bold text-white mb-1">{info.title}</h3>
//                                                 <p className="text-gray-400 text-sm">{info.content}</p>
//                                             </div>
//                                         </div>
//                                     );
//                                 })}
//                             </div>

//                             {/* Response Time */}
//                             <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
//                                 <p className="text-emerald-300 font-semibold">
//                                     Average response time: Within 2 hours
//                                 </p>
//                                 <p className="text-gray-300 text-sm mt-2">
//                                     Our team is ready to help you succeed. We typically respond to inquiries within 2 business hours.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Contact Form */}
//                         <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-emerald-500/20 shadow-xl">
//                             <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

//                             {submitted && (
//                                 <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
//                                     <p className="text-emerald-300 font-semibold">Thank you for your message!</p>
//                                     <p className="text-emerald-300/80 text-sm">We'll get back to you as soon as possible.</p>
//                                 </div>
//                             )}

//                             <form onSubmit={handleSubmit} className="space-y-6">
//                                 <div>
//                                     <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
//                                         Full Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         name="name"
//                                         required
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-3 bg-slate-900 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
//                                         placeholder="John Doe"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
//                                         Email Address
//                                     </label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         required
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-3 bg-slate-900 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
//                                         placeholder="john@example.com"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
//                                         Phone Number (Optional)
//                                     </label>
//                                     <input
//                                         type="tel"
//                                         id="phone"
//                                         name="phone"
//                                         value={formData.phone}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-3 bg-slate-900 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
//                                         placeholder="+1 (555) 000-0000"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
//                                         Company Name (Optional)
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="company"
//                                         name="company"
//                                         value={formData.company}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-3 bg-slate-900 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
//                                         placeholder="Your Company"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
//                                         Message
//                                     </label>
//                                     <textarea
//                                         id="message"
//                                         name="message"
//                                         required
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         rows={5}
//                                         className="w-full px-4 py-3 bg-slate-900 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
//                                         placeholder="Tell us about your project and goals..."
//                                     />
//                                 </div>

//                                 <button
//                                     type="submit"
//                                     className="w-full py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-all duration-200 flex items-center justify-center gap-2 group"
//                                 >
//                                     Send Message
//                                     <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                                 </button>

//                                 <p className="text-xs text-gray-400 text-center">
//                                     We respect your privacy. We'll only use your information to respond to your inquiry.
//                                 </p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Quick Links */}
//             <section className="py-20 px-6 bg-slate-800/30 border-y border-emerald-500/20">
//                 <div className="container mx-auto max-w-6xl">
//                     <h2 className="text-3xl font-bold text-white mb-12 text-center">Can We Help You With Something Specific?</h2>

//                     <div className="grid md:grid-cols-4 gap-6">
//                         {[
//                             { title: "View Pricing", link: "/pricing" },
//                             { title: "Learn About Services", link: "/features" },
//                             { title: "About Our Team", link: "/about" },
//                             { title: "Schedule a Call", link: "mailto:hello@marketly.com" }
//                         ].map((item, i) => (
//                             <a
//                                 key={i}
//                                 href={item.link}
//                                 className="group p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 flex items-center justify-between"
//                             >
//                                 <span className="font-semibold text-white">{item.title}</span>
//                                 <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </div>
//     );
// }
"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, Clock, CheckCircle, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-slate-950 relative selection:bg-emerald-500/30 selection:text-emerald-200 font-sans">
            <Header />

            {/* VIVID BACKGROUND MESH (New) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-500/10 rounded-full blur-[120px] opacity-60 mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] opacity-60 mix-blend-screen" />
            </div>

            <main className="relative z-10 pt-32 pb-20 px-4 md:px-6">
                <div className="container mx-auto max-w-7xl">
                    
                    {/* HERO HEADER (Redesigned: Centered & Larger) */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Contact Sales & Support
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                            Let's build something <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">extraordinary.</span>
                        </h1>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            Whether you have a question about features, pricing, or need a demo, our team is ready to answer all your questions.
                        </p>
                    </div>

                    {/* MAIN CARD CONTAINER (Redesigned: Split Layout) */}
                    <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-12 min-h-[600px]">
                        
                        {/* LEFT SIDE: INFO (Darker Contrast) */}
                        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12 border-r border-white/5 relative overflow-hidden flex flex-col justify-between">
                            {/* Decorative Pattern */}
                            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                <Globe className="w-64 h-64 text-white" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-2">Get in touch</h3>
                                <p className="text-slate-400 mb-10">
                                    Fill in the form to start a conversation.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-white/5">
                                            <MapPin className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">Office</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                123 Marketing Street,<br/>Bengaluru, Karnataka 560001
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-white/5">
                                            <Phone className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">Phone</h4>
                                            <p className="text-slate-400 text-sm">
                                                +91 98765 43210
                                            </p>
                                            <p className="text-xs text-slate-500 mt-1">Mon-Fri from 8am to 5pm.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-white/5">
                                            <Mail className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">Email</h4>
                                            <p className="text-slate-400 text-sm">
                                                hello@marketly.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 mt-12 p-6 bg-slate-800/50 rounded-xl border border-white/5 backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <Clock className="w-5 h-5 text-emerald-400" />
                                    <span className="text-white font-medium">Fast Support</span>
                                </div>
                                <p className="text-sm text-slate-400">
                                    We typically respond to inquiries within <span className="text-emerald-400 font-semibold">2 hours</span> during business days.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT SIDE: FORM (Lighter/Clean) */}
                        <div className="lg:col-span-7 p-8 md:p-12 bg-slate-900/20">
                            {submitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in space-y-6">
                                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-10 h-10 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-slate-400">We'll get back to you shortly.</p>
                                    </div>
                                    <button 
                                        onClick={() => setSubmitted(false)}
                                        className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold underline underline-offset-4"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Phone <span className="text-slate-600">(Optional)</span></label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Company <span className="text-slate-600">(Optional)</span></label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600"
                                                placeholder="Company Ltd."
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">How can we help?</label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600 resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all duration-200 transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                                        >
                                            <span>Send Message</span>
                                            <Send className="w-4 h-4" />
                                        </button>
                                        <p className="text-center text-xs text-slate-500 mt-4">
                                            By sending this message, you agree to our privacy policy.
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* QUICK LINKS (Redesigned: Minimal Grid below card) */}
                    <div className="mt-20 border-t border-slate-800 pt-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                             {[
                                { title: "View Pricing", link: "/pricing" },
                                { title: "Services", link: "/features" },
                                { title: "About Us", link: "/about" },
                                { title: "Support", link: "mailto:hello@marketly.com" }
                            ].map((item, i) => (
                                <a key={i} href={item.link} className="flex items-center justify-center p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all group">
                                    <span className="text-slate-300 font-medium group-hover:text-white mr-2">{item.title}</span>
                                    <ArrowRight className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
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