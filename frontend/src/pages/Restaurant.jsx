import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import Facade1 from "@/assets/images/facade/Pathway1.jpg";
import { useState } from "react";

const Restaurant = () => {
  const features = ["Premium Ingredients", "Elegant Interior", "Personalized Service"];
  return (
    <Layout>
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
          <p className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
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
      {/* ABOUT SECTION */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-up">
              <img
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80"
                alt="Resort exterior"
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-gold p-6 rounded-lg shadow-elegant hidden md:block">
                {/* <p className="font-display text-4xl text-jungle">15+</p> */}
                <p className="text-cream text-sm">From Our Kitchen Personally</p>
              </div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
                Our Story
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-jungle mb-6">
                A Genuine Love for All Things Food!!
              </h2>
              <p className="text-earth mb-6 leading-relaxed">
                The Ivy Parlour was created as a natural extension of Hotel Ritu Ivy's warm, family-run hospitality. Designed as a calm and welcoming dining space, it offers a refined yet comfortable setting where mornings begin effortlessly and meals are enjoyed at ease.
              </p>
              <p className="text-earth mb-6 leading-relaxed">
                With direct involvement from ownership - including professional culinary training and a genuine love for good food - our menus are thoughtfully curated to balance comfort, quality, and flavour.
              </p>
              <p className="text-earth leading-relaxed">
                With hands-on oversight there is almost always someone from the team around - ready to share food trivia, talk recipies, or occasionally step into the kitchen to craft a quick meal for a guest.
              </p>
              <p className="text-earth leading-relaxed">
                Primarily serving our in-house guests, The Ivy parlour also welcomes visitors seeking a relaxed and elegant dining experience in Kolkata.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* GALLERY SECTION */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] mb-4">
            Restaurant Gallery
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-jungle mb-16">
            A Glimpse of The Culinary Experience
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "https://images.arla.com/recordid/C10F7939-84FD-4C67-A2229335AD6F3978/chicken-kebab1.jpg?format=jpg&width=1200&height=630&mode=crop",
              "https://images.arla.com/recordid/C10F7939-84FD-4C67-A2229335AD6F3978/chicken-kebab1.jpg?format=jpg&width=1200&height=630&mode=crop",
              "https://images.arla.com/recordid/C10F7939-84FD-4C67-A2229335AD6F3978/chicken-kebab1.jpg?format=jpg&width=1200&height=630&mode=crop",
              "https://images.arla.com/recordid/C10F7939-84FD-4C67-A2229335AD6F3978/chicken-kebab1.jpg?format=jpg&width=1200&height=630&mode=crop",
              "https://images.arla.com/recordid/C10F7939-84FD-4C67-A2229335AD6F3978/chicken-kebab1.jpg?format=jpg&width=1200&height=630&mode=crop",
              "https://images.arla.com/recordid/C10F7939-84FD-4C67-A2229335AD6F3978/chicken-kebab1.jpg?format=jpg&width=1200&height=630&mode=crop",
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Gallery"
                className="rounded-2xl shadow-lg hover:scale-105 transition duration-500 object-cover h-64 w-full"
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Restaurant;
