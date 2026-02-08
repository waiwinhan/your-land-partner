const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Corporate Clients" },
  { value: "RM 2B+", label: "Transaction Value" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-navy-gradient">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </p>
              <p className="font-body text-sm text-primary-foreground/60 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
