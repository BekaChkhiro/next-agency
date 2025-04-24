import React from 'react';
import { Metadata } from 'next';
import DesignerNavigation from '@/components/designer/DesignerNavigation';
import DesignerStepper from '@/components/designer/DesignerStepper';

export const metadata: Metadata = {
  title: 'სრული ვებგვერდის დიზაინერი',
  description: 'შექმენით თქვენი ვებგვერდი დეტალური პერსონალიზაციით',
};

export default function FullDesignerPage() {
  return (
    <div className="min-h-screen">
      <DesignerNavigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          სრული ვებგვერდის დიზაინერი
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          გაიარეთ დეტალური ნაბიჯები თქვენი იდეალური ვებგვერდის შესაქმნელად. ეს პროცესი დაახლოებით 10-15 წუთს წაიღებს.
        </p>
        
        <DesignerStepper isQuickVersion={false} />
      </main>
    </div>
  );
}
