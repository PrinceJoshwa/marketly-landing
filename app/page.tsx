"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, TrendingUp, Users, Award, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const CLIENT_LOGOS = ["Brand A", "Brand B", "Brand C", "Brand D", "Brand E"];

const STATS = [
  { icon: TrendingUp, value: "500+", label: "Projects Completed", color: "from-emerald-500" },
  { icon: Users, value: "120+", label: "Happy Clients", color: "from-cyan-500" },
  { icon: Award, value: "10+", label: "Years Experience", color: "from-blue-500" },
  { icon: Zap, value: "95%", label: "Satisfaction Rate", color: "from-purple-500" },
];

const FEATURES = [
  { icon: "🎯", title: "Strategic Planning", description: "Data-driven strategies tailored to your business goals" },
  { icon: "📊", title: "Performance Analytics", description: "Real-time insights and comprehensive reporting" },
  { icon: "🚀", title: "Rapid Execution", description: "Fast implementation without compromising quality" },
  { icon: "💡", title: "Creative Innovation", description: "Fresh ideas that make your brand stand out" },
  { icon: "🤝", title: "Dedicated Support", description: "Expert team committed to your success" },
  { icon: "⚡", title: "Optimization", description: "Continuous refinement for maximum ROI" },
];

const SERVICES = [
  {
    title: "Digital Marketing",
    description: "Boost your online presence with data-driven campaigns",
    features: ["Social Media Strategy", "Content Marketing", "Paid Advertising"],
    icon: "📱"
  },
  {
    title: "SEO & Analytics",
    description: "Improve rankings and track performance metrics",
    features: ["On-Page SEO", "Technical SEO", "Analytics"],
    icon: "📈"
  },
  {
    title: "Brand & Creative",
    description: "Build a memorable brand identity that resonates",
    features: ["Brand Strategy", "Visual Design", "Content Creation"],
    icon: "🎨"
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      {/* Hero Section - Premium Dark Theme */}
      <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-600 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-emerald-300">Trusted by 120+ brands worldwide</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-balance">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  Elevate Your Brand
                </span>
                <br />
                <span className="text-white">In The Digital Age</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                Premium digital marketing solutions that drive growth, engagement, and measurable results. We transform brands into market leaders.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-1">
                  Start Your Journey
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#services" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white font-bold rounded-full border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                  Explore Services
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div>
                  <div className="text-3xl font-black text-emerald-400">500+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-cyan-400">120+</div>
                  <div className="text-sm text-gray-400">Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-blue-400">10+</div>
                  <div className="text-sm text-gray-400">Years</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/20">
                <Image
                  src="/hero-premium.jpg"
                  alt="Premium Digital Marketing"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-emerald-500/20 rounded-xl p-6 shadow-2xl backdrop-blur-sm hover:border-emerald-400 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">3x</div>
                  <div>
                    <div className="text-sm text-gray-400">Average Growth</div>
                    <div className="text-lg font-bold text-white">3X in 120 Days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-6">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${stat.color} to-transparent p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-gray-200 font-semibold text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden" id="services">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-600 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                Why Choose Marketly
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Premium solutions designed for brands that demand excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-xl p-8 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our Premium <span className="text-emerald-400">Services</span>
            </h2>
            <p className="text-lg text-gray-300">Comprehensive solutions tailored to your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 hover:border-emerald-500 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Header */}
                <div className="h-48 bg-gradient-to-br from-emerald-600/20 via-slate-800 to-slate-800 flex items-center justify-center border-b border-slate-700 group-hover:from-emerald-500/30 transition-colors">
                  <span className="text-6xl">{service.icon}</span>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <Check size={18} className="text-emerald-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href="/contact" className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors group">
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-24 border-t border-emerald-500/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Trusted by <span className="text-emerald-400">Leading Brands</span>
            </h2>
            <p className="text-gray-400">Join 120+ companies that transformed their digital presence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CLIENT_LOGOS.map((client, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-lg p-4 flex items-center justify-center h-20 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:scale-105 group"
              >
                <span className="text-sm font-semibold text-gray-300 text-center group-hover:text-emerald-400 transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Strategy Visual */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-600 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              Digital Marketing <span className="text-emerald-400">Strategy</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A comprehensive approach to grow your brand with data-driven insights and creative excellence
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all group">
            <Image
              src="/strategy-planning.jpg"
              alt="Digital Marketing Strategy"
              width={1200}
              height={700}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            
            {/* CTA Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <Link href="/features" className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50">
                View Our Strategy
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 border-t border-emerald-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our <span className="text-emerald-400">Proven Process</span>
            </h2>
            <p className="text-lg text-gray-300">From strategy to success in 6 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Strategy", description: "Define goals and competitive positioning" },
              { step: "02", title: "Planning", description: "Create detailed implementation roadmap" },
              { step: "03", title: "Execution", description: "Launch campaigns with precision" },
              { step: "04", title: "Optimization", description: "Test and refine performance" },
              { step: "05", title: "Scaling", description: "Expand successful initiatives" },
              { step: "06", title: "Growth", description: "Achieve sustained business growth" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-slate-800 border border-slate-700 hover:border-emerald-500 rounded-xl p-8 transition-all duration-300 h-full hover:shadow-lg hover:shadow-emerald-500/20">
                  <div className="text-4xl font-black text-emerald-500/30 mb-4 group-hover:text-emerald-500 transition-colors">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                {index < 5 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-emerald-500/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Brand?"
        description="Let's discuss how our premium services can drive your business growth"
        buttonText="Schedule Consultation"
        variant="green"
      />

      <Footer />
    </div>
  );
}
