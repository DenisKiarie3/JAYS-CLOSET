import React from "react"
import Hero1 from "../images/hero1.jpg"
export default function Hero() {
    return(
        <section className="bg-pink-50 py-12">
            <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center px-6 gap-10">
                <div className="text-center sm:text-left flex-1">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Discover Your Style with JAYS-CLOSET</h1>
                    <p className="text-lg text-gray-600 mb-6">Trendy, Elegant, and Affordable Women's Fashion Delivered to Your Doorstep.</p>
                    <a 
                    className="inline-block bg-pink-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-pink-700 transition"
                    href="#">Shop Now</a>
                </div>

                <div className="flex-1">
                    <img
                    className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
                     src={Hero1} 
                     alt="hero image" 
                     />
                </div>
            </div>
        </section>
    )
}