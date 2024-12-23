import React from 'react';
import { useCart } from '../hooks/useCart';
import { Product } from '../types';
import { QuantityButton } from './QuantityButton';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { items } = useCart();
  const isInCart = items.some(item => item.id === product.id);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
      <div className="relative p-2">
        <div className={`h-40 overflow-hidden ${isInCart ? 'border-2 border-red-600 rounded-lg' : ''}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
          <QuantityButton product={product} />
        </div>
      </div>
      <div className="p-4 pt-8">
        <p className="text-xs text-gray-500">{product.category}</p>
        <h3 className="font-semibold text-base mb-1">{product.name}</h3>
        <span className="text-red-600 font-medium text-sm">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}