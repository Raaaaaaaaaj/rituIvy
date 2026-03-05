import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import Facade1 from "@/assets/images/facade/Pathway1.jpg";
import border from "@/assets/images/borders/Border Pattern-02.png";


const FAQs = () => {
  return (
    <Layout>
        {/* FAQ Section */}
      <section className="py-10 bg-cream">
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
                question: "What are the check-in and check-out timings?",
                answer: "Check-in is from 12:00 PM and check-out is by 11:00 AM. Early check-in or late check-out is subject to availability and may attract additional charges.",
              },
              {
                question: "Is breakfast included in the room tariff?",
                answer: "Yes, Breakfast is included with selected room plans. Please refer to your booking details for confirmation.",
              },
              {
                question: "Is parking available at the hotel?",
                answer: "Yes, limited parking is available for in-house guests on a first-come, first-served basis.",
              },
              {
                question: "Is Wi-Fi available at the hotel?",
                answer: "Yes, complimentary high-speed Wi-Fi is available throughout the property.",
              },
              {
                question: "Do you allow unmarried couples?",
                answer: "Yes, the hotel welcomes unmarried couples. All guests must carry a valid government-issued photo ID at the time of check-in.",
              },
              {
                question: "Do you have banquet or conference facilities?",
                answer: "Yes, we offer a 2200 sq ft banquet/conference hall and a 3000 sq ft semi open-air banquet space, suitable for corporate and social events.",
              },
              {
                question: "Is early check-in or late check-out available?",
                answer: "Early check-in and late check-out are subject to availability and may be charged additionally.",
              },
              {
                question: "Do you provide laundry services?",
                answer: "Yes, laundry service is available on request at an additional charge.",
              },
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

export default FAQs;
