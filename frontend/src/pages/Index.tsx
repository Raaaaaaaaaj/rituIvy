import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Wifi, UtensilsCrossed, Shield,
  Star, Users, Maximize, ChevronLeft, ChevronRight, ArrowDown,
  Phone, MapPin, Quote, Landmark, BatteryCharging, MonitorCheck
} from "lucide-react";
import Facade2 from "@/assets/images/facade/2017-08-01-PHOTO-00000344.jpg";
import Facade3 from "@/assets/images/facade/Pathway4.jpg";
import Facade4 from "@/assets/images/facade/facade_new.png";
import { useState } from "react";
import border from "@/assets/images/borders/Border Pattern-02.png";
import ivySolo from "@/assets/images/IVY SOLO/2017-08-01-PHOTO-00000361.jpg"
import ivyExecutive2 from "@/assets/images/IVY EXECUTIVE KING/EX KING.jpg"
import king1 from "@/assets/images/IVY KING/002.jpg";
import logoFont2 from "@/assets/images/Logos/newLogo.png";
import { GuaranteedLowestPricePopup } from "@/components/layout/GuaranteedLowestPricePopup"

// Hero Section
const Hero = () => (

  <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${Facade4})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-jungle/80 via-transparent to-transparent" />
    <div className="relative z-5 text-center px-4 max-w-5xl mx-auto">
      <p className="text-cream font-medium tracking-[0.3em] uppercase mb-6 animate-fade-up">
        Welcome to
      </p>
      <h1
        className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-cream mb-6 leading-tight animate-fade-up flex items-center justify-center gap-4"
        style={{ animationDelay: "0.1s" }}
      >
        {/* <span>Hotel</span> */}

        <Link to="/" className="flex items-center">
          <img
            src={logoFont2}
            alt="Hotel ABC Logo"
            className="h-12 md:h-16 lg:h-20 xl:h-40 w-auto object-contain"
            onError={(e) => console.log("Image failed to load", e)}
          />
        </Link>
      </h1>
      <p className="text-cream text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        A homely stay, a seamless experience.
        <br />
        Experience thoughtfully designed rooms, dependable service and versatile event spaces, in the heart of Kolkata.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-cream hover:border-cream hover:bg-cream hover:text-gold font-semibold px-8">
          <Link to="/rooms">Explore Rooms</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-cream bg-cream text-gold hover:bg-gold hover:border-gold hover:text-cream">
          <Link to="https://www.exceedsoftware.in/Website/Booking?hid=RjrVHq8mfWc%3d&pid=iyb5gHXOC8w%3d" target="_blank">Book Your Stay</Link>
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
      className="w-100 bg-repeat-x bg-contain h-[60px] mt-4"
      style={{ backgroundImage: `url(${border})` }}
    >
    </div>
    <section className="py-10 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-up">
            <img
              src={Facade2}
              alt="Resort exterior"
              className="rounded-lg shadow-elegant w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-jungle text-cream p-6 rounded-lg shadow-elegant hidden md:block">
              <p className="font-display text-4xl text-gold">7+</p>
              <p className="text-cream/80 text-sm">Years of care and commitment inspired by the spirit of <b> "अतिथि देवो भव" </b></p>
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-jungle mb-6">
              Built On Care. <br /> Driven By Hospitality
            </h2>
            <p className="text-earth mb-6 leading-relaxed">
              Hotel Ritu Ivy is a thoughtfully managed 36-rooms property in Kolkata, offering comfortable stays and well curated banquet spaces under one roof.
              <br /> <br />
              With over 7 years of experience in hosting travellers & celebrations alike, we combine structured service with a warm, personal approach, ensuring every guest feels valued.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="font-display text-3xl text-gold">36</p>
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
    <div
      className="w-100 bg-repeat-x bg-contain h-[60px] mt-4"
      style={{ backgroundImage: `url(${border})` }}
    >
    </div>
  </div>
);

// Amenities
const amenities = [
  { icon: Wifi, title: "Free WiFi", description: "High-speed internet throughout" },
  { icon: UtensilsCrossed, title: "Multi-Cuisine Restaurant", description: "Local & international flavors" },
  { icon: Landmark, title: "Elegant Banquet Spaces", description: "Ideal for weddings, corporate meetings & celebrations" },
  { icon: MonitorCheck, title: "24x7 Front Desk", description: "Round the clock assistance for a smooth stay" },
  { icon: BatteryCharging, title: "Power Backup", description: "Ensuring your comfort is never interrupted" },
  { icon: Shield, title: "24/7 Security", description: "Round-the-clock protection" },
];

const Amenities = () => (
  <section className="pt-24 pb-1 bg-jungle">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
          Our Facilities
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-cream">
          Hotel Amenities
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
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
    image: ivySolo,
    description: "A cozy room designed for solo travellers, offering comfort and modern essentials for a relaxing stay in Kolkata.",
    capacity: "1 Adult",
    size: "168 sq ft"
  },
  {
    name: "Ivy Executive Rooms",
    image: king1,
    description: "Well-appointed room category sized ~240 sq ft, featuring either a cozy king bed or twin beds with city views.",
    capacity: "2 Adults + 1 Child",
    size: "240 sq ft"
  },
  {
    name: "Ivy Premier Rooms",
    image: ivyExecutive2,
    description: "A spacious room covering approximately 306 sq ft, thoughtfully designed with plush king or twin bed options and refined interiors.",
    capacity: "2 Adults + 1 Child",
    size: "306 sq ft"
  },
];

