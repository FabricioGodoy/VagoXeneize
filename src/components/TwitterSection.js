import React, { useEffect, useRef } from "react";

const TwitterSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ensureWidget = () => {
      if (!window.twttr || !window.twttr.widgets?.createTimeline) return false;

      window.twttr.widgets.createTimeline(
        {
          sourceType: "profile",
          screenName: "vagoxeneize12", // la cuenta
        },
        containerRef.current,
        {
          width: 600,
          height: 600,
          theme: "light",
          chrome: "noheader nofooter transparent", // saca header/footer de X, queda más limpio
        }
      );
      return true;
    };

    // Si ya existe, creamos al toque
    if (ensureWidget()) return;

    // Inyectamos el script UNA sola vez
    const existing = document.getElementById("twitter-wjs");
    if (!existing) {
      const s = document.createElement("script");
      s.id = "twitter-wjs";
      s.src = "https://platform.twitter.com/widgets.js";
      s.async = true;
      s.onload = () => ensureWidget();
      document.body.appendChild(s);
    } else {
      // Si ya estaba, forzamos el load en este nodo
      existing.addEventListener("load", ensureWidget);
      // por si ya cargó
      setTimeout(ensureWidget, 0);
    }

    return () => {
      // Limpieza simple: vaciamos el contenedor para evitar duplicados al desmontar
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Últimas Noticias Xeneizes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Seguí lo último de Boca Juniors con @vagoxeneize12 en Twitter.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Acá Twitter inyecta el iframe */}
          <div
            ref={containerRef}
            className="border border-blue-200 rounded-2xl overflow-hidden shadow-lg bg-white"
            style={{ width: 600, height: 300 }}
          />
        </div>
      </div>
    </section>
  );
};

export default TwitterSection;
