import React from 'react';

const ProductCard = ({ product, onOpenModal }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
      <div className="relative h-64 bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
          ${product.price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <button
          onClick={() => onOpenModal(product)}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-102 active:scale-98"
        >
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default ProductCard;