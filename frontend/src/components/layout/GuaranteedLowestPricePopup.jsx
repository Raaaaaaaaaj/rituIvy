import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Facade4 from "@/assets/images/facade/facade_new.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


export const GuaranteedLowestPricePopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("lowest_price_popup");
    const today = new Date().toDateString();

    if (lastShown !== today) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const closePopup = () => {
    localStorage.setItem("lowest_price_popup", new Date().toDateString());
    setOpen(false);
  };

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={closePopup} />

      {/* Main Modal Container */}
      <div className="relative w-400 max-w-[850px] bg-white shadow-2xl overflow-hidden flex flex-col border border-gold/20 animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button onClick={closePopup} className="absolute right-4 top-4 z-20 text-gray-800 hover:scale-110 transition-transform font-light text-2xl">
          ✕
        </button>

        {/* Content Section: Image + Info */}
        <div className="flex flex-col md:flex-row h-full">
          
          {/* Left Side: Image */}
          {/* <div className="w-full md:w-1/2 h-[300px] md:h-[470px]">
            <img 
              src={Facade4} 
              alt="Exclusive Offer" 
              className="w-full h-full object-cover"
            />
          </div> */}

          {/* Right Side: Text & Icons */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center text-center space-y-6">
            <h3 className="uppercase tracking-[0.2em] text-gray-500 text-xs font-bold">
              OFFER
            </h3>
            
            <h2 className="text-3xl md:text-4xl font-serif text-[#b9973b] leading-tight uppercase tracking-wider">
              Guaranteed <br /> Lowest Prices
            </h2>

            <div className="w-12 h-[1px] bg-[#b9973b] my-2" />

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-6 w-full pt-4">
              <div className="flex flex-col items-center space-y-2 border-r border-gray-100 pr-2">
                <span className="text-2xl text-[#b9973b]">💰</span>
                <p className="text-[11px] font-medium text-gray-600 uppercase leading-tight">
                  * Enjoy Savings on <br /> Room Rates
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-2xl text-[#b9973b]">🍽️</span>
                <p className="text-[11px] font-medium text-gray-600 uppercase leading-tight">
                  * Avail Offers across <br /> Restaurants
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 pt-2">
              <span className="text-2xl text-[#b9973b]">🛏️</span>
              <p className="text-[11px] font-medium text-gray-600 uppercase leading-tight">
                * Free <br /> Room Upgrade
              </p>
            </div>

            {/* <button className="w-full bg-gold hover:bg-cream hover:text-gold text-white py-8 text-sm font-bold tracking-[0.3em] uppercase transition-colors rounded-full">
          Click to Book Now!
        </button> */}
        <Button asChild className="w-full bg-gold hover:bg-cream hover:text-gold text-white py-8 text-sm font-bold tracking-[0.3em] uppercase transition-colors rounded-full">
                <Link to="https://www.exceedsoftware.in/Website/Booking?hid=RjrVHq8mfWc%3d&pid=iyb5gHXOC8w%3d" target="_blank">Book Now</Link>
              </Button>

              <p className="mt-4 text-center text-[11px] text-gray-400">
  * <a 
      href="/offertermsandconditions" 
      target="_blank" 
      rel="noopener noreferrer"
      className="underline hover:text-[#b28e2d] transition-colors"
    >
      T&C
    </a> apply
</p>
          </div>
        </div>

        
      </div>
    </div>,
    document.body
  );
};