import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ExampleGalleryProps {
  designChoices: any;
  updateDesign: (key: string, value: any) => void;
  isQuickVersion: boolean;
}

// Example websites based on business type
const exampleWebsites = {
  restaurant: [
    {
      id: 'restaurant1',
      name: 'გურმანი',
      description: 'თანამედროვე რესტორნის ვებგვერდი მენიუთი და ჯავშნის ფუნქციით',
      image: '/images/examples/restaurant1.jpg',
      features: ['მენიუ', 'ჯავშანი', 'გალერეა', 'კონტაქტი']
    },
    {
      id: 'restaurant2',
      name: 'ტრადიციული სამზარეულო',
      description: 'ტრადიციული რესტორნის ვებგვერდი ისტორიით და სპეციალური შეთავაზებებით',
      image: '/images/examples/restaurant2.jpg',
      features: ['მენიუ', 'ისტორია', 'შეთავაზებები', 'მიმოხილვები']
    }
  ],
  retail: [
    {
      id: 'retail1',
      name: 'მოდის სახლი',
      description: 'თანამედროვე ონლაინ მაღაზია ტანსაცმლისთვის',
      image: '/images/examples/retail1.jpg',
      features: ['პროდუქტების კატალოგი', 'კალათა', 'გადახდა', 'ფილტრები']
    },
    {
      id: 'retail2',
      name: 'ტექნიკის სამყარო',
      description: 'ელექტრონიკის მაღაზია დეტალური პროდუქტის აღწერით',
      image: '/images/examples/retail2.jpg',
      features: ['პროდუქტების შედარება', 'მიმოხილვები', 'ტექნიკური სპეციფიკაციები', 'კალათა']
    }
  ],
  beauty: [
    {
      id: 'beauty1',
      name: 'სილამაზის ოაზისი',
      description: 'სილამაზის სალონის ვებგვერდი სერვისების ჩამონათვალით',
      image: '/images/examples/beauty1.jpg',
      features: ['სერვისები', 'ჯავშანი', 'გალერეა', 'სპეციალისტები']
    },
    {
      id: 'beauty2',
      name: 'ესთეტიკის ცენტრი',
      description: 'ესთეტიკური პროცედურების ცენტრის ვებგვერდი',
      image: '/images/examples/beauty2.jpg',
      features: ['პროცედურები', 'შედეგები', 'ჯავშანი', 'ბლოგი']
    }
  ],
  professional: [
    {
      id: 'professional1',
      name: 'იურიდიული მრჩეველი',
      description: 'იურიდიული ფირმის პროფესიონალური ვებგვერდი',
      image: '/images/examples/professional1.jpg',
      features: ['სერვისები', 'გუნდი', 'კლიენტები', 'კონტაქტი']
    },
    {
      id: 'professional2',
      name: 'ფინანსური მრჩეველი',
      description: 'ფინანსური კონსულტაციის ვებგვერდი',
      image: '/images/examples/professional2.jpg',
      features: ['სერვისები', 'კალკულატორები', 'შეხვედრის დაჯავშნა', 'ბლოგი']
    }
  ],
  tech: [
    {
      id: 'tech1',
      name: 'ინოვაციური სტარტაპი',
      description: 'ტექნოლოგიური სტარტაპის თანამედროვე ვებგვერდი',
      image: '/images/examples/tech1.jpg',
      features: ['პროდუქტი', 'ფუნქციები', 'ფასები', 'დემო']
    },
    {
      id: 'tech2',
      name: 'პროგრამული უზრუნველყოფა',
      description: 'პროგრამული უზრუნველყოფის კომპანიის ვებგვერდი',
      image: '/images/examples/tech2.jpg',
      features: ['პროდუქტები', 'დოკუმენტაცია', 'მხარდაჭერა', 'ფასები']
    }
  ]
};

