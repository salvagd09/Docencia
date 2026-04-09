import React from "react";

const FeaturedDishes: React.FC = () => {
  return (
    <section className="py-24 bg-surface-container-low px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-headline text-on-surface mb-4">Especialidades de la Casa</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Explora nuestras propuestas exclusivas, donde cada bocado es un homenaje a la cocina tradicional.
            </p>
          </div>
          <button className="bg-primary text-on-primary px-8 py-3 rounded-md text-lg font-semibold shadow-lg hover:scale-105 transition-transform">
            Ver Más Platos
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Añadir tus platos aquí */}
          <div className="group relative overflow-hidden rounded-lg">
            <img
              alt="Dish"
              className="w-full h-full object-cover group-hover:scale-105 transition-all"
              src="https://via.placeholder.com/400x400"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000]/60 group-hover:to-[#000]/50 transition-all"></div>
            <div className="absolute bottom-8 left-8 text-white font-semibold text-lg">
              Plato Exquisito
            </div>
          </div>
          {/* Más platos... */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;