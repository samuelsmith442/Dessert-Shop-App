import React from 'react';
import { CartProvider } from './context/CartContext';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { products } from './data/products';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100 font-red-hat-text">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <h1 className="text-3xl font-bold mb-8">Desserts</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
            <div className="lg:col-span-1 sticky top-8 h-fit">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </CartProvider>
  );
}