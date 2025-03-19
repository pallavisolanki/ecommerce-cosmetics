"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-pink-500">Cosmetics Store</h1>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {["Makeup", "Skin", "Hair", "Fragrance", "Offers"].map((category) => (
          <Link
            href={`/${category.toLowerCase()}`}
            key={category}
            className="text-gray-700 hover:text-pink-500"
          >
            {category}
          </Link>
        ))}
      </div>

      {/* Search and Account Actions */}
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
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMobileMenu} className="md:hidden text-gray-700">
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center md:hidden z-50">
          {["Makeup", "Skin", "Hair", "Fragrance", "Offers"].map((category) => (
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
        </div>
      )}
    </nav>
  );
}
