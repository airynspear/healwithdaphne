import stones from '../../public/images/stock-images/home/AdobeStock_2193331043.jpeg';
import flower from '../../public/images/stock-images/home/AdobeStock_917988277.jpeg';
import sunlight from '../../public/images/stock-images/home/AdobeStock_917988017.jpeg';

// Decorative stock scenes, not Daphne, her clients, or her office.
// strength: 0 = static, 1 = visually anchored; 0.8 cancels 80% of page movement.
export const homePhotography = [
  { image: stones, position: '48% 62%', mobilePosition: '43% 62%', height: '100vh', mobileHeight: '100svh', strength: 0.8, alt: '' },
  { image: flower, position: '57% 50%', mobilePosition: '56% 50%', height: '100vh', mobileHeight: '100svh', strength: 0.8, alt: '' },
  { image: sunlight, position: '40% 52%', mobilePosition: '44% 55%', height: '100vh', mobileHeight: '100svh', strength: 0.8, alt: '' },
] as const;
