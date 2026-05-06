import HeroSection from "@/components/sections/HeroSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import FeaturedBooksSection from "@/components/sections/FeaturedBooksSection";
import WordOfMonthSection from "@/components/sections/WordOfMonthSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <FeaturedBooksSection />
      <WordOfMonthSection />
      <NewsletterSection />
    </>
  );
}
