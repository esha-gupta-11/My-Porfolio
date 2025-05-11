export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  category: 'web' | 'mobile' | 'all';
  featured: boolean;
  details: {
    overview: string;
    challenges: string;
    solutions: string;
    features: string[];
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}