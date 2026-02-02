import Footer from "@/components/footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "EverTrust Realty",
  description: "Trusted Mobile Home Sales Across the USA & Canada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100 text-gray-800">
        <Navbar />
        {children}
        
      <Footer />

      </body>
    </html>
  );
}
