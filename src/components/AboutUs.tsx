import { Lightbulb, Award, BarChart3, Rocket, Heart, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  { icon: Lightbulb, title: "Innovation", text: "Creativity in every clean" },
  { icon: Award, title: "Excellence", text: "Unwavering consistency" },
  { icon: BarChart3, title: "Accountable", text: "Resource utilization" },
  { icon: Rocket, title: "Scalable", text: "Solutions for any size" },
  { icon: Heart, title: "Hygiene", text: "Our core foundation" },
];

const AboutUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />

      <div className={`max-w-7xl mx-auto px-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-[40px] blur-2xl group-hover:bg-primary/20 transition-colors duration-700" />
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
                alt="Professional cleaning team"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-2xl flex items-center gap-4 border-white/30">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div className="text-sm font-black uppercase tracking-widest text-foreground">Verified Quality</div>
                  <div className="text-xs text-muted-foreground">Certified Cleaners & Eco-Friendly</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6">Our Legacy</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 tracking-tight leading-[1.1]">Cleaning Kentucky <br /><span className="text-primary italic font-serif">Since 2017</span></h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                Founded on the principle of uncompromising quality, Shelby Shine has evolved from a local startup into Kentucky's premier network of cleaning specialists.
              </p>
              <p>
                We don't just "clean" — we restore environments. From high-touch commercial facilities to intimate residential spaces, our mission is to exceed expectations through innovation and accountability.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="flex gap-4 p-4 rounded-2xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-foreground">{v.title}</div>
                      <div className="text-xs text-muted-foreground">{v.text}</div>
                    </div>
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
