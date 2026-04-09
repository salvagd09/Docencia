import React from "react";

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          alt="Rustic feast"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8jSwEFPr9BZwczxW1rRW8f_oNg_fHtgdMztxWMkMBbSdSt0ArtmTDEe38yImZFoZwNNBMqnBhNoZx3QWHeR_W_7Jj7gJF57nv4ubK6855sLuxTMPguSJcN97KibgKT5WO9iTjkMrJVdIkEMCka3TH65OvgIJRQR6KGm6lTPjMbKc51Cj3sD50t6Xme6l021N-6T9P89IxrP6H2xI2Hti-_4u4RUJgLAWiDJAV1kWi5Hk7QKhX7Nz-84yGDqwegp6oj6Qgb7vxkqaA"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent"></div>
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-headline italic text-surface mb-8 leading-tight drop-shadow-lg">
          El sabor que te hace sentir en casa
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-md font-label text-lg font-bold shadow-xl hover:scale-105 transition-transform">
            Reservar Mesa
          </button>
          <button className="bg-surface/20 backdrop-blur-md text-surface border border-surface/30 px-8 py-4 rounded-md font-label text-lg font-bold hover:bg-surface/30 transition-all">
            Ver Menú
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;