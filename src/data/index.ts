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

export const education: Education[] = [
  {
    degree: "B.S. in Information Technology",
    institution: "The University of Agriculture, Peshawar",
    location: "Peshawar, Pakistan",
    duration: "Nov 2022 - Present",
    description: "Currently pursuing a bachelor's degree in Information Technology with focus on programming and software development.",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "National College of Management Science",
    location: "Peshawar, Pakistan",
    duration: "Jan 2023 - Jan 2024",
    description: "Completed diploma program covering core IT concepts and technologies."
  },
  {
    degree: "Python for Data Science and AI Training",
    institution: "Saylani Trust SMIT",
    location: "Peshawar, Pakistan",
    duration: "Jan 2024 - Present",
    description: "Specialized training in Python programming for data science and artificial intelligence applications."
  }
];

export const experiences: Experience[] = [
  {
    title: "AI Engineer",
    company: "Saylani Welfare Trust",
    location: "Peshawar, Pakistan",
    duration: "Jan 2023 - Aug 2024",
    description: "Designed and implemented machine learning algorithms for NLP tasks, enhancing text analysis and automation. Developed AI models for image recognition and object detection. Collaborated with cross-functional teams to integrate AI solutions into existing products.",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP"],
  },
  {
    title: "Data Science",
    company: "Code Alpha",
    location: "Peshawar, Pakistan",
    duration: "Jan 2024 - Aug 2024",
    description: "Assisted in the development and optimization of AI/ML models for real-world applications. Worked with large-scale datasets for training and evaluation. Collaborated with data science team to improve model performance and documented research findings.",
    technologies: ["Python", "Machine Learning", "Deep Learning", "NLP", "Data Analysis"],
  },
  {
    title: "Python for Data Science and AI – Trainee",
    company: "Saylani Trust (SMIT)",
    location: "Peshawar, Pakistan",
    duration: "Jan 2023 - Jan 2025",
    description: "Enhanced skills in Python programming for data science and AI. Gained hands-on experience in data manipulation, visualization, and machine learning techniques. Worked on practical projects applying theoretical knowledge to real-world problems.",
    technologies: ["Python", "Data Science", "Machine Learning", "AI", "Data Visualization"],
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 95, category: "Programming Languages" },
  { name: "SQL", level: 90, category: "Programming Languages" },
  { name: "HTML/CSS", level: 85, category: "Programming Languages" },
  { name: "PHP", level: 80, category: "Programming Languages" },
  
  // Frameworks & Tools
  { name: "TensorFlow", level: 92, category: "Machine Learning" },
  { name: "PyTorch", level: 88, category: "Machine Learning" },
  { name: "Keras", level: 90, category: "Machine Learning" },
  { name: "Scikit-learn", level: 90, category: "Machine Learning" },
  { name: "FastAI", level: 85, category: "Machine Learning" },
  
  // Development Tools
  { name: "Jupyter Notebook", level: 95, category: "Data Science" },
  { name: "Git", level: 88, category: "Cloud & DevOps" },
  { name: "Docker", level: 85, category: "Cloud & DevOps" },
  { name: "VS Code", level: 90, category: "Programming Languages" },
  
  // Libraries
  { name: "NumPy", level: 92, category: "Data Science" },
  { name: "Pandas", level: 95, category: "Data Science" },
  { name: "Matplotlib", level: 90, category: "Data Science" },
  { name: "Seaborn", level: 88, category: "Data Science" },
  { name: "NLTK", level: 85, category: "Machine Learning" },
  { name: "OpenCV", level: 88, category: "Machine Learning" },
  { name: "Transformers", level: 85, category: "Machine Learning" }
];

