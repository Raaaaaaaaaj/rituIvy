import { Layout } from "@/components/layout/Layout";

const OfferTermsandConditions = () => {
  return (
    <Layout>
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-jungle mb-8">
            Terms & Conditions
          </h1>
          <p>By	accessing	this	website,	making	a	reservation,	or	staying	at	Hotel	Ritu	Ivy,	guests	agree	to
            comply	with	the	following	terms	and	conditions.</p>
          {/* Smaller Rectangular Image */}
          {/* <div className="max-w-4xl mx-auto container">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80"
              alt="Privacy Policy"
              className="w-full h-[120px] object-cover rounded-2xl shadow-elegant"
            />
          </div> */}
        </div>
      </section>
      {/* CONTENT SECTION */}
      <section className="pb-24 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">
          {/* Section */}
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              1. Guaranteed Lowest Price
            </h2>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li>• The “Guaranteed Lowest Price” applies only to publicly available rates for the same room category, dates, occupancy, and cancellation policy.</li>
              <li>• The rate must be available for immediate booking at the time of comparison.	</li>
              <li>• This guarantee does not apply to:
                <ul>
                    <li>• Member-only or loyalty program rates</li>
                    <li>• Corporate or contracted rates</li>
                    <li>• Coupon-based discounts, wallet credits, or private promotional offers</li>
                    <li>• Flash sales, limited-time promotions, or bundled package deals</li>
                </ul>
              </li>
              <li>• The hotel reserves the right to verify eligibility before honouring any rate match.	</li>

            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              2. Complimentary Room Upgrade (Direct Bookings Only)
            </h2>
            <ul className="space-y-4 text-dark leading-relaxed  mb-6">
              <li>• Complimentary upgrades are subject to availability at the time of check-in.</li>
              <li>• Upgrades cannot be guaranteed or pre-confirmed.</li>
              <li>• The hotel reserves the right to determine upgrade eligibility based on occupancy and operational requirements.</li>
              <li>• This benefit applies only to bookings made directly through the official website or reservation desk.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              3. Restaurant Offers
            </h2>
            <ul className="space-y-4 text-dark leading-relaxed  mb-6">
              <li>• Restaurant offers are valid for dine-in guests unless otherwise specified.</li>
              <li>• Offers cannot be combined with other promotions or discounts.</li>
              <li>• Discounts are not applicable on special event menus, banquet bookings, festive days, or curated set menus unless explicitly stated.</li>
              <li>• Management reserves the right to modify or withdraw offers without prior notice.</li>
            </ul>
          </div>
          
          <div className="pt-8 border-t border-jungle/20 text-sm text-dark">
            Last Updated: February 2026
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default OfferTermsandConditions;
