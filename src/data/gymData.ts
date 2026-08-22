import { GymHours, ReviewItem, ProgramItem, FacilityItem, GalleryItem, FeatureItem } from '../types';

import heroImg from '../assets/images/guts_gym_hero_1787390051954.jpg';
import strengthImg from '../assets/images/guts_strength_area_1787390065535.jpg';
import freeweightsImg from '../assets/images/guts_freeweights_1787390079281.jpg';
import supplementsImg from '../assets/images/guts_supplements_1787390092621.jpg';
import exteriorImg from '../assets/images/guts_gym_exterior_1787390105631.jpg';

export const GYM_IMAGES = {
  hero: heroImg,
  strength: strengthImg,
  freeweights: freeweightsImg,
  supplements: supplementsImg,
  exterior: exteriorImg,
};

export const GYM_INFO = {
  name: 'GUTS GYM',
  tagline: 'FITNESS LOUNGE FOR LADIES & GENTS',
  phone: '+92 312 4102002',
  phoneClean: '+923124102002',
  address: '3rd Floor, Misaq ul Mall, Ashrafabad, Faisalabad, Pakistan',
  locationCode: 'F437+3W Faisalabad, Pakistan',
  rating: 4.7,
  reviewCount: 32,
  instagram: '@gutsgym',
  instagramUrl: 'https://www.instagram.com/gutsgym',
  facebook: 'Guts Gym Executive | Faisalabad',
  facebookUrl: 'https://www.facebook.com/gutsgymfaisalabad',
  mapsQuery: 'GUTS+GYM+Misaq+ul+Mall+Ashrafabad+Faisalabad',
  mapsDirectionsUrl: 'https://maps.google.com/?q=3rd+Floor+Misaq+ul+Mall+Ashrafabad+Faisalabad+Pakistan',
  city: 'Faisalabad',
  province: 'Punjab, Pakistan',
};

export const GYM_HOURS: GymHours[] = [
  { day: 'Saturday', hours: '6:00 AM – 12:00 AM', isClosed: false },
  { day: 'Sunday', hours: '6:00 AM – 12:00 AM', isClosed: false },
  { day: 'Monday', hours: '6:00 AM – 12:00 AM', isClosed: false },
  { day: 'Tuesday', hours: '6:00 AM – 12:00 AM', isClosed: false },
  { day: 'Wednesday', hours: '6:00 AM – 12:00 AM', isClosed: false },
  { day: 'Thursday', hours: '6:00 AM – 12:00 AM', isClosed: false },
  { day: 'Friday', hours: 'Closed', isClosed: true },
];

export const WHY_CHOOSE_ITEMS: FeatureItem[] = [
  {
    id: 'feat-1',
    title: 'Premium Equipment',
    description: 'Modern strength and fitness equipment for effective, ergonomic, and progressive training.',
    iconName: 'Dumbbell',
    stat: 'High-End Biomechanics',
  },
  {
    id: 'feat-2',
    title: 'Ladies & Gents',
    description: 'A welcoming, respectful, and high-standard fitness environment designed for both ladies and gents.',
    iconName: 'Users',
    stat: 'Dedicated Sections',
  },
  {
    id: 'feat-3',
    title: 'Extended Hours',
    description: 'Train on your own schedule from 6:00 AM until midnight (18 continuous hours) on open days.',
    iconName: 'Clock',
    stat: '6 AM – 12 AM',
  },
  {
    id: 'feat-4',
    title: 'Clean Environment',
    description: 'A spotless, continuously maintained, and sanitized training space ensuring hygiene and focus.',
    iconName: 'Sparkles',
    stat: 'Pristine Standards',
  },
  {
    id: 'feat-5',
    title: 'Serious Training',
    description: 'Built for individuals dedicated to improving raw strength, cardiovascular endurance, and physical conditioning.',
    iconName: 'Target',
    stat: 'Result Focused',
  },
  {
    id: 'feat-6',
    title: 'Premium Atmosphere',
    description: 'A modern dark interior with dramatic LED architectural lighting and an elite motivational energy.',
    iconName: 'Flame',
    stat: '3rd Floor Lounge',
  },
];

export const FACILITIES_ITEMS: FacilityItem[] = [
  {
    id: 'fac-1',
    title: 'Strength Training Area',
    description: 'Pin-selected and plate-loaded heavy machinery targeting every muscle group with optimal resistance curves.',
    image: strengthImg,
    tag: 'Strength Zone',
  },
  {
    id: 'fac-2',
    title: 'Free-Weight & Dumbbell Floor',
    description: 'Comprehensive range of heavy cast and urethane dumbbells, power racks, flat and incline benches.',
    image: freeweightsImg,
    tag: 'Free Weights',
  },
  {
    id: 'fac-3',
    title: 'Supplement & Nutrition Lounge',
    description: 'Backlit supplement display bar offering high-quality protein, pre-workouts, hydration, and nutritional guidance.',
    image: supplementsImg,
    tag: 'Nutrition Bar',
  },
  {
    id: 'fac-4',
    title: 'Modern Architecture & LED Lighting',
    description: 'Futuristic geometric ceiling lighting, acoustic insulation, dark rubber shock-absorbing floor and climate control.',
    image: heroImg,
    tag: 'Environment',
  },
  {
    id: 'fac-5',
    title: 'Mall Accessibility & Safe Parking',
    description: 'Conveniently situated on the 3rd Floor of Misaq ul Mall with elevator access, ample parking, and security.',
    image: exteriorImg,
    tag: 'Misaq ul Mall',
  },
];

