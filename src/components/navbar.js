"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaShoppingCart} from "react-icons/fa";
import "../app/globals.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const categories = ["Makeup", "Skin", "Hair", "Fragrance", "Offers"];

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
      
      {/* Logo */}
      <Link href="/">
        <span className="text-2xl font-bold text-pink-500 cursor-pointer">Cosmetics Store</span>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {categories.map((category) => (
          <Link
            href={`/${category.toLowerCase()}`}
            key={category}
            className="text-gray-700 font-medium text-lg transition duration-200 hover:text-pink-500 hover:scale-105"
          >
            {category}
          </Link>
        ))}
      </div>

      {/* Search, Cart, and Authentication Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search products"
            className="border rounded-lg p-2 pl-10 w-64 focus:outline-none"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
        </div>

        {/* Cart and Sign In Buttons */}
        <Link href="/cart" className="text-gray-700">
          <FaShoppingCart size={24} />
        </Link>
        <Link
          href="/login"
          className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu Button 
      <button onClick={toggleMobileMenu} className="md:hidden text-gray-700">
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>*/}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center md:hidden z-50">
          {categories.map((category) => (
            <Link
              href={`/${category.toLowerCase()}`}
              key={category}
              className="text-gray-700 hover:text-pink-500 py-2"
              onClick={toggleMobileMenu}
            >
              {category}
            </Link>
          ))}
          <Link href="/cart" className="text-gray-700 py-2">Cart</Link>
          <Link
            href="/login"
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 mt-4"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 mt-4"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
