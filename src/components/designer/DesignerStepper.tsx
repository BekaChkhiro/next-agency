'use client';

import React, { useState } from 'react';
import { DesignChoices, UpdateDesignFunction } from '@/types/designTypes';
import { AnimatePresence } from '@/components/motion';
import MotionDiv from '@/components/motion/MotionDiv';
import MotionH2 from '@/components/motion/MotionH2';
import MotionButton from '@/components/motion/MotionButton';
import BusinessTypeSelector from './steps/BusinessTypeSelector';
import BusinessPersonality from './steps/BusinessPersonality';
import VisualStyleDesigner from './steps/VisualStyleDesigner';
import LayoutArchitecture from './steps/LayoutArchitecture';
import ContentPriorities from './steps/ContentPriorities';
import InteractiveFeatures from './steps/InteractiveFeatures';
import MobileExperience from './steps/MobileExperience';
import UserJourneyMap from './steps/UserJourneyMap';
import ExampleGallery from './steps/ExampleGallery';
import ThreeDMockup from './steps/ThreeDMockup';
import SpecialNeeds from './steps/SpecialNeeds';
import ResultsBoard from './steps/ResultsBoard';
import MeetingScheduler from './steps/MeetingScheduler';

interface DesignerStepperProps {
  isQuickVersion: boolean;
}

const DesignerStepper: React.FC<DesignerStepperProps> = ({ isQuickVersion }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [designChoices, setDesignChoices] = useState<DesignChoices>({
    businessType: '',
    businessPersonality: '',
    colorPalette: '',
    fontPair: '',
    photoStyle: '',
    layoutType: '',
    navigationStyle: '',
    contentPriorities: [],
    interactiveFeatures: [],
    mobileSettings: {},
    likedExamples: [],
    specialNeeds: []
  });

  // Define steps based on version
  const steps = isQuickVersion 
    ? [
        { id: 'businessType', title: 'Business Type', component: BusinessTypeSelector },
        { id: 'businessPersonality', title: 'Business Personality', component: BusinessPersonality },
        { id: 'visualStyle', title: 'Visual Style', component: VisualStyleDesigner },
        { id: 'layoutArchitecture', title: 'Layout Architecture', component: LayoutArchitecture },
        { id: 'contentPriorities', title: 'Content Priorities', component: ContentPriorities },
        { id: 'resultsBoard', title: 'Results Board', component: ResultsBoard },
        { id: 'meetingScheduler', title: 'Meeting Scheduler', component: MeetingScheduler }
      ]
    : [
        { id: 'businessType', title: 'Business Type', component: BusinessTypeSelector },
        { id: 'visualStyle', title: 'Visual Style', component: VisualStyleDesigner },
        { id: 'specialNeeds', title: 'Special Needs', component: SpecialNeeds },
        { id: 'meetingScheduler', title: 'Meeting Scheduler', component: MeetingScheduler }
      ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleUpdateDesign = (key: string, value: unknown) => {
    setDesignChoices(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Progress bar */}
      <div className="mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:justify-between mb-2 gap-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Step {currentStep + 1} / {steps.length}
          </span>
          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div 
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step title */}
      

      {/* Step content */}
      <AnimatePresence mode="wait">
        <MotionDiv
          key={`step-${currentStep}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 overflow-hidden"
        >
          <CurrentStepComponent 
            designChoices={designChoices} 
            updateDesign={handleUpdateDesign} 
            isQuickVersion={isQuickVersion}
          />
        </MotionDiv>
      </AnimatePresence>

      {/* Navigation buttons - sticky at the bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-4 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-row justify-between gap-4">
          <MotionButton
            className={`flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium ${
              currentStep === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700' 
                : 'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 dark:bg-gray-700 dark:text-indigo-400 dark:border-gray-600 dark:hover:bg-gray-600'
            }`}
            onClick={handlePrevious}
            disabled={currentStep === 0}
            whileHover={currentStep !== 0 ? { scale: 1.05 } : {}}
            whileTap={currentStep !== 0 ? { scale: 0.95 } : {}}
          >
            Back
          </MotionButton>
          
          <MotionButton
            className={`flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium ${
              currentStep === steps.length - 1
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
            onClick={handleNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
          </MotionButton>
        </div>
      </div>
      
      {/* Add padding to the bottom to prevent content from being hidden behind the sticky buttons */}
      <div className="pb-24 sm:pb-20"></div>
    </div>
  );
};

export default DesignerStepper;
