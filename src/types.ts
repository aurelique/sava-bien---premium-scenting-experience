export interface Fragrance {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  family: string;
  mood: string;
  intensity: number; // 1 to 5
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  recommendedSpaces: string[];
  description: string;
  character: string;
  colorTone: string;
  image: string;
}

export interface DiffuserDevice {
  id: string;
  name: string;
  modelCode: string;
  tagline: string;
  coverageSqM: number;
  coverageSqFt: number;
  capacityMl: number;
  technology: string;
  controlMethod: string;
  noiseLevel: string;
  dimensions: string;
  material: string;
  idealFor: string[];
  description: string;
  image: string;
  features: string[];
}

export interface HomeSpace {
  id: string;
  name: string;
  tagline: string;
  description: string;
  recommendedScents: string[];
  recommendedDevice: string;
  atmosphereGoal: string;
  image: string;
}

export interface B2BIndustry {
  id: string;
  name: string;
  headline: string;
  description: string;
  impact: string;
  popularScents: string[];
  recommendedSetup: string;
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  title: string;
  property: string;
  category: 'Hotels' | 'Restaurants' | 'Retail' | 'Corporate' | 'Residential';
  quote: string;
  location: string;
  scentUsed: string;
}
