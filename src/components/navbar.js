import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-pink-500">Cosmetics Store</h1>
      <div className="space-x-6">
        <Link href="/" className="text-gray-700 hover:text-pink-500">Home</Link>
        <Link href="/products" className="text-gray-700 hover:text-pink-500">Products</Link>
        <Link href="/cart" className="text-gray-700 hover:text-pink-500">Cart</Link>
        <Link href="/login" className="px-4 py-2 bg-pink-500 text-white rounded-lg">Login</Link>
      </div>
    </nav>
  );
}
