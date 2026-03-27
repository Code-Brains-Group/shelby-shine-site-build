import { useState } from "react";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const serviceOptions = [
  "Standard Clean",
  "Deep Clean",
  "Move-In/Out",
  "Post-Construction",
  "Airbnb Turnover",
  "Office/Commercial",
  "After-Party Cleanup",
  "Roof Cleaning",
  "Solar Panel Cleaning",
];

const addOnOptions = ["Laundry", "Dishwashing", "Interior Cabinet Cleaning", "Pet Hair Removal", "Bed Making / Linen Changing", "Organization"];

const ContactBooking = () => {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", service: "", date: "", message: "",
  });
  const [selectedAddOns, setSelectedAddOns] = useState<Set<number>>(new Set());
  const { ref, isVisible } = useScrollAnimation();

  const toggleAddOn = (i: number) => {
    setSelectedAddOns((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section id="contact" className="py-20 bg-primary" ref={ref}>
      <div className={`max-w-6xl mx-auto px-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Contact info */}
          <div className="text-primary-foreground">
            <h2 className="text-3xl font-bold mb-3">Ready for a Spotless Space?</h2>
            <p className="opacity-90 mb-8">Call, WhatsApp or fill in the form — we respond same day.</p>
            <div className="space-y-4 mb-8">
              <a href="tel:+15022201297" className="flex items-center gap-3 opacity-90 hover:opacity-100"><Phone size={18} /> +1 502 220 1297</a>
              <a href="mailto:shelbyshines@gmail.com" className="flex items-center gap-3 opacity-90 hover:opacity-100"><Mail size={18} /> shelbyshines@gmail.com</a>
              <a href="https://www.shelbyshinecleaningservice.com" className="flex items-center gap-3 opacity-90 hover:opacity-100"><Globe size={18} /> www.shelbyshinecleaningservice.com</a>
              <p className="flex items-center gap-3 opacity-90"><MapPin size={18} /> 121 Breighton Cir. 40065, KY</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+15022201297" className="bg-card text-primary px-6 py-3 rounded-pill font-semibold text-center hover:opacity-90 transition-opacity">Call Us Now</a>
              <a href="https://wa.me/15022201297" target="_blank" rel="noopener noreferrer" className="bg-card text-primary px-6 py-3 rounded-pill font-semibold text-center hover:opacity-90 transition-opacity">WhatsApp Us</a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-card rounded-[20px] p-8 shadow-lg">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="text-sm font-medium block mb-1 text-foreground">Name</label>
                <input id="name" type="text" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium block mb-1 text-foreground">Phone</label>
                <input id="phone" type="tel" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium block mb-1 text-foreground">Email</label>
                <input id="email" type="email" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div>
                <label htmlFor="service" className="text-sm font-medium block mb-1 text-foreground">Service</label>
                <select id="service" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none bg-card" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <span className="text-sm font-medium block mb-2 text-foreground">Add-Ons</span>
                <div className="grid grid-cols-2 gap-1.5">
                  {addOnOptions.map((a, i) => (
                    <label key={a} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" checked={selectedAddOns.has(i)} onChange={() => toggleAddOn(i)} className="w-4 h-4 rounded accent-primary" />
                      {a}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="date" className="text-sm font-medium block mb-1 text-foreground">Preferred Date</label>
                <input id="date" type="date" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium block mb-1 text-foreground">Message / Special Instructions</label>
                <textarea id="message" rows={3} className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none resize-none" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-pill font-semibold hover:opacity-90 transition-opacity">
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBooking;
