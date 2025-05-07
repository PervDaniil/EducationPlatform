import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import AdvantagesSection from "@/components/advantages-section";
import FAQSection from "@/components/faq-section";
import FeedbackSection from "@/components/feedback-section";


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AdvantagesSection />
      <FeedbackSection />
      <FAQSection />
      <Footer />
    </>
  );
}
