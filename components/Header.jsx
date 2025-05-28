import React from "react"
import { ShoppingCart, Menu, X } from "lucide-react"
import logo from "../images/logo7.png"
export default function Header() {
    // State to control mobile menu toggle
    const [isOpen, setIsOpen] = React.useState(false)
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
                    <a className="hover:text-pink-600" href="#">Home</a>
                    <a className="hover:text-pink-600" href="#">Shop</a>
                    <a className="hover:text-pink-600" href="#">About</a>
                    <a className="hover:text-pink-600" href="#">Contact</a>
                </nav>

                <div className="flex items-center gap-[30px]">
                    <div className="text-gray-700 relative">
                        <ShoppingCart className="w-6 h-6"/>
                        <span 
                        className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            0
                        </span>
                    </div>

                    <button 
                    className="sm:hidden"
                    onClick={toggleMenu}>
                        {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className="sm:hidden flex flex-col bg-white px-4 pb-4 gap-[10px] text-gray-700 font-medium">
                <a href="#" className="hover:text-pink-600">Home</a>
                <a href="#" className="hover:text-pink-600">Shop</a>
                <a href="#" className="hover:text-pink-600">About</a>
                <a href="#" className="hover:text-pink-600">Contact</a>
                </nav>
            )}
        </header> 
    )
}