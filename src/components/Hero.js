import React from 'react';

const ArrowDownIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m12 19-7-7 1.4-1.4 5.6 5.6 5.6-5.6L19 12z"></path>
  </svg>
);

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:`url(${process.env.PUBLIC_URL}/img/fotoBoca.jpeg)`, // poné tu imagen acá en /public/img
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Contenido */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
          Remeras Boca Juniors
        </h2>
        <p className="mt-6 text-xl md:text-2xl text-gray-200">
          ¡El orgullo xeneize en cada prenda! Modelos exclusivos para hinchas de corazón.
        </p>
        <button className="mt-8 bg-gradient-to-r from-yellow-400 to-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 active:scale-95 transition-transform">
         <a href='#coleccion'>
          Ver Colección
        </a>
        </button>
        <div className="mt-12">
          <ArrowDownIcon className="w-8 h-8 mx-auto text-yellow-400 animate-bounce drop-shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
