import React from "react"
import ProductCard from "./ProductCard.jsx"
import products from "./Products.js"


export default function ProductsSection() {
    return(
        <section className="py-12 bg-gray-50 mt-[60px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                className="text-3xl font-bold text-gray-800 mb-8 text-center"
                >Featured Products
                </h2>

                <div className="grid sm:grid-cols-2 gap-8">
                    {products.map(product => (
                        <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}