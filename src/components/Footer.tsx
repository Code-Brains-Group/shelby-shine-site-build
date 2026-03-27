import { Facebook, Instagram, MapPin } from "lucide-react";

const services = ["Standard Clean", "Deep Clean", "Move-In/Out", "Post-Construction", "Airbnb Turnover", "Office Cleaning", "After-Party Cleanup", "Roof & Solar Cleaning"];
const addOns = ["Laundry", "Dishwashing", "Cabinet Cleaning", "Pet Hair Removal", "Bed Making", "Organization"];

const Footer = () => (
  <footer className="bg-dark-footer text-card py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <img 
            src="/assets/logo.png" 
            alt="Shelby Shine Logo" 
            className="h-14 w-auto object-contain self-start opacity-90 rounded-[12px] border border-white/10 shadow-sm"
          />
          <div>
            <span className="text-primary text-xl font-bold block mb-1">Shelby Shine</span>
            <p className="text-sm opacity-60 leading-tight">Kentucky's Premier <br />Shine Specialists</p>
            <p className="text-[10px] opacity-40 mt-2 font-bold uppercase tracking-widest">Est. 2017</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3 text-sm">Services</h4>
          <ul className="space-y-1.5">
            {services.map((s) => <li key={s} className="text-xs opacity-70">{s}</li>)}
          </ul>
        </div>

        {/* Add-Ons */}
        <div>
          <h4 className="font-semibold mb-3 text-sm">Add-Ons</h4>
          <ul className="space-y-1.5">
            {addOns.map((a) => <li key={a} className="text-xs opacity-70">{a}</li>)}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-sm">Contact</h4>
          <ul className="space-y-1.5 text-xs opacity-70">
            <li>+1 502 220 1297</li>
            <li>shelbyshines@gmail.com</li>
            <li>121 Breighton Cir. 40065, KY</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Facebook" className="opacity-70 hover:opacity-100 transition-opacity"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram" className="opacity-70 hover:opacity-100 transition-opacity"><Instagram size={18} /></a>
            <a href="#" aria-label="Location" className="opacity-70 hover:opacity-100 transition-opacity"><MapPin size={18} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-card/10 pt-6 text-center text-xs opacity-50">
        © 2025 Shelby Shines Cleaning Services LLC. All rights reserved. Serving Kentucky Statewide.
      </div>
    </div>
  </footer>
);

export default Footer;
