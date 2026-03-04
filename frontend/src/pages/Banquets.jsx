import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Banquets = () => {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(26,46,26,0.6), rgba(26,46,26,0.85)), url('https://images.unsplash.com/photo-1582719478185-2f3c77b7a6c1?w=1920&q=80')`,
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="text-gold font-medium tracking-[0.3em] uppercase mb-4 animate-fade-up">
            Events & Celebrations
          </p>
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl text-cream mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Banquet & Conference Hall
          </h1>
          <p
            className="text-cream text-lg max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            A refined space designed for corporate meetings, conferences,
            weddings, and elegant celebrations.
          </p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
              The Venue
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-jungle mb-6">
              Elegant Spaces for Every Occasion
            </h2>
            <p className="text-dark mb-6 leading-relaxed">
              Our in-house banquet and conference hall is thoughtfully designed
              to host everything from boardroom meetings to grand wedding
              receptions. With flexible layouts, premium interiors, and
              seamless service, every event is executed to perfection.
            </p>

            <ul className="space-y-3 text-dark">
              <li>• Capacity up to 300 guests</li>
              <li>• Fully air-conditioned hall</li>
              <li>• Custom seating & stage arrangements</li>
              <li>• Dedicated event coordination team</li>
              <li>• Curated meanus for all occassions</li>
            </ul>
          </div>

          <div className="relative animate-fade-up">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
              alt="Conference Hall"
              className="rounded-lg shadow-elegant w-full"
            />
          </div>
        </div>
      </section>


      {/* BANQUET HALL DETAILS */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80"
              alt="Banquet Celebration"
              className="rounded-lg shadow-elegant w-full"
            />
          </div>
          <div className="animate-fade-up">
            <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
              Banquet Hall
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-jungle mb-6">
              A Grand Setting for Celebrations
            </h2>
            <p className="text-dark leading-relaxed mb-6">
              Our banquet hall is thoughtfully curated for weddings, receptions,
              anniversaries, and social gatherings. With elegant interiors, warm
              lighting, and spacious layouts, it offers a majestic backdrop for
              unforgettable moments.
            </p>
            <ul className="space-y-3 text-dark">
              <li>• Ideal for weddings & social functions</li>
              <li>• Decorative lighting & premium finishes</li>
              <li>• Custom décor & theme arrangements</li>
              <li>• Spacious pre-function area</li>
            </ul>
          </div>
        </div>
      </section>


      {/* FEATURES SECTION */}
      <section className="py-20 bg-jungle">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
            Facilities
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-12">
            Facilities & Features
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Audio Visual Setup",
                desc: "Advanced sound system, projectors, and presentation screens.",
              },
              {
                title: "High-Speed Wi-Fi",
                desc: "Reliable connectivity for seamless business meetings.",
              },
              {
                title: "Catering Services",
                desc: "Custom menus curated for corporate and social events.",
              },
              {
                title: "Versatile Interiors",
                desc: "Spaces designed for celebrations & meetings alike.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-xl shadow-elegant text-left"
              >
                <h3 className="text-xl font-semibold text-jungle mb-2">
                  {item.title}
                </h3>
                <p className="text-dark text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-center mb-2">
            Visual Tour
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-jungle text-center mb-12">
            Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80",
              "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=600&q=80",
              "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80",
              "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=600&q=80",
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Banquet Gallery"
                className="rounded-lg h-48 w-full object-cover shadow-elegant"
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Banquets;
