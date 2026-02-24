import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Heart, Shield, Users, Award, TreePine } from "lucide-react";
import border from "@/assets/images/borders/Border Pattern-02.png";


const About = () => {
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
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            About Us
          </h1>
          <p className="text-cream text-lg max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Where luxury meets wilderness in perfect harmony
          </p>
        </div>
      </section>

      <div
        className="w-100 bg-repeat-x bg-contain h-[60px]"
        style={{ backgroundImage: `url(${border})` }}
      >
      </div>

      {/* Story Section */}
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

      {/* Mission & Vision */}
      <section className="py-20 bg-jungle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-cream p-10 rounded-lg border border-cream animate-fade-up">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                <TreePine className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-3xl text-gold mb-4">Our Mission</h3>
              <p className="text-gold leading-relaxed">
                To provide an unparalleled blend of luxury hospitality and authentic
                wildlife experiences while fostering environmental conservation and
                supporting local communities. Every guest who stays with us becomes
                part of our mission to protect India's incredible biodiversity.
              </p>
            </div>

            <div className="bg-cream p-10 rounded-lg border border-cream/10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-3xl text-gold mb-4">Our Vision</h3>
              <p className="text-gold leading-relaxed">
                To be recognized as Central India's most trusted eco-luxury destination,
                setting new standards in sustainable tourism. We envision a future where
                tourism serves as a powerful force for wildlife conservation and
                community empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      {<section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
              What We Stand For
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-jungle">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Sustainability",
                description: "Eco-friendly practices in every aspect of our operations",
              },
              {
                icon: Heart,
                title: "Hospitality",
                description: "Warm, personalized service that feels like family",
              },
              {
                icon: Shield,
                title: "Conservation",
                description: "Active participation in wildlife protection initiatives",
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-cream rounded-lg hover:shadow-elegant transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-jungle/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-xl text-gold mb-2">{value.title}</h3>
                <p className="text-gold">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>}

      {/* Timeline */}
      {/* { <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
              Our Milestones
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-jungle">
              A Journey Through Time
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { year: "2008", title: "The Beginning", description: "Started as a small 8-room jungle lodge" },
              { year: "2012", title: "First Expansion", description: "Added premium suites and dining facilities" },
              { year: "2016", title: "Eco Certification", description: "Received national eco-tourism certification" },
              { year: "2020", title: "Wellness Wing", description: "Launched spa and wellness center" },
              { year: "2023", title: "Award Winning", description: "Named Best Jungle Resort in Central India" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-8 mb-8 last:mb-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-display text-2xl text-gold">{item.year}</span>
                </div>
                <div className="relative pb-8 border-l-2 border-gold/30 pl-8 last:pb-0">
                  <div className="absolute left-[-9px] top-1 w-4 h-4 bg-gold rounded-full" />
                  <h3 className="font-display text-xl text-jungle mb-1">{item.title}</h3>
                  <p className="text-earth">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> } */}

      {/* CTA */}
    </Layout>
  );
};

export default About;
