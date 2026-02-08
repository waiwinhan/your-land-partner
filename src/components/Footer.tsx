const Footer = () => {
  return (
    <footer className="py-12 bg-navy border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm border border-gold/40 flex items-center justify-center">
              <span className="font-display text-sm font-bold text-gold">PC</span>
            </div>
            <p className="font-display text-sm text-primary-foreground/70">
              Property Consultant
            </p>
          </div>

          <div className="flex items-center gap-8">
            {["Home", "Services", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-xs text-primary-foreground/40 hover:text-gold transition-colors uppercase tracking-wider"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="font-body text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
