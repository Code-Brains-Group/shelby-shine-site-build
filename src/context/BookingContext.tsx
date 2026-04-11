import { createContext, useContext, useState, ReactNode } from "react";

interface BookingContextType {
  selectedAddOns: Set<number>;
  toggleAddOn: (index: number) => void;
  setAddOns: (addons: Set<number>) => void;
  
  selectedService: string;
  setSelectedService: (service: string) => void;
  
  prefillMessage: string;
  setPrefillMessage: (msg: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [selectedAddOns, setSelectedAddOns] = useState<Set<number>>(new Set());
  const [selectedService, setSelectedService] = useState("");
  const [prefillMessage, setPrefillMessage] = useState("");

  const toggleAddOn = (index: number) => {
    setSelectedAddOns((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <BookingContext.Provider value={{
      selectedAddOns,
      toggleAddOn,
      setAddOns: setSelectedAddOns,
      selectedService,
      setSelectedService,
      prefillMessage,
      setPrefillMessage
    }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
