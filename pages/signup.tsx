"use client";

import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form Data:", formData);
    alert("Signup Successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-200 px-4">
      <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">Create an Account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
          />

          {/* Password Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded-lg hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
