import React from 'react';

const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const TrashIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

const Cart = ({ cartItems, onRemoveFromCart, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-white rounded-2xl shadow-xl max-h-96 overflow-y-auto p-6 transition-all duration-300 transform translate-x-0">
      <h3 className="text-2xl font-bold text-blue-900 mb-6">Mi Carrito</h3>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Tu carrito está vacío. ¡Agregá una remera!</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <h4 className="font-bold text-blue-900">{item.name}</h4>
                  <p className="text-sm text-gray-600">Talle: {item.size} | Cant: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">${item.price * item.quantity}</p>
                <button onClick={() => onRemoveFromCart(item.id)} className="text-red-500 hover:text-red-700 transition-colors duration-300">
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
          <div className="pt-4 mt-6 border-t border-gray-200">
            <div className="flex justify-between text-xl font-bold text-blue-900 mb-4">
              <span>Total:</span>
              <span>${total}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 hover:scale-102 active:scale-98"
            >
              Proceder al Pago
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;