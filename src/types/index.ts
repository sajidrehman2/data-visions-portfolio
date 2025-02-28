
export interface NavItem {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
  icon?: string;
}

export type SkillCategory = 
  | "Programming Languages"
  | "Machine Learning"
  | "Deep Learning"
  | "Data Science"
  | "Cloud & DevOps"
  | "Big Data";

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export type ProjectCategory = 
  | "All"
  | "Machine Learning"
  | "Deep Learning" 
  | "Computer Vision"
  | "Natural Language Processing"
  | "Data Visualization"
  | "Predictive Analytics";

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image?: string;
  text: string;
}
