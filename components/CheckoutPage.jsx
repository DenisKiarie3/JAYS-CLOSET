// src/components/CheckoutPage.jsx
import React, { useState } from "react";
import { useCart } from "./CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: "", email: "", address: "" });
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.address) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Simulate order placement
    toast.success("Order placed successfully!");
    clearCart();
    navigate("/"); // Redirect to home after placing order
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <textarea
            name="address"
            placeholder="Shipping Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
        />


        {/* Cart Summary */}
        <div className="bg-gray-100 p-4 rounded mt-6">
          <h3 className="font-semibold mb-2">Order Summary</h3>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between mb-1">
              <span>{item.name} x {item.quantity}</span>
              <span>Ksh {item.price * item.quantity}</span>
            </div>
          ))}
          <div className="mt-2 font-bold text-right text-pink-600">Total: Ksh {total}</div>
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700 transition"
        >
          Place Order
        </button>
      </form>

      <div className="mt-4 text-center">
        <Link to="/cart" className="text-pink-500 hover:underline">← Back to Cart</Link>
      </div>
    </section>
  );
}
