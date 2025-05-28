import React from "react"
import ProductCard from "./ProductCard.jsx"
import dress1 from "../images/dress1.png"
import dress2 from "../images/dress2.png"
import dress3 from "../images/dress3.png"
import dress4 from "../images/dress4.jpg"
import dress5 from "../images/dress5.jpg"

const products = [
    {id:1, image:dress1, name:"Floral Summer Dress", price:2500},
    { id: 2, image: dress2, name: "Elegant Black Gown", price: 4200 },
    { id: 3, image: dress3, name: "Casual Pink Dress", price: 3400 },
    { id: 4, image: dress4, name: "Skinny Pink Dress", price: 1800 },
    { id: 5, image: dress5, name: "Turkey Elegant Dress", price: 5500 },
]
export default function ProductsSection() {
    return(
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2
                className="text-3xl font-bold text-gray-800 mb-8 text-center"
                >Featured Products
                </h2>

                <div className="grid sm:grid-cols-2 gap-8">
                    {products.map(product => (
                        <ProductCard
                        key={product.id}
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