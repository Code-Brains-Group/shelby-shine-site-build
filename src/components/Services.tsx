import { useState } from "react";
import {
  Check,
  Home,
  HardHat,
  BedDouble,
  Building2,
  PartyPopper,
  Sun,
  Droplets,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tabs = ["Standard Cleaning", "Deep Cleaning", "Specialized Cleaning", "Roof & Solar"];

const standardItems = [
  "Dusting — furniture, shelves and baseboards",
  "Vacuuming carpets and rugs",
  "Sweeping and mopping all floors",
  "Kitchen cleaning — counters, sinks and appliance exteriors",
  "Bathroom cleaning — toilets, showers, mirrors and sinks",
  "Trash removal",
  "Light tidying and organizing",
];

const deepExtras = [
  "Inside oven and refrigerator cleaning",
  "Baseboards, vents and blinds",
  "Interior windows",
  "Tile and grout scrubbing",
  "Behind and under furniture cleaning",
  "Soap scum and hard water stain removal",
];

const specializedServices = [
  { icon: Home, title: "Move-In / Move-Out", desc: "Deep-cleaning every inch so your new chapter starts in a pristine, ready-to-live space." },
  { icon: HardHat, title: "Post-Construction", desc: "Removing every trace of dust and debris so your new build finally feels like a home." },
  { icon: BedDouble, title: "Short-Term Rentals", desc: "5-star condition turnovers that keep your guests happy and your ratings high." },
  { icon: Building2, title: "Commercial Spaces", desc: "Professional maintenance for offices and facilities, scheduled perfectly for your business." },
  { icon: PartyPopper, title: "After-Party Cleanup", desc: "We handle the aftermath so you can keep the memories without the mess." },
  { icon: Sun, title: "Solar & Roof Care", desc: "Safe restoration that protects your investment and maximizes energy efficiency." },
];

const CheckItem = ({ text, green = true }: { text: string; green?: boolean }) => (
  <li className="flex items-start gap-3 py-2 group">
    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${green ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
      <Check size={12} strokeWidth={3} />
    </div>
    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">{text}</span>
  </li>
);

const FlipCard = ({ service }: { service: typeof specializedServices[0] }) => {
  const Icon = service.icon;
  return (
    <div className="perspective-1000 w-full h-[220px] group">
      <div className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-y-180">
        {/* Front */}
        <div className="absolute inset-0 backface-hidden glass-card rounded-3xl flex flex-col items-center justify-center gap-4 p-6 border-primary/5">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
            <Icon size={32} />
          </div>
          <span className="font-bold text-base text-center tracking-tight">{service.title}</span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary rounded-3xl p-8 flex flex-col justify-center gap-3">
          <p className="text-sm text-primary-foreground/90 leading-relaxed font-medium">{service.desc}</p>
          <div className="text-primary-foreground/50 self-end">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

const BeforeAfterSlider = () => {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-[32px] overflow-hidden shadow-2xl aspect-[16/9] group">
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1200&q=80"
        alt="Clean roof"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
          alt="Dirty roof"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ minWidth: "100%", width: `${10000 / pos}%` }}
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-6 left-6 glass-card px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Before</div>
        <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">After</div>
      </div>
      <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] cursor-ew-resize" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-primary active:scale-90 transition-transform">
          <Sparkles size={20} />
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Decorative blurred spheres for premium feel */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className={`max-w-7xl mx-auto px-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="text-center mb-16">
          <div className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">Our Expertise</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">Tailored Cleaning Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">Choose the perfect service for your space, delivered with uncompromising quality and attention to detail.</p>
        </div>

        {/* Premium Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-8 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 relative overflow-hidden ${
                activeTab === i
                  ? "bg-primary text-primary-foreground shadow-xl shadow-primary/30"
                  : "bg-white text-foreground/60 border border-border/50 hover:bg-white/80 hover:text-foreground hover:shadow-lg"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Contents - Fade In Animation for Switch */}
        <div className="min-h-[400px]">
          {activeTab === 0 && (
            <div className="max-w-3xl mx-auto animate-fade-in">
              <div className="glass-card rounded-[40px] p-10 sm:p-14 border-primary/5">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Standard Maintenance</h3>
                    <p className="text-muted-foreground mb-8 text-base leading-relaxed">Perfect for regular upkeep, keeping your home consistently fresh and inviting for your family.</p>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1">{standardItems.map((item) => <CheckItem key={item} text={item} />)}</ul>
                    <div className="mt-10">
                      <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                        Book a Standard Clean <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="max-w-5xl mx-auto animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-[40px] p-10 border border-border/50 shadow-sm opacity-60">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2 italic">Standard Included</h3>
                  <ul className="space-y-1">{standardItems.map((item) => <CheckItem key={item} text={item} green={false} />)}</ul>
                </div>
                <div className="glass-card rounded-[40px] p-10 sm:p-12 border-primary/20 shadow-2xl ring-1 ring-primary/5">
                  <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">The Complete Detail</div>
                  <h3 className="font-bold text-2xl mb-6">Deep Clean Extras</h3>
                  <ul className="space-y-1">{deepExtras.map((item) => <CheckItem key={item} text={item} />)}</ul>
                  <div className="mt-10 pt-8 border-t border-primary/10">
                    <a href="#contact" className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all">
                      Schedule Deep Clean <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="max-w-6xl mx-auto animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {specializedServices.map((s) => <FlipCard key={s.title} service={s} />)}
              </div>
              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-6">Need something bespoke? We tailor our services to your exact needs.</p>
                <a href="#contact" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3.5 rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-all">
                  Request a Custom Service <ArrowRight size={18} />
                </a>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className="max-w-5xl mx-auto animate-fade-in">
              <BeforeAfterSlider />
              
              <div className="grid md:grid-cols-2 gap-10 mt-16 px-4">
                <div className="glass-card rounded-3xl p-8 border-primary/5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Droplets size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Soft-Wash Roof Tech</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">Our non-pressure soft-wash system removes algae and lichen without damaging your shingles, extending your roof's life by years.</p>
                  <ul className="space-y-2">
                    <CheckItem text="Safe for shingle, metal and tile" />
                    <CheckItem text="100% biodegradable solutions" />
                  </ul>
                </div>
                <div className="glass-card rounded-3xl p-8 border-primary/5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Sun size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Solar Efficiency Boost</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">Dirty panels lose up to 30% efficiency. Our specialized cleaning restores light absorption so you get the most out of your solar investment.</p>
                  <ul className="space-y-2">
                    <CheckItem text="De-ionized water finish" />
                    <CheckItem text="Streak-free restoration" />
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-all">
                  Book External Maintenance <ArrowRight size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
