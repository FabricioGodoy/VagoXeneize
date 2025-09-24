import React, { useEffect } from 'react';

const TwitterSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://platform.twitter.com/widgets.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Últimas Noticias Xeneizes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Seguí lo último de Boca Juniors con @vagoxeneixe en Twitter.</p>
        </div>
        <div className="flex justify-center">
          <a 
            className="twitter-timeline border border-blue-200 rounded-2xl overflow-hidden shadow-lg"
            href="https://twitter.com/vagoxeneize12?ref_src=twsrc%5Etfw" 
            data-width="600" 
            data-height="600" 
            data-theme="light" 
            data-link-color="#1DA1F2"
          >
            Tweets de @vagoxeneize12
          </a>
        </div>
      </div>
    </section>
  );
};

export default TwitterSection;