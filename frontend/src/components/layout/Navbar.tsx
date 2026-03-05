import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/Logos/Logo-03.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Why RITU IVY?", path: "/about" },
  { name: "Rooms", path: "/rooms" },
  { name: "Facilities ", path: "/experiences" },
  { name: "Banquets & Conference Halls", path: "/banquets" },
  { name: "Restaurants", path: "/restaurants" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-jungle text-cream py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0000000000" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              90733 56665 / 90516 10335
            </a>
            <a href="mailto:yourhotel@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              hotelrituivy@gmail.com
            </a>
          </div>
          <p className="text-cream/100">Kolkata</p>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-elegant"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-28 h-28 rounded-full flex items-center justify-center">
                <img
                  src={logo}
                  alt="Hotel ABC Logo"
                  className="w-24 h-24 object-contain"
                  onError={(e) => console.log("Image failed to load", e)}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 textMontserrat">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative font-medium transition-colors hover:text-gold",
                    location.pathname === link.path
                      ? "text-gold"
                      : isScrolled
                        ? "text-jungle"
                        : "text-dark",
                    "after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:bg-gold after:transition-all after:duration-300",
                    location.pathname === link.path
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full",
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-gold hover:bg-jungle text-cream font-semibold">
                <Link to="https://www.exceedsoftware.in/Website/Booking?hid=RjrVHq8mfWc%3d&pid=iyb5gHXOC8w%3d" target="_blank">Book Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "lg:hidden p-2 transition-colors",
                isScrolled ? "text-jungle" : "text-cream"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-white shadow-elegant transition-all duration-300",
            isMobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          )}
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "py-2 font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-jungle hover:text-gold"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-4 hover:bg-gold-dark text-cream font-semibold">
              <Link to="/contact">Book Now</Link>
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
};
