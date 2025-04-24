import HeroSection from '@/components/landing/HeroSection';
import ExperienceSelector from '@/components/landing/ExperienceSelector';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main>
        <HeroSection />
        <ExperienceSelector />
      </main>
    </div>
  );
}
