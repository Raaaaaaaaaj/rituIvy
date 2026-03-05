import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import borderpattern1 from "@/assets/images/borders/Border Pattern-02.png";
import logo from "@/assets/images/Logos/Logo-03.png";
import border from "@/assets/images/borders/Border Pattern-02.png";
import logoFont2 from "@/assets/images/Logos/newLogo.png";


export const Footer = () => {
  return (
    <footer className="bg-cream text-jungle ">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-36 h-36 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Hotel ABC Logo"
                  className="w-32 h-32 object-contain"
                  onError={(e) => console.log("Image failed to load", e)}
                />
              </div>
              <div>
              </div>
            </div>
            <p className="text-jungle/100 mb-6 textBodoniMedium">
              Hotel Ritu Ivy is an independantly managed hotel in Kolkata, offering comfrotable rooms & thoghtfully managed banquet spaces. We take pride in providing warm hospitality & dependable service for every guest.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1MpgN1P787/?mibextid=wwXIfr" className="w-10 h-10 bg-jungle/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-jungle transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/hotelrituivy" className="w-10 h-10 bg-jungle/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-jungle transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/rituivyhotel" className="w-10 h-10 bg-jungle/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-jungle transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3 textBodoniMedium">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Rooms", path: "/rooms" },
                { name: "Facilities", path: "/experiences" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-jungle/100 hover:text-gold transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gold/100 rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="font-display text-xl mb-6 text-gold">More Links</h4>
            <ul className="space-y-3 textBodoniMedium">
              {[
                "Banquets & Conference Halls",
                "Restaurant",
                "FAQs",
                "Terms & Conditions",
                "Privacy Policy",
                "Careers",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/experiences"
                    className="text-jungle/100 hover:text-gold transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gold/100 rounded-full" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <span className="text-jungle/100 textBodoniMedium">
                  Hotel Ritu Ivy <br />
                  215, Shantipally, Kasba,
                  Kolkata 700107
                </span>
              </li>
              <li>
                <a href="tel:0000000000" className="flex items-center gap-3 text-jungle/100 hover:text-gold transition-colors textBodoniMedium">
                  <Phone className="w-5 h-5 text-gold" />
                  90733 56665 / 90516 10335
                </a>
              </li>
              <li>
                <a href="mailto:yourhotel@gmail.com" className="flex items-center gap-3 text-jungle/100 hover:text-gold transition-colors textBodoniMedium">
                  <Mail className="w-5 h-5 text-gold" />
                  hotelrituivy@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t border-jungle/10 bg-repeat-x"
      >
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-jungle/100 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Hotel Ritu Ivy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <p>Developed and maintained by <a href="https://bestmanexceed.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-jungle/100 transition-colors">Bestman Exceed Softwares LLP</a></p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/privacy-policy" className="text-jungle/100 hover:text-gold transition-colors">Privacy Policy</a>
            <a href="/termsandconditions" className="text-jungle/100 hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      <div
        className="w-100 bg-repeat-x bg-cover h-[60px]"
        style={{ backgroundImage: `url(${border})` }}
      >
      </div>
    </footer>
  );
};




