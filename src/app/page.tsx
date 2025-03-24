import Categories from '@/components/Categories';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import NewsletterSection from '@/components/NewsletterSection';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <section className="py-16 px-8 flex">
        {/* Filters Section */}
        <div className="w-72">
          <Categories />
        </div>

        {/* Product Section */}
        <div className="flex-grow px-8 py-16 mb-40 flex justify-center items-center">
          <div className="product-container">
            <h2 className="text-3xl font-bold my-16 text-center top-categories-title">Featured Cosmetics</h2>

            {/* Centered Product Layout */}
            <div className="w-full overflow-x-auto flex justify-center">
              <div className="flex gap-12 overflow-x-auto scrollbar-hide flex-nowrap">
                {products.map((product) => (
                  <div key={product.id} className="flex-shrink-0 w-72">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Newsletter Section */}
      <div className="py-32">
        <NewsletterSection />
      </div>
    </main>
  );
}
