import { Testimonial } from '../types';

export const CLIENT_LOGOS = [
  { name: 'THE CARLTON PALACE', category: 'Hotels', emblem: 'C P' },
  { name: 'MAISON SAINT-HONORÉ', category: 'Retail', emblem: 'M S H' },
  { name: 'AMANTHA SANCTUARY & SPA', category: 'Hotels', emblem: 'A S' },
  { name: 'LUMINA ARCHITECTURE', category: 'Corporate', emblem: 'L A' },
  { name: 'LE VERANDAH RESTAURANT', category: 'Restaurants', emblem: 'L V' },
  { name: 'VILLA DUBAI PENTHOUSE', category: 'Residential', emblem: 'V D' },
  { name: 'SOVEREIGN PRIVATE CAPITAL', category: 'Corporate', emblem: 'S P' },
  { name: 'ATELIER NOIR BOUTIQUE', category: 'Retail', emblem: 'A N' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Jean-Luc de Villiers',
    title: 'Managing Director',
    property: 'The Carlton Palace Hotel & Spa',
    category: 'Hotels',
    location: 'Geneva, Switzerland',
    scentUsed: 'WHITE TEA & CUSTOM OUD ACCORD',
    quote: 'SAVA BIEN transformed our grand lobby. Guests frequently pause at reception specifically to ask about the scent before checking in. It has become our most remarked-upon invisible asset.'
  },
  {
    id: 'test-2',
    author: 'Elena Rostova',
    title: 'Principal Architect',
    property: 'Rostova Architectural Atelier',
    category: 'Corporate',
    location: 'Milan, Italy',
    scentUsed: 'FIG & CEDAR',
    quote: 'As architects, we obsess over light, travertine, and acoustic damping. SAVA BIEN added the final sensorial layer. The waterless diffusion is astonishingly silent, leaves zero residue, and feels purely bespoke.'
  },
  {
    id: 'test-3',
    author: 'Marcus Sterling',
    title: 'Head of Global Retail Experience',
    property: 'Maison Saint-Honoré Flagship',
    category: 'Retail',
    location: 'Paris, France',
    scentUsed: 'AMBER NOIR',
    quote: 'After integrating SAVA BIEN cold-air systems across our European boutiques, client dwell time increased significantly. The olfactory signature makes our stores feel like private luxury residences.'
  },
  {
    id: 'test-4',
    author: 'Clara & David van den Berg',
    title: 'Private Homeowners',
    property: 'Minimalist Cliffside Villa',
    category: 'Residential',
    location: 'Cap d’Antibes, France',
    scentUsed: 'BERGAMOT (Day) · AMBER NOIR (Evening)',
    quote: 'We replaced traditional scented candles and loud ultrasonic vaporizers with SAVA BIEN. The difference is night and day: crisp, elegant, pure fragrance that never overwhelms or causes headaches.'
  },
  {
    id: 'test-5',
    author: 'Chef Alessandro Rossi',
    title: 'Owner & Chef Patron',
    property: 'L’Arpège Riviera Lounge & Bistro',
    category: 'Restaurants',
    location: 'Monaco',
    scentUsed: 'BERGAMOT & CITRUS BOTANICAL',
    quote: 'Scenting a culinary venue is perilous, but SAVA BIEN understood the nuance perfectly. The foyer and cocktail lounge exude crisp sophistication without ever competing with the aromas from our open kitchen.'
  }
];
