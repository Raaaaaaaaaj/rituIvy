import { Layout } from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* HEADER SECTION */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-jungle mb-8">
            Privacy Policy
          </h1>
        </div>
      </section>
      {/* CONTENT SECTION */}
      <section className="pb-24 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">
          {/* Section */}
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              1. Information We Collect
            </h2>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li>• Name, phone number, and email address</li>
              <li>• Booking and event-related details</li>
              <li>• Secure payment information</li>
              <li>• Website usage data (IP, browser type, pages visited)</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              2. How We Use Your Information
            </h2>
            <ul className="space-y-4 text-dark leading-relaxed  mb-6">
              <li>• Process reservations and event bookings</li>
              <li>• Send confirmations and important updates</li>
              <li>• Improve customer experience</li>
              <li>• Comply with legal requirements</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              3. Sharing of Information
            </h2>
            <p className="text-dark leading-relaxed  mb-6">
              We do not sell or rent personal information. Data is shared only
              with trusted service partners when necessary to deliver services
              or comply with applicable laws.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              4. Data Security
            </h2>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li>• Encrypted transactions and secure servers</li>
              <li>• Restricted access to authorized personnel</li>
              <li>• Regular monitoring and system protection</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              5. Cookies
            </h2>
            <p className="text-dark leading-relaxed mb-6">
              We use cookies to enhance browsing experience and analyze website
              performance. You may disable cookies in your browser settings.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              6. Your Rights
            </h2>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li>• Request access to your personal data</li>
              <li>• Request correction or deletion</li>
              <li>• Opt out of marketing communications</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              7. Policy Updates
            </h2>
            <p className="text-dark leading-relaxed mb-6">
              This policy may be updated periodically. Please review this page
              for any changes.
            </p>
          </div>
          <div className="pt-8 border-t border-jungle/20 text-sm text-dark">
            Last Updated: February 2026
          </div>

        </div>
      </section>
    </Layout>
  );
};
export default PrivacyPolicy;