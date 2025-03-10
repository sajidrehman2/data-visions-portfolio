
import { 
  NavItem, 
  Skill, 
  Experience, 
  Education, 
  Certification, 
  Project, 
  SocialLink, 
  Testimonial,
  ProjectCategory 
} from "@/types";

export const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 95, category: "Programming Languages" },
  { name: "R", level: 85, category: "Programming Languages" },
  { name: "SQL", level: 90, category: "Programming Languages" },
  { name: "JavaScript", level: 75, category: "Programming Languages" },
  
  // Machine Learning
  { name: "Scikit-Learn", level: 90, category: "Machine Learning" },
  { name: "XGBoost", level: 85, category: "Machine Learning" },
  { name: "Random Forest", level: 90, category: "Machine Learning" },
  { name: "SVM", level: 80, category: "Machine Learning" },
  
  // Deep Learning
  { name: "TensorFlow", level: 92, category: "Deep Learning" },
  { name: "PyTorch", level: 88, category: "Deep Learning" },
  { name: "Keras", level: 90, category: "Deep Learning" },
  { name: "CNNs", level: 88, category: "Deep Learning" },
  { name: "RNNs/LSTMs", level: 85, category: "Deep Learning" },
  { name: "Transformers", level: 82, category: "Deep Learning" },
  
  // Data Science
  { name: "Pandas", level: 95, category: "Data Science" },
  { name: "NumPy", level: 95, category: "Data Science" },
  { name: "Matplotlib", level: 90, category: "Data Science" },
  { name: "Seaborn", level: 88, category: "Data Science" },
  { name: "Jupyter", level: 95, category: "Data Science" },
  
  // Cloud & DevOps
  { name: "AWS", level: 85, category: "Cloud & DevOps" },
  { name: "GCP", level: 80, category: "Cloud & DevOps" },
  { name: "Docker", level: 85, category: "Cloud & DevOps" },
  { name: "Kubernetes", level: 75, category: "Cloud & DevOps" },
  { name: "CI/CD", level: 80, category: "Cloud & DevOps" },
  
  // Big Data
  { name: "Spark", level: 85, category: "Big Data" },
  { name: "Hadoop", level: 75, category: "Big Data" },
  { name: "Kafka", level: 70, category: "Big Data" },
];

export const experiences: Experience[] = [
  {
    title: "Senior AI Engineer",
    company: "TechVision AI",
    location: "San Francisco, CA",
    duration: "Jan 2021 - Present",
    description: "Leading the development of computer vision and NLP solutions for healthcare and retail clients. Architecting end-to-end machine learning pipelines and deploying models to production.",
    technologies: ["PyTorch", "TensorFlow", "AWS", "Docker", "Kubernetes"],
  },
  {
    title: "Data Scientist",
    company: "DataMind Analytics",
    location: "Boston, MA",
    duration: "Mar 2018 - Dec 2020",
    description: "Developed predictive models for financial services clients. Engineered features from large datasets and implemented ML algorithms that improved prediction accuracy by 35%.",
    technologies: ["Python", "Scikit-Learn", "SQL", "Tableau", "R"],
  },
  {
    title: "Machine Learning Engineer",
    company: "NextGen Solutions",
    location: "Seattle, WA",
    duration: "Jun 2016 - Feb 2018",
    description: "Built recommendation engines and sentiment analysis tools. Optimized algorithms for performance and scalability resulting in 45% faster inference times.",
    technologies: ["Python", "TensorFlow", "Keras", "MongoDB", "Flask"],
  },
];

export const education: Education[] = [
  {
    degree: "Ph.D. in Computer Science (Machine Learning Focus)",
    institution: "Stanford University",
    location: "Stanford, CA",
    duration: "2012 - 2016",
    description: "Dissertation on 'Deep Learning Approaches for Multi-modal Data Integration in Healthcare'",
  },
  {
    degree: "M.S. in Data Science",
    institution: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    duration: "2010 - 2012",
  },
  {
    degree: "B.S. in Computer Science and Mathematics",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    duration: "2006 - 2010",
  },
];

export const certifications: Certification[] = [
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2022",
    url: "https://www.tensorflow.org/certificate",
  },
  {
    name: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    date: "2021",
    url: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera (deeplearning.ai)",
    date: "2020",
    url: "https://www.coursera.org/specializations/deep-learning",
  },
  {
    name: "Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2019",
    url: "https://cloud.google.com/certification/data-engineer",
  },
];

export const projectCategories: ProjectCategory[] = [
  "All",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Data Visualization",
  "Predictive Analytics",
];

