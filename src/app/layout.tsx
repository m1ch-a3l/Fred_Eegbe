import type { Metadata } from "next";
import { Montserrat, DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Rev. Dr. Frederick P. Deegbe — Minister, Author & Statesman",
  description:
    "Discover the life, books, and legacy of Rev. Dr. Frederick P. Deegbe — distinguished minister, theologian, lawyer, author, and statesman dedicated to faith, justice, and the transformation of lives.",
  keywords: ["Christian author", "ministry", "faith", "Ghana", "books", "Frederick P. Deegbe", "Calvary Baptist Church", "Christian Council of Ghana"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dmSans.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-body), sans-serif" }}>
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
