import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AddOns from "@/components/AddOns";
import QuoteCalculator from "@/components/QuoteCalculator";
import TrustBar from "@/components/TrustBar";
import AboutUs from "@/components/AboutUs";
import ContactBooking from "@/components/ContactBooking";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Services />
    <AddOns />
    <QuoteCalculator />
    <TrustBar />
    <AboutUs />
    <ContactBooking />
    <Footer />
    <MobileBottomBar />
    {/* Spacer for mobile bottom bar */}
    <div className="h-14 md:hidden" />
  </div>
);

export default Index;
