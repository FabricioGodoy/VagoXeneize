import React from 'react';

const ShoppingCartIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const Header = ({ cartOpen, setCartOpen, cartItems }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-blue-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold hover:scale-105 transition-transform duration-300">
          BocaRemeras
        </h1>
        <button
          onClick={() => setCartOpen(!cartOpen)}
          className="relative p-2 rounded-full bg-yellow-500 text-blue-900 hover:bg-yellow-400 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <ShoppingCartIcon className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {cartOpen && (
        <div className="bg-white text-blue-900 border-t border-blue-200 transition-all duration-300 opacity-100 max-h-screen">
          {/* Cart content will be handled in parent */}
        </div>
      )}
    </header>
  );
};

export default Header;