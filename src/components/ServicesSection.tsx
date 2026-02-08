import { Building2, FileSearch, Scale, TrendingUp, Shield, MapPin } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Land Acquisition",
    description:
      "End-to-end support for corporate land purchases, from site identification to transaction closure.",
  },
  {
    icon: FileSearch,
    title: "Due Diligence",
    description:
      "Comprehensive legal and technical due diligence to mitigate risks in property transactions.",
  },
  {
    icon: Scale,
    title: "Land Valuation",
    description:
      "Accurate market valuations backed by in-depth analysis and industry benchmarks.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Strategic guidance on land investment portfolios for long-term corporate growth.",
  },
  {
    icon: Shield,
    title: "Compliance & Regulatory",
    description:
      "Navigate zoning laws, environmental regulations, and government approvals seamlessly.",
  },
  {
    icon: MapPin,
    title: "Site Selection",
    description:
      "Data-driven location analysis to identify the optimal sites for your business expansion.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-4">
            What I Offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Land
            <br />
            Advisory Services
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-sm border border-border hover:border-secondary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-sm bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <service.icon size={24} className="text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
