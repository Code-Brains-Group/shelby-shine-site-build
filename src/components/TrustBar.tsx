import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

const stats = [
  { value: 500, suffix: "+", label: "Cleans Completed" },
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 7, suffix: "+", label: "Years in Business" },
  { value: 4.9, suffix: "★", label: "Average Rating", isDecimal: true },
];

const clients = [
  "Georgetown University KY",
  "Airbnb Host Partner",
  "Commercial Office Client",
  "Healthcare Facility",
  "Residential Estate",
  "Local Restaurant Group",
  "Property Management Firm",
];

const reviews = [
  { name: "James M.", text: "Shelby Shine transformed our office. Consistently excellent every single visit. Couldn't recommend them more." },
  { name: "Patricia W.", text: "The team is punctual, thorough and professional. Our Airbnb guests keep leaving 5-star reviews — thanks to Shelby Shine." },
  { name: "Kevin O.", text: "Had them do a post-construction cleanup. The house was immaculate in half a day. Incredible team." },
];

const StatItem = ({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) => {
  const count = useAnimatedCounter(stat.isDecimal ? 49 : stat.value, isVisible);
  const display = stat.isDecimal ? (count / 10).toFixed(1) : count;
  return (
    <div className="text-center">
      <div className="text-primary text-5xl font-bold">{display}{stat.suffix}</div>
      <div className="text-foreground text-sm mt-1">{stat.label}</div>
    </div>
  );
};

const TrustBar = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="reviews" className="py-20 bg-secondary" ref={ref}>
      <div className={`max-w-6xl mx-auto px-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((s) => <StatItem key={s.label} stat={s} isVisible={isVisible} />)}
        </div>

        {/* Marquee */}
        <div className="overflow-hidden mb-16">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="inline-flex items-center bg-card border border-border rounded-lg px-6 py-3 mx-2 text-sm font-medium text-foreground shrink-0">
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card rounded-lg p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold-star text-gold-star" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">"{r.text}"</p>
              <p className="font-semibold text-sm">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
