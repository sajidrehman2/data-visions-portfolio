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

  // Updated Machine Learning skills
  { name: "Python", level: 95, category: "Machine Learning" },
  { name: "Deep Learning", level: 90, category: "Machine Learning" },
  { name: "Data Analysis", level: 88, category: "Machine Learning" },
  
  // New Machine Learning skills
  { name: "Natural Language Processing", level: 85, category: "Machine Learning" },
  { name: "Deep Learning", level: 90, category: "Machine Learning" },
  { name: "Neural Networks", level: 85, category: "Machine Learning" },
  { name: "Data Analysis", level: 88, category: "Machine Learning" },
  { name: "TensorFlow", level: 92, category: "Machine Learning" },
  { name: "Python", level: 95, category: "Machine Learning" },
];

export const experiences: Experience[] = [
  {
    title: "AI Engineer",
    company: "Saylani Welfare Trust",
    location: "Remote",
    duration: "Jan 2023 - Apr 2024",
    description: "Worked on developing machine learning models for natural language processing and computer vision tasks, including sentiment analysis, text classification, and image recognition. Improved model accuracy through advanced feature engineering and hyperparameter tuning. Collaborated with product and engineering teams to integrate AI solutions into existing systems, enhancing automation and functionality.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "OpenCV", "NLTK"],
  },
  {
    title: "AI Engineer",
    company: "Code Alpha",
    location: "Peshawar, Pakistan",
    duration: "Jan 2025 - Present",
    description: "Assisting in the development and optimization of AI/ML models for real-world applications. Working with large-scale datasets for training and evaluation, and implementing deep learning and NLP techniques to support various AI solutions. Collaborating closely with the data science team to improve model performance and ensure accurate results. Responsible for documenting research findings and regularly presenting progress to stakeholders.",
    technologies: ["Python", "PyTorch", "TensorFlow", "Pandas", "Hugging Face Transformers"],
  },
  {
    title: "Python for Data Science and AI – Trainee",
    company: "Saylani Trust (SMIT)",
    location: "Peshawar, Pakistan",
    duration: "Jan 2024 – Present",
    description: "Currently enhancing skills in Python programming for data science and artificial intelligence. Gaining hands-on experience in data manipulation, visualization, machine learning, and AI techniques. Working on practical projects to apply theoretical knowledge in solving real-world problems using Python.",
    technologies: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
  },
  {
    title: "Machine Learning & Deep Learning Projects – Independent Work",
    company: "Remote / Online",
    location: "Remote",
    duration: "2024 – Present",
    description: "Working on a variety of machine learning and deep learning projects to strengthen practical skills in real-world applications. Projects span areas like natural language processing, computer vision, and predictive analytics. Focused on building, training, and evaluating models using industry-standard tools and frameworks. Sharing completed work, code, and insights on GitHub and LinkedIn to engage with the AI community and showcase technical growth.",
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Hugging Face", "Jupyter Notebooks"],
  },
];

export const education: Education[] = [
  {
    degree: "B.S. in Information Technology",
    institution: "The University of Agriculture, Peshawar",
    location: "Peshawar, Pakistan",
    duration: "Nov 2022 – Present",
    description: "Currently pursuing a bachelor's degree with a focus on programming, data science, machine learning, and software development. Coursework includes hands-on projects, data analysis, cloud computing, and software engineering, preparing for a dynamic career in the tech industry.",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "National College of Management Sciences",
    location: "Pakistan",
    duration: "Jan 2023 – Jan 2024",
    description: "Completed a comprehensive diploma program covering programming, networking, databases, and system administration. Gained a strong technical foundation and practical skills to support further academic and professional growth in IT and AI-related fields.",
  },
  {
    degree: "Secondary Education",
    institution: "Paradise Children Academy, Sarozai Hangu",
    location: "Hangu, Pakistan",
    duration: "",
    description: "Completed foundational studies, including mathematics, science, and computer studies, establishing a solid academic base for future education in technology and engineering.",
  },
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
