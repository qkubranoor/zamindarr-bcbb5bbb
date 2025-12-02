import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import ServicesSection from "../components/ServicesSection";
import BlogSection from "../components/BlogSection";
import StatisticsSection from "../components/StatisticsSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategorySection />
      <ServicesSection />
      <BlogSection />
      <StatisticsSection />
      <Footer />
    </main>
  );
};

export default Index;
