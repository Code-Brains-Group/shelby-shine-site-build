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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-primary">Shelby Shine</a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-pill text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Clean
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-foreground hover:text-primary text-base font-medium py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-pill text-center font-semibold"
            >
              Book a Clean
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
