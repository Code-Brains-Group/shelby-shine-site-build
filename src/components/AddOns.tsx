import { WashingMachine, UtensilsCrossed, DoorOpen, PawPrint, Bed, FolderOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useBooking } from "@/context/BookingContext";

const addOns = [
  { icon: WashingMachine, name: "Laundry", desc: "Wash, dry and fold — we handle your laundry from start to finish." },
  { icon: UtensilsCrossed, name: "Dishwashing", desc: "All dishes washed, dried and put away — no pile left behind." },
  { icon: DoorOpen, name: "Interior Cabinet Cleaning", desc: "Inside every cabinet and drawer — degreased and wiped clean." },
  { icon: PawPrint, name: "Pet Hair Removal", desc: "Deep removal of pet hair from furniture, carpets and upholstery." },
  { icon: Bed, name: "Bed Making / Linen Changing", desc: "Fresh beds made up with clean linen — hotel-style finish." },
  { icon: FolderOpen, name: "Organization", desc: "Closets, pantry, drawers and shelving — sorted, arranged and labeled." },
];

const AddOns = () => {
  const { selectedAddOns, toggleAddOn } = useBooking();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 green-tint-bg" ref={ref}>
      <div className={`max-w-6xl mx-auto px-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Customize Your Clean</h2>
          <p className="text-muted-foreground">Add any of the following to any service booking for a truly tailored experience.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {addOns.map((addon, i) => {
            const active = selectedAddOns.has(i);
            const Icon = addon.icon;
            return (
              <button
                key={addon.name}
                onClick={() => toggleAddOn(i)}
                className={`flex items-center gap-4 p-5 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] text-left transition-all duration-300 ${
                  active ? "border-2 border-primary green-tint-bg" : "bg-card border-2 border-transparent"
                }`}
              >
                <Icon size={24} className="text-primary shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-sm block">{addon.name}</span>
                  <span className="text-xs text-muted-foreground">{addon.desc}</span>
                </div>
                <div
                  className={`w-10 h-6 rounded-full shrink-0 relative transition-colors ${
                    active ? "bg-primary" : "bg-border"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 rounded-full bg-card shadow transition-transform ${
                      active ? "translate-x-4" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-pill font-semibold hover:opacity-90 transition-opacity">
            Add These to Your Booking →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AddOns;
