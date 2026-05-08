import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store — Order Books",
  description:
    "Order books by Rev. Dr. Frederick P. Deegbe online. Secure payment via Paystack. Delivered across Ghana. Signed copies available on request.",
  keywords: [
    "buy Frederick Deegbe books",
    "order Christian books Ghana",
    "Hollow Faith buy online",
    "Thriving in Retirement buy",
    "Christian bookstore Accra",
    "Frederick Deegbe store",
  ],
  openGraph: {
    title: "Order Books — Rev. Dr. Frederick P. Deegbe",
    description:
      "Secure your copy of Rev. Dr. Deegbe's books. Available for delivery across Ghana.",
    images: [{ url: "/books/hollow-faith.jpg", alt: "Books by Rev. Dr. Frederick P. Deegbe" }],
  },
  alternates: { canonical: "https://fredeegbe.com/store" },
};
