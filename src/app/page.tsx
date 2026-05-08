import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import FeaturedBooksSection from "@/components/sections/FeaturedBooksSection";
import WordOfMonthSection from "@/components/sections/WordOfMonthSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import HomepageAd from "@/components/ui/HomepageAd";

export const metadata: Metadata = {
  title: "Rev. Dr. Frederick P. Deegbe — Minister, Author & Statesman",
  description:
    "Official website of Rev. Dr. Frederick P. Deegbe — distinguished minister, theologian, lawyer, author, and statesman from Ghana. Browse his books, biography, gallery and get in touch.",
  openGraph: {
    title: "Rev. Dr. Frederick P. Deegbe — Minister, Author & Statesman",
    description:
      "Official website of Rev. Dr. Frederick P. Deegbe. Browse his books, biography, gallery and get in touch.",
    url: "https://fredeegbe.com",
    images: [{ url: "/profile/author.png", alt: "Rev. Dr. Frederick P. Deegbe" }],
  },
  alternates: { canonical: "https://fredeegbe.com" },
};

export default function HomePage() {
  return (
    <>
      <HomepageAd />
      <HeroSection />
      <WelcomeSection />
      <FeaturedBooksSection />
      <WordOfMonthSection />
      <NewsletterSection />
    </>
  );
}
