"use client";

const HeroSection = () => {
  return (
    <section className="hero-section relative flex items-center justify-center">
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold">Discover Your Beauty</h1>
          <p className="mt-6 text-xl">Shop the best cosmetic products at amazing prices</p>
          <button className="mt-8 px-8 py-4 bg-white text-pink-500 rounded-full font-semibold hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
    </section>
  );
};

export default HeroSection;
