import { CheckCircle2 } from "lucide-react";

const expertise = [
  "Corporate land acquisition & disposal",
  "Land title verification & due diligence",
  "Property valuation & market analysis",
  "Regulatory compliance & approvals",
  "Joint venture & partnership structuring",
  "Environmental & zoning assessments",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Text */}
          <div>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-4">
              About Me
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Trusted Expertise in
              <br />
              <span className="text-secondary">Corporate Land Matters</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              With over 15 years of experience in the property consulting industry,
              I have helped numerous corporations navigate the complexities of land
              acquisition, disposal, and management. My approach combines deep market
              knowledge with meticulous attention to legal and regulatory detail.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Whether you're looking to expand your corporate footprint, optimise
              your property portfolio, or resolve land-related disputes, I provide
              tailored solutions that protect your interests and maximise value.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {expertise.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-secondary mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="bg-navy rounded-sm p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-tr-full" />

              <div className="relative z-10">
                <p className="font-display text-5xl md:text-6xl font-bold text-gradient-gold mb-4">
                  15+
                </p>
                <p className="font-display text-xl text-primary-foreground mb-8">
                  Years of dedicated service in property consulting
                </p>
                <div className="w-12 h-0.5 bg-secondary mb-8" />
                <blockquote className="font-body text-primary-foreground/70 italic leading-relaxed text-sm">
                  "Every land transaction tells a story. My role is to ensure that
                  story ends with success for my clients — protecting their investments
                  and unlocking the true potential of every property."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
