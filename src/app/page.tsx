import HeroSection from "@/components/sections/HeroSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import FeaturedBooksSection from "@/components/sections/FeaturedBooksSection";
import WordOfMonthSection from "@/components/sections/WordOfMonthSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import HomepageAd from "@/components/ui/HomepageAd";

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
