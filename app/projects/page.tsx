import ProjectsHero from '@/components/ProjectsHero';
import ProjectsListSection from '@/components/ProjectsListSection';
import ProjectsGallerySection from '@/components/ProjectsGallerySection';

export const metadata = {
  title: 'Our Projects | Bingodee Co. Ltd.',
  description: 'View our portfolio of mining, civil engineering and industrial infrastructure projects across Ghana.',
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <ProjectsHero />
      <ProjectsListSection />
      <ProjectsGallerySection />
    </div>
  );
}
