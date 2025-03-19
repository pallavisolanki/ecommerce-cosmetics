import Image from 'next/image';

const products = [
  { id: 1, name: "Lipstick Set", price: 25.99, image: "/lipstick.jpeg" },
  { id: 2, name: "Foundation", price: 39.99, image: "/foundation.webp" },
  { id: 3, name: "Eyeliner", price: 19.99, image: "/eyeliner.jpeg" },
  { id: 4, name: "Blush", price: 14.99, image: "/blush.jpeg" }
];

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <div className="bg-blue-500 text-white p-10 text-center">
        Tailwind CSS is working!
      </div>
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex flex-col justify-center items-center bg-gradient-to-r from-[#ec4899] to-[#f43f5e] text-white text-center p-10">
        <h1 className="text-6xl font-bold">Discover Your Beauty</h1>
        <p className="mt-6 text-xl">Shop the best cosmetic products at amazing prices</p>
        <button className="mt-8 px-8 py-4 bg-white text-pink-500 rounded-full font-semibold hover:bg-gray-200 transition">
          Shop Now
        </button>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Cosmetics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
                <button className="mt-4 w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section bg-gray-50 py-14 text-center">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="text-gray-600 mt-4">Subscribe to our newsletter for exclusive deals</p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-4 rounded-l-lg w-80 focus:outline-none border border-gray-300"
          />
          <button className="px-6 py-4 rounded-r-lg bg-pink-500 text-white font-semibold hover:bg-pink-600">
            Subscribe
          </button>
        </div>
      </section>
    </main>
  );
}
