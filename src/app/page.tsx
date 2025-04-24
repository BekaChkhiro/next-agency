import HeroSection from '@/components/landing/HeroSection';
import ExperienceSelector from '@/components/landing/ExperienceSelector';
import FeatureSection from '@/components/landing/FeatureSection';
import ExamplesSection from '@/components/landing/ExamplesSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main>
        <HeroSection />
        <FeatureSection />
        <ExperienceSelector />
        <ExamplesSection />
      </main>
    </div>
  );
}
