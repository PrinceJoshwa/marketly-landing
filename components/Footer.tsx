// import Link from "next/link";
// import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
// import { CONTACT_INFO } from "@/lib/constants";

// export default function Footer() {
//     const currentYear = new Date().getFullYear();

//     const companyLinks = [
//         { label: "About Us", href: "/about" },
//         { label: "Our Team", href: "/about" },
//         { label: "Careers", href: "/contact" },
//         { label: "Blog", href: "/" },
//     ];

//     const serviceLinks = [
//         { label: "Digital Marketing", href: "/features" },
//         { label: "SEO & Analytics", href: "/features" },
//         { label: "Branding", href: "/features" },
//         { label: "Web Development", href: "/features" },
//     ];

//     return (
//         <footer className="bg-gradient-navy text-white relative overflow-hidden">
//             {/* Decorative Elements */}
//             <div className="absolute inset-0 opacity-10">
//                 <div className="absolute top-0 right-0 w-96 h-96 bg-(--brand-red) rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-0 left-0 w-96 h-96 bg-(--brand-green) rounded-full blur-3xl"></div>
//             </div>

//             <div className="section-container section-padding relative z-10">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//                     {/* Brand Column */}
//                     <div className="space-y-6">
//                         <Link href="/" className="flex items-center space-x-3 group">
//                             <div className="w-12 h-12 bg-gradient-to-br from-(--brand-red) to-(--brand-red-light) rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
//                                 <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
//                                     <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 9h2v9h-2v-9zm4-5h2v14h-2V7z" />
//                                     <path d="M12 3l7 7-1.5 1.5L12 6l-5.5 5.5L5 10l7-7z" />
//                                 </svg>
//                             </div>
//                             <div>
//                                 <span className="text-2xl font-heading font-black text-white">
//                                     MARKETLY
//                                 </span>
//                                 <p className="text-xs text-(--brand-green) font-semibold -mt-1">
//                                     YOUR MARKETING PARTNER
//                                 </p>
//                             </div>
//                         </Link>
//                         <p className="text-gray-300 leading-relaxed">
//                             Developing Robust Skills to Strengthen Your Brand&apos;s Impact.
//                         </p>
//                         <div className="flex space-x-3">
//                             <a
//                                 href="#"
//                                 className="w-11 h-11 bg-white/10 hover:bg-gradient-to-r hover:from-(--brand-red) hover:to-(--brand-red-light) rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl"
//                                 aria-label="Facebook"
//                             >
//                                 <Facebook size={20} />
//                             </a>
//                             <a
//                                 href="#"
//                                 className="w-11 h-11 bg-white/10 hover:bg-gradient-to-r hover:from-(--brand-red) hover:to-(--brand-red-light) rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl"
//                                 aria-label="Twitter"
//                             >
//                                 <Twitter size={20} />
//                             </a>
//                             <a
//                                 href="#"
//                                 className="w-11 h-11 bg-white/10 hover:bg-gradient-to-r hover:from-(--brand-red) hover:to-(--brand-red-light) rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl"
//                                 aria-label="Instagram"
//                             >
//                                 <Instagram size={20} />
//                             </a>
//                             <a
//                                 href="#"
//                                 className="w-11 h-11 bg-white/10 hover:bg-gradient-to-r hover:from-(--brand-red) hover:to-(--brand-red-light) rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl"
//                                 aria-label="LinkedIn"
//                             >
//                                 <Linkedin size={20} />
//                             </a>
//                         </div>
//                     </div>

