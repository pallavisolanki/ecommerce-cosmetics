import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Geist } from 'next/font/google'
 
const geist = Geist({
  subsets: ['latin'],
})


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className}>
      <head>
        <title>Cosmetics E-commerce</title>
        <meta name="description" content="Shop the best cosmetic products online at amazing prices." />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self';" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
        <div className="text-center py-8">
          <Footer />
        </div>
      </body>
    </html>
  );
}
