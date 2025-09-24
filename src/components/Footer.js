import React from 'react';

const HeartIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
  </svg>
);

const ShieldIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="18" cy="6" r="1"/>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 mt-16 transition-opacity duration-600 opacity-100 translate-y-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <HeartIcon className="w-6 h-6 text-yellow-400" />
              <span className="text-lg font-semibold">¡Dale Boca carajo! La 12 siempre presente.</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldIcon className="w-6 h-6 text-yellow-400" />
              <span className="text-lg font-semibold">Orgullo xeneize en cada remera.</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 mb-6">
            <a href="https://www.facebook.com/bocaremeras" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-white transition-all duration-300 hover:scale-110">
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/bocaremeras" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-white transition-all duration-300 hover:scale-110">
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/bocaremeras" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-white transition-all duration-300 hover:scale-110">
              <TwitterIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-blue-200 mb-2">© 2024 BocaRemeras - Todos los derechos reservados.</p>
          <p className="text-xs text-yellow-300 italic">Developed by Fabricio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;