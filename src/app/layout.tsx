import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
