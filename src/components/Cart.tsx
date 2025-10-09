import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="h-6 w-6 text-pink-600" />
            <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag className="h-24 w-24 text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-600 mb-6">Add some delicious items to get started!</p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-medium"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-2xl p-4 flex gap-4 hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2 capitalize">{item.category}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-2 bg-white rounded-full p-1 shadow-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-pink-50 rounded-full transition-colors"
                        >
                          <Minus className="h-4 w-4 text-pink-600" />
                        </button>
                        <span className="px-3 font-medium text-gray-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-pink-50 rounded-full transition-colors"
                        >
                          <Plus className="h-4 w-4 text-pink-600" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                    <div className="text-lg font-bold text-pink-600 mt-2">
                      {item.price} × {item.quantity}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 p-6 space-y-4 bg-gray-50">
              <button
                onClick={clearCart}
                className="w-full text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                Clear Cart
              </button>

              <div className="flex items-center justify-between text-lg font-semibold">
                <span className="text-gray-700">Total:</span>
                <span className="text-2xl text-pink-600">₹{getTotalPrice().toFixed(2)}</span>
              </div>

              <a
                href="https://wa.me/918248477869?text=Hi%20Ayath_iCakes!%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Checkout via WhatsApp
              </a>

              <p className="text-xs text-gray-500 text-center">
                Click to send your order via WhatsApp
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
