import { useState, useEffect, useRef } from "react";
import { Minus, Plus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const addOnsList = [
  { label: "Laundry", price: 25 },
  { label: "Dishwashing", price: 15 },
  { label: "Interior Cabinet Cleaning", price: 30 },
  { label: "Pet Hair Removal", price: 20 },
  { label: "Bed Making / Linen Changing", price: 15 },
  { label: "Organization", price: 35 },
];

const specializedList = [
  { label: "Post-Construction Cleanup", price: 120 },
  { label: "Roof Cleaning", price: 90 },
  { label: "Solar Panel Cleaning", price: 70 },
  { label: "After-Party Cleanup", price: 85 },
];

const Stepper = ({ value, onChange, min, max, label }: { value: number; onChange: (v: number) => void; min: number; max: number; label: string }) => (
  <div className="flex items-center justify-between">
    <span className="text-sm font-medium">{label}</span>
    <div className="flex items-center gap-3">
      <button onClick={() => onChange(Math.max(min, value - 1))} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors" aria-label={`Decrease ${label}`}>
        <Minus size={16} />
      </button>
      <span className="w-8 text-center font-semibold">{value}{value >= max ? "+" : ""}</span>
      <button onClick={() => onChange(Math.min(max, value + 1))} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors" aria-label={`Increase ${label}`}>
        <Plus size={16} />
      </button>
    </div>
  </div>
);

const QuoteCalculator = () => {
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [deepClean, setDeepClean] = useState(false);
  const [addOns, setAddOns] = useState<Set<number>>(new Set());
  const [specialized, setSpecialized] = useState<Set<number>>(new Set());
  const [pulse, setPulse] = useState(false);
  const prevPrice = useRef(0);
  const { ref, isVisible } = useScrollAnimation();

  const toggleSet = (set: Set<number>, i: number, setter: (s: Set<number>) => void) => {
    const next = new Set(set);
    next.has(i) ? next.delete(i) : next.add(i);
    setter(next);
  };

  let price = bedrooms * 35 + bathrooms * 28 + 65;
  if (deepClean) price += 45;
  addOns.forEach((i) => (price += addOnsList[i].price));
  specialized.forEach((i) => (price += specializedList[i].price));

  useEffect(() => {
    if (price !== prevPrice.current) {
      setPulse(true);
      prevPrice.current = price;
      const t = setTimeout(() => setPulse(false), 400);
      return () => clearTimeout(t);
    }
  }, [price]);

  return (
    <section className="py-20 bg-card" ref={ref}>
      <div className={`max-w-[680px] mx-auto px-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="bg-card rounded-[20px] shadow-[0_4px_32px_rgba(0,0,0,0.08)] p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Get an Instant Estimate</h2>
            <p className="text-muted-foreground text-sm">Adjust the options below and your price updates live.</p>
          </div>

          <div className="space-y-6">
            <Stepper value={bedrooms} onChange={setBedrooms} min={1} max={6} label="Bedrooms" />
            <Stepper value={bathrooms} onChange={setBathrooms} min={1} max={4} label="Bathrooms" />

            {/* Service type */}
            <div>
              <span className="text-sm font-medium block mb-3">Service Type</span>
              <div className="flex gap-2">
                {[false, true].map((isDeep) => (
                  <button
                    key={String(isDeep)}
                    onClick={() => setDeepClean(isDeep)}
                    className={`flex-1 py-2.5 rounded-pill text-sm font-medium transition-all ${
                      deepClean === isDeep
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground border border-border"
                    }`}
                  >
                    {isDeep ? "Deep Clean (+$45)" : "Standard Clean"}
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <span className="text-sm font-medium block mb-3">Add-Ons</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {addOnsList.map((a, i) => (
                  <label key={a.label} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addOns.has(i)}
                      onChange={() => toggleSet(addOns, i, setAddOns)}
                      className="w-4 h-4 rounded border-border text-primary accent-primary"
                    />
                    {a.label} <span className="text-muted-foreground">+${a.price}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Specialized */}
            <div>
              <span className="text-sm font-medium block mb-3">Specialized Services</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {specializedList.map((s, i) => (
                  <label key={s.label} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={specialized.has(i)}
                      onChange={() => toggleSet(specialized, i, setSpecialized)}
                      className="w-4 h-4 rounded border-border text-primary accent-primary"
                    />
                    {s.label} <span className="text-muted-foreground">+${s.price}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price display */}
            <div className="text-center pt-4">
              <div className={`text-primary text-6xl sm:text-7xl font-bold transition-transform ${pulse ? "animate-price-pulse" : ""}`}>
                ${price}
              </div>
              <p className="text-sm text-muted-foreground mt-1">Estimated Starting Price</p>
              <p className="text-xs text-muted-foreground mt-1">* Final pricing confirmed after a free on-site or virtual assessment.</p>
            </div>

            <div className="text-center pt-4">
              <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-pill font-semibold hover:opacity-90 transition-opacity">
                Book This Service →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
