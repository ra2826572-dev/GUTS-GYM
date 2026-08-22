export interface GymHours {
  day: string;
  hours: string;
  isClosed: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  source: string;
  initials: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  target: string;
  intensity: 'Medium' | 'High' | 'Elite' | 'All Levels';
  features: string[];
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interior' | 'Strength' | 'Free Weights' | 'Supplements' | 'Lounge';
  image: string;
  caption: string;
  aspect?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  stat?: string;
}
