import ProductsHero from '@/components/ProductsHero';
import ProductsListSection from '@/components/ProductsListSection';
import ProductsGallerySection from '@/components/ProductsGallerySection';

export const metadata = {
  title: 'Our Products | Bingodee Co. Ltd.',
  description: 'View our comprehensive range of industrial products for mining, civil engineering and infrastructure sectors across Ghana.',
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <ProductsHero />
      <ProductsListSection />
      <ProductsGallerySection />
    </div>
  );
}