// Default examples for any business type
const defaultExamples = [
  {
    id: 'default1',
    name: 'ბიზნეს შაბლონი',
    description: 'უნივერსალური ბიზნეს ვებგვერდის შაბლონი',
    image: '/images/examples/default1.jpg',
    features: ['მთავარი გვერდი', 'სერვისები', 'შესახებ', 'კონტაქტი']
  },
  {
    id: 'default2',
    name: 'პორტფოლიო შაბლონი',
    description: 'პროფესიონალური პორტფოლიოს ვებგვერდი',
    image: '/images/examples/default2.jpg',
    features: ['პროექტები', 'უნარები', 'გამოცდილება', 'კონტაქტი']
  }
];

const ExampleGallery: React.FC<ExampleGalleryProps> = ({ 
  designChoices, 
  updateDesign,
  isQuickVersion 
}) => {
  const [likedExamples, setLikedExamples] = useState<string[]>(
    designChoices.likedExamples || []
  );
  
  const [activeExample, setActiveExample] = useState<string | null>(null);
  const [likedElements, setLikedElements] = useState<{[key: string]: string[]}>({});

  const toggleLikedExample = (exampleId: string) => {
    const newLikedExamples = likedExamples.includes(exampleId)
      ? likedExamples.filter(id => id !== exampleId)
      : [...likedExamples, exampleId];
    
    setLikedExamples(newLikedExamples);
    updateDesign('likedExamples', newLikedExamples);
  };

  const toggleLikedElement = (exampleId: string, element: string) => {
    const currentElements = likedElements[exampleId] || [];
    const newElements = currentElements.includes(element)
      ? currentElements.filter(e => e !== element)
      : [...currentElements, element];
    
    setLikedElements({
      ...likedElements,
      [exampleId]: newElements
    });
  };

  // Get examples based on business type
  const getExamplesForBusinessType = () => {
    const businessType = designChoices.businessType;
    return businessType && exampleWebsites[businessType as keyof typeof exampleWebsites]
      ? exampleWebsites[businessType as keyof typeof exampleWebsites]
      : defaultExamples;
  };

  // Get placeholder style for example preview
  const getPlaceholderStyle = (id: string) => {
    const colors: {[key: string]: string} = {
      restaurant1: 'from-amber-200 to-red-200 dark:from-amber-900/30 dark:to-red-900/30',
      restaurant2: 'from-orange-200 to-amber-200 dark:from-orange-900/30 dark:to-amber-900/30',
      retail1: 'from-blue-200 to-indigo-200 dark:from-blue-900/30 dark:to-indigo-900/30',
      retail2: 'from-indigo-200 to-blue-200 dark:from-indigo-900/30 dark:to-blue-900/30',
      beauty1: 'from-pink-200 to-purple-200 dark:from-pink-900/30 dark:to-purple-900/30',
      beauty2: 'from-purple-200 to-pink-200 dark:from-purple-900/30 dark:to-pink-900/30',
      professional1: 'from-gray-200 to-blue-200 dark:from-gray-900/30 dark:to-blue-900/30',
      professional2: 'from-blue-200 to-gray-200 dark:from-blue-900/30 dark:to-gray-900/30',
      tech1: 'from-cyan-200 to-blue-200 dark:from-cyan-900/30 dark:to-blue-900/30',
      tech2: 'from-blue-200 to-cyan-200 dark:from-blue-900/30 dark:to-cyan-900/30',
      default1: 'from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700',
      default2: 'from-indigo-200 to-purple-200 dark:from-indigo-900/30 dark:to-purple-900/30'
    };
    
    return `bg-gradient-to-r ${colors[id] || 'from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700'}`;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Example preview component
  const ExamplePreview = ({ example }: { example: any }) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="p-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center">
          <h3 className="font-medium text-gray-800 dark:text-white">{example.name}</h3>
          <button 
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={() => setActiveExample(null)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className={`h-64 ${getPlaceholderStyle(example.id)} rounded-lg mb-6 flex items-center justify-center`}>
            <div className="text-center p-4">
              <div className="text-gray-800 dark:text-white font-medium mb-2">ვებგვერდის ვიზუალი</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">{example.description}</div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium text-gray-800 dark:text-white mb-3">მთავარი ელემენტები:</h4>
            <div className="grid grid-cols-2 gap-3">
              {example.features.map((feature: string) => (
                <div 
                  key={feature}
                  className={`p-3 rounded-lg cursor-pointer transition-colors flex items-center justify-between ${
                    likedElements[example.id]?.includes(feature)
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800'
                      : 'bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => toggleLikedElement(example.id, feature)}
                >
                  <span className="text-gray-800 dark:text-white">{feature}</span>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    likedElements[example.id]?.includes(feature)
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}>
                    {likedElements[example.id]?.includes(feature) && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <button 
              className={`px-4 py-2 rounded-lg flex items-center ${
                likedExamples.includes(example.id)
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
              }`}
              onClick={() => toggleLikedExample(example.id)}
            >
              <svg 
                className={`w-5 h-5 mr-2 ${
                  likedExamples.includes(example.id) ? 'text-indigo-500 fill-current' : 'text-gray-400'
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={likedExamples.includes(example.id) ? 0 : 2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                  fill={likedExamples.includes(example.id) ? 'currentColor' : 'none'}
                />
              </svg>
              {likedExamples.includes(example.id) ? 'მომწონს ეს მაგალითი' : 'მოწონება'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-4">
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        დაათვალიერეთ მსგავსი ბიზნესების ვებგვერდების მაგალითები. მონიშნეთ ის ელემენტები, რომლებიც მოგწონთ.
      </p>

      {activeExample ? (
        <ExamplePreview example={getExamplesForBusinessType().find(ex => ex.id === activeExample) || defaultExamples[0]} />
      ) : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {getExamplesForBusinessType().map((example) => (
            <motion.div
              key={example.id}
              className="rounded-xl overflow-hidden shadow-md cursor-pointer transition-all hover:-translate-y-1"
              onClick={() => setActiveExample(example.id)}
              variants={item}
            >
              <div className={`h-48 ${getPlaceholderStyle(example.id)} p-4 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-gray-800 dark:text-white font-medium mb-2">{example.name}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{example.description}</div>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-800 dark:text-white">მთავარი ელემენტები</h3>
                  <button 
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      likedExamples.includes(example.id)
                        ? 'bg-indigo-100 text-indigo-500 dark:bg-indigo-900/30 dark:text-indigo-300'
                        : 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-400'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLikedExample(example.id);
                    }}
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill={likedExamples.includes(example.id) ? 'currentColor' : 'none'} 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={likedExamples.includes(example.id) ? 0 : 2} 
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {example.features.map((feature: string) => (
                    <span 
                      key={feature}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Liked examples summary */}
      {likedExamples.length > 0 && !activeExample && (
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <h3 className="font-medium text-gray-800 dark:text-white">მონიშნული მაგალითები</h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {likedExamples.map((exampleId) => {
                const example = [...Object.values(exampleWebsites).flat(), ...defaultExamples]
                  .find(ex => ex.id === exampleId);
                
                if (!example) return null;
                
                return (
                  <div 
                    key={exampleId}
                    className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center mb-2">
                      <div className={`w-8 h-8 rounded-full mr-2 ${getPlaceholderStyle(example.id)} flex items-center justify-center`}>
                        <span className="text-xs font-medium text-gray-800 dark:text-white">{example.name.substring(0, 1)}</span>
                      </div>
                      <h4 className="font-medium text-gray-800 dark:text-white">{example.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{example.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {example.features.map((feature: string) => (
                        <span 
                          key={feature}
                          className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          მაგალითების დათვალიერება გეხმარებათ უკეთესი წარმოდგენა შეიქმნათ, თუ როგორი იქნება თქვენი საიტი. 
          მონიშნული ელემენტები გამოყენებული იქნება თქვენი დიზაინის შესაქმნელად.
        </p>
      </div>
    </div>
  );
};

export default ExampleGallery;
