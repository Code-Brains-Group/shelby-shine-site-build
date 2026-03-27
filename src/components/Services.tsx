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
  { icon: Home, title: "Move-In / Move-Out Cleaning", desc: "We deep-clean every inch of the property before you move in or after you move out — leaving it spotless and ready for the next chapter." },
  { icon: HardHat, title: "Post-Construction Cleanup", desc: "We remove dust, debris and construction residue from every surface, window and floor — so your new build is truly move-in ready." },
  { icon: BedDouble, title: "Airbnb / Short-Term Rental Turnovers", desc: "Fast, thorough turnovers between guests. We reset your rental to 5-star condition — linens, bathrooms, kitchen and all." },
  { icon: Building2, title: "Office / Commercial Cleaning", desc: "Professional cleaning for offices, banks, hotels, hospitals, schools and more — scheduled around your business hours." },
  { icon: PartyPopper, title: "After-Party Cleanup", desc: "We handle the mess so you don't have to. Full cleanup of dishes, surfaces, floors, trash and decor after any event." },
  { icon: Sun, title: "Roof & Solar Panel Cleaning", desc: "Safe soft-wash roof cleaning and streak-free solar panel restoration — protecting your investment and maximizing panel efficiency." },
];

const CheckItem = ({ text, green = true }: { text: string; green?: boolean }) => (
  <li className="flex items-start gap-3 py-1.5">
    <Check size={18} className={green ? "text-primary mt-0.5 shrink-0" : "text-muted-foreground mt-0.5 shrink-0"} />
    <span className="text-sm">{text}</span>
  </li>
);

const FlipCard = ({ service }: { service: typeof specializedServices[0] }) => {
  const Icon = service.icon;
  return (
    <div className="perspective-1000 w-full h-[180px]">
      <div className="relative w-full h-full transition-transform duration-500 preserve-3d group-hover:rotate-y-180 focus-within:rotate-y-180 hover:rotate-y-180">
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-card rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center gap-3 p-4">
          <Icon size={32} className="text-primary" />
          <span className="font-semibold text-sm text-center">{service.title}</span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 green-tint-bg rounded-lg p-5 flex items-center">
          <p className="text-sm text-foreground leading-relaxed">{service.desc}</p>
        </div>
      </div>
    </div>
  );
};

const BeforeAfterSlider = () => {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg aspect-[16/9]">
      {/* After image */}
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1200&q=80"
        alt="Clean roof after washing"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Before image - clipped */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
          alt="Dirty roof before washing"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ minWidth: "100vw", maxWidth: "none", width: `${10000 / pos}%` }}
          loading="lazy"
        />
      </div>
      {/* Labels */}
      <span className="absolute top-4 left-4 bg-foreground/70 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-pill">Before</span>
      <span className="absolute top-4 right-4 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-pill">After</span>
      {/* Slider line */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-primary-foreground" style={{ left: `${pos}%` }} />
      {/* Range input */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        aria-label="Before and after comparison slider"
      />
    </div>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-secondary" ref={ref}>
      <div className={`max-w-6xl mx-auto px-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">What We Clean</h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground">Choose from our full range of professional cleaning services.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-pill text-sm font-medium transition-all ${
                activeTab === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground border border-border hover:border-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab 0 — Standard */}
        {activeTab === 0 && (
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground text-center mb-6">Our most popular service. Perfect for regular home maintenance — leaving every room fresh, tidy and spotless.</p>
            <div className="bg-card rounded-lg border-l-[5px] border-l-primary p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <ul>{standardItems.map((item) => <CheckItem key={item} text={item} />)}</ul>
            </div>
            <div className="text-center mt-8">
              <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-pill font-semibold hover:opacity-90 transition-opacity">
                Book Standard Clean →
              </a>
            </div>
          </div>
        )}

        {/* Tab 1 — Deep */}
        {activeTab === 1 && (
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground text-center mb-6">Everything in our Standard Clean, plus a thorough top-to-bottom detail of every surface, corner and hidden space.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="font-semibold mb-4">Standard Clean Included</h3>
                <ul>{standardItems.map((item) => <CheckItem key={item} text={item} green={false} />)}</ul>
              </div>
              <div className="green-tint-bg rounded-lg p-8 border-l-[5px] border-l-primary">
                <h3 className="font-semibold mb-4">Deep Clean Extras</h3>
                <ul>{deepExtras.map((item) => <CheckItem key={item} text={item} />)}</ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-pill font-semibold hover:opacity-90 transition-opacity">
                Book Deep Clean →
              </a>
            </div>
          </div>
        )}

        {/* Tab 2 — Specialized */}
        {activeTab === 2 && (
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground text-center mb-6">Tailored solutions for unique cleaning challenges — from move-in days to post-party cleanups.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specializedServices.map((s) => <FlipCard key={s.title} service={s} />)}
            </div>
            <div className="text-center mt-8">
              <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-pill font-semibold hover:opacity-90 transition-opacity">
                Book a Specialized Service →
              </a>
            </div>
          </div>
        )}

        {/* Tab 3 — Roof & Solar */}
        {activeTab === 3 && (
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider />
            <p className="text-center text-muted-foreground text-sm mt-4 mb-10">Real results from our soft-wash roof and solar panel cleaning service.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Droplets size={24} className="text-primary" />
                  <h3 className="text-lg font-semibold">Roof Cleaning</h3>
                </div>
                <ul>
                  <CheckItem text="Shingle, metal and tile roof cleaning" />
                  <CheckItem text="Soft-wash method — safe, no-pressure, no damage" />
                  <CheckItem text="Moss, algae and debris removal" />
                  <CheckItem text="Gutter cleaning and debris clearance" />
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sun size={24} className="text-primary" />
                  <h3 className="text-lg font-semibold">Solar Panel Cleaning</h3>
                </div>
                <ul>
                  <CheckItem text="Streak-free finish for maximum light absorption" />
                  <CheckItem text="Bird dropping and dust removal" />
                  <CheckItem text="Safe, non-abrasive cleaning agents" />
                  <CheckItem text="Restores panel efficiency and output" />
                </ul>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-lg p-6 text-center mb-8">
              <p className="font-semibold text-lg">⚡ Dirty solar panels can lose up to 30% of their energy output. Our streak-free clean restores full efficiency — protecting your investment.</p>
            </div>

            <div className="text-center">
              <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-pill font-semibold hover:opacity-90 transition-opacity">
                Book Roof & Solar Clean →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
