export interface DesignChoices {
  businessType?: string;
  businessPersonality?: string;
  visualStyle?: {
    colorScheme?: string;
    typography?: string;
    imagery?: string;
  };
  layoutArchitecture?: string;
  contentPriorities?: string[];
  interactiveFeatures?: string[];
  mobileExperience?: string;
  specialNeeds?: string[];
  userJourney?: string;
  examplePreference?: string;
  [key: string]: any; // Fallback for any other properties
}

export type UpdateDesignFunction = (key: string, value: unknown) => void;
