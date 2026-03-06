import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Facilities from "./pages/Facilities";
import Banquets from "./pages/Banquets";
import Restaurant from "./pages/Restaurant";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsandConditions from "./pages/TermsandConditions";
import NotFound from "./pages/NotFound";
import Cancellation from "./pages/Cancellation.jsx"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/experiences" element={<Facilities />} />
          <Route path="/banquets" element={<Banquets />} />
          <Route path="/restaurants" element={<Restaurant />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsandConditions />} />
          <Route path="/booking-policies" element={< Cancellation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
