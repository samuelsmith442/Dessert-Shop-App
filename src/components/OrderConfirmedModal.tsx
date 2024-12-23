import React from 'react';
import { useCart } from '../hooks/useCart';
import confirmIcon from '../assets/images/icon-order-confirmed.svg';

interface OrderConfirmedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderConfirmedModal({ isOpen, onClose }: OrderConfirmedModalProps) {
  const { items, total, clearCart } = useCart();

  if (!isOpen) return null;

  const handleStartNewOrder = () => {
    clearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <img 
          src={confirmIcon} 
          alt="Order Confirmed" 
          className="w-16 h-16 mb-6"
        />
        <h2 className="text-2xl font-bold mb-2">Order Confirmed</h2>
        <p className="text-gray-500 mb-8">
          We hope you enjoy your food!
        </p>
        
        <div className="space-y-4 mb-8">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                src={item.image.replace('desktop', 'thumbnail')}
                alt={item.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-sm">{item.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{item.quantity}x</span>
                  <span>@${item.price.toFixed(2)}</span>
                </div>
              </div>
              <span className="font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
          
          <div className="flex justify-between items-center pt-4 border-t">
            <span className="text-gray-600">Order Total</span>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={handleStartNewOrder}
          className="w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700 transition-colors"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