export const projects: Project[] = [
  {
    id: "medical-image-analysis",
    title: "Medical Image Analysis with Deep Learning",
    description: "A deep learning system that detects anomalies in medical imaging with 94% accuracy. Implemented using PyTorch and deployed as a web service for radiologists.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["PyTorch", "Python", "Flask", "Docker", "React"],
    category: ["Deep Learning", "Computer Vision", "Machine Learning"],
    githubUrl: "https://github.com/username/medical-image-analysis",
    demoUrl: "https://demo-medical-vision.example.com",
    featured: true,
  },
  {
    id: "nlp-sentiment-analysis",
    title: "Financial News Sentiment Analyzer",
    description: "NLP-based sentiment analysis tool that processes financial news to predict market trends with 78% accuracy. Uses transformer architecture and real-time data processing.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["TensorFlow", "BERT", "Python", "MongoDB", "AWS Lambda"],
    category: ["Natural Language Processing", "Deep Learning", "Machine Learning"],
    githubUrl: "https://github.com/username/finance-sentiment-analyzer",
    featured: true,
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation & Behavior Analysis",
    description: "Developed a clustering algorithm that segments customers based on behavior patterns, leading to a 25% increase in marketing campaign effectiveness.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Scikit-Learn", "Python", "SQL", "Tableau", "R"],
    category: ["Machine Learning", "Predictive Analytics", "Data Visualization"],
    githubUrl: "https://github.com/username/customer-segmentation",
  },
  {
    id: "reinforcement-learning-robotics",
    title: "Reinforcement Learning for Robotic Control",
    description: "Implemented deep reinforcement learning algorithms to teach robotic arms complex manipulation tasks in simulated environments.",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["PyTorch", "OpenAI Gym", "Python", "C++", "ROS"],
    category: ["Deep Learning", "Machine Learning"],
    githubUrl: "https://github.com/username/rl-robotics",
    demoUrl: "https://demo-robotics.example.com",
  },
  {
    id: "fraud-detection-system",
    title: "Real-time Fraud Detection System",
    description: "Built a real-time fraud detection system using anomaly detection and graph networks, processing millions of transactions daily with 99.7% accuracy.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["TensorFlow", "Apache Kafka", "Python", "Neo4j", "Spark"],
    category: ["Machine Learning", "Predictive Analytics"],
    githubUrl: "https://github.com/username/fraud-detection",
  },
  {
    id: "data-visualization-dashboard",
    title: "Interactive Data Visualization Dashboard",
    description: "Created an interactive dashboard that visualizes complex datasets for business intelligence, with customizable charts and real-time updates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["D3.js", "React", "Node.js", "MongoDB", "WebSockets"],
    category: ["Data Visualization"],
    githubUrl: "https://github.com/username/visualization-dashboard",
    demoUrl: "https://dashboard-demo.example.com",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/username",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/username",
    icon: "twitter",
  },
  {
    name: "Medium",
    url: "https://medium.com/@username",
    icon: "feather",
  },
  {
    name: "Kaggle",
    url: "https://kaggle.com/username",
    icon: "bar-chart",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead Data Scientist",
    company: "Innovate Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    text: "One of the most talented AI engineers I've had the pleasure to work with. Their innovative approach to problem-solving and deep technical knowledge made our project a tremendous success.",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    company: "TechFuture Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    text: "Their expertise in deep learning algorithms transformed our product. They have the rare ability to explain complex technical concepts in simple terms that everyone can understand.",
  },
  {
    name: "Emily Johnson",
    role: "VP of Engineering",
    company: "DataVision Analytics",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    text: "A remarkable talent in the AI field. Their contributions to our machine learning infrastructure have been invaluable, and their passion for continuous learning is truly inspirational.",
  },
];

export const personalInfo = {
  name: "Alex Morgan",
  title: "AI Engineer & Data Scientist",
  tagline: "Building Intelligent Systems with Data & AI",
  email: "contact@alexmorgan.ai",
  location: "San Francisco, CA",
  bio: `I'm a passionate AI Engineer and Data Scientist with over 8 years of experience developing cutting-edge machine learning and deep learning solutions. My expertise spans computer vision, natural language processing, and predictive analytics, with a focus on creating AI systems that solve real-world problems.

With a Ph.D. in Computer Science from Stanford University, I combine strong theoretical foundations with practical experience implementing and deploying AI solutions at scale. I've led teams that developed award-winning AI products and have published research in top-tier conferences like NeurIPS and ICML.

My approach to AI development is both rigorous and creative – I believe in building systems that are not only technically sound but also interpretable, ethical, and aligned with human values. I'm particularly interested in applications of AI in healthcare, sustainability, and education.

When I'm not training neural networks, you can find me hiking in the mountains, playing the piano, or exploring the latest developments in quantum computing.`,
  resumeUrl: "/resume.pdf"
};
