import { HomeSpace } from '../types';

export const HOME_SPACES: HomeSpace[] = [
  {
    id: 'living-room',
    name: 'Living Room',
    tagline: 'Warm Hospitality & Welcoming Grandeur',
    description: 'The social anchor of the residence. It demands an inviting, multi-dimensional fragrance that softens acoustics, complements natural materials, and makes guests feel instantaneously welcomed.',
    recommendedScents: ['AMBER NOIR', 'FIG & CEDAR'],
    recommendedDevice: "La Villa Architectural or L'Atelier Micro-Aroma",
    atmosphereGoal: 'Elevate gatherings with comforting warmth, refined depth, and effortless sophistication.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'bedroom',
    name: 'Master Bedroom',
    tagline: 'Deep Rest, Serenity & Intimate Sanctuary',
    description: 'A private retreat consecrated to restorative slumber and quiet morning rituals. Requires gentle, low-intensity notes that slow the pulse and soothe overstimulated senses.',
    recommendedScents: ['WHITE TEA', 'BLOOM'],
    recommendedDevice: "L'Atelier Micro-Aroma (Night Schedule Mode)",
    atmosphereGoal: 'Induce restorative peace through botanical tranquility and soft cashmere undertones.',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'walk-in-closet',
    name: 'Walk-in Closet & Dressing Suite',
    tagline: 'Haute Elegance & Fabric Preservation',
    description: 'An intimate sartorial gallery. SAVA BIEN waterless diffusion leaves fine cashmere, silks, and tailored suits scented with refined poise while leaving zero damp residue.',
    recommendedScents: ['BLOOM', 'FIG & CEDAR'],
    recommendedDevice: "L'Atelier Micro-Aroma (Discrete Shelf Placement)",
    atmosphereGoal: 'Infuse high-end wardrobe items with delicate, luxurious notes reminiscent of an haute couture dressing room.',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'entryway',
    name: 'Entryway & Foyer',
    tagline: 'The Decisive First Impression',
    description: 'The threshold between the frenetic outside world and your personal sanctuary. A vibrant, luminous scent creates an immediate psychological transition of coming home.',
    recommendedScents: ['BERGAMOT', 'WHITE TEA'],
    recommendedDevice: "L'Atelier Micro-Aroma or La Villa Architectural",
    atmosphereGoal: 'Deliver an uplifting sensory greeting the moment the residence door unlocks.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'private-office',
    name: 'Private Office & Library',
    tagline: 'Focus, Intellect & Timeless Prestige',
    description: 'Where executive decisions are made and quiet reflection occurs. Rich woods and green botanicals sharpen mental acuity while cultivating an atmosphere of timeless distinction.',
    recommendedScents: ['FIG & CEDAR', 'OUD'],
    recommendedDevice: "L'Atelier Micro-Aroma",
    atmosphereGoal: 'Sustain deep mental clarity, scholarly calm, and executive gravitas.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=85'
  }
];
