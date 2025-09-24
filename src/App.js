import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TwitterSection from './components/TwitterSection';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import Cart from './components/Cart';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { products } from './data/products';

const App = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openModal = (product) => setModalProduct(product);
  const closeModal = () => setModalProduct(null);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id && cartItem.size === item.size);
      if (existing) {
        return prev.map(cartItem =>
          cartItem.id === item.id && cartItem.size === item.size
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateCartQuantity = (id, size, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    alert('¡Compra procesada! Integrá tu pasarela de pago aquí (ej: Mercado Pago).');
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header cartOpen={cartOpen} setCartOpen={setCartOpen} cartItems={cartItems} />
      <Hero />
      <TwitterSection />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" id='coleccion'>Nuestra Colección</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onOpenModal={openModal} />
          ))}
        </div>
      </main>

      <ProductModal
        product={modalProduct}
        isOpen={!!modalProduct}
        onClose={closeModal}
        onAddToCart={addToCart}
      />

      {cartOpen && (
        <div className="fixed top-20 right-4 w-80 z-40 transition-all duration-300">
          <Cart
            cartItems={cartItems}
            onRemoveFromCart={removeFromCart}
            onUpdateCart={(id, size, delta) => updateCartQuantity(id, size, delta)}
            onCheckout={handleCheckout}
          />
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;