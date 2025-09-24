import React, { useState, useEffect } from 'react';

const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const PlusIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const MinusIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    if (product && product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    } else {
      setSelectedSize('');
    }
    setQuantity(1);
  }, [product]);

  if (!isOpen || !product) return null;

  const handleAddToCartClick = () => {
    if (!selectedSize) {
      alert('¡Elegí un talle, bostero!');
      return;
    }
    onAddToCart({ ...product, quantity, size: selectedSize });
    onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 transition-opacity duration-300 opacity-100"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto transform scale-100 opacity-100 transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-blue-900">{product.name}</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                <XIcon className="w-6 h-6" />
              </button>
            </div>
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-2xl mb-6" />
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="mb-4">
              <label className="block text-sm font-bold text-blue-900 mb-2">Talle:</label>
              <div className="flex gap-2">
                {product.sizes?.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 font-semibold transition-all duration-300 ${
                      selectedSize === size
                        ? 'bg-blue-600 text-white border-blue-600 hover:scale-105'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:border-blue-300 hover:scale-105'
                    }`}
                  >
                    {size}
                  </button>
                )) || <p className="text-gray-500 text-sm">Sin talles disponibles</p>}
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold text-blue-900">${product.price}</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-all duration-300 hover:scale-110"
                >
                  <MinusIcon className="w-4 h-4" />
                </button>
                <span className="text-xl font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-all duration-300 hover:scale-110"
                >
                  <PlusIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCartClick}
              className={`w-full py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                selectedSize
                  ? 'bg-yellow-500 text-blue-900 hover:bg-yellow-400 hover:scale-102 active:scale-98'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!selectedSize}
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;