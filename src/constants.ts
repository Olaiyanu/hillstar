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
    fullDetails: 'Our engineering teams deliver robust telecommunications infrastructure solutions, from cell site construction to fiber optic deployment.'
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
    name: 'Lekki Pearl Estate',
    location: 'Lekki Phase 1, Lagos',
    price: '₦250,000,000',
    description: 'A masterpiece of modern architecture featuring smart home technology and premium finishes.',
    features: ['5 Bedrooms', 'Cinema Room', 'Swimming Pool', 'Smart Home'],
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000',
    type: 'completed'
  },
  {
    id: '2',
    name: 'Victoria Island Penthouse',
    location: 'Victoria Island, Lagos',
    price: '₦5,000,000/year',
    description: 'Luxurious penthouse with panoramic views of the Atlantic ocean.',
    features: ['3 Bedrooms', 'Ocean View', 'Private Gym', '24/7 Security'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000',
    type: 'ongoing'
  },
  {
    id: '3',
    name: 'Maitama Luxury Villa',
    location: 'Maitama, Abuja',
    price: '₦450,000,000',
    description: 'Palatial villa in the heart of Abuja’s most prestigious neighborhood.',
    features: ['7 Bedrooms', 'Guest Chalet', 'Underground Parking', 'Smart Security'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000',
    type: 'completed'
  },
  {
    id: '4',
    name: 'Ikoyi Waterfront Apartment',
    location: 'Ikoyi, Lagos',
    price: '₦8,500,000/year',
    description: 'Serene waterfront living in highly sought-after Ikoyi district.',
    features: ['4 Bedrooms', 'Boat Jetty', 'Club House', 'Green Area'],
    image: 'https://images.unsplash.com/photo-1600607687940-c52af036999b?q=80&w=1000',
    type: 'ongoing'
  },
  {
    id: '5',
    name: 'Eko Atlantic Executive Flat',
    location: 'Eko Atlantic City, Lagos',
    price: '₦350,000,000',
    description: 'High-tech living in Africa’s fastest-growing business hub.',
    features: ['3 Bedrooms', 'Automation', 'Sky Lounge', 'Infinite Pool'],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=1000',
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
