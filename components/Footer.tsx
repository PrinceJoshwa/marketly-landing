import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

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
        <footer
            className="relative overflow-hidden"
            style={{
                backgroundColor: "#040a05",
                borderTop: "1px solid rgba(201,168,76,0.2)",
                color: "#f5f0e8",
            }}
        >
            {/* Subtle gold atmospheric glow */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
            />

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div
                                className="w-10 h-10 rounded-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                                style={{
                                    background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                                }}
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#080f09">
                                    <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 9h2v9h-2v-9zm4-5h2v14h-2V7z" />
                                    <path d="M12 3l7 7-1.5 1.5L12 6l-5.5 5.5L5 10l7-7z" />
                                </svg>
                            </div>
                            <div>
                                <span
                                    className="text-xl font-bold tracking-widest uppercase block"
                                    style={{ color: "#f5f0e8", fontFamily: "var(--font-cinzel)" }}
                                >
                                    Marketly
                                </span>
                                <span
                                    className="text-xs tracking-[0.15em] uppercase"
                                    style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
                                >
                                    Premium Marketing
                                </span>
                            </div>
                        </Link>

                        <p className="text-sm leading-relaxed" style={{ color: "#a89880" }}>
                            Elevating brands through premium digital marketing, creative excellence, and enduring strategic vision.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        border: "1px solid rgba(201,168,76,0.25)",
                                        color: "#a89880",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.7)";
                                        (e.currentTarget as HTMLElement).style.color = "#c9a84c";
                                        (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,168,76,0.08)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.25)";
                                        (e.currentTarget as HTMLElement).style.color = "#a89880";
                                        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                                    }}
                                    aria-label="Social Link"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3
                            className="text-sm font-semibold mb-6 pb-3 tracking-widest uppercase"
                            style={{
                                color: "#c9a84c",
                                fontFamily: "var(--font-cinzel)",
                                borderBottom: "1px solid rgba(201,168,76,0.2)",
                            }}
                        >
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-colors duration-300 inline-flex items-center group"
                                        style={{ color: "#a89880" }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.color = "#e8c97a";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.color = "#a89880";
                                        }}
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {link.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3
                            className="text-sm font-semibold mb-6 pb-3 tracking-widest uppercase"
                            style={{
                                color: "#c9a84c",
                                fontFamily: "var(--font-cinzel)",
                                borderBottom: "1px solid rgba(201,168,76,0.2)",
                            }}
                        >
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-colors duration-300 inline-flex items-center group"
                                        style={{ color: "#a89880" }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.color = "#e8c97a";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.color = "#a89880";
                                        }}
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {link.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3
                            className="text-sm font-semibold mb-6 pb-3 tracking-widest uppercase"
                            style={{
                                color: "#c9a84c",
                                fontFamily: "var(--font-cinzel)",
                                borderBottom: "1px solid rgba(201,168,76,0.2)",
                            }}
                        >
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#c9a84c" }} />
                                <span className="text-sm leading-relaxed" style={{ color: "#a89880" }}>
                                    {CONTACT_INFO.address}
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={15} className="flex-shrink-0" style={{ color: "#c9a84c" }} />
                                <a
                                    href={`tel:${CONTACT_INFO.phone}`}
                                    className="text-sm transition-colors duration-300"
                                    style={{ color: "#a89880" }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#e8c97a"; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#a89880"; }}
                                >
                                    {CONTACT_INFO.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={15} className="flex-shrink-0" style={{ color: "#c9a84c" }} />
                                <a
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className="text-sm transition-colors duration-300"
                                    style={{ color: "#a89880" }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#e8c97a"; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#a89880"; }}
                                >
                                    {CONTACT_INFO.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Ornamental divider */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
                    <span style={{ color: "rgba(201,168,76,0.5)", fontSize: "0.5rem" }}>✦</span>
                    <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs" style={{ color: "#6b5f50" }}>
                    <p style={{ fontFamily: "var(--font-cinzel)", letterSpacing: "0.1em" }}>
                        © {currentYear} Marketly. All Rights Reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="/"
                            className="transition-colors duration-300 tracking-wider"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#c9a84c"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#6b5f50"; }}
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/"
                            className="transition-colors duration-300 tracking-wider"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#c9a84c"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#6b5f50"; }}
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
