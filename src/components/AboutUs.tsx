import { Lightbulb, Award, BarChart3, Rocket, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  { icon: Lightbulb, text: "Creativity & Innovation" },
  { icon: Award, text: "Consistency with Excellence" },
  { icon: BarChart3, text: "Accountable Resource Utilisation" },
  { icon: Rocket, text: "Delivery of Scalable Solutions" },
  { icon: Heart, text: "Hygiene Means Everything to Us" },
];

const AboutUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-card" ref={ref}>
      <div className={`max-w-6xl mx-auto px-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
              alt="Professional cleaning team smiling in uniform"
              className="w-full h-auto object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.15em] mb-2">About Shelby Shine</p>
            <h2 className="text-3xl font-bold text-foreground mb-6">Cleaning Kentucky Since 2017</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Shelby Shines Cleaning Services LLC was founded in 2017 with a simple mission — to bring professional-grade cleaning to every home and business across Kentucky. Since then, we have built a statewide network of dedicated, trained cleaning professionals who deliver same-day and scheduled services to residential and commercial clients alike.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We are specialists in Commercial and Domestic Cleaning, Property Management, Fumigation and Pest Control, Sanitary and Hygiene Solutions, Landscaping and Gardening, and Garbage Collection.
            </p>

            <blockquote className="border-l-4 border-l-primary pl-4 py-2 mb-8 italic text-sm text-foreground">
              "To exceed our clients' expectations on every occasion, whilst ensuring a satisfactory return to employees and investors alike."
            </blockquote>

            <h3 className="font-semibold mb-4">Our Values</h3>
            <div className="space-y-3">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.text} className="flex items-center gap-3">
                    <Icon size={20} className="text-primary shrink-0" />
                    <span className="text-sm">{v.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
