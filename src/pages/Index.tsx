import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import PromoDeals from "@/components/PromoDeals";
import FeaturedBanner from "@/components/FeaturedBanner";
import ImpactStats from "@/components/ImpactStats";
import ProductCategories from "@/components/ProductCategories";
import Testimonials from "@/components/Testimonials";
import ValueGraph from "@/components/ValueGraph";
import SocialStoreLocator from "@/components/SocialStoreLocator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <PromoDeals />
      <PromoBanner />
      <FeaturedBanner />
      <ProductCategories />
      <ImpactStats />
      <ValueGraph />
      <Testimonials />
      <SocialStoreLocator />
      <Footer />
    </main>
  );
};

export default Index;
