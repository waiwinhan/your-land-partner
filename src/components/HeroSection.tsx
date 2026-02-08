import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Modern city skyline at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-6">
              Professional Property Consultant
            </p>
          </div>

          <h1
            className="animate-fade-up font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <span className="text-primary-foreground">Strategic Land</span>
            <br />
            <span className="text-primary-foreground">Advisory for </span>
            <span className="text-gradient-gold">Corporate</span>
            <br />
            <span className="text-gradient-gold">Excellence</span>
          </h1>

          <p
            className="animate-fade-up font-body text-lg md:text-xl text-primary-foreground/70 max-w-xl leading-relaxed mb-10"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            Guiding corporations through complex land acquisitions, due diligence,
            and property strategy with precision and trusted expertise.
          </p>

          <div
            className="animate-fade-up flex flex-col sm:flex-row gap-4"
            style={{ animationDelay: "0.7s", opacity: 0 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-body text-sm font-semibold rounded-sm hover:bg-gold-light transition-all duration-300 tracking-wide uppercase group shadow-gold"
            >
              Schedule a Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/20 text-primary-foreground font-body text-sm font-medium rounded-sm hover:border-gold hover:text-gold transition-all duration-300 tracking-wide uppercase"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.2s", opacity: 0 }}>
        <span className="text-primary-foreground/40 text-xs font-body uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
