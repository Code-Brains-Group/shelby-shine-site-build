import { Phone, Shield, Leaf, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Card */}
      <div className="relative bg-card rounded-[20px] p-8 sm:p-14 shadow-[0_8px_48px_rgba(0,0,0,0.14)] max-w-[640px] w-full text-center">
        <p className="text-primary text-xs font-semibold uppercase tracking-[0.15em] mb-4">
          Kentucky's #1 Cleaning Company · Est. 2017
        </p>
        <h1 className="text-4xl sm:text-[52px] font-bold text-foreground leading-tight mb-4">
          Your Space. Spotlessly Clean.
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          From standard home cleans to roof washing and solar panel care — Shelby Shine delivers across all of Kentucky.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-pill font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Clean
          </a>
          <a
            href="tel:+15022201297"
            className="border-2 border-primary text-primary px-8 py-3 rounded-pill font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Call +1 502 220 1297
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Shield size={14} className="text-primary" /> Insured & Bonded</span>
          <span className="flex items-center gap-1.5"><Leaf size={14} className="text-primary" /> Eco-Friendly Products</span>
          <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary" /> Serving Kentucky Since 2017</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
