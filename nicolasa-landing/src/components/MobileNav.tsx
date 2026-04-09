import React from "react";

const MobileNav: React.FC = () => {
  return (
    <div className="md:hidden fixed top-0 right-0 z-50 bg-[#fdfae7] dark:bg-[#1c1c11] w-full">
      <div className="flex justify-between items-center p-4">
        <div className="text-[#823b18] dark:text-[#ffd87c] text-2xl font-bold">La Sazón de Nicolasa</div>
        <button className="text-[#823b18] dark:text-[#ffd87c]">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNav;