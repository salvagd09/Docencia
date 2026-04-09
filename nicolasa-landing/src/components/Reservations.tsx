import React from "react";

const Reservations: React.FC = () => {
  return (
    <section className="bg-primary-container py-24 text-center px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-headline text-on-primary-container mb-4">Reserva Tu Mesa</h2>
        <p className="text-xl text-on-primary-container-variant mb-8">
          Asegura tu lugar en el corazón de nuestra cocina. Las mejores experiencias comienzan con una reserva.
        </p>
        <button className="bg-secondary text-on-secondary px-8 py-4 rounded-md font-semibold text-lg shadow-xl hover:scale-105 transition-transform">
          Reservar Ahora
        </button>
      </div>
    </section>
  );
};

export default Reservations;