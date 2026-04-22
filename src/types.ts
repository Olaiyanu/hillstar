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
  description: string;
  projectPeriod?: string;
  image: string;
  type: 'completed' | 'ongoing';
  projectStart?: string;
  projectType?: string;
  estimatedCompletionTime?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
