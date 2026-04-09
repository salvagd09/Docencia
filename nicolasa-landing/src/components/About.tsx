import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-24 bg-surface px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-outline-variant/20 rounded-xl"></div>
            <img
              alt="Nicolasa"
              className="relative z-10 w-full aspect-[4/5] object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRyes2ek2yX1zxLsplNMmMvYhg77w9EXKrrwQ5yUYqvGd-OXeTStZ0vWT4UknjWin32l2SC9YJJ9O96pQ-1_X8hTvZMB8UmotiPORPBpABHak2RX0mLiwMs9Fobj-YnX7xEq70AGekmR9054y62uR12A_XdD4RRzg6g5bErsI5lG8H4-8cxaLYjKMaQWnKx0R5qx5dlIdf1vT9K0L76wYoN5XxZ3FrOZzP5DtbsWh7uVogHmPV9Ewjvq0zajntPP9CIuN0lOjYTEgI"
            />
            <div className="absolute -bottom-6 -right-6 z-20 bg-tertiary text-on-tertiary p-8 rounded-lg max-w-[200px] font-headline text-xl leading-relaxed italic shadow-xl">
              "El ingrediente secreto siempre es el tiempo."
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <span className="text-primary font-label tracking-widest uppercase text-sm font-bold">Nuestra Historia</span>
            <h2 className="text-5xl md:text-6xl font-headline text-on-surface leading-tight">El Legado de Doña Nicolasa</h2>
            <p className="text-xl text-on-surface-variant font-body leading-relaxed">
              Desde los campos dorados de su infancia, Nicolasa aprendió que la cocina no es solo alimento, es memoria. Cada receta es un hilo que nos conecta con nuestras raíces, perfeccionada a través de décadas de madrugadas junto al fogón.
            </p>
            <p className="text-xl text-on-surface-variant font-body leading-relaxed">
              En La Sazón de Nicolasa, no servimos platos; compartimos secretos familiares. Nuestras tortillas se palmean al ritmo de historias antiguas y nuestros guisos reposan hasta alcanzar esa profundidad que solo el amor y la paciencia pueden otorgar.
            </p>
            <div className="pt-4">
              <button className="text-primary font-bold text-lg flex items-center gap-2 group">
                Conoce más sobre nosotros
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;