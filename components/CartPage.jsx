// src/components/CartPage.jsx
import React from "react";
import { useCart } from "./CartContext.jsx";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, increaseQty, decreaseQty } = useCart();

  // Calculate total
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          Your cart is empty.
          <div className="mt-4">
            <Link to="/" className="text-pink-500 hover:underline">← Go back to shop</Link>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border p-4 rounded-md shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <div className="flex items-center gap-2">
                    <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                    –
                    </button>
                    <span className="text-pink-600 font-medium">{item.quantity}</span>
                    <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                    +
                    </button>
                    <span className="ml-2 text-gray-600">Ksh {item.price * item.quantity}</span>
                </div>
            </div>
              {/* ✅ Remove Button */}
                <button
                onClick={() => removeFromCart(index)}
                className="text-sm text-red-500 hover:underline ml-auto"
                >
                Remove
                </button>
            </div>
          ))}

          {/* Total */}
          <div className="text-right text-xl font-semibold text-gray-800">
            Total: Ksh {total}
          </div>
          {/* Clear Cart Button */}
        <div className="text-right mt-4">
            <button
                onClick={clearCart}
                className="text-sm text-red-500 underline hover:text-red-700"
            >
                Clear Cart
            </button>
        </div>
          {/* Continue Shopping Link */}
        <div className="text-center mt-6">
        <Link to="/" className="text-pink-500 hover:underline">← Continue Shopping</Link>
        </div>
        </div>
      )}
    </section>
  );
}