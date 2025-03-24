import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="w-80 p-4 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition flex-shrink-0">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-80 object-cover rounded-xl"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-black font-bold">₹{product.price}</p>
          <p className="text-green-500 font-medium">{product.discount}</p>
        </div>
        <button className="mt-4 w-full border border-purple-500 text-purple-500 font-medium py-2 rounded-lg hover:bg-purple-100 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
