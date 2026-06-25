
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
  | "Languages"
  | "ML/DL"
  | "NLP/LLM"
  | "Computer Vision"
  | "Tools & Cloud"
  // Legacy categories retained so existing data entries still type-check
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
  | "NLP/LLM"
  | "Computer Vision"
  | "Full-Stack"
  | "Data Analysis";

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
