import { Phone, MessageCircle } from "lucide-react";

const MobileBottomBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex">
    <a
      href="tel:+15022201297"
      className="flex-1 h-14 bg-primary text-primary-foreground flex items-center justify-center gap-2 font-semibold text-sm"
    >
      <Phone size={18} /> Call Now
    </a>
    <a
      href="https://wa.me/15022201297"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 h-14 bg-primary text-primary-foreground flex items-center justify-center gap-2 font-semibold text-sm border-l border-primary-foreground/20"
    >
      <MessageCircle size={18} /> WhatsApp
    </a>
  </div>
);

export default MobileBottomBar;
