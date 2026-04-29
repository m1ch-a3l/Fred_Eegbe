import HeroSection from "@/components/sections/HeroSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import FeaturedBooksSection from "@/components/sections/FeaturedBooksSection";
import MinistryImpactSection from "@/components/sections/MinistryImpactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WordOfMonthSection from "@/components/sections/WordOfMonthSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <FeaturedBooksSection />
      <MinistryImpactSection />
      <TestimonialsSection />
      <WordOfMonthSection />
      <NewsletterSection />
    </>
  );
}
