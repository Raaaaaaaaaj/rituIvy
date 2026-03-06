import { Layout } from "@/components/layout/Layout";
import reception1 from "@/assets/images/reception/_MG_7304.JPG"
import banquet1 from "@/assets/images/BanquetsAndConference/banquet2.jpeg"
import banquet2 from "@/assets/images/BanquetsAndConference/banquet1.jpeg"
import border from "@/assets/images/borders/Border Pattern-02.png";
import one from "@/assets/images/BanquetsAndConference/1.jpeg";
import two from "@/assets/images/BanquetsAndConference/2.jpeg"; 
import three from "@/assets/images/BanquetsAndConference/3.jpeg"; 
import five from "@/assets/images/BanquetsAndConference/5.jpeg";
import six from "@/assets/images/BanquetsAndConference/6.jpeg"; 
import seven from "@/assets/images/BanquetsAndConference/7.jpeg"; 
import eight from "@/assets/images/BanquetsAndConference/8.jpeg"; 
import nine from "@/assets/images/BanquetsAndConference/9.jpeg"; 


const Banquets = () => {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(26,46,26,0.6), rgba(26,46,26,0.85)), url(${reception1})`,
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
      <section className="pt-24 pb-10 bg-cream">
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
              <li>• Curated menus for all occassions</li>
            </ul>
          </div>

          <div className="relative animate-fade-up">
            <img
              src={banquet1}
              alt="Conference Hall"
              className="rounded-lg shadow-elegant w-full"
            />
          </div>
        </div>
        <div
          className="w-100 bg-repeat-x bg-contain h-[60px] mt-8"
          style={{ backgroundImage: `url(${border})` }}
        >
    </div>
      </section>


      {/* BANQUET HALL DETAILS */}
      <section className="pb-10 bg-cream">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <img
              src={banquet2}
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
        <div
          className="w-100 bg-repeat-x bg-contain h-[60px] mt-8"
          style={{ backgroundImage: `url(${border})` }}
        ></div>
      </section>


      {/* FEATURES SECTION */}
      <section className="py-10 bg-jungle">
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
        <div
          className="w-100 bg-repeat-x bg-contain h-[60px] mt-8"
          style={{ backgroundImage: `url(${border})` }}
        ></div>
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
              one,
              two,
              three,
              five,
              six,
              seven,
              eight,
              nine,
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
