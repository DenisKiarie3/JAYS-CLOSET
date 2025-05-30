import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import ProductsSection from "./components/ProductsSection.jsx"
import SingleProduct from "./components/SingleProduct.jsx";
import CartPage from "./components/CartPage.jsx";
import CheckoutPage from "./components/CheckoutPage.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Shop from "./components/Shop.jsx";
export default function App() {
    return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
            
    )
}