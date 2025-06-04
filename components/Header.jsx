// ✅ Header.jsx
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext.jsx";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import logo from "../images/logo7.png";

export default function Header(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const { cartItems } = useCart();
  const navigate = useNavigate();

  function toggleMenu() {
    setIsOpen(prev => !prev);
  }

  function toggleSearch() {
    setIsSearchOpen(prev => !prev);
  }

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
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

        <div className="flex items-center gap-[20px]">
          <button onClick={toggleSearch} className="text-gray-700 block">
            <Search className="w-6 h-6" />
          </button>

          <Link to="/cart" className="text-gray-700 relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>

          <button className="sm:hidden" onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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

      {isSearchOpen && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/shop");
          }}
          className="flex items-center justify-between bg-gray-100 px-4 py-3 sm:px-6"
        >
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search products..."
              value={props.searchQuery}
              onChange={(e) => props.setSearchQuery(e.target.value)}
              className="w-full px-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button type="submit" className="absolute left-3 top-2.5 text-gray-400">
              <Search className="w-5 h-5" />
            </button>
          </div>
          <button
            type="button"
            onClick={toggleSearch}
            className="ml-4 text-gray-600 hover:text-pink-600"
          >
            <X className="w-6 h-6" />
          </button>
        </form>
      )}
    </header>
  );
}