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
    fullDetails: 'Established in 1992, Hillstar provides comprehensive general contracting services, ensuring technical precision and high-level project management for both residential and commercial buildings.'
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
    fullDetails: 'Hillstar is committed to renewable energy, offering solar installation and sustainable energy consulting to public and private sectors.'
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    icon: 'Palmtree',
    description: 'Creating world-class hospitality experiences and infrastructure.',
    fullDetails: 'From luxury hotels to boutique guesthouses, we design and build spaces that prioritize comfort and premium service.'
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
    type: 'ongoing'
  },
  {
    id: '3',
    name: 'Maitama Luxury Villa',
    location: 'Maitama, Abuja',
    description: 'Palatial villa in the heart of Abuja’s most prestigious neighborhood.',
    projectPeriod: 'Jun 2018 - Nov 2020',
    image: '/properties/3.jpg',
    type: 'completed'
  },
  {
    id: '4',
    name: 'Ikoyi Waterfront Apartment',
    location: 'Ikoyi, Lagos',
    description: 'Serene waterfront living in highly sought-after Ikoyi district.',
    projectPeriod: 'Jan 2024 - Present',
    image: '/properties/4.jpg',
    type: 'ongoing'
  },
  {
    id: '5',
    name: 'Eko Atlantic Executive Flat',
    location: 'Eko Atlantic City, Lagos',
    description: 'High-tech living in Africa’s fastest-growing business hub.',
    projectPeriod: 'Feb 2020 - Aug 2022',
    image: '/properties/5.jpg',
    type: 'completed'
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
