import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import ProductsSection from "./components/ProductsSection.jsx"
import SingleProduct from "./components/SingleProduct.jsx";
export default function App() {
    return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
            <ProductsSection/>
          </>
        } />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
            
    )
}