export const certifications: Certification[] = [
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI",
    date: "Jan 2025",
    url: "https://coursera.org/verify/specialization/NJPZ2R20FCSA"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "Feb 2025",
    url: "https://coursera.org/verify/specialization/CWU4WHN4M9B"
  },
  {
    name: "Data Analytics and Business Intelligence",
    issuer: "DigiSkills.pk",
    date: "Feb 2024",
    url: "https://digiskills.pk/verify"
  },
  {
    name: "AI Python for Beginners",
    issuer: "DeepLearning.AI",
    date: "2023",
    url: "https://www.deeplearning.ai/courses/ai-python-for-beginners/"
  }
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
    id: "bbc-news-classifier",
    title: "BBC News Article Classifier",
    description: "NLP model that classifies BBC news articles using TF-IDF, word embeddings, and deep learning. Integrated into an automated system for real-time news categorization.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "TensorFlow", "Scikit-Learn", "NLTK", "NLP"],
    category: ["Machine Learning", "Natural Language Processing"],
    githubUrl: "https://github.com/sajidrehman2/BBC-News-Article-Classifier/tree/main/BBC_headline_detector",
    featured: true,
  },
  {
    id: "pneumonia-detection",
    title: "Pneumonia Detection from X-ray Images",
    description: "Deep learning system using CNN architectures (e.g., VGG16, ResNet) to detect pneumonia from chest X-rays. Enhanced with data augmentation and deployed for clinical support.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["TensorFlow", "OpenCV", "Python", "Keras", "NumPy"],
    category: ["Deep Learning", "Computer Vision", "Machine Learning"],
    githubUrl: "https://github.com/sajidrehman2/pneumonia-detection-using-X-ray-images",
    featured: true,
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation Engine",
    description: "Built a hybrid recommendation system using collaborative and content-based filtering. Used matrix factorization and deep learning for personalized suggestions.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Pandas", "Scikit-Learn", "NumPy", "TensorFlow"],
    category: ["Machine Learning", "Deep Learning"],
    githubUrl: "https://github.com/sajidrehman2/Movierecomendationsystem",
  },
  {
    id: "loan-approval-predictor",
    title: "Loan Approval Predictor",
    description: "ML model that predicts loan approvals using applicant data. Achieved high accuracy with XGBoost and feature engineering for automated financial screening.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["XGBoost", "Scikit-Learn", "Python", "Pandas", "NumPy"],
    category: ["Machine Learning", "Predictive Analytics"],
    githubUrl: "https://github.com/sajidrehman2/Data-science-and-Machine-learning-project/tree/main/Project%20of%20LoanApproval%20Prediction",
  },
  {
    id: "diabetes-prediction",
    title: "Diabetes Prediction System",
    description: "Machine learning model to predict diabetes risk using patient health data. Implemented multiple algorithms for comparison and achieved high accuracy.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    category: ["Machine Learning", "Predictive Analytics"],
    githubUrl: "https://github.com/sajidrehman2/Diabetes-Prediction",
  },
  {
    id: "spotify-trackers",
    title: "Spotify Track Analysis",
    description: "Analysis and visualization of Spotify track features, identifying patterns in popular music and creating insights for music producers.",
    image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Data Analysis"],
    category: ["Data Visualization", "Machine Learning"],
    githubUrl: "https://github.com/sajidrehman2/Data-science-and-Machine-learning-project/tree/main/Project%20of%20Spotify%20Trackers",
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    description: "Advanced regression model for predicting house prices using multiple features. Implemented feature engineering and ensemble methods for improved accuracy.",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "NumPy"],
    category: ["Machine Learning", "Predictive Analytics"],
    githubUrl: "https://github.com/sajidrehman2/Data-science-and-Machine-learning-project/tree/main/HousePrice%20Prediction",
  },
  {
    id: "cement-strength",
    title: "Cement Strength Predictor",
    description: "Machine learning model to predict cement strength based on composition and environmental factors. Essential for construction quality control.",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Regression"],
    category: ["Machine Learning", "Predictive Analytics"],
    githubUrl: "https://github.com/sajidrehman2/Cement_strength",
  },
  {
    id: "digit-recognition",
    title: "Handwritten Digit Recognition",
    description: "CNN-based classifier for handwritten digits using the MNIST dataset. Achieved high accuracy with real-time prediction capability.",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["TensorFlow", "Keras", "Python", "NumPy", "OpenCV"],
    category: ["Deep Learning", "Computer Vision"],
    githubUrl: "https://github.com/sajidrehman2/Handwritten-Digit-Recognition",
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/sajidrehman2",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sajid-rehman-b14474265/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://x.com/SajidRe89262888",
    icon: "twitter",
  },
  {
    name: "Kaggle",
    url: "https://www.kaggle.com/itsajidrehman",
    icon: "bar-chart",
  },
  {
    name: "Medium",
    url: "https://medium.com/@username",
    icon: "feather",
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
  name: "Sajid Rehman",
  title: "AI Engineer & Data Scientist",
  tagline: "Building Intelligent Systems with Data & AI",
  email: "sajid.rehmanoffical95001@gmail.com",
  phone: "+923038047795",
  location: "Peshawar, Pakistan, 25000",
  bio: `I'm a passionate AI Engineer and Data Scientist with a growing track record in developing innovative machine learning and deep learning solutions. My work spans areas like computer vision, natural language processing, and predictive analytics, with a strong focus on building AI systems that address real-world challenges.

With a solid academic background and hands-on experience, I've contributed to projects involving data-driven decision-making, model deployment, and end-to-end AI pipelines. In just one year, I've had the opportunity to work on impactful projects and continuously sharpen my skills in both research and practical implementation.

I approach AI development with a blend of curiosity, creativity, and responsibility — aiming to build solutions that are not only effective but also ethical and interpretable. I'm especially passionate about using AI for positive impact in fields like healthcare, climate, and education. When I'm not working with data, I enjoy hiking, playing piano, and diving into the latest breakthroughs in tech and science.`,
  resumeUrl: "/resume.pdf"
};
