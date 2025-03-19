import Image from 'next/image';

const products = [
  { id: 1, name: "Lipstick Set", price: 25.99, image: "/globe.svg" },
  { id: 2, name: "Foundation", price: 39.99, image: "/globe.svg" },
  { id: 3, name: "Eyeliner", price: 19.99, image: "/globe.svg" },
  { id: 4, name: "Blush", price: 14.99, image: "/globe.svg" }
];

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
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
              <Image src={product.image} alt={product.name} width={300} height={200} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
              <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-10 text-center">
        <h2 className="text-2xl font-bold">Stay Updated</h2>
        <p className="text-gray-600 mt-2">Subscribe to our newsletter for exclusive deals</p>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border rounded-l-lg w-64 focus:outline-none"
          />
          <button className="bg-pink-500 text-white px-4 py-2 rounded-r-lg hover:bg-pink-600">Subscribe</button>
        </div>
      </section>
    </main>
  );
}
