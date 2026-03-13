"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/features" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
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
            className={`fixed top-0 w-full z-50 transition-all duration-500`}
            style={{
                backgroundColor: scrolled ? "rgba(17, 31, 20, 0.97)" : "rgba(17, 31, 20, 0.75)",
                backdropFilter: "blur(16px)",
                borderBottom: scrolled ? "1px solid rgba(217,146,1,0.25)" : "1px solid transparent",
                boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
            }}
        >
            {/* ── Top Social Bar ── */}
            <div
                className="hidden md:flex items-center justify-end gap-4 px-6 py-1.5 text-xs"
                style={{
                    borderBottom: "1px solid rgba(217,146,1,0.12)",
                    backgroundColor: "rgba(26, 63, 34, 0.4)",
                }}
            >
                <span style={{ color: "#a89880", fontFamily: "var(--font-cinzel)", letterSpacing: "0.1em" }}>
                    Follow us:
                </span>
                <div className="flex items-center gap-3">
                    {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            className="transition-all duration-300 hover:-translate-y-0.5"
                            style={{ color: "#a89880" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#EDB36A"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#a89880"; }}
                        >
                            <Icon size={15} />
                        </a>
                    ))}
                </div>
            </div>

            {/* ── Main Nav ── */}
            <nav className={`container mx-auto px-6 ${scrolled ? "py-2" : "py-3"} transition-all duration-300`}>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative h-11 w-40 flex items-center group">
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
                                        ? "text-[#EDB36A]"
                                        : "text-[#c8bfb0] hover:text-[#EDB36A]"
                                    }`}
                                style={{ fontFamily: "var(--font-cinzel)" }}
                            >
                                {link.label}
                                <span
                                    className={`absolute bottom-0 left-4 right-4 h-px transition-all duration-300 ${pathname === link.href
                                            ? "opacity-100"
                                            : "opacity-0 group-hover:opacity-100"
                                        }`}
                                    style={{
                                        background: "linear-gradient(90deg, transparent, #D99201, transparent)",
                                    }}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                                fontFamily: "var(--font-cinzel)",
                                background: "linear-gradient(135deg, #D99201, #EDB36A)",
                                color: "#111f14",
                                boxShadow: "0 4px 15px rgba(217,146,1,0.25)",
                            }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 25px rgba(217,146,1,0.45)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 15px rgba(217,146,1,0.25)"; }}
                        >
                            Let&apos;s Talk
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded transition-colors"
                        style={{ color: "#EDB36A" }}
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
                            backgroundColor: "#111f14",
                            borderColor: "rgba(217,146,1,0.2)",
                        }}
                    >
                        {/* Mobile social icons */}
                        <div className="flex gap-4 pb-4 mb-2" style={{ borderBottom: "1px solid rgba(217,146,1,0.1)" }}>
                            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                                <a key={label} href={href} aria-label={label} style={{ color: "#a89880" }}>
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>

                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-4 py-3 text-sm font-medium tracking-wider transition-colors border-b ${pathname === link.href
                                        ? "text-[#EDB36A]"
                                        : "text-[#c8bfb0] hover:text-[#EDB36A]"
                                    }`}
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    borderColor: "rgba(217,146,1,0.08)",
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full py-3 mt-4 text-center text-sm font-bold tracking-widest uppercase rounded-sm"
                            style={{
                                fontFamily: "var(--font-cinzel)",
                                background: "linear-gradient(135deg, #D99201, #EDB36A)",
                                color: "#111f14",
                            }}
                        >
                            Let&apos;s Talk
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}