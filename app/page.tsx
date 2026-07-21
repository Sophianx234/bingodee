
import HomeHero from '@/components/HomeHero';
import TrustedSection from '@/components/TrustedSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import ServicesSection from '@/components/ServicesSection';
import WhyTrustedSection from '@/components/WhyTrustedSection';
import ProductsExpertiseSection from '@/components/ProductsExpertiseSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      
      <HomeHero />

      <TrustedSection />
      <WhoWeAreSection />
      <ServicesSection />
      <WhyTrustedSection />
      <ProductsExpertiseSection />
      <CTASection />

    </div>
  );
}
