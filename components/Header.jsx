import React from "react"
import { Link, NavLink } from "react-router-dom";
import { useCart } from "./CartContext.jsx";
import { ShoppingCart, Menu, X } from "lucide-react"
import logo from "../images/logo7.png"
export default function Header() {
    // State to control mobile menu toggle
    const [isOpen, setIsOpen] = React.useState(false)
    const { cartItems } = useCart(); // ✅ Get cart items
    // Toggle function defined outside JSX
    function toggleMenu () {
        setIsOpen(prevIsOpen => !prevIsOpen)
    }
    return(
        <header className="bg-white shadow-md">
            <div className="flex items-center justify-between h-[70px] mx-auto sm:px-[20px] px-[20px] max-w-7xl">
                <div>
                    <img src={logo} alt="Jays Logo" />
                </div>

                <nav className="hidden sm:flex gap-[10px] text-gray-700 font-medium">
                    <NavLink to="/" className={({ isActive }) =>
                    `cursor-pointer ${isActive ? "text-pink-600 font-semibold" : "text-gray-700 hover:text-pink-600"}`}>
                    Home
                    </NavLink>

                    <NavLink to="/shop" className={({ isActive }) =>
                    `cursor-pointer ${isActive ? "text-pink-600 font-semibold" : "text-gray-700 hover:text-pink-600"}`}>
                    Shop
                    </NavLink>

                    <NavLink to="/about" className={({ isActive }) =>
                    `cursor-pointer ${isActive ? "text-pink-600 font-semibold" : "text-gray-700 hover:text-pink-600"}`}>
                    About
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) =>
                    `cursor-pointer ${isActive ? "text-pink-600 font-semibold" : "text-gray-700 hover:text-pink-600"}`}>
                    Contact
                    </NavLink>
                </nav>

                <div className="flex items-center gap-[30px]">
                    <Link to="/cart" className="text-gray-700 relative">
                        <ShoppingCart className="w-6 h-6" />
                        <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {cartItems.length}
                        </span>
                    </Link>

                    <button 
                    className="sm:hidden"
                    onClick={toggleMenu}>
                        {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className="sm:hidden flex flex-col bg-white px-4 pb-4 gap-[10px] text-gray-700 font-medium">
                     <NavLink to="/" className={({ isActive }) =>
                    `cursor-pointer ${isActive ? "text-pink-600 font-semibold" : "text-gray-700 hover:text-pink-600"}`}>
                    Home
                    </NavLink>

                    <NavLink to="/shop" className={({ isActive }) =>
                    `cursor-pointer ${isActive ? "text-pink-600 font-semibold" : "text-gray-700 hover:text-pink-600"}`}>
                    Shop
                    </NavLink>

                    <NavLink to="/about" className={({ isActive }) =>
                    `cursor-pointer ${isActive ? "text-pink-600 font-semibold" : "text-gray-700 hover:text-pink-600"}`}>
                    About
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) =>
                    `cursor-pointer ${isActive ? "text-pink-600 font-semibold" : "text-gray-700 hover:text-pink-600"}`}>
                    Contact
                    </NavLink>
                </nav>
            )}
        </header> 
    )
}