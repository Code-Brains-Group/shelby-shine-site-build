import { Phone, Shield, Leaf, Clock, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center px-4 pt-24 md:pt-32 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
          alt="Premium Clean Interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Subtle, sophisticated overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-brightness-75" />
      </div>

      {/* Glassmorphism Card */}
      <div className="relative glass-card rounded-[32px] p-8 sm:px-14 sm:py-12 max-w-[720px] w-full text-center animate-fade-in-up">
        <img
          src="/assets/logo.png"
          alt="Shelby Shine Logo"
          className="h-16 w-auto object-contain mx-auto mb-6 drop-shadow-lg rounded-[12px] border border-white/10"
        />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Kentucky's #1 Premium Cleaning · Est. 2017
        </div>

        <h1 className="text-4xl sm:text-[64px] font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
          Your Space. <br />
          <span className="text-primary italic font-serif">Spotlessly</span> Clean.
        </h1>

        <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
          From luxury home detailing to roof restoration — experience the Shelby Shine standard across all of Kentucky.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="#contact"
            className="group relative bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Book Your Shine <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>
          <a
            href="tel:+15022201297"
            className="px-10 py-4 rounded-full font-bold border-2 border-primary/30 text-primary hover:bg-primary/5 transition-all text-center"
          >
            Call +1 502 220 1297
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-[11px] font-medium text-muted-foreground/80 uppercase tracking-tighter">
          <span className="flex items-center gap-2"><Shield size={14} className="text-primary" /> Insured & Bonded</span>
          <span className="flex items-center gap-2"><Leaf size={14} className="text-primary" /> Eco-Friendly</span>
          <span className="flex items-center gap-2"><Clock size={14} className="text-primary" /> Serving Since 2017</span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float text-white/50 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
};

export default Hero;
