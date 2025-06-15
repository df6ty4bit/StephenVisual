// You'll need to add your actual images to src/assets/
// For demonstration, these are placeholder imports.
// Replace them with your actual image paths.
import wedding1 from '../assets/wedding1.jpg'; // Create src/assets/wedding1.jpg
import portrait1 from '../assets/portrait1.jpg'; // Create src/assets/portrait1.jpg
import corporate1 from '../assets/corporate1.jpg'; // Create src/assets/corporate1.jpg
import product1 from '../assets/product1.jpg'; // Create src/assets/product1.jpg
import editing1 from '../assets/editing1.jpg'; // Create src/assets/editing1.jpg

const portfolioItems = [
  {
    id: 1,
    title: 'Grand Nigerian Wedding',
    category: 'Weddings',
    image: wedding1,
    description: 'Capturing the vibrant colors and joyous moments of a traditional Nigerian wedding.',
  },
  {
    id: 2,
    title: 'Professional Headshot',
    category: 'Portraits',
    image: portrait1,
    description: 'Crisp and engaging headshots for professional profiles and personal branding.',
  },
  {
    id: 3,
    title: 'Corporate Event Coverage',
    category: 'Corporate Events',
    image: corporate1,
    description: 'Comprehensive photography for conferences, seminars, and corporate gatherings.',
  },
  {
    id: 4,
    title: 'E-commerce Product Photography',
    category: 'Product Photography',
    image: product1,
    description: 'High-quality images designed to highlight product details for online stores.',
  },
  {
    id: 5,
    title: 'Advanced Photo Retouching',
    category: 'Photo Editing',
    image: editing1,
    description: 'Bringing out the best in every image with professional retouching techniques.',
  },
  {
    id: 6,
    title: 'Traditional Engagement',
    category: 'Weddings',
    image: 'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Engagement', // Placeholder
    description: 'Documenting the beauty and cultural richness of traditional engagement ceremonies.',
  },
  {
    id: 7,
    title: 'Family Photoshoot',
    category: 'Portraits',
    image: 'https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Family', // Placeholder
    description: 'Creating timeless memories with heartfelt family portraits.',
  },
  {
    id: 8,
    title: 'Brand Launch Event',
    category: 'Corporate Events',
    image: 'https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Launch', // Placeholder
    description: 'Capturing the excitement and energy of brand new product launches.',
  },
  {
    id: 9,
    title: 'Fashion Editorial Editing',
    category: 'Photo Editing',
    image: 'https://via.placeholder.com/600x400/FFFF33/333333?text=Fashion+Edit', // Placeholder
    description: 'Elevating fashion photography with expert color grading and retouching.',
  },
  {
    id: 10,
    title: 'Food Photography',
    category: 'Product Photography',
    image: 'https://via.placeholder.com/600x400/33FFFF/333333?text=Food', // Placeholder
    description: 'Appetizing images for menus, websites, and culinary publications.',
  },
];

export default portfolioItems;
