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
            style={{backgroundImage: `url(${Facade1})`}}
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
                <p className="font-display text-4xl text-jungle">15+</p>
                <p className="text-jungle/80 text-sm">Years of Excellence</p>
              </div>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
                Our Journey
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-jungle mb-6">
                A Legacy of Hospitality
              </h2>
              <p className="text-earth mb-6 leading-relaxed">
                Founded with a simple vision, Hotel ABC began as a dream to create
                a sanctuary where guests could experience royal luxury without
                compromising on comfort and tranquility.
              </p>
              <p className="text-earth mb-6 leading-relaxed">
                Set in a serene natural environment, our resort has grown from a
                modest retreat into a premier destination for those seeking
                elegance, relaxation, and world-class hospitality.
              </p>
              <p className="text-earth leading-relaxed">
                Today, we pride ourselves on offering an authentic jungle experience
                complemented by world-class amenities, personalized service, and a deep
                commitment to conservation and sustainable tourism.
              </p>
            </div>
          </div>
        </div>
      </section>


{/* CLEAN ALIGNED SIGNATURE MENU */}
<section className="py-20 bg-[#f6f2eb]">
  <div className="container max-w-6xl mx-auto px-6">

    {/* STATE */}
    {(() => {
      const [activeTab, setActiveTab] = useState("Starters");

      const menuData = {
        Starters: [
          {
            title: "Vegetable Spring Rolls",
            desc: "Crispy vegetarian starter filled with fresh vegetables.",
            price: "$60",
          },
          {
            title: "Mozzarella Sticks",
            desc: "Golden fried mozzarella served with marinara sauce.",
            price: "$30",
          },
          {
            title: "Mozzarella Sticks",
            desc: "Golden fried mozzarella served with marinara sauce.",
            price: "$30",
          },
          {
            title: "Mozzarella Sticks",
            desc: "Golden fried mozzarella served with marinara sauce.",
            price: "$30",
          },
          {
            title: "Mozzarella Sticks",
            desc: "Golden fried mozzarella served with marinara sauce.",
            price: "$30",
          },
          {
            title: "Mozzarella Sticks",
            desc: "Golden fried mozzarella served with marinara sauce.",
            price: "$30",
          }
        ],
        Breakfast: [
          {
            title: "Pancake Delight",
            desc: "Fluffy pancakes served with maple syrup.",
            price: "$25",
          },
          {
            title: "Avocado Toast",
            desc: "Fresh avocado on toasted artisan bread.",
            price: "$18",
          },
          {
            title: "Pancake Delight",
            desc: "Fluffy pancakes served with maple syrup.",
            price: "$25",
          },
          {
            title: "Pancake Delight",
            desc: "Fluffy pancakes served with maple syrup.",
            price: "$25",
          },
          {
            title: "Pancake Delight",
            desc: "Fluffy pancakes served with maple syrup.",
            price: "$25",
          },
          {
            title: "Pancake Delight",
            desc: "Fluffy pancakes served with maple syrup.",
            price: "$25",
          },
          {
            title: "Pancake Delight",
            desc: "Fluffy pancakes served with maple syrup.",
            price: "$25",
          }
        ],
        Lunch: [
          {
            title: "Grilled Chicken Bowl",
            desc: "Healthy bowl with grilled chicken & greens.",
            price: "$40",
          },
          {
            title: "Veg Pasta",
            desc: "Creamy white sauce pasta with vegetables.",
            price: "$35",
          },
          {
            title: "Veg Pasta",
            desc: "Creamy white sauce pasta with vegetables.",
            price: "$35",
          },
          {
            title: "Veg Pasta",
            desc: "Creamy white sauce pasta with vegetables.",
            price: "$35",
          },
          {
            title: "Veg Pasta",
            desc: "Creamy white sauce pasta with vegetables.",
            price: "$35",
          },
          {
            title: "Veg Pasta",
            desc: "Creamy white sauce pasta with vegetables.",
            price: "$35",
          }
        ],
        Dinner: [
          {
            title: "Royal Biryani",
            desc: "Authentic aromatic basmati rice with spices.",
            price: "$55",
          },
          {
            title: "Steak Special",
            desc: "Juicy grilled steak cooked to perfection.",
            price: "$75",
          },
          {
            title: "Royal Biryani",
            desc: "Authentic aromatic basmati rice with spices.",
            price: "$55",
          },
          {
            title: "Royal Biryani",
            desc: "Authentic aromatic basmati rice with spices.",
            price: "$55",
          },
          {
            title: "Royal Biryani",
            desc: "Authentic aromatic basmati rice with spices.",
            price: "$55",
          }
        ],
      };

      return (
        <>
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl text-jungle mb-6">
              Delicious Dishes
            </h2>

            {/* Tabs */}
            <div className="flex justify-center gap-4">
              {Object.keys(menuData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm border transition ${
                    activeTab === tab
                      ? "bg-gold text-cream"
                      : "border-gray-300 text-jungle hover:bg-gold/20"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT COLUMN */}
            <div className="space-y-10">
              {menuData[activeTab].map((item, index) => (
                <div key={index} className="pb-6 border-b border-gray-200">

                  <div className="flex justify-between items-baseline">
                    <h4 className="text-xl font-semibold text-jungle">
                      {item.title}
                    </h4>
                    <span className="text-gold font-semibold text-lg">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-gray-500 mt-3 leading-relaxed pr-10">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN IMAGES */}
            {/* <div className="grid grid-cols-2 gap-6">
              {[
                "https://images.unsplash.com/photo-1544025162-d76694265947",
                "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
                "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
                "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ].map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img
                    src={img}
                    alt="Food"
                    className="w-50 h-50 object-contain rounded-xl"
                  />
                </div>
              ))}
            </div> */}

            <div className="grid grid-cols-2 gap-6">
  {[
    "https://images.arla.com/recordid/C10F7939-84FD-4C67-A2229335AD6F3978/chicken-kebab1.jpg?format=jpg&width=1200&height=630&mode=crop",
    "https://images.arla.com/recordid/C10F7939-84FD-4C67-A2229335AD6F3978/chicken-kebab1.jpg?format=jpg&width=1200&height=630&mode=crop",
    "https://images.arla.com/recordid/C10F7939-84FD-4C67-A2229335AD6F3978/chicken-kebab1.jpg?format=jpg&width=1200&height=630&mode=crop",
    "https://images.arla.com/recordid/C10F7939-84FD-4C67-A2229335AD6F3978/chicken-kebab1.jpg?format=jpg&width=1200&height=630&mode=crop",
  ].map((img, i) => (
    <div
      key={i}
      /* Added flex, justify-center, and items-center to align the image */
      className="rounded-2xl overflow-hidden bg-gray-50"
    >
      <img
        src={img}
        alt="Food"
        /* Changed w-50 to w-4/5 (80% of container) to make it "just a bit smaller" 
           Added rounded-xl to the image itself
        */
        className="w-5/5 h-5/5 object-cover rounded-2xl shadow-sm"
      />
    </div>
  ))}
</div>


          </div>
        </>
      );
    })()}
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
