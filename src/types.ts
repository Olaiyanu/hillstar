export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  fullDetails: string;
}

export interface Property {
  id: string;
  name: string;
  location: string;
  price: string;
  description: string;
  features: string[];
  image: string;
  type: 'buy' | 'rent';
}

export interface NavItem {
  label: string;
  href: string;
}
