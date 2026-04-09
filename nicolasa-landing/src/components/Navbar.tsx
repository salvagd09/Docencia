import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fdfae7]/80 dark:bg-[#1c1c11]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="font-serif text-2xl font-bold text-[#823b18] dark:text-[#ffd87c]">
          La Sazón de Nicolasa
        </div>
        <div className="hidden md:flex gap-8 items-center font-serif text-lg tracking-normal">
          <a
            className="text-[#823b18] dark:text-[#ffd87c] font-bold border-b-2 border-[#823b18] hover:opacity-100 hover:text-[#a0522d] transition-colors"
            href="#"
          >
            Menu
          </a>
          <a
            className="text-[#1c1c11] dark:text-[#fdfae7] opacity-80 hover:opacity-100 hover:text-[#a0522d] transition-colors"
            href="#"
          >
            About Us
          </a>
          <a
            className="text-[#1c1c11] dark:text-[#fdfae7] opacity-80 hover:opacity-100 hover:text-[#a0522d] transition-colors"
            href="#"
          >
            Reservations
          </a>
          <a
            className="text-[#1c1c11] dark:text-[#fdfae7] opacity-80 hover:opacity-100 hover:text-[#a0522d] transition-colors"
            href="#"
          >
            Contact
          </a>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-md font-label font-semibold active:scale-95 duration-150 shadow-sm">
          Book a Table
        </button>
      </div>
    </nav>
  );
};

export default Navbar;