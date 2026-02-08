import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Discuss Your
              <br />
              Property Needs
            </h2>
            <div className="w-16 h-0.5 bg-secondary mx-auto" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Reach out for a confidential consultation on your corporate land
                  requirements. I'm available to discuss your needs at your convenience.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-secondary/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                      Email
                    </p>
                    <p className="font-body text-sm text-foreground">
                      consultant@propertyadvisory.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="font-body text-sm text-foreground">
                      +60 12-345 6789
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                      Office
                    </p>
                    <p className="font-body text-sm text-foreground">
                      Kuala Lumpur, Malaysia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors resize-none"
                  placeholder="Tell me about your property needs..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body text-sm font-semibold rounded-sm hover:bg-gold-dark transition-colors duration-300 tracking-wide uppercase group shadow-gold"
              >
                Send Message
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
