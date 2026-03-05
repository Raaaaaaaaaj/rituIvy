import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import border from "@/assets/images/borders/Border Pattern-02.png";
import artrium from "@/assets/images/CORRIDORS/2.jpeg"


const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert("Thank you for your message! We will get back to you soon.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(26, 46, 26, 0.7), rgba(26, 46, 26, 0.8)), url(${artrium})`,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold font-medium tracking-[0.3em] uppercase mb-4 animate-fade-up">
            Get In Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Contact Us
          </h1>
          <p className="text-cream text-lg max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We're always happy to assist - whether you're planning a stay, a celebration, or simply have a question.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-20">
            {[
              {
                icon: Phone,
                title: "Phone",
                info: "90733 56665",
                subInfo: "90516 10335",
              },
              {
                icon: Mail,
                title: "Email",
                info: "hotelrituivy@gmail.com",
                // subInfo: "reservations@yourhotel.com",
              },
              {
                icon: MapPin,
                title: "Location",
                info: "Hotel Ritu Ivy, 215, Shantipally, Kasba,",
                subInfo: "Kolkata 700107",
              },
              {
                icon: Clock,
                title: "Reception Hours",
                info: "24/7 Available",
                subInfo: "Check-in: 12 PM | Check-out: 11 AM",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-elegant text-center hover:shadow-glow transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-jungle/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-jungle" />
                </div>
                <h3 className="font-display text-xl text-jungle mb-2">{item.title}</h3>
                <p className="text-earth font-medium">{item.info}</p>
                <p className="text-earth text-sm">{item.subInfo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
                Send a Message
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-jungle mb-6">
                We'd Love to Hear From You
              </h2>
              <p className="text-earth mb-8">
                Whether you have questions about our accommodations, want to plan a special
                occasion, or need assistance with your booking, our team is here to help.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-jungle font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-jungle/20 rounded-lg focus:outline-none focus:border-gold transition-colors bg-cream/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-jungle font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-jungle/20 rounded-lg focus:outline-none focus:border-gold transition-colors bg-cream/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-jungle font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-jungle/20 rounded-lg focus:outline-none focus:border-gold transition-colors bg-cream/50"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-jungle font-medium mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-jungle/20 rounded-lg focus:outline-none focus:border-gold transition-colors bg-cream/50"
                    >
                      <option value="">Select a subject</option>
                      <option value="Room Reservation">Room Reservation</option>
                      <option value="Conference Hall Booking">Conference Hall Booking</option>
                      <option value="Banquet Booking">Banquet Booking</option>
                      <option value="Restaurant Table Booking">Restaurant Table Booking</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-jungle font-medium mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-jungle/20 rounded-lg focus:outline-none focus:border-gold transition-colors bg-cream/50 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* <Button type="submit" size="lg" className="w-full md:w-auto bg-jungle hover:bg-jungle-light text-cream">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button> */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading} // Disable button while sending
                  className="w-full md:w-auto bg-jungle hover:bg-jungle-light text-cream disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Quick Actions */}
            <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-elegant h-[640px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.726424201796!2d88.39885149999999!3d22.5144453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271aa8a614b57%3A0x7c9d58d28442ffac!2sHotel%20RituIvy!5e0!3m2!1sen!2sin!4v1770970496029!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Resort Location"
                />
              </div>

              {/* Quick Contact */}
              {/* <div className="bg-jungle p-8 rounded-lg">
                <h3 className="font-display text-2xl text-cream mb-4">
                  Quick Contact
                </h3>
                <p className="text-cream/80 mb-6">
                  Need immediate assistance? Reach out to us directly through these channels.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:0000000000"
                    className="flex items-center gap-4 text-cream hover:text-gold transition-colors"
                  >
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-cream/60">Call Us</p>
                      <p className="font-medium">0000000000</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/0000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-cream hover:text-gold transition-colors"
                  >
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-cream/60">WhatsApp</p>
                      <p className="font-medium">Chat with us</p>
                    </div>
                  </a>
                  <a
                    href="mailto:yourhotel@gmail.com"
                    className="flex items-center gap-4 text-cream hover:text-gold transition-colors"
                  >
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-cream/60">Email</p>
                      <p className="font-medium">yourhotel@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-10 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
              Common Questions
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-jungle">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How do I make a reservation?",
                answer: "You can dirtectly contact us via email id or phone for reservation. Also you can book from our website itself. It has a booking system integrated in it.",
              },
              {
                question: "Is parking available at the hotel?",
                answer: "Yes, limited parking is available for in-house guests on a first-come, first-served basis.",
              },
              {
                question: "Do you allow unmarried couples?",
                answer: "Yes, the hotel welcomes unmarried couples. All guests must carry a valid government-issued photo ID at the time of check-in.",
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg shadow-elegant group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <summary className="p-6 cursor-pointer font-display text-lg text-jungle flex justify-between items-center hover:text-gold transition-colors">
                  {faq.question}
                  <span className="text-gold group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-earth">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
        <div
          className="w-100 bg-repeat-x bg-contain h-[60px] mt-10"
          style={{ backgroundImage: `url(${border})` }}
        ></div>
      </section>
    </Layout>
  );
};

export default Contact;
