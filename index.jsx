import React from "react";
import "./index.css";
import { Toaster } from "react-hot-toast";
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { CartProvider } from "./components/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <CartProvider>
        <>
        <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
        <App />
        </>
    </CartProvider>
  )