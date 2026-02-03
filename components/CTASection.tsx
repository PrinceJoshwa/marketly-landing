import Link from "next/link";

interface CTASectionProps {
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
    variant?: "red" | "navy" | "green" | "brand";
}

const variantStyles = {
    red: "bg-gradient-red",
    navy: "bg-gradient-navy",
    green: "bg-gradient-green",
    brand: "bg-gradient-brand",
};

export default function CTASection({
    title,
    description,
    buttonText = "Get Started",
    buttonLink = "/contact",
    variant = "red",
}: CTASectionProps) {
    // Premium dark theme with bottle green accents

    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-emerald-500/20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
                <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            {/* Decorative Grid Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(16, 185, 129, .1) 25%, rgba(16, 185, 129, .1) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, .1) 75%, rgba(16, 185, 129, .1) 76%, transparent 77%, transparent),
                                      linear-gradient(90deg, transparent 24%, rgba(16, 185, 129, .1) 25%, rgba(16, 185, 129, .1) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, .1) 75%, rgba(16, 185, 129, .1) 76%, transparent 77%, transparent)`,
                    backgroundSize: '50px 50px',
                }}></div>
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg animate-fade-in">
                        {title}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        {description}
                    </p>
                    <div className="pt-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <Link
                            href={buttonLink}
                            className="inline-flex items-center px-10 py-4 bg-emerald-500 text-white font-bold text-lg rounded-full hover:bg-emerald-600 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group shadow-lg hover:shadow-emerald-500/50"
                        >
                            {buttonText}
                            <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
