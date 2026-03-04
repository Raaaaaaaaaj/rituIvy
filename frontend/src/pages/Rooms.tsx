import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Maximize, Wifi, Wind, Coffee, Tv, Bath, Mountain, Check } from "lucide-react";
import border from "@/assets/images/borders/Border Pattern-02.png";
import solo1 from "@/assets/images/IVY SOLO/_MG_7378.JPG";
import king1 from "@/assets/images/IVY KING/002.jpg";
import twin1 from "@/assets/images/IVY TWIN/0004.jpg";

const rooms = [
  {
    id: 1,
    name: "Ivy Solo Rooms",
    description: "A cosy room designed for solo travellers, offering comfort and modern essentials for a relaxing stay in Kolkata.",
    image: solo1,
    capacity: "1 Adult",
    size: "168 sq ft",
    features: ["Single Bed", "Work Desk", "Air Conditioning", "High Speed WiFi", "24/7 Room Service", "Smart TV", "Premium Toiletries"],
    amenities: [Wifi, Wind, Coffee, Tv],
  },
  {
    id: 2,
    name: "Ivy Executive Rooms",
    description: "Well-appointed room category sized ~240 sq ft, featuring either a cosy king bed or twin beds with city views. Comfortable for couples or business travellers looking for ample space and essential comforts. ",
    image: king1,
    capacity: "2 Adults + 1 Child",
    size: "240 sq ft",
    features: ["King Size Bed or Twin beds", "Premium Toiletries", "Work Desk", "Air Conditioning", "24/7 Room Service", "High Speed WiFi", "Smart TV"],
    amenities: [Wifi, Wind, Coffee, Tv],
  },
  {
    id: 3,
    name: "Ivy Premier Rooms",
    description: "A spacious room covering approximately 306 sq ft, thoughtfully designed with plush king or twin bed options and refined interiors. Ideal for guests seeking enhanced comfort, extra space, and a relaxed stay experience, whether travelling for business or leisure.",
    image: twin1,
    capacity: "2 Adults + 1 Children",
    size: "306 sq ft",
    features: ["King Size or Twin Beds", "Air Conditioning", "City View", "Premium Toiletries", "24/7 Room Service", "High Speed WiFi", "Smart TV"],
    amenities: [Wifi, Wind, Coffee, Tv],
  }
];

const Rooms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(26, 46, 26, 0.6), rgba(26, 46, 26, 0.8)), url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=80')`,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold font-bold tracking-[0.3em] uppercase mb-4 animate-fade-up textMontserrat">
            Accommodations
          </p>
          <h1 className="font-display text-5xl textBodoniBold md:text-6xl lg:text-7xl text-cream mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Our Rooms
          </h1>
          <p className="text-cream text-lg textMontserrat max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Each of our accommodations has been thoughtfully designed to offer comfort, convenience and a relaxing stay in the heart of Kolkata.
          </p>
        </div>
      </section>

      {/* Introduction */}
      {/* <section className="py-8">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-earth text-lg leading-relaxed textMontserrat">
            Each of our accommodations has been thoughtfully designed to blend seamlessly
            with the natural surroundings while providing all the modern comforts you expect
            from a luxury resort. Wake up to birdsong, fall asleep to the sounds of the jungle,
            and experience nature like never before.
          </p>
        </div>
      </section> */}

      <div
        className="w-100 bg-repeat-x bg-contain h-[60px]"
        style={{ backgroundImage: `url(${border})` }}
      >
      </div>

      {/* Rooms Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-fade-up`}>
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""} animate-fade-up`} style={{ animationDelay: "0.2s" }}>
                <h2 className="font-display text-4xl text-jungle mb-4 textBodoniBold">{room.name}</h2>
                <p className="text-earth mb-6 leading-relaxed textMontserrat">{room.description}</p>

                <div className="flex gap-6 mb-6">
                  <div className="flex items-center gap-2 text-earth">
                    <Users className="w-5 h-5 text-gold" />
                    <span className="textMontserrat font-semibold">{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-earth">
                    <Maximize className="w-5 h-5 text-gold" />
                    <span className="textMontserrat font-semibold">{room.size}</span>
                  </div>
                </div>

                <div className="flex gap-4 mb-6">
                  {room.amenities.map((Icon, idx) => (
                    <div key={idx} className="w-10 h-10 bg-cream rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-jungle" />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 mb-8">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-earth text-sm">
                      <Check className="w-4 h-4 text-gold" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="bg-jungle hover:bg-jungle-light text-cream">
                  <Link to="/contact">Book This Room</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl text-jungle text-center mb-12 textBodoniBold">Good to Know</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="font-display text-xl text-jungle mb-2 textBodoniBold">Check-in</h3>
              <p className="text-black textMontserrat">12:00 PM onwards</p>
            </div>
            <div className="text-center">
              <h3 className="font-display text-xl text-jungle mb-2 textBodoniBold">Check-out</h3>
              <p className="text-black textMontserrat">11:00 AM</p>
            </div>
            <div className="text-center">
              <h3 className="font-display text-xl text-jungle mb-2 textBodoniBold">Cancellation</h3>
              <p className="text-black textMontserrat">* Free up to 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(26, 46, 26, 0.9), rgba(26, 46, 26, 0.7)), url('https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6 textBodoniBold">
            Can't Decide? Let Us Help
          </h2>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-8 textMontserrat">
            Our team can recommend the perfect accommodation based on your preferences and travel plans.
          </p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-jungle font-semibold textMontserrat">
            <Link to="/contact">Get Personalized Recommendations</Link>
          </Button>
        </div>
      </section> */}
    </Layout>
  );
};

export default Rooms;
