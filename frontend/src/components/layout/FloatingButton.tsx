export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">

      {/* Facebook */}
      <a
        href="https://facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-jungle text-white p-3 rounded-full shadow-lg transition border-2 border-cream"
      >
        <span className="hidden md:block opacity-1 transition">
          <i className="fa-brands fa-square-facebook text-cream"></i>
        </span>
      </a>

      {/* Instagram */}
      <a
        href="https://facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-jungle text-white p-3 rounded-full shadow-lg transition border-2 border-cream"
      >
        <span className="hidden md:block opacity-1 group-hover:opacity-100 transition">
          <i className="fa-brands fa-instagram text-cream"></i>
        </span>
      </a>

      {/* Google Map */}
      <a
        href="https://facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-jungle text-white p-3 rounded-full shadow-lg transition border-2 border-cream" 
      >
        <span className="hidden md:block opacity-1 group-hover:opacity-100 transition">
          <i className="fa-solid fa-map-pin text-cream"></i>
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-jungle text-white p-3 rounded-full shadow-lg transition border-2 border-cream"
      >
        <span className="hidden md:block opacity-1 group-hover:opacity-100 transition">
          <i className="fa-brands fa-whatsapp text-cream"></i>
        </span>
      </a>

      {/* Corporate Queries */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-jungle text-white p-3 rounded-full shadow-lg transition border-2 border-cream"
      >
        <span className="hidden md:block opacity-1 group-hover:opacity-100 transition">
          <i className="fa-solid fa-circle-question text-cream"></i>
        </span>
      </a>
      
      {/* Wedding / Bulk Booking */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-jungle text-white p-3 rounded-full shadow-lg transition border-2 border-cream"
      >
        <span className="hidden md:block opacity-1 group-hover:opacity-100 transition">
          <i className="fa-regular fa-calendar text-cream"></i>
        </span>
      </a>
    </div>
  );
};
