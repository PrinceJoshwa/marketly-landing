// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// const NAV_LINKS = [
//     { label: "Home", href: "/" },
//     { label: "About", href: "/about" },
//     { label: "Features", href: "/features" },
//     { label: "Pricing", href: "/pricing" },
//     { label: "Contact", href: "/contact" },
// ];

// export default function Header() {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const pathname = usePathname();
//     const useDarkText = pathname === "/" || scrolled; // Declare useDarkText variable

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 20);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <header
//             className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
//                 ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-emerald-500/20 py-2"
//                 : "bg-transparent py-4"
//                 }`}
//         >
//             <nav className="container mx-auto px-6">
//                 <div className="flex items-center justify-between">
//                     {/* Logo Section */}
//                     <Link href="/" className="flex items-center gap-3 group">
//                         <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
//                             <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
//                                 <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 9h2v9h-2v-9zm4-5h2v14h-2V7z" />
//                                 <path d="M12 3l7 7-1.5 1.5L12 6l-5.5 5.5L5 10l7-7z" />
//                             </svg>
//                         </div>
//                         <div className="flex flex-col">
//                             <span className="text-xl font-black text-white tracking-tight">MARKETLY</span>
//                             <span className="text-xs text-emerald-400 font-bold">Premium Digital Marketing</span>
//                         </div>
//                     </Link>

//                     {/* Desktop Navigation */}
//                     <div className="hidden md:flex items-center gap-1">
//                         {NAV_LINKS.map((link) => (
//                             <Link
//                                 key={link.href}
//                                 href={link.href}
//                                 className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${pathname === link.href
//                                     ? "text-emerald-400 bg-emerald-500/10"
//                                     : "text-gray-300 hover:text-emerald-400 hover:bg-slate-800"
//                                     }`}
//                             >
//                                 {link.label}
//                             </Link>
//                         ))}
//                     </div>

//                     {/* CTA Button */}
//                     <div className="hidden md:block">
//                         <Link 
//                             href="/contact" 
//                             className="px-6 py-2.5 bg-emerald-500 text-white text-sm font-bold rounded-full hover:bg-emerald-600 transition-all duration-200 shadow-lg hover:shadow-emerald-500/50 hover:shadow-xl transform hover:-translate-y-0.5"
//                         >
//                             Get Started
//                         </Link>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button
//                         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                         className="md:hidden p-2 text-gray-300 hover:bg-slate-800 rounded-lg transition-colors"
//                     >
//                         {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>

//                 {/* Mobile Navigation */}
//                 {mobileMenuOpen && (
//                     <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-emerald-500/20 shadow-xl p-4 flex flex-col gap-2">
//                         {NAV_LINKS.map((link) => (
//                             <Link
//                                 key={link.href}
//                                 href={link.href}
//                                 onClick={() => setMobileMenuOpen(false)}
//                                 className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${pathname === link.href
//                                     ? "bg-emerald-500/10 text-emerald-400"
//                                     : "text-gray-300 hover:text-emerald-400 hover:bg-slate-800"
//                                     }`}
//                             >
//                                 {link.label}
//                             </Link>
//                         ))}
//                         <Link
//                             href="/contact"
//                             onClick={() => setMobileMenuOpen(false)}
//                             className="block w-full py-3 mt-2 bg-emerald-500 text-white text-center rounded-lg font-bold hover:bg-emerald-600 transition-colors"
//                         >
//                             Get Started
//                         </Link>
//                     </div>
//                 )}
//             </nav>
//         </header>
//     );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-emerald-500/20 py-2"
                : "bg-transparent py-4"
                }`}
        >
            <nav className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo Section - FIXED */}
                    <Link href="/" className="relative h-12 w-40 flex items-center group">
                        <Image 
                            src="https://ik.imagekit.io/j0xzq9pns/logo.png" 
                            alt="Marketly" 
                            fill 
                            className="object-contain object-left group-hover:opacity-90 transition-opacity"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${pathname === link.href
                                    ? "text-emerald-400 bg-emerald-500/10"
                                    : "text-gray-300 hover:text-emerald-400 hover:bg-slate-800"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link 
                            href="/contact" 
                            className="px-6 py-2.5 bg-emerald-500 text-white text-sm font-bold rounded-full hover:bg-emerald-600 transition-all duration-200 shadow-lg hover:shadow-emerald-500/50 hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-gray-300 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-emerald-500/20 shadow-xl p-4 flex flex-col gap-2">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${pathname === link.href
                                    ? "bg-emerald-500/10 text-emerald-400"
                                    : "text-gray-300 hover:text-emerald-400 hover:bg-slate-800"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full py-3 mt-2 bg-emerald-500 text-white text-center rounded-lg font-bold hover:bg-emerald-600 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}