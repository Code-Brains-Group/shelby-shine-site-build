import { useState, useEffect } from "react";
import { Phone, Mail, Globe, MapPin, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useBooking } from "@/context/BookingContext";
import { toast } from "sonner";

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
    name: "", phone: "", email: "", date: "", message: "",
  });
  
  const { selectedAddOns, toggleAddOn, selectedService, setSelectedService, prefillMessage } = useBooking();
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (prefillMessage) {
      setFormData(prev => ({ ...prev, message: prefillMessage }));
    }
  }, [prefillMessage]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      data.append("access_key", "0c2b3476-9869-4630-9cdf-6aa80a1630fe");
      
      const subject = `New Booking Request from ${formData.name || "Website"}${selectedService ? ` - ${selectedService}` : ""}`;
      data.append("subject", subject);
      
      // Ensure specific fields from state are included if standard inputs don't catch them
      if (!data.has("service")) data.append("service", selectedService);
      if (!data.has("message")) data.append("message", formData.message);
      
      const addOnsList = Array.from(selectedAddOns).map(i => addOnOptions[i]).join(", ");
      if (addOnsList) {
        data.append("Selected Add-Ons", addOnsList);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      if (response.ok) {
        setSubmitSuccess(true);
        form.reset();
        setFormData({ name: "", phone: "", email: "", date: "", message: "" });
        toast.success("Message Sent Successfully!");
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Error submitting form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
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
            {submitSuccess ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 text-center py-10">
                <CheckCircle2 size={64} className="text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-1 text-foreground">Name</label>
                <input id="name" name="name" type="text" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium block mb-1 text-foreground">Phone</label>
                <input id="phone" name="phone" type="tel" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium block mb-1 text-foreground">Email</label>
                <input id="email" name="email" type="email" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div>
                <label htmlFor="service" className="text-sm font-medium block mb-1 text-foreground">Service</label>
                <select id="service" name="service" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none bg-card" value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
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
                <input id="date" name="date" type="date" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium block mb-1 text-foreground">Message / Special Instructions</label>
                <textarea id="message" name="message" rows={3} className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:outline-none resize-none" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground py-3 rounded-pill font-semibold hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBooking;
