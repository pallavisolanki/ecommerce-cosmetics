export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[500px] flex flex-col justify-center items-center bg-gradient-to-r from-pink-500 to-red-500 text-white text-center p-10">
        <h1 className="text-5xl font-bold">Discover Your Beauty</h1>
        <p className="mt-4 text-lg">Shop the best cosmetic products at amazing prices</p>
        <button className="mt-6 px-6 py-3 bg-white text-pink-500 rounded-full font-semibold hover:bg-gray-200 transition">
          Shop Now
        </button>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Placeholder product cards */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white shadow-md rounded-lg p-4">
              <img src="/public/globe.svg" alt="Product" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-lg font-semibold">Lipstick Set</h3>
              <p className="text-gray-600 mt-2">$25.99</p>
              <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
