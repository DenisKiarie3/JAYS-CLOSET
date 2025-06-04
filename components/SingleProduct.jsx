import React from "react";
import { useCart } from "./CartContext.jsx";
import toast from "react-hot-toast";
import { useParams, Link, useNavigate } from "react-router-dom";
import products from "./Products";

export default function SingleProduct() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart(); // use cart hook
  const navigate = useNavigate(); // for Buy Now redirection

  if (!product) {
    return <p className="text-center py-10 text-gray-600">Product not found.</p>;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 mt-[120px]">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg shadow-md object-cover max-h-[500px]"
        />

        {/* Product Info */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
          <p className="text-pink-600 text-xl font-semibold mb-4">Ksh {product.price}</p>
          <p className="text-gray-600 mb-6">
            {product.description || "This is a beautiful and high-quality fashion piece perfect for any occasion."}
          </p>

          {/* ✅ Add to Cart Button */}
          <button
            onClick={() => {
              addToCart(product);
              toast.success("Added to cart");
            }}
            className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition mr-[4px]"
          >
            Add to Cart
          </button>

          {/* ✅ Buy Now → Checkout */}
          <button
            onClick={() => {
              addToCart(product);
              navigate("/checkout");
            }}
            className="mt-3 inline-block bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition"
          >
            Buy Now
          </button>

          {/* Back to Shop */}
          <div className="mt-4">
            <Link to="/shop" className="text-pink-500 hover:underline">← Back to Shop</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
