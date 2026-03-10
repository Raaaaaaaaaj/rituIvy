import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import restro1 from "@/assets/images/Restro/restro1.webp"
import restro2 from "@/assets/images/Restro/restro2.webp"
import food1 from "@/assets/images/Restro/food1.webp"
import food2 from "@/assets/images/Restro/food2.webp"
import food3 from "@/assets/images/Restro/food3.webp"
import food4 from "@/assets/images/Restro/food4.webp"
import food5 from "@/assets/images/Restro/food5.webp"
import food6 from "@/assets/images/Restro/food6.webp"
import food7 from "@/assets/images/Restro/food7.webp"
import food8 from "@/assets/images/Restro/food8.webp"
import food9 from "@/assets/images/Restro/food9.webp"
import food10 from "@/assets/images/Restro/food10.webp"
import food11 from "@/assets/images/Restro/food11.webp"
import food12 from "@/assets/images/Restro/food12.webp"

const Restaurant = () => {
  const features = ["Premium Ingredients", "Elegant Interior", "Personalized Service"];
  return (
    <Layout>
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${restro1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jungle/80 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-cream/90 font-medium tracking-[0.3em] uppercase mb-6 animate-fade-up">
            Welcome to
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-cream mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            The{" "}
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              Ivy Parlour
            </span>
          </h1>
          <p className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A calm and welcoming dining space where mornings begin comfortably and good food is crafted with care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-cream hover:border-cream hover:bg-cream hover:text-gold font-semibold px-8">
              <Link to="/rooms">Book Your Table</Link>
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
                src={restro2}
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
              food1,
              food11,
              food3,
              food4,
              food5,
              food7,
              food2,
              food8,
              food9,
              food6,
              food10,
              food12,
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Gallery"
                className="rounded-2xl shadow-lg hover:scale-105 transition duration-500 w-full h-auto"
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Restaurant;
