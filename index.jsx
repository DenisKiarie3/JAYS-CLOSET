import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { CartProvider } from "./components/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <CartProvider>
        <App />
    </CartProvider>
  )