import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "@/app/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Security policy to prevent external scripts */}
        <meta http-equiv="Content-Security-Policy" content="default-src 'self';" />
      </head>
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
