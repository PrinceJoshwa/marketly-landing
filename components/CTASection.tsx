import Link from "next/link";

interface CTASectionProps {
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
    variant?: "red" | "navy" | "green" | "brand";
}

export default function CTASection({
    title,
    description,
    buttonText = "Get Started",
    buttonLink = "/contact",
}: CTASectionProps) {
    return (
        <section
            className="py-28 relative overflow-hidden"
            style={{
                backgroundColor: "#060d07",
                borderTop: "1px solid rgba(201,168,76,0.15)",
            }}
        >
            {/* Atmospheric gold glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 70%)",
                    filter: "blur(40px)",
                }}
            />

            {/* Decorative grid */}
            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,168,76,0.5) 60px, rgba(201,168,76,0.5) 61px),
                        repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,168,76,0.5) 60px, rgba(201,168,76,0.5) 61px)
                    `,
                }}
            />

            <div className="relative z-10 container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-reveal">
                    {/* Ornamental top */}
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-24" style={{ background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
                        <span style={{ color: "#c9a84c", fontSize: "0.6rem" }}>✦ ✦ ✦</span>
                        <div className="h-px w-24" style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
                    </div>

                    <span
                        className="section-label block"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                        Take The Next Step
                    </span>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
                        style={{ fontFamily: "var(--font-serif)", color: "#f5f0e8" }}
                    >
                        {title}
                    </h2>

                    <p
                        className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
                        style={{ color: "#a89880" }}
                    >
                        {description}
                    </p>

                    <div className="pt-4">
                        <Link
                            href={buttonLink}
                            className="btn-gold inline-flex items-center gap-3 px-10 py-4 rounded-sm font-bold tracking-widest uppercase text-sm animate-glow-pulse"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                            {buttonText}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Ornamental bottom */}
                    <div className="flex items-center justify-center gap-4 pt-4">
                        <div className="h-px w-24" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4))" }} />
                        <span style={{ color: "rgba(201,168,76,0.4)", fontSize: "0.5rem" }}>✦</span>
                        <div className="h-px w-24" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.4), transparent)" }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
