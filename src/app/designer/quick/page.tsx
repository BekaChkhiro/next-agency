import React from 'react';
import { Metadata } from 'next';
import DesignerNavigation from '@/components/designer/DesignerNavigation';
import DesignerStepper from '@/components/designer/DesignerStepper';

export const metadata: Metadata = {
  title: 'Quick Website Designer',
  description: 'Create your website quickly and easily',
};

export default function QuickDesignerPage() {
  return (
    <div className="min-h-screen">
      <DesignerNavigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Quick Website Designer
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Follow simple steps to create your website. This process will take approximately 5-7 minutes.
        </p>
        
        <DesignerStepper isQuickVersion={true} />
      </main>
    </div>
  );
}
