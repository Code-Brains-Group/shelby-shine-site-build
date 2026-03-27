import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "py-3 glass-nav" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 active:scale-95 transition-transform">
          <img 
            src="/assets/logo.png" 
            alt="Shelby Shine Logo" 
            className="h-10 w-auto object-contain rounded-[12px] border border-white/20 shadow-sm transition-all duration-500"
          />
          <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
            Shelby <span className="text-primary">Shine</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className={`text-sm font-semibold transition-all hover:text-primary relative group ${
                scrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-7 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all"
          >
            Get a Quote
          </a>
        </div>

        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-foreground hover:bg-black/5" : "text-white hover:bg-white/10"}`} 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div 
        className={`fixed inset-x-0 top-[72px] md:hidden bg-card/95 backdrop-blur-xl border-t border-border transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-foreground hover:text-primary text-lg font-bold transition-colors border-b border-border/50 pb-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-primary-foreground px-6 py-4 rounded-xl text-center font-bold text-lg shadow-xl shadow-primary/20"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
