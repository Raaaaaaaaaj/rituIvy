import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CTA } from "./Cta";
import { FloatingButtons } from "./FloatingButton";
import { RESTROCTA } from "./RestroCTA";

interface LayoutProps { children: ReactNode }

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isRestaurantPage = location.pathname.includes("restaurants");
  const isPrivacyPage = location.pathname.includes("privacy-policy");
  const isTermsPage = location.pathname.includes("termsandconditions");
  const hiddenStandardCTA = isRestaurantPage || isPrivacyPage || isTermsPage;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>

      {/* If NOT restaurant page, show standard CTA */}
      {!hiddenStandardCTA && <CTA />}

      {/* If IS restaurant page, show RESTROCTA */}
      {isRestaurantPage && <RESTROCTA />}

      <Footer />
      <FloatingButtons />
    </div>
  );
};