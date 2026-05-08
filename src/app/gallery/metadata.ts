import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery from the ministry of Rev. Dr. Frederick P. Deegbe — moments of ministry, conferences, events and more.",
  openGraph: {
    title: "Gallery — Rev. Dr. Frederick P. Deegbe",
    description: "A visual record of a life poured out in service — from the pulpit to the nation.",
    images: [{ url: "/profile/author.png", alt: "Rev. Dr. Frederick P. Deegbe Ministry Gallery" }],
  },
  alternates: { canonical: "https://fredeegbe.com/gallery" },
};