//                     {/* Company Column */}
//                     <div>
//                         <h3 className="text-xl font-heading font-bold mb-6 text-white">
//                             Company
//                         </h3>
//                         <ul className="space-y-3">
//                             {companyLinks.map((link) => (
//                                 <li key={link.href}>
//                                     <Link
//                                         href={link.href}
//                                         className="text-gray-300 hover:text-(--brand-green) transition-colors inline-flex items-center group"
//                                     >
//                                         <span className="group-hover:translate-x-2 transition-transform">{link.label}</span>
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Services Column */}
//                     <div>
//                         <h3 className="text-xl font-heading font-bold mb-6 text-white">
//                             Services
//                         </h3>
//                         <ul className="space-y-3">
//                             {serviceLinks.map((link) => (
//                                 <li key={link.href}>
//                                     <Link
//                                         href={link.href}
//                                         className="text-gray-300 hover:text-(--brand-green) transition-colors inline-flex items-center group"
//                                     >
//                                         <span className="group-hover:translate-x-2 transition-transform">{link.label}</span>
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Contact Column */}
//                     <div>
//                         <h3 className="text-xl font-heading font-bold mb-6 text-white">
//                             Contact Us
//                         </h3>
//                         <ul className="space-y-4">
//                             <li className="flex items-start space-x-3 group">
//                                 <MapPin size={20} className="text-(--brand-red) flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
//                                 <span className="text-gray-300">{CONTACT_INFO.address}</span>
//                             </li>
//                             <li className="flex items-center space-x-3 group">
//                                 <Phone size={20} className="text-(--brand-red) flex-shrink-0 group-hover:scale-110 transition-transform" />
//                                 <a
//                                     href={`tel:${CONTACT_INFO.phone}`}
//                                     className="text-gray-300 hover:text-(--brand-green) transition-colors"
//                                 >
//                                     {CONTACT_INFO.phone}
//                                 </a>
//                             </li>
//                             <li className="flex items-center space-x-3 group">
//                                 <Mail size={20} className="text-(--brand-red) flex-shrink-0 group-hover:scale-110 transition-transform" />
//                                 <a
//                                     href={`mailto:${CONTACT_INFO.email}`}
//                                     className="text-gray-300 hover:text-(--brand-green) transition-colors"
//                                 >
//                                     {CONTACT_INFO.email}
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//                     <p className="text-gray-400">
//                         © {currentYear} Marketly. All rights reserved.
//                     </p>
//                     <div className="flex space-x-6">
//                         <Link
//                             href="/"
//                             className="text-gray-400 hover:text-(--brand-green) transition-colors"
//                         >
//                             Terms of Service
//                         </Link>
//                         <Link
//                             href="/"
//                             className="text-gray-400 hover:text-(--brand-green) transition-colors"
//                         >
//                             Privacy Policy
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

// Mock constant if not imported
const CONTACT_INFO = {
    address: "123 Marketing Street, Bengaluru, Karnataka 560001",
    phone: "+91 98765 43210",
    email: "hello@marketly.com"
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const companyLinks = [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about" },
        { label: "Careers", href: "/contact" },
        { label: "Blog", href: "/" },
    ];

    const serviceLinks = [
        { label: "Digital Marketing", href: "/features" },
        { label: "SEO & Analytics", href: "/features" },
        { label: "Branding", href: "/features" },
        { label: "Web Development", href: "/features" },
    ];

    return (
        <footer className="bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 9h2v9h-2v-9zm4-5h2v14h-2V7z" />
                                    <path d="M12 3l7 7-1.5 1.5L12 6l-5.5 5.5L5 10l7-7z" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-2xl font-black text-white tracking-tight">
                                    MARKETLY
                                </span>
                                <p className="text-xs text-emerald-400 font-bold tracking-wider -mt-1">
                                    PREMIUM MARKETING
                                </p>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Elevating brands through premium digital marketing and creative excellence.
                        </p>
                        <div className="flex space-x-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 bg-white/5 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all hover:-translate-y-1"
                                    aria-label="Social Link"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b border-emerald-500/30 pb-2 inline-block">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-emerald-400 transition-colors inline-flex items-center group text-sm"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b border-emerald-500/30 pb-2 inline-block">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-emerald-400 transition-colors inline-flex items-center group text-sm"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b border-emerald-500/30 pb-2 inline-block">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 group">
                                <MapPin size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                                <span className="text-gray-400 text-sm">{CONTACT_INFO.address}</span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <Phone size={18} className="text-emerald-400 flex-shrink-0" />
                                <a
                                    href={`tel:${CONTACT_INFO.phone}`}
                                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                                >
                                    {CONTACT_INFO.phone}
                                </a>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <Mail size={18} className="text-emerald-400 flex-shrink-0" />
                                <a
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                                >
                                    {CONTACT_INFO.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-emerald-500/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
                    <p className="text-gray-500">
                        © {currentYear} Marketly. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/" className="text-gray-500 hover:text-emerald-400 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/" className="text-gray-500 hover:text-emerald-400 transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
