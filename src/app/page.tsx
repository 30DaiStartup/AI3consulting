import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  HeroSection,
  SocialProofSection,
  PainPointsSection,
  ROICalculator,
  CurriculumSection,
  HighAgencyQuiz,
  ComparisonTable,
  FAQSection,
  FinalCTASection,
} from "@/components/bootcamp";

export default function Home() {
  // In production, this would come from an API or database
  const availableSeats = 8;

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSection availableSeats={availableSeats} />

        {/* Social Proof - Testimonial immediately after hero */}
        <SocialProofSection />

        {/* Pain Points - The problems we solve */}
        <PainPointsSection />

        {/* ROI Calculator - Interactive tool */}
        <ROICalculator />

        {/* Curriculum - 3-day breakdown */}
        <CurriculumSection />

        {/* Quiz - High-agency assessment */}
        <HighAgencyQuiz />

        {/* Comparison Table - Old way vs new way */}
        <ComparisonTable />

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA */}
        <FinalCTASection availableSeats={availableSeats} />
      </main>
      <Footer />
    </>
  );
}
