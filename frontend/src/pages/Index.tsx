import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Wifi, UtensilsCrossed, Car, TreePine, Waves, Shield,
  Star, Users, Maximize, ChevronLeft, ChevronRight, ArrowDown,
  Phone, MapPin, Quote
} from "lucide-react";
import Facade1 from "@/assets/images/facade/facade-1.jpg";
import Facade2 from "@/assets/images/facade/2017-08-01-PHOTO-00000344.jpg";
import Facade3 from "@/assets/images/facade/Pathway4.jpg";
import { useState } from "react";
import border from "@/assets/images/borders/Border Pattern-02.png";
import { url } from "inspector";

// Hero Section
const Hero = () => (
  <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${Facade1})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-jungle/80 via-transparent to-transparent" />

    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <p className="text-gold font-medium tracking-[0.3em] uppercase mb-6 animate-fade-up">
        Welcome to the Experience
      </p>
      <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-cream mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
        Hotel{" "}
        <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
          Ritu Ivy
        </span>
      </h1>
      <p className="text-cream text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Experience royal luxury and tranquility in an atmosphere of refined elegance and comfort.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-jungle font-semibold px-8">
          <Link to="/rooms">Explore Rooms</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-cream text-cream hover:bg-cream/10">
          <Link to="/contact">Book Your Stay</Link>
        </Button>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <ArrowDown className="w-6 h-6 text-gold" />
    </div>
  </section>
);

// About Preview
const AboutPreview = () => (
  <div>
    <div
      className="w-100 bg-repeat-x bg-contain h-[60px]"
      style={{ backgroundImage: `url(${border})` }}
    >
    </div>
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-up">
            <img
              src={Facade2}
              alt="Resort exterior"
              className="rounded-lg shadow-elegant w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-jungle text-cream p-6 rounded-lg shadow-elegant hidden md:block">
              <p className="font-display text-4xl text-gold">15+</p>
              <p className="text-cream/80 text-sm">Years of Excellence</p>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-jungle mb-6">
              Where Luxury Meets Elegance
            </h2>
            <p className="text-earth mb-6 leading-relaxed">
              Hotel ABC offers an unparalleled blend of royal elegance and natural serenity.
              Our resort provides a peaceful retreat where luxury meets tranquility in
              perfect harmony.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="font-display text-3xl text-gold">35+</p>
                <p className="text-earth text-sm">Luxury Rooms</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl text-gold">4.7★</p>
                <p className="text-earth text-sm">Guest Rating</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl text-gold">20K+</p>
                <p className="text-earth text-sm">Happy Guests</p>
              </div>
            </div>
            <Button asChild className="bg-jungle hover:bg-jungle-light text-cream">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// Amenities
const amenities = [
  { icon: Wifi, title: "Free WiFi", description: "High-speed internet throughout" },
  { icon: UtensilsCrossed, title: "Multi-Cuisine Restaurant", description: "Local & international flavors" },
  { icon: Car, title: "Airport Transfer", description: "Convenient airport pickup and drop services" },
  { icon: TreePine, title: "Local Sighseeing", description: "Guided local sightseeing" },
  { icon: Waves, title: "Swimming Pool", description: "Relaxing pool with bar facility" },
  { icon: Shield, title: "24/7 Security", description: "Round-the-clock protection" },
];

const Amenities = () => (
  <section className="pt-24 pb-16 bg-jungle">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
          World-Class Facilities
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-cream">
          Resort Amenities
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="bg-jungle-light/20 p-8 rounded-lg border border-cream/10 hover:border-gold/30 transition-all duration-300 group animate-fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-14 h-14 bg-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
              <amenity.icon className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-display text-xl text-cream mb-2">{amenity.title}</h3>
            <p className="text-cream">{amenity.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div
      className="w-100 bg-repeat-x bg-contain h-[60px]"
      style={{ backgroundImage: `url(${border})` }}
    >
    </div>
  </section>
);

// Rooms Preview
const rooms = [
  {
    name: "Ivy Solo Rooms",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
    description: "A cosy room designed for solo travellers, offering comfort and modern essentials for a relaxing stay in Kolkata.",
    capacity: "1 Adult",
    size: "350 sq ft",
    price: "₹4,500",
  },
  {
    name: "Ivy Executive Rooms",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    description: "Well-appointed room category sized ~240 sq ft, featuring either a cosy king bed or twin beds with city views.",
    capacity: "2 Adults + 1 Child",
    size: "550 sq ft",
    price: "₹7,500",
  },
  {
    name: "Ivy Premier Rooms",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&q=80",
    description: "A spacious room covering approximately 306 sq ft, thoughtfully designed with plush king or twin bed options and refined interiors.",
    capacity: "2 Adults + 1 Child",
    size: "1200 sq ft",
    price: "₹20,000",
  },
];

const RoomsPreview = () => (
  <section className="py-24 bg-cream">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
          Luxury Accommodations
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-jungle mb-4">
          Our Rooms & Suites
        </h2>
        <p className="text-earth">
          Each room is thoughtfully designed to provide comfort while keeping you
          connected with nature.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-elegant group animate-fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-gold text-jungle px-3 py-1 rounded text-sm font-semibold">
                From {room.price}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl text-gold mb-2">{room.name}</h3>
              <p className="text-earth mb-4">{room.description}</p>
              <div className="flex gap-4 text-sm text-earth/70 mb-4">
                <span className="flex items-center gap-1 text-gold">
                  <Users className="w-4 h-4" /> {room.capacity}
                </span>
                <span className="flex items-center gap-1 text-gold">
                  <Maximize className="w-4 h-4" /> {room.size}
                </span>
              </div>
              <Button asChild variant="outline" className="w-full border-jungle text-jungle hover:bg-jungle hover:text-cream">
                <Link to="/rooms">View Details</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild className="bg-jungle hover:bg-jungle-light text-cream">
          <Link to="/rooms">View All Rooms</Link>
        </Button>
      </div>
    </div>
  </section>
);

// Testimonials
const testimonials = [
  {
    name: "Priya Sharma",
    location: "New Delhi",
    rating: 5,
    text: "An absolute paradise! The safari experience was incredible, and the staff made us feel like royalty. Will definitely return.",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "Perfect blend of luxury and nature. Waking up to birdsong and having world-class amenities - couldn't ask for more.",
  },
  {
    name: "Anjali Patel",
    location: "Mumbai",
    rating: 5,
    text: "The location is unbeatable - Khajuraho temples and Panna safari both just minutes away. Excellent hospitality!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
            Guest Reviews
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-jungle">
            What Our Guests Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-cream rounded-lg p-8 md:p-12 relative">
            <Quote className="w-16 h-16 text-gold/20 absolute top-6 left-6" />

            <div className="relative z-10 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-earth text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>
              <p className="font-display text-xl text-jungle">{testimonials[current].name}</p>
              <p className="text-earth/70">{testimonials[current].location}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-jungle rounded-full flex items-center justify-center hover:bg-gold transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-cream" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 bg-jungle rounded-full flex items-center justify-center hover:bg-gold transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-cream" />
            </button>
          </div>
        </div>
      </div>
    </section>
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

// Main Index Component
const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <Amenities />
      <RoomsPreview />
      <Testimonials />
    </Layout>
  );
};

export default Index;
