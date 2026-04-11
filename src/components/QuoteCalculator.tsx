import { useState, useEffect, useRef } from "react";
import { Minus, Plus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useBooking } from "@/context/BookingContext";
import { toast } from "sonner";

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
  const { selectedAddOns, toggleAddOn, setPrefillMessage, setSelectedService } = useBooking();
  const [specialized, setSpecialized] = useState<Set<number>>(new Set());
  const [pulse, setPulse] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", phone: "", notes: "" });
  const prevPrice = useRef(0);
  const { ref, isVisible } = useScrollAnimation();

  const toggleSet = (set: Set<number>, i: number, setter: (s: Set<number>) => void) => {
    const next = new Set(set);
    next.has(i) ? next.delete(i) : next.add(i);
    setter(next);
  };

  let price = bedrooms * 35 + bathrooms * 28 + 65;
  if (deepClean) price += 45;
  selectedAddOns.forEach((i) => (price += addOnsList[i].price));
  specialized.forEach((i) => (price += specializedList[i].price));

  useEffect(() => {
    if (price !== prevPrice.current) {
      setPulse(true);
      prevPrice.current = price;
      const t = setTimeout(() => setPulse(false), 400);
      return () => clearTimeout(t);
    }
  }, [price]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("access_key", "0c2b3476-9869-4630-9cdf-6aa80a1630fe");
      
      const specs = Array.from(specialized).map(i => specializedList[i].label).join(", ");
      const addons = Array.from(selectedAddOns).map(i => addOnsList[i].label).join(", ");
      const serviceType = deepClean ? "Deep Clean" : "Standard Clean";
      
      const subject = `New Estimate Booking from ${contactInfo.name || "Website"} - ${serviceType}`;
      data.append("subject", subject);
      data.append("name", contactInfo.name);
      data.append("email", contactInfo.email);
      data.append("phone", contactInfo.phone);
      data.append("service", serviceType);
      
      const details = `Quote Details:
- Bedrooms: ${bedrooms}
- Bathrooms: ${bathrooms}
- Estimated Price: $${price}
- Add-Ons: ${addons || "None"}
- Specialized Services: ${specs || "None"}

Additional Notes:
${contactInfo.notes || "None Provided"}
`;
      data.append("message", details);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      if (response.ok) {
        toast.success("Quote Booking Submitted! We'll be in touch shortly.");
        setContactInfo({ name: "", email: "", phone: "", notes: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Error submitting booking. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-card" ref={ref}>
      <div className={`max-w-[680px] mx-auto px-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="bg-card rounded-[20px] shadow-[0_4px_32px_rgba(0,0,0,0.08)] p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Get an Instant Estimate</h2>
            <p className="text-muted-foreground text-sm">Adjust the options below and your price updates live.</p>
          </div>

          <form className="space-y-6" onSubmit={onSubmit}>
            <Stepper value={bedrooms} onChange={setBedrooms} min={1} max={6} label="Bedrooms" />
            <Stepper value={bathrooms} onChange={setBathrooms} min={1} max={4} label="Bathrooms" />

            {/* Service type */}
            <div>
              <span className="text-sm font-medium block mb-3">Service Type</span>
              <div className="flex gap-2">
                {[false, true].map((isDeep) => (
                  <button
                    key={String(isDeep)}
                    onClick={() => {
                      setDeepClean(isDeep);
                      setSelectedService(isDeep ? "Deep Clean" : "Standard Clean");
                    }}
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
                      checked={selectedAddOns.has(i)}
                      onChange={() => toggleAddOn(i)}
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

            {/* Contact details for submission */}
            <div className="space-y-4 pt-6 border-t border-border mt-6 text-left">
              <span className="text-sm font-medium block">Your Details for Follow-up</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required type="text" placeholder="Name" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none" value={contactInfo.name} onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})} />
                <input required type="tel" placeholder="Phone" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none" value={contactInfo.phone} onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})} />
              </div>
              <input required type="email" placeholder="Email Address" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none" value={contactInfo.email} onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})} />
              <textarea placeholder="Additional Notes / Special Instructions" rows={3} className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none resize-none" value={contactInfo.notes} onChange={(e) => setContactInfo({...contactInfo, notes: e.target.value})}></textarea>
            </div>

            <div className="text-center pt-4">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-pill font-semibold hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Book This Service →"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
