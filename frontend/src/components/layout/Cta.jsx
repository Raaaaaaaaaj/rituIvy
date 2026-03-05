import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import Facade3 from "@/assets/images/facade/Pathway4.jpg";
import { Button } from "@/components/ui/button";


export const CTA = () => {
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
            YOUR PERFECT "CITY OF JOY" STAY AWAITS
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Book Your Stay at Hotel Ritu Ivy
          </h2>
          <p className="text-cream text-lg max-w-2xl mx-auto mb-10">
            Experience comfort and refined hospitality in the heart of Kolkata. Thoughtfully designed rooms, modern amenities, and personalized service ensure a memorable stay for business and leisure travelers alike.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-gold hover:bg-cream hover:text-jungle text-cream font-semibold px-8">
              <Link to="https://www.exceedsoftware.in/Website/Booking?hid=RjrVHq8mfWc%3d&pid=iyb5gHXOC8w%3d" target="_blank">Reserve Now</Link>
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

export default CTA;