const RoomsPreview = () => (
  <section className="py-10 bg-cream">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
          Comfortable Accommodations
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-jungle mb-4">
          Our Rooms
        </h2>
        <p className="text-earth">
          Each room is thoughtfully designed to provide comfort, convenience & a personalised experience.
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
    <div
      className="w-100 bg-repeat-x bg-contain h-[60px] mt-10"
      style={{ backgroundImage: `url(${border})` }}
    >
    </div>
  </section>
);

// Testimonials
const testimonials = [
  {
    name: "Priti Sajal Chattopadhyay",
    location: "Kolkata",
    rating: 5,
    text: "Thank you to Ritu Ivy Team. We had booked the entire hotel for Four days. Needless to say the services provided by the Team was excellent. Every team knew their job and very efficiently they attended to every aspect as if it was a wedding in their own family. Food was as we wanted it to be simple and authentic capturing the flavours of Kolkata.. Our guests got special prompt services from all the staff. The Kitchen team were very cordial with our guests and took care of all individually. Sandeep was always there for us during every event. Manisha was the best decorator. She took care of every nitty gritty event wise. Overall we had a very good experience in Ritu Ivy. Thank you. God Bless....",
  },
  {
    name: "Vishal Arora",
    location: "Delhi",
    rating: 5,
    text: "It's Really a Great Experience to stay here . A Special Thanks to Late Night Chef Mr Manglu . He Is really a sweet Person . A Big Reason to stay his Late Night Punjabi Food. I will visit again surely. 😊",
  },
  {
    name: "Shayan",
    location: "Kolkata",
    rating: 5,
    text: "We had a very pleasant stay at the hotel. The staff were very polite and helpful. The rooms were great and the hotel is located at prime location just behind the GST Bhawan. We stayed there for 3 nights and had a wonderful experience. The complementary breakfast is very good plus the food quality and quantity both are just perfect.",
  },
  {
    name: "Ashok Ghoshal",
    location: "Kolkata",
    rating: 5,
    text: "I had booked both the Banquet Halls in the hotel for my daughter's wedding for two days in the month of January 25. Both the Banquet Halls were excellent especially the one on the 6th floor. I am grateful to the owner Mr Aryan Chawla who was very polite and courteous and helped us in all matters right from the time of booking the venue a year ago. Food was delicious and in abundance, all my guests liked all menu items including sweet dish. Mr Sandeep and his staff managed the show very well and was ready to help when required. All the functions of the marriage went off very smoothly till bidai. Location was an added feature of the venue with plenty of parking space for the guests. In all it was fantastic experience and I recommend this hotel for all functions.",
  },
  {
    name: "Pritha Bose",
    location: "Kolkata",
    rating: 5,
    text: "We had an extremely pleasant experience staying at Ritu Ivy. The staff are super courteous and helpful. The food is amazing. We also hosted our Sangeet at the banquet, all arrangements were very professionally made. Would recommend the place for anyone looking to book rooms/ banquets, be it solo or for a group.",
  },
  {
    name: "Arindam Ganguly",
    location: "Kolkata",
    rating: 5,
    text: "Make my Dream event beyond expectation , Five star is not enough to rate each of hotel staff in service , brotherly like manager , Mr Sandeep , excellent delicious food by chef and without whom it could not be concluded ...Mr Chawla , the great cordiality , great arrangement and man of word , hardly found . Thanks & ever obliged to make my dream true .rgds",
  },
  {
    name: "Raj Handique",
    location: "Mumbai",
    rating: 5,
    text: "It was an awesome experience to stay and reside in this hotel. Everything from the quality of food, room aesthetic, service and location not way too far from airport as compared in a big metro city. Good stay for any kind of hospital visit, going around to visit iconic places in the city and other academic work. Everything was near perfect. It is economic for a 3-4 day stay. Don't listen to anyone complaining insignificant things.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="pt-10 bg-white">
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
      <div
        className="w-100 bg-repeat-x bg-contain h-[60px] mt-10"
        style={{ backgroundImage: `url(${border})` }}
      >
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
// const Index = () => {
//   return (
//     <>
//       <GuaranteedLowestPricePopup />

//       <Layout>
//         <Hero />
//         <AboutPreview />
//         <Amenities />
//         <RoomsPreview />
//         <Testimonials />
//       </Layout>
//     </>
//   );
// };
const Index = () => {
  return (
    <>
      <GuaranteedLowestPricePopup />

      <Layout>
        <Hero />
        <AboutPreview />
        <Amenities />
        <RoomsPreview />
        <Testimonials />
      </Layout>
    </>
  );
};

export default Index;
