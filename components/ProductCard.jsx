import { Link } from "react-router-dom";
import React from "react"
export default function ProductCard(props) {
    return(
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <Link to={`/product/${props.id}`}>
            <div className="h-[250px] w-[150px] sm:w-[300px] sm:h-[400px]">
                <img
                    className="w-full h-full object-cover mt-[4px]"
                    src={props.image} alt={props.name} 
                />
            </div>
        </Link>
            
        <div className="p-4">
            <h3 
            className="text-lg font-semibold text-gray-800">
                {props.name}
            </h3>
            <p
            className="text-pink-600 font-bold mt-1"
            >Ksh {props.price}
            </p>
            <Link to={`/product/${props.id}`}>
                <button
                className="mt-3 inline-block bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition cursor-pointer"
                >View Product
                </button>
            </Link>
            
        </div>
        </div>
    )
}