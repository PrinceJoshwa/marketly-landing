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
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? "py-2 border-b"
                    : "py-4 border-b border-transparent"
                }`}
            style={{
                backgroundColor: scrolled ? "rgba(8, 15, 9, 0.97)" : "rgba(8, 15, 9, 0.6)",
                backdropFilter: "blur(16px)",
                borderColor: scrolled ? "rgba(201, 168, 76, 0.2)" : "transparent",
                boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
            }}
        >
            <nav className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative h-12 w-44 flex items-center group">
                        <Image
                            src="https://ik.imagekit.io/j0xzq9pns/logo.png"
                            alt="Marketly"
                            fill
                            className="object-contain object-left group-hover:opacity-85 transition-opacity duration-300"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 group ${pathname === link.href
                                        ? "text-[#c9a84c]"
                                        : "text-[#c8bfb0] hover:text-[#e8c97a]"
                                    }`}
                                style={{ fontFamily: "var(--font-cinzel)" }}
                            >
                                {link.label}
                                {/* Gold underline */}
                                <span
                                    className={`absolute bottom-0 left-4 right-4 h-px transition-all duration-300 ${pathname === link.href
                                            ? "opacity-100"
                                            : "opacity-0 group-hover:opacity-100"
                                        }`}
                                    style={{
                                        background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
                                    }}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="btn-gold inline-flex items-center gap-2 px-6 py-2.5 rounded-sm text-sm font-bold tracking-widest uppercase"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded transition-colors"
                        style={{ color: "#c9a84c" }}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div
                        className="md:hidden absolute top-full left-0 right-0 shadow-2xl p-6 flex flex-col gap-1 border-t"
                        style={{
                            backgroundColor: "#080f09",
                            borderColor: "rgba(201, 168, 76, 0.2)",
                        }}
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-4 py-3 text-sm font-medium tracking-wider transition-colors border-b ${pathname === link.href
                                        ? "text-[#c9a84c]"
                                        : "text-[#c8bfb0] hover:text-[#e8c97a]"
                                    }`}
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    borderColor: "rgba(201, 168, 76, 0.08)",
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="btn-gold block w-full py-3 mt-4 text-center text-sm font-bold tracking-widest uppercase rounded-sm"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                            Get Started
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}