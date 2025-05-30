import React from "react"
import { Link } from "react-router-dom";
import Hero2 from "../images/hero2.jpg"
export default function Hero() {
    return(
        <section className="bg-pink-50 py-12 mt-[70px] overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center px-4 sm:px-6 lg:px-8 gap-10">
                <div className="text-center sm:text-left flex-1">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Discover Your Style with <span className="text-pink-600">JAYS-CLOSET</span></h1>
                    <p className="text-lg text-gray-600 mb-6">Trendy, Elegant, and Affordable Women's Fashion Delivered to Your Doorstep.</p>
                    <Link 
                        to="/shop"
                        className="inline-block bg-pink-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-pink-700 transition"
                        >
                        Shop Now
                    </Link>
                </div>

                <div className="flex-1">
                    <img
                    className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
                     src={Hero2} 
                     alt="hero image" 
                     />
                </div>
            </div>
        </section>
    )
} 