
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
  { name: "LinkedIn AI", href: "/linkedin-ai-assistant" },
  { name: "Contact", href: "#contact" },
];

export const education: Education[] = [
  {
    degree: "Bachelors Information Technology",
    institution: "Agriculture university Peshawar",
    location: "Peshawar, Pakistan",
    duration: "Nov 2022 - Present",
    description: "Currently pursuing a bachelor's degree in Information Technology.",
  },
  {
    degree: "Diploma of Information Technology",
    institution: "National college of Management Science",
    location: "Peshawar, Pakistan",
    duration: "Jan 2023 - Jan 2024",
    description: "Completed diploma program covering core IT concepts and technologies."
  },
  {
    degree: "Python for Data science and AI",
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
    description: "Designed and implemented machine learning algorithms for natural language processing tasks, enhancing text analysis and automation. Developed AI models for image recognition and object detection, improving accuracy and efficiency in visual data processing. Collaborated with cross-functional teams to integrate AI solutions into existing products, streamlining workflows and enhancing functionality.",
    technologies: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
  },
  {
    title: "Data Science",
    company: "Code Alpha",
    location: "Peshawar, Pakistan",
    duration: "Jan 2024 - Aug 2024",
    description: "Assisting in the development and optimization of AI/ML models for real-world applications. Working with large-scale datasets for training and evaluation, and implementing deep learning and NLP techniques to support various AI solutions. Collaborating closely with the data science team to improve model performance and ensure accurate results. Responsible for documenting research findings and regularly presenting progress to stakeholders.",
    technologies: ["Python", "Machine Learning", "Deep Learning", "NLP", "Data Analysis"],
  },
  {
    title: "Python for Data Science and AI – Trainee",
    company: "Saylani Trust (SMIT)",
    location: "Peshawar, Pakistan",
    duration: "Jan 2023 - Jan 2025",
    description: "Currently enhancing skills in Python programming for data science and artificial intelligence. Gaining hands-on experience in data manipulation, visualization, machine learning, and AI techniques. Working on practical projects to apply theoretical knowledge in solving real-world problems using Python.",
    technologies: ["Python", "Data Science", "Machine Learning", "AI", "Data Visualization"],
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 95, category: "Programming Languages" },
  { name: "SQL (Postgres)", level: 90, category: "Programming Languages" },
  { name: "HTML/CSS", level: 85, category: "Programming Languages" },
  { name: "PHP", level: 80, category: "Programming Languages" },
  
  // Frameworks & Tools
  { name: "TensorFlow", level: 92, category: "Machine Learning" },
  { name: "PyTorch", level: 88, category: "Machine Learning" },
  { name: "Keras", level: 90, category: "Machine Learning" },
  { name: "FastAI", level: 85, category: "Machine Learning" },
  { name: "Scikit-learn", level: 90, category: "Machine Learning" },
  { name: "OpenCV", level: 88, category: "Machine Learning" },
  
  // Development Tools
  { name: "Jupyter Notebook", level: 95, category: "Data Science" },
  { name: "Google Colab", level: 92, category: "Data Science" },
  { name: "Anaconda", level: 88, category: "Data Science" },
  { name: "VS Code", level: 90, category: "Programming Languages" },
  { name: "PyCharm", level: 88, category: "Programming Languages" },
  { name: "Git", level: 88, category: "Cloud & DevOps" },
  { name: "Docker", level: 85, category: "Cloud & DevOps" },
  { name: "GitHub", level: 90, category: "Cloud & DevOps" },
  { name: "Kaggle Kernels", level: 85, category: "Data Science" },
  { name: "Spyder", level: 82, category: "Data Science" },
  
  // Libraries
  { name: "NumPy", level: 92, category: "Data Science" },
  { name: "Pandas", level: 95, category: "Data Science" },
  { name: "Matplotlib", level: 90, category: "Data Science" },
  { name: "Seaborn", level: 88, category: "Data Science" },
  { name: "NLTK", level: 85, category: "Machine Learning" },
  { name: "spaCy", level: 83, category: "Machine Learning" },
  { name: "Gensim", level: 80, category: "Machine Learning" },
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
    id: "linkedin-ai-assistant",
    title: "LinkedIn AI Assistant",
    description: "FastAPI-based AI tool that generates professional LinkedIn replies, summarizes conversations, and drafts messages in multiple tones and languages. Built with LLM integration, it provides smart, concise, and context-aware suggestions to enhance networking and communication efficiency.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "FastAPI", "LLM", "AI", "NLP"],
    category: ["Natural Language Processing", "Machine Learning"],
    githubUrl: "https://github.com/sajidrehman2/linkedin-ai-assistant",
    featured: true,
  },
  {
    id: "bbc-news-classifier",
    title: "BBC News Detection",
    description: "Developed an NLP-based model to classify BBC news articles. Trained the model with Python, scikit-learn, and TensorFlow/PyTorch. Improved accuracy through feature engineering and optimization. Automated the model for automated news classification.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "NLP"],
    category: ["Machine Learning", "Natural Language Processing"],
    githubUrl: "https://github.com/sajidrehman2/BBC-News-Article-Classifier/tree/main/BBC_headline_detector",
    featured: true,
  },
  {
    id: "pneumonia-detection",
    title: "Pneumonia Detection Using X-ray Images",
    description: "Developed a deep learning model to detect pneumonia from chest X-ray images. Used CNN architectures (e.g., VGG16, ResNet) for image classification. Trained the model using TensorFlow/Keras and OpenCV with a labeled dataset. Improved detection accuracy through data augmentation and hyperparameter tuning. Deployed the model for real-time diagnosis to assist in medical decision-making.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["TensorFlow", "Keras", "OpenCV", "Python", "CNN"],
    category: ["Deep Learning", "Computer Vision", "Machine Learning"],
    githubUrl: "https://github.com/sajidrehman2/pneumonia-detection-using-X-ray-images",
    featured: true,
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    description: "Developed a machine learning model to predict loan approval based on applicant data. Processed and analyzed key features like income, credit history, and loan amount. Improved accuracy through feature engineering and hyperparameter tuning. Deployed the model for automated eligibility assessment.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Logistic Regression", "Random Forest", "XGBoost"],
    category: ["Machine Learning", "Predictive Analytics"],
    githubUrl: "https://github.com/sajidrehman2/Movierecomendationsystem",
  },
  {
    id: "loan-approval-predictor",
    title: "Loan Approval Prediction",
    description: "Developed a machine learning model to predict loan approval based on applicant data. Processed and analyzed key features like income, credit history, and loan amount. Improved accuracy through feature engineering and hyperparameter tuning. Deployed the model for automated eligibility assessment.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Logistic Regression", "Random Forest", "XGBoost"],
    category: ["Machine Learning", "Predictive Analytics"],
    githubUrl: "https://github.com/sajidrehman2/Data-science-and-Machine-learning-project/tree/main/Project%20of%20LoanApproval%20Prediction",
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis on Product Reviews",
    description: "Developed an NLP model to analyze customer sentiment from product reviews using TF-IDF, Word2Vec, and LSTM models.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "TF-IDF", "Word2Vec", "LSTM", "NLP"],
    category: ["Natural Language Processing", "Machine Learning"],
    githubUrl: "",
  },
  {
    id: "fake-news-detector",
    title: "Fake News Detection",
    description: "Built an NLP-based classifier using Logistic Regression, Random Forest, and Transformers to detect fake news from articles.",
    image: "https://images.unsplash.com/photo-1590070585459-e5b3a84a4421?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Logistic Regression", "Random Forest", "Transformers"],
    category: ["Natural Language Processing", "Machine Learning"],
    githubUrl: "",
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
  bio: `I'm a passionate AI Engineer and Data Scientist with experience in developing innovative machine learning and deep learning solutions. My work spans areas like computer vision, natural language processing, and predictive analytics, with a strong focus on building AI systems that address real-world challenges.

With a solid academic background and hands-on experience, I've contributed to projects involving data-driven decision-making, model deployment, and end-to-end AI pipelines. I've had the opportunity to work on impactful projects and continuously sharpen my skills in both research and practical implementation.

I approach AI development with a blend of curiosity, creativity, and responsibility — aiming to build solutions that are not only effective but also ethical and interpretable. I'm especially passionate about using AI for positive impact in fields like healthcare, climate, and education. When I'm not working with data, I enjoy hiking, playing piano, and diving into the latest breakthroughs in tech and science.`,
  resumeUrl: "/resume.pdf"
};
