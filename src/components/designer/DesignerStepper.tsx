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
        { id: 'businessType', title: 'ბიზნესის ტიპი', component: BusinessTypeSelector },
        { id: 'businessPersonality', title: 'ბიზნესის პერსონალობა', component: BusinessPersonality },
        { id: 'visualStyle', title: 'ვიზუალური სტილი', component: VisualStyleDesigner },
        { id: 'layoutArchitecture', title: 'განლაგების არქიტექტურა', component: LayoutArchitecture },
        { id: 'contentPriorities', title: 'კონტენტის პრიორიტეტები', component: ContentPriorities },
        { id: 'resultsBoard', title: 'შედეგების დაფა', component: ResultsBoard },
        { id: 'meetingScheduler', title: 'შეხვედრის დაგეგმვა', component: MeetingScheduler }
      ]
    : [
        { id: 'businessType', title: 'ბიზნესის ტიპი', component: BusinessTypeSelector },
        { id: 'businessPersonality', title: 'ბიზნესის პერსონალობა', component: BusinessPersonality },
        { id: 'visualStyle', title: 'ვიზუალური სტილი', component: VisualStyleDesigner },
        { id: 'layoutArchitecture', title: 'განლაგების არქიტექტურა', component: LayoutArchitecture },
        { id: 'contentPriorities', title: 'კონტენტის პრიორიტეტები', component: ContentPriorities },
        { id: 'interactiveFeatures', title: 'ინტერაქტიული ფუნქციები', component: InteractiveFeatures },
        { id: 'mobileExperience', title: 'მობილური გამოცდილება', component: MobileExperience },
        { id: 'userJourneyMap', title: 'მომხმარებლის მოგზაურობის რუკა', component: UserJourneyMap },
        { id: 'exampleGallery', title: 'მაგალითების გალერეა', component: ExampleGallery },
        { id: 'threeDMockup', title: '3D მაკეტი', component: ThreeDMockup },
        { id: 'specialNeeds', title: 'სპეციალური საჭიროებები', component: SpecialNeeds },
        { id: 'resultsBoard', title: 'შედეგების დაფა', component: ResultsBoard },
        { id: 'meetingScheduler', title: 'შეხვედრის დაგეგმვა', component: MeetingScheduler }
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
    <div className="max-w-6xl mx-auto">
      {/* Progress bar */}
      <div className="mb-12">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            ნაბიჯი {currentStep + 1} / {steps.length}
          </span>
          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {Math.round(((currentStep + 1) / steps.length) * 100)}% დასრულებული
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
      <MotionH2 
        className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        key={`title-${currentStep}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {steps[currentStep].title}
      </MotionH2>

      {/* Step content */}
      <AnimatePresence mode="wait">
        <MotionDiv
          key={`step-${currentStep}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 mb-8"
        >
          <CurrentStepComponent 
            designChoices={designChoices} 
            updateDesign={handleUpdateDesign} 
            isQuickVersion={isQuickVersion}
          />
        </MotionDiv>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <MotionButton
          className={`px-6 py-3 rounded-lg font-medium ${
            currentStep === 0 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700' 
              : 'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 dark:bg-gray-700 dark:text-indigo-400 dark:border-gray-600 dark:hover:bg-gray-600'
          }`}
          onClick={handlePrevious}
          disabled={currentStep === 0}
          whileHover={currentStep !== 0 ? { scale: 1.05 } : {}}
          whileTap={currentStep !== 0 ? { scale: 0.95 } : {}}
        >
          უკან
        </MotionButton>
        
        <MotionButton
          className={`px-6 py-3 rounded-lg font-medium ${
            currentStep === steps.length - 1
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
          onClick={handleNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {currentStep === steps.length - 1 ? 'დასრულება' : 'შემდეგი'}
        </MotionButton>
      </div>
    </div>
  );
};

export default DesignerStepper;
