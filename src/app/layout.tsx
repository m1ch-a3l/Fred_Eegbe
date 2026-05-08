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

const BASE_URL = "https://fredeegbe.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Rev. Dr. Frederick P. Deegbe — Minister, Author & Statesman",
    template: "%s | Rev. Dr. Frederick P. Deegbe",
  },
  description:
    "Official website of Rev. Dr. Frederick P. Deegbe — distinguished minister, theologian, lawyer, author, and statesman. Explore his books, ministry, biography and more.",
  keywords: [
    "Frederick P. Deegbe",
    "Rev Dr Frederick Deegbe",
    "Calvary Baptist Church Accra",
    "Ghana Baptist Convention",
    "Christian Council of Ghana",
    "Christian author Ghana",
    "Hollow Faith",
    "Thriving in Retirement",
    "The Three Powers",
    "The Sticky Couple",
    "Stranger in My Own Country",
    "Ghanaian minister",
    "Christian books Ghana",
    "church statesman Ghana",
    "Fred Deegbe books",
    "ministry Ghana",
    "Christian theology",
  ],
  authors: [{ name: "Rev. Dr. Frederick P. Deegbe", url: BASE_URL }],
  creator: "Rev. Dr. Frederick P. Deegbe",
  publisher: "Frederick P. Deegbe Ministries",
  category: "Religion & Spirituality",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: BASE_URL,
    siteName: "Rev. Dr. Frederick P. Deegbe",
    title: "Rev. Dr. Frederick P. Deegbe — Minister, Author & Statesman",
    description:
      "Official website of Rev. Dr. Frederick P. Deegbe — distinguished minister, theologian, lawyer, author, and statesman. Explore his books, ministry, biography and more.",
    images: [
      {
        url: "/profile/author.png",
        width: 1200,
        height: 630,
        alt: "Rev. Dr. Frederick P. Deegbe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rev. Dr. Frederick P. Deegbe — Minister, Author & Statesman",
    description:
      "Official website of Rev. Dr. Frederick P. Deegbe — distinguished minister, theologian, lawyer, author, and statesman.",
    images: ["/profile/author.png"],
    creator: "@FrederickDeegbe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dmSans.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-body), sans-serif" }}>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rev. Dr. Frederick P. Deegbe",
              alternateName: "Fred Deegbe",
              url: BASE_URL,
              image: `${BASE_URL}/profile/author.png`,
              jobTitle: "Senior Pastor, Author & Church Statesman",
              description:
                "Distinguished minister, theologian, lawyer, author, and statesman. Former Senior Pastor of Calvary Baptist Church, Accra (1991–2024). Author of 10 books.",
              nationality: "Ghanaian",
              birthDate: "1955-02-09",
              birthPlace: "Keta, Ghana",
              alumniOf: [
                { "@type": "CollegeOrUniversity", name: "University of Ghana" },
                { "@type": "CollegeOrUniversity", name: "Southwestern Baptist Theological Seminary" },
                { "@type": "CollegeOrUniversity", name: "Asbury Theological Seminary" },
              ],
              worksFor: {
                "@type": "Organization",
                name: "Frederick P. Deegbe Ministries",
                url: BASE_URL,
              },
              sameAs: [
                "https://www.facebook.com/frederickdeegbe",
              ],
              knowsAbout: ["Christian Theology", "Pastoral Ministry", "Law", "Marriage & Family", "Spiritual Life"],
            }),
          }}
        />
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
