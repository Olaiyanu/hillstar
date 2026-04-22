import { Service, Property, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Properties', href: '/properties' },
  { label: 'Contact', href: '/#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'general-contracting',
    title: 'General Contracting',
    icon: 'Building2',
    description: 'Expert oversight and management for diverse construction projects across Nigeria.',
    fullDetails: 'Hillstar provides expert oversight and project management for a wide range of construction and related projects across Nigeria. Through our comprehensive general contracting services, we combine technical precision, quality execution, and disciplined project management to deliver outstanding results for our clients.'
  },
  {
    id: 'real-estate-development',
    title: 'Real Estate Development',
    icon: 'Home',
    description: 'Developing high-end residential and commercial properties that redefine luxury.',
    fullDetails: 'We specialize in finding prime locations and transforming them into landmark developments that provide lasting value to homeowners and investors alike.'
  },
  {
    id: 'telecoms-infrastructure',
    title: 'Telecoms Infrastructure',
    icon: 'TowerControl',
    description: 'Building the backbone of Nigeria’s communication network with precision.',
    fullDetails: 'Our engineering teams deliver robust telecommunications infrastructure solutions, from site acquisitions, permitting, cell site construction to fiber optic deployment.'
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy',
    icon: 'Sun',
    description: 'Sustainable energy solutions for a greener, more self-reliant Nigeria.',
    fullDetails: 'Hillstar is committed to advancing renewable energy and green initiatives by driving sustainable development through clean, efficient, and dependable power solutions. We deliver low- and high-capacity renewable energy systems for homes, businesses, and institutions, helping to reduce electricity expenses, cut diesel costs, and enhance overall power reliability.'
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    icon: 'Palmtree',
    description: 'Creating world-class hospitality experiences and infrastructure.',
    fullDetails: 'Hillstar operates premium short-term rental apartments within our luxury development projects, thoughtfully curated to give guests the comfort and convenience of a hotel experience with so much more. Each residence is supported by 24/7 security, concierge services, professional cleaning services, gas cookers, microwaves, ovens, air conditioning, superfast internet, and cable TV. Through our intentional designs and attention to detail, we provide guests with exceptional comfort, elevated living, and truly memorable stays.'
  },
  {
    id: 'procurement-services',
    title: 'Procurement Services',
    icon: 'ShoppingCart',
    description: 'Strategic sourcing and supply chain solutions for large-scale projects.',
    fullDetails: 'We leverage our global network to procure high-quality materials and equipment, ensuring cost-efficiency and timely delivery for our clients.'
  }
];

export const PROPERTIES: Property[] = [
  {
    id: '1',
    name: 'HILLSTAR Court 1',
    location: 'Plot L37, Legacy Boulevard, Ocean Bay Estate, Lekki',
    description: 'Two (2) units of luxury 4-bedroom plus bq Semi Detached houses.',
    projectPeriod: 'Dec 2021 - September,2022',
    image: '/properties/1.jpg',
    type: 'completed'
  },
  {
    id: '2',
    name: 'HILLSTAR Court 2',
    location: 'Plot 19, Meadow WalkOcean Bay Estate, Lekki',
    description: 'Six (6) units of 4-bedroom Maisonettes and 4bedroom Pent House Apartments.',
    projectPeriod: 'September,2022 - December, 2023',
    image: '/properties/2.jpg',
    type: 'completed'
  },
  {
    id: '3',
    name: 'Paragon 1 Apartments a development by HILLSTAR',
    location: ' Land Masters Street, Freedom way, Lekki Phase 1',
    description: 'Twenty-Five (25) units of luxury One-, Two- and 3-bedroom apartments.',
    projectPeriod: 'September,2023 – July, 2025',
    image: '/properties/3.jpg',
    type: 'completed'
  },
  {
    id: '4',
    name: 'Paragon 1 Apartments a development by HILLSTAR',
    location: '7b Abeke Animashaun Street, Lekki Phase 1',
    description: 'Eight (8) units of luxury two (2) bedroom apartments.',
    projectPeriod: 'November,2024 – August, 2025',
    image: '/properties/4.jpg',
    type: 'completed'
  },
  {
    id: '5',
    name: 'Iwo Road Ultra Modern Market',
    location: ' Iwo Road, Ibadan North East Local Government, Oyo State',
    description: '450 Units of  commercial shops.',
    image: '/properties/5.jpg',
    type: 'ongoing',
    projectStart: 'October, 2025',
    projectType: 'Commercial',
    estimatedCompletionTime: 'September 2026'
  }
];

export const HERO_SLIDES = [
  {
    title: "Modern House Make Better Life",
    description: "From concept to completion, we deliver high-quality residential and commercial construction tailored to your needs"
  },
  {
    title: "Let Your Home Be Unique & Stylist",
    description: "From concept to completion, we deliver high-quality residential and commercial construction tailored to your needs"
  },
  {
    title: "Building Your Vision, Crafting with Precision",
    description: "From concept to completion, we deliver high-quality residential and commercial construction tailored to your needs"
  }
];

const FEATURED_IDS = ['1', '2', '3', '4'];

export const FEATURED_PROPERTIES = PROPERTIES.filter(p => 
  FEATURED_IDS.includes(p.id)
);