export const PROGRAMS_ITEMS: ProgramItem[] = [
  {
    id: 'prog-1',
    title: 'Strength Training',
    tagline: 'Power & Kinetic Output',
    description: 'Build raw power, dense muscle fibers, and compound lifting performance with progressive overload principles.',
    target: 'Power, Bone Density & Structural Strength',
    intensity: 'High',
    features: ['Compound lift mastery', 'Plate-loaded machine isolation', 'Progressive loading protocols'],
  },
  {
    id: 'prog-2',
    title: 'Muscle Building',
    tagline: 'Hypertrophy & Physique',
    description: 'Structured training focused on progressive muscle development, symmetry, and metabolic tension.',
    target: 'Aesthetic Muscle Growth & Symmetry',
    intensity: 'Elite',
    features: ['Hypertrophy rep ranges', 'Time-under-tension focus', 'Segmented muscle group splits'],
  },
  {
    id: 'prog-3',
    title: 'Fat Loss & Conditioning',
    tagline: 'Stamina & High Energy Burn',
    description: 'High-density conditioning circuits and resistance pairings designed to burn fat while preserving lean tissue.',
    target: 'Body Recomposition & Stamina',
    intensity: 'High',
    features: ['High-tempo intervals', 'Metabolic conditioning', 'Lean mass preservation'],
  },
  {
    id: 'prog-4',
    title: 'General Fitness',
    tagline: 'Vitality & Daily Wellness',
    description: 'Build a healthier, stronger, more energetic lifestyle with sustainable functional movements.',
    target: 'Longevity, Mobility & Daily Energy',
    intensity: 'All Levels',
    features: ['Core and posture work', 'Cardiovascular endurance', 'Mobility & joint health'],
  },
  {
    id: 'prog-5',
    title: 'Beginner Training',
    tagline: 'Guided Foundation & Form',
    description: 'A welcoming, confidence-building starting point for newcomers to master proper biomechanics and routine.',
    target: 'Lifting Fundamentals & Confidence',
    intensity: 'Medium',
    features: ['Safe machine setup tutorial', 'Movement pattern coaching', 'Zero-intimidation pacing'],
  },
  {
    id: 'prog-6',
    title: 'Performance Training',
    tagline: 'Athletic Peak & Grit',
    description: 'For dedicated athletes and members who want to test their physical limits and break plateau boundaries.',
    target: 'Explosive Power & Peak Output',
    intensity: 'Elite',
    features: ['Speed-strength pairings', 'Advanced lifting variations', 'Athletic conditioning'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Fitness Floor & Geometric Lighting',
    category: 'Interior',
    image: heroImg,
    caption: 'Dramatic overhead LED geometric fixtures illuminating the main strength training floor.',
    aspect: 'aspect-[16/10]',
  },
  {
    id: 'gal-2',
    title: 'Precision Strength & Cable Stations',
    category: 'Strength',
    image: strengthImg,
    caption: 'High-grade pin-select resistance machines in signature matte black and crimson red.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'gal-3',
    title: 'Heavy Free-Weights & Dumbbell Rows',
    category: 'Free Weights',
    image: freeweightsImg,
    caption: 'Heavy dumbbell rows on vibration-dampening flooring under crisp linear light bars.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'gal-4',
    title: 'Supplement & Nutrition Lounge Station',
    category: 'Supplements',
    image: supplementsImg,
    caption: 'Backlit displays featuring authentic protein brands, pre-workouts, and workout essentials.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'gal-5',
    title: 'GUTS GYM Entrance — Misaq ul Mall',
    category: 'Lounge',
    image: exteriorImg,
    caption: 'Executive 3rd-floor entrance welcoming ladies and gents for high-performance training.',
    aspect: 'aspect-[16/9]',
  },
];

export const REVIEWS_ITEMS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Noisey Bug',
    rating: 5,
    date: 'Verified Google Review',
    text: 'I have been looking for a good Gym in Faisalabad. This one is looking awesome. I am planning to join here tomorrow.',
    source: 'Google Maps',
    initials: 'NB',
  },
  {
    id: 'rev-2',
    author: 'Mahmood Hussain',
    rating: 5,
    date: 'Verified Google Review',
    text: 'Very good gym. Neat and clean and well conditioned. Fee is too reasonable for such a gym. Highly recommended.',
    source: 'Google Maps',
    initials: 'MH',
  },
  {
    id: 'rev-3',
    author: 'Samra Noreen',
    rating: 5,
    date: 'Verified Google Review',
    text: 'Honestly, good gym. But, Please gym fees should be flexible and negotiable.',
    source: 'Google Maps',
    initials: 'SN',
  },
];
