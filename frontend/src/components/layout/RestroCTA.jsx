import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import Facade3 from "@/assets/images/facade/Pathway4.jpg";
import { Button } from "@/components/ui/button";


export const RESTROCTA = () => {
  return (
  <section 
      className="py-10 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 80, 0, 0.6), rgba(0, 80, 0, 0.6)), url(${Facade3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-medium tracking-[0.2em] uppercase mb-4">
            DINE WITH US
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Book Your Table at The Ivy Parlour
          </h2>
          <p className="text-cream text-lg max-w-2xl mx-auto mb-10">
            A contemporary dining space offering thoughfully prepared breakfast and curated menus in a calm & welcoming setting. Designed for both in house guests and visitors. The Ivy Parlour brings comfort and flavour together under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-gold hover:bg-cream hover:text-jungle text-cream font-semibold px-8">
              <Link to="/contact">Reserve Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-jungle text-jungle hover:bg-jungle/100 hover:text-cream">
              <a href="tel:0000000000">
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-cream">
            <MapPin className="w-5 h-5" />
            <span>Near GST bhavan, Kolkata</span>
          </div>
        </div>
      </div>
  </section>
  );
};

export default RESTROCTA;