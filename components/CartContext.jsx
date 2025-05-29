// src/context/CartContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

// Create Context
const CartContext = createContext();

// Provide Context
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    // ✅ Get cart from localStorage on first load
    const savedCart = localStorage.getItem("jayscart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("jayscart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const index = prev.findIndex(item => item.id === product.id);
      if (index !== -1) {
        // Item already in cart → increase quantity
        const updated = [...prev];
        updated[index].quantity += 1;
        return updated;
      } else {
        // New item → add with quantity 1
        return [...prev, { ...product, quantity: 1 }];
      }
      });
    };

  const removeFromCart = (indexToRemove) => {
    setCartItems(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseQty = (productId) => {
  setCartItems(prev =>
    prev.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decreaseQty = (productId) => {
  setCartItems(prev =>
    prev
      .map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0) // Remove if quantity becomes 0
  );
};

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, increaseQty, decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook
export function useCart() {
  return useContext(CartContext);
}