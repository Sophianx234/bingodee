import AboutHero from '@/components/AboutHero';
import AboutStorySection from '@/components/AboutStorySection';
import AboutMissionVision from '@/components/AboutMissionVision';
import AboutValuesSection from '@/components/AboutValuesSection';
import AboutTeamSection from '@/components/AboutTeamSection';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Bingodee Company Limited and our decades of engineering excellence.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <AboutHero />
      <AboutStorySection />
      <AboutMissionVision />
      <AboutValuesSection />
      <AboutTeamSection />
    </div>
  );
}
