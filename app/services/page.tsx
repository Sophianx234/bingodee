import ServicesHero from '@/components/ServicesHero';
import ServicesListSection from '@/components/ServicesListSection';
import IndustrialSolutionsSection from '@/components/IndustrialSolutionsSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';

export const metadata = {
  title: 'Our Services',
  description: 'Explore our  engineering services and industrial procurement solutions.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <ServicesHero />
      <ServicesListSection />
      <IndustrialSolutionsSection />
      <HowWeWorkSection />
    </div>
  );
}
