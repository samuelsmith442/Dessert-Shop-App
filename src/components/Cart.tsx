import { X } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useState } from 'react';
import { OrderConfirmedModal } from './OrderConfirmedModal';
import emptyCartIllustration from '../assets/images/illustration-empty-cart.svg';

export function Cart() {
  const { items, removeFromCart, total } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (items.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-red-600 mb-6">
          Your Cart (0)
        </h2>
        <div className="flex flex-col items-center justify-center py-8">
          <img 
            src={emptyCartIllustration} 
            alt="Empty Cart" 
            className="w-32 h-32 mb-4 opacity-50"
          />
          <p className="text-gray-500 text-center">
            Your added items will appear here
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-red-600 mb-6">
          Your Cart ({items.length})
        </h2>
        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col gap-1 pb-4 border-b">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{item.name}</h3>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-1 hover:bg-gray-100 rounded text-gray-500"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-red-600">
                  {item.quantity}x <span className="text-gray-500">@${item.price.toFixed(2)}</span>
                  <span className="ml-2 font-medium text-gray-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Order Total:</span>
            <span className="text-xl font-bold">
              ${total.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg mb-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600"
            >
              <path
                d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12L10.5 14.5L16 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-gray-600 text-sm">This is a carbon-neutral delivery</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Confirm Order
          </button>
        </div>
      </div>

      <OrderConfirmedModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
