import React from 'react';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { Product } from '../types';

interface QuantityButtonProps {
  product: Product;
}

export function QuantityButton({ product }: QuantityButtonProps) {
  const { items, addToCart, updateQuantity } = useCart();
  const cartItem = items.find(item => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (quantity === 0) {
      addToCart(product);
    }
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (quantity > 0) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateQuantity(product.id, quantity + 1);
  };

  return (
    <div className="flex items-center gap-2">
      {quantity === 0 ? (
        <button
          onClick={handleClick}
          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors shadow-lg"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full">
          <button
            onClick={handleDecrement}
            className="p-1 hover:bg-red-700 rounded-full transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          <span className="min-w-[20px] text-center">{quantity}</span>
          <button
            onClick={handleIncrement}
            className="p-1 hover:bg-red-700 rounded-full transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
      )}
    </div>
  );
}