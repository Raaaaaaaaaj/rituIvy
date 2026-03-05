export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/1MpgN1P787/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center bg-jungle text-white p-3 rounded-full shadow-lg border-2 border-cream"
      >
        <i className="fa-brands fa-square-facebook text-cream"></i>

        <span className="absolute right-14 bg-jungle text-cream text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Facebook
        </span>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/hotelrituivy"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center bg-jungle text-white p-3 rounded-full shadow-lg border-2 border-cream"
      >
        <i className="fa-brands fa-instagram text-cream"></i>

        <span className="absolute right-14 bg-jungle text-cream text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Instagram
        </span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/rituivyhotel"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center bg-jungle text-white p-3 rounded-full shadow-lg border-2 border-cream"
      >
        <i className="fa-brands fa-linkedin text-cream"></i>

        <span className="absolute right-14 bg-jungle text-cream text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          LinkedIn
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919051610335"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center bg-jungle text-white p-3 rounded-full shadow-lg border-2 border-cream"
      >
        <i className="fa-brands fa-whatsapp text-cream"></i>

        <span className="absolute right-14 bg-jungle text-cream text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          WhatsApp
        </span>
      </a>

      {/* Corporate Queries */}
      <a
        href="https://wa.me/919051610335"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center bg-jungle text-white p-3 rounded-full shadow-lg border-2 border-cream"
      >
        <i className="fa-solid fa-circle-question text-cream"></i>

        <span className="absolute right-14 bg-jungle text-cream text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Corporate Queries
        </span>
      </a>

      {/* Wedding Booking */}
      <a
        href="https://wa.me/919051610335"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center bg-jungle text-white p-3 rounded-full shadow-lg border-2 border-cream"
      >
        <i className="fa-regular fa-calendar text-cream"></i>

        <span className="absolute right-14 bg-jungle text-cream text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Wedding / Bulk Booking
        </span>
      </a>

    </div>
  );
};