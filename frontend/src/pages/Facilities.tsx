import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import Facade3 from "@/assets/images/facade/Pathway4.jpg";

const facilities = [
  {
    id: 1,
    name: "Comfortable and well appointed rooms ",
    description: "Experience guest rooms designed with modern aesthetics and practical amenities for a restful stay. Each space is thoughtfully furnished to provide a productive and relaxing environment for every traveler."
  },
  {
    id: 2,
    name: "King size or Twin Bed options",
    description: "Choose between a spacious King-size bed or convenient Twin beds to match your personal preference. Our flexible bedding configurations ensure a tailored sleeping experience for individuals or colleagues.",
  },
  {
    id: 3,
    name: "Buffet Breakfast, Lunch and Dinner",
    description: "Enjoy a wide variety of fresh, chef-prepared dishes served daily at our extensive meal buffets. Our diverse culinary selection caters to all tastes, ensuring a satisfying dining experience from morning to night.",
  },
  {
    id: 4,
    name: "Banquet / Conference Hall 2200 sq ft",
    description: "Host your corporate seminars and private functions in our professional 2,200 sq. ft. indoor venue. The hall is equipped with modern facilities to ensure your meetings and events run smoothly and efficiently.",
  },
  {
    id: 5,
    name: "Semi Open Air Banquet Hall - 3000 sq ft",
    description: "Utilize our expansive 3,000 sq. ft. semi-outdoor space for larger gatherings and networking events. The open-air design offers a refreshing atmosphere while providing full coverage and modern amenities.",
  },
  {
    id: 6,
    name: "24/7 Room Service",
    description: "Enjoy the convenience of on-demand dining with our round-the-clock room service menu. Whether it is a late-night snack or an early meal, our team is ready to deliver quality food to your door.",
  },
  {
    id: 7,
    name: "24/7 Front Office",
    description: "Our professional reception team is available at all hours to assist with check-ins, departures, and inquiries. Experience peace of mind knowing that dedicated support is always present to handle your requests.",
  },
  {
    id: 8,
    name: "In House Restaurant",
    description: "Dine at our on-site restaurant, featuring a menu that balances local flavors with international favorites. It serves as the perfect setting for a quick business lunch or a relaxed evening meal with associates.",
  },
  {
    id: 9,
    name: "Close to Attractions",
    description: "Stay conveniently located near the city’s primary business spots and popular local landmarks. Our central position minimizes travel time, allowing you to focus on your itinerary and local exploration.",
  }
];
const Facilities = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(26, 46, 26, 0.6), rgba(26, 46, 26, 0.8)), url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80')`,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold font-medium tracking-[0.3em] uppercase mb-4 animate-fade-up">
            What we provide?
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Facilities
          </h1>
          <p className="text-cream text-lg max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Everything you need for a related and will managed stay
          </p>
        </div>
      </section>
      {/* Facilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {facilities.map((facilities) => {
              return (
                <div className="bg-gold-dark p-10 rounded-lg border border-cream/10 animate-fade-up textMontserrat">
                  <h3 className="font-display text-3xl text-jungle mb-4">{facilities.name}</h3>
                  <p className="text-cream/80 leading-relaxed">
                    {facilities.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

// CTA Section
const CTASection = () => (
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
        <p className="text-cream/100 text-lg max-w-2xl mx-auto mb-10">
          Experience comfort and refined hospitality in the heart of Kolkata. Thoughtfully designed rooms, modern amenities, and personalized service ensure a memorable stay for business and leisure travelers alike.
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
        <div className="flex items-center justify-center gap-2 text-cream/90">
          <MapPin className="w-5 h-5" />
          <span>Near GST bhavan</span>
        </div>
      </div>
    </div>
  </section>
);
export default Facilities;
