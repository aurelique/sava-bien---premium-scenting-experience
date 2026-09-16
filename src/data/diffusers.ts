import { DiffuserDevice } from '../types';

export const DIFFUSERS: DiffuserDevice[] = [
  {
    id: 'latelier-one',
    name: "L'Atelier Micro-Aroma",
    modelCode: 'SB-01 ATELIER',
    tagline: 'Sculptural waterless cold-air diffusion for intimate residences and boutique spaces.',
    coverageSqM: 80,
    coverageSqFt: 860,
    capacityMl: 120,
    technology: 'Sub-Micron Cold-Air Gas-Liquid Atomization (Dry Micro-Mist, <1µm)',
    controlMethod: 'Capacitive Touch & Bluetooth 5.2 Smart App Scheduling',
    noiseLevel: '< 24 dB (Whisper Silent)',
    dimensions: '88 mm ⌀ × 195 mm H',
    material: 'Aviation-Grade Anodized Aluminum with Sandblasted Champagne Finish',
    idealFor: ['Living Rooms', 'Master Bedrooms', 'Private Executive Offices', 'Entry Foyers'],
    description: 'The L’Atelier Micro-Aroma embodies pure understated minimalism. Utilizing SAVA BIEN patented waterless cold-air micronization, it transforms undiluted fragrance oil into an invisible, buoyant dry haze that lingers effortlessly without moisture, residue, or heat degradation.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85',
    features: [
      'Pure Cold-Air Waterless Diffusion (No water dilution, no mold risks)',
      'Dry Nano-Mist: Leaves zero residue on luxury furnishings, art, or fabrics',
      'Whisper-Quiet Acoustic Damping Chamber (< 24 dB)',
      'Smart Schedule: Tailor operating hours, mist intervals, and fragrance intensity',
      'Dual Power: Rechargeable Li-ion battery or continuous USB-C architectural tether'
    ]
  },
  {
    id: 'la-villa-arch',
    name: 'La Villa Architectural',
    modelCode: 'SB-02 VILLA',
    tagline: 'Monumental ambient dispersion engineered for high ceilings and expansive residences.',
    coverageSqM: 250,
    coverageSqFt: 2700,
    capacityMl: 500,
    technology: 'Dual-Chamber Cold-Air Pressure Atomizer with Dynamic Atmospheric Sensor',
    controlMethod: 'OLED Monolith Touch Display + SAVA BIEN Cloud & Home Automation (Matter/Zigbee)',
    noiseLevel: '< 28 dB (Virtually Undetectable)',
    dimensions: '140 mm W × 140 mm D × 320 mm H',
    material: 'Brushed Titanium Alloy and Honed Warm Travertine Base Plate',
    idealFor: ['Multi-Level Villas', 'Double-Height Living Rooms', 'Art Galleries', 'Wellness Sanctuaries'],
    description: 'Crafted for spaces with grand proportions, La Villa Architectural marries sculpture with fluid dynamics. Its dual-chamber cold-air pump pushes ultra-fine particles evenly across vast square footage while maintaining delicate olfactive nuance.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',
    features: [
      'Massive 250 m² (2,700 sq ft) uniform single-unit diffusion envelope',
      'Integrated Travertine ballast with magnetic vibration isolation',
      '500ml high-capacity reservoir (3 to 6 months of effortless luxury scenting)',
      'Smart Air Velocity Sensing: Auto-adjusts output based on room airflow and temperature',
      'Discrete architectural placement: tabletop monolith or flush concealed bracket'
    ]
  },
  {
    id: 'le-grand-commercial',
    name: 'Le Grand Commercial & HVAC',
    modelCode: 'SB-03 GRAND',
    tagline: 'Enterprise-tier cold-air diffusion system with seamless HVAC central duct integration.',
    coverageSqM: 1000,
    coverageSqFt: 10800,
    capacityMl: 1000,
    technology: 'Industrial Multi-Nozzle Cold Venturi Atomization with HVAC Central Duct Coupling',
    controlMethod: 'BMS Central Protocol, 4G / Wi-Fi Cloud Remote Portal & Multi-Zone Synchronizer',
    noiseLevel: '< 32 dB Standalone / 0 dB in HVAC Ducting',
    dimensions: '280 mm W × 160 mm D × 420 mm H',
    material: 'Seamless Monolithic Brushed Stainless Steel with Tamper-Resistant Security Lock',
    idealFor: ['Luxury Hotel Lobbies & Corridors', 'Boutique Resorts', 'Flagship Retail Stores', 'Corporate Headquarters'],
    description: 'The definitive solution for hospitality leaders and luxury brand flagships. Le Grand operates as either an imposing architectural totem in grand foyers or attaches directly to central AHU/HVAC ducts, delivering an impeccably uniform signature atmosphere across entire buildings.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=85',
    features: [
      'HVAC Central Integration: Scents entire floors or wings through existing climate air handling',
      'Multi-Zone Central Control: Program distinct olfactory schedules across different hotel floors',
      'Heavy-Duty German Engineered Micro-Pump with 10,000-hour continuous rated lifespan',
      'Keyed security lock and tamper-proof settings for public and commercial spaces',
      'Remote telemetry alerting our Concierge when fragrance oil levels require replenishment'
    ]
  }
];
