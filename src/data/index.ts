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

// Import project images
import pizzaLlmBotImage from "@/assets/pizza-llm-bot.jpg";
import aiHrHiringAssistantImage from "@/assets/ai-hr-hiring-assistant.jpg";
import smartHostelManagerImage from "@/assets/smart-hostel-manager.jpg";
import sajidsAiDinerImage from "@/assets/sajids-ai-diner.jpg";

export const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
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
    description: "Designed and implemented machine learning algorithms for natural language processing tasks, enhancing text analysis and automation. Developed AI models for image recognition and object detection, improving accuracy and efficiency in visual data processing.",
    technologies: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
  },
  {
    title: "Data Science",
    company: "Code Alpha",
    location: "Peshawar, Pakistan",
    duration: "Jan 2024 - Aug 2024",
    description: "Assisting in the development and optimization of AI/ML models for real-world applications. Working with large-scale datasets and implementing deep learning and NLP techniques to support AI solutions.",
    technologies: ["Python", "Machine Learning", "Deep Learning", "NLP", "Data Analysis"],
  },
  {
    title: "Python for Data Science and AI – Trainee",
    company: "Saylani Trust (SMIT)",
    location: "Peshawar, Pakistan",
    duration: "Jan 2023 - Jan 2025",
    description: "Enhancing skills in Python programming for data science and AI. Hands-on experience in data manipulation, visualization, machine learning, and AI techniques through practical projects.",
    technologies: ["Python", "Data Science", "Machine Learning", "AI", "Data Visualization"],
  }
];

// Grouped skills (no progress bars, icon + label format handled by component)
export const skills: Skill[] = [
  // Languages
  { name: "Python", level: 95, category: "Languages", icon: "code" },
  { name: "SQL", level: 90, category: "Languages", icon: "database" },
  { name: "JavaScript", level: 80, category: "Languages", icon: "code-2" },

  // ML / DL
  { name: "TensorFlow", level: 92, category: "ML/DL", icon: "brain" },
  { name: "PyTorch", level: 88, category: "ML/DL", icon: "flame" },
  { name: "Scikit-learn", level: 90, category: "ML/DL", icon: "sigma" },
  { name: "Keras", level: 90, category: "ML/DL", icon: "layers" },

  // NLP / LLM
  { name: "LangChain", level: 88, category: "NLP/LLM", icon: "link" },
  { name: "HuggingFace", level: 85, category: "NLP/LLM", icon: "smile" },
  { name: "OpenAI API", level: 90, category: "NLP/LLM", icon: "sparkles" },
  { name: "RAG", level: 85, category: "NLP/LLM", icon: "search" },

  // Computer Vision
  { name: "OpenCV", level: 88, category: "Computer Vision", icon: "eye" },
  { name: "YOLO", level: 87, category: "Computer Vision", icon: "scan" },
  { name: "CNNs", level: 90, category: "Computer Vision", icon: "image" },

  // Tools & Cloud
  { name: "Git", level: 90, category: "Tools & Cloud", icon: "git-branch" },
  { name: "Docker", level: 85, category: "Tools & Cloud", icon: "container" },
  { name: "AWS", level: 78, category: "Tools & Cloud", icon: "cloud" },
  { name: "Streamlit", level: 92, category: "Tools & Cloud", icon: "layout-dashboard" },
  { name: "FastAPI", level: 88, category: "Tools & Cloud", icon: "zap" },
  { name: "Vercel", level: 85, category: "Tools & Cloud", icon: "triangle" },
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
  "NLP/LLM",
  "Computer Vision",
  "Full-Stack",
  "Data Analysis",
];

export const projects: Project[] = [
  {
    id: "realtime-object-detection",
    title: "Real-Time Object Detection with YOLOv8",
    description: "YOLOv8 detector on Streamlit Cloud for instant multi-object detection from uploads or webcam, built with YOLOv8, OpenCV, Python and Streamlit.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["YOLOv8", "OpenCV", "Python", "Streamlit", "Deep Learning"],
    category: ["Computer Vision"],
    githubUrl: "https://github.com/sajidrehman2/RealTimeObjectDetection",
    demoUrl: "https://realtimeobjectdetection-fenihksplv5ajwkkjkabzc.streamlit.app/",
    featured: true,
  },
  {
    id: "linkedin-ai-assistant",
    title: "LinkedIn AI Assistant",
    description: "FastAPI + LLM service that drafts LinkedIn replies, summaries, and multi-tone messages from a single prompt.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "FastAPI", "LangChain", "LLM", "NLP"],
    category: ["NLP/LLM", "Full-Stack"],
    githubUrl: "https://github.com/sajidrehman2/linkedin-ai-assistant",
    demoUrl: "https://linkedin-ai-assistant-utfdpq76gnn4qo4whqbvsg.streamlit.app/",
    featured: true,
  },
  {
    id: "bbc-news-classifier",
    title: "BBC News Detection",
    description: "NLP classifier trained on BBC News that auto-assigns each article to its correct topic via TF-IDF features and tuned models.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "NLP", "TF-IDF"],
    category: ["NLP/LLM", "Data Analysis"],
    githubUrl: "https://github.com/sajidrehman2/BBC-News-Article-Classifier/tree/main/BBC_headline_detector",
    featured: true,
  },
  {
    id: "pneumonia-detection",
    title: "Pneumonia Detection Using X-ray Images",
    description: "CNN (VGG16/ResNet) trained on chest X-rays and deployed on Streamlit to classify scans as normal or pneumonia in real time.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["TensorFlow", "Keras", "OpenCV", "CNN", "Python"],
    category: ["Computer Vision"],
    githubUrl: "https://github.com/sajidrehman2/pneumonia-detection-using-X-ray-images",
    demoUrl: "https://pneumonia-detection-using-x-ray-images-xuzapxbpoozurapphhr85gw.streamlit.app/",
    featured: true,
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    description: "Content-based recommender that ranks similar films from metadata using cosine similarity over engineered features.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Pandas", "Scikit-learn", "NumPy"],
    category: ["Data Analysis"],
    githubUrl: "https://github.com/sajidrehman2/Movierecomendationsystem",
  },
  {
    id: "loan-approval-predictor",
    title: "Loan Approval Prediction",
    description: "ML model predicting loan approval from applicant features with feature engineering, ensembles and hyperparameter tuning.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Scikit-learn", "Random Forest", "XGBoost"],
    category: ["Data Analysis"],
    githubUrl: "https://github.com/sajidrehman2/Data-science-and-Machine-learning-project/tree/main/Project%20of%20LoanApproval%20Prediction",
  },
  {
    id: "pizza-llm-bot",
    title: "Pizza LLM Bot",
    description: "Conversational LLM chatbot that takes natural-language pizza orders and handles multi-turn menu questions, built with LangChain + Streamlit.",
    image: pizzaLlmBotImage,
    technologies: ["Python", "LangChain", "LLM", "Streamlit", "Chatbot"],
    category: ["NLP/LLM", "Full-Stack"],
    githubUrl: "https://github.com/sajidrehman2/pizza-llm-bot",
    demoUrl: "https://pizza-llm-bot-dv3dmv5ahudpp3vkjlkwrr.streamlit.app/",
    featured: true,
  },
  {
    id: "ai-hr-hiring-assistant",
    title: "AI HR Hiring Assistant",
    description: "Streamlit app that parses resumes, scores candidates against a JD with NLP + LLM evaluation and returns a ranked shortlist.",
    image: aiHrHiringAssistantImage,
    technologies: ["Python", "Streamlit", "spaCy", "LLM", "NLP"],
    category: ["NLP/LLM", "Full-Stack"],
    githubUrl: "https://github.com/sajidrehman2/Sajid-AI-HR-Hiring-Assistant",
    demoUrl: "https://sajid-ai-hr-hiring-assistant-zz4pmgasreecpe8mankqol.streamlit.app/",
    featured: true,
  },
  {
    id: "smart-hostel-manager",
    title: "Smart Hostel Manager",
    description: "Streamlit dashboard for hostel ops: room allocation, real-time occupancy, automated billing and analytics over SQLite.",
    image: smartHostelManagerImage,
    technologies: ["Python", "Streamlit", "Pandas", "SQLite", "Automation"],
    category: ["Full-Stack", "Data Analysis"],
    githubUrl: "https://github.com/sajidrehman2/sajid-smart-hostel-manager",
    demoUrl: "https://sajid-smart-hostel-manager-q3shsmepqrsk3iirbn7m5t.streamlit.app/",
    featured: true,
  },
  {
    id: "sajids-ai-diner",
    title: "Sajid's AI Diner (SmartDineAI)",
    description: "Full-stack AI dining assistant: Next.js frontend on Vercel, FastAPI/LLM backend on Render, plus a Streamlit demo for orders & menu Q&A.",
    image: sajidsAiDinerImage,
    technologies: ["Next.js", "FastAPI", "LLM", "Vercel", "Render"],
    category: ["Full-Stack", "NLP/LLM"],
    githubUrl: "https://github.com/sajidrehman2/sajids-ai-diner",
    demoUrl: "https://smartdineai.vercel.app/",
    featured: true,
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis on Product Reviews",
    description: "NLP pipeline classifying review sentiment with TF-IDF, Word2Vec and an LSTM, comparing classical vs. deep approaches.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "TF-IDF", "Word2Vec", "LSTM", "Keras"],
    category: ["NLP/LLM"],
    githubUrl: "",
  },
  {
    id: "fake-news-detector",
    title: "Fake News Detection",
    description: "NLP classifier flagging fake news with Logistic Regression, Random Forest and Transformer models, with accuracy trade-off analysis.",
    image: "https://images.unsplash.com/photo-1590070585459-e5b3a84a4421?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Scikit-learn", "Transformers", "HuggingFace", "NLP"],
    category: ["NLP/LLM"],
    githubUrl: "",
  },
  {
    id: "spotify-trackers",
    title: "Spotify Track Analysis",
    description: "EDA of Spotify audio features (energy, danceability, tempo, valence) and the patterns correlating with track popularity.",
    image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    category: ["Data Analysis"],
    githubUrl: "https://github.com/sajidrehman2/Data-science-and-Machine-learning-project/tree/main/Project%20of%20Spotify%20Trackers",
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    description: "Regression model predicting house prices via feature engineering + ensemble methods (XGBoost) to reduce error.",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
    category: ["Data Analysis"],
    githubUrl: "https://github.com/sajidrehman2/Data-science-and-Machine-learning-project/tree/main/HousePrice%20Prediction",
  },
  {
    id: "cement-strength",
    title: "Cement Strength Predictor",
    description: "Regression model predicting compressive strength from mix composition and curing age so QC catches weak batches earlier.",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    category: ["Data Analysis"],
    githubUrl: "https://github.com/sajidrehman2/Cement_strength",
  },
  {
    id: "digit-recognition",
    title: "Handwritten Digit Recognition",
    description: "CNN classifier trained on MNIST with real-time prediction on user-drawn digits, built with TensorFlow + Keras.",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["TensorFlow", "Keras", "CNN", "NumPy", "OpenCV"],
    category: ["Computer Vision"],
    githubUrl: "https://github.com/sajidrehman2/Handwritten-Digit-Recognition",
  }
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/sajidrehman2", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sajid-rehman-b14474265/", icon: "linkedin" },
  { name: "Kaggle", url: "https://www.kaggle.com/itsajidrehman", icon: "bar-chart" },
  { name: "Email", url: "mailto:sajid.rehmanoffical95001@gmail.com", icon: "mail" },
];

export const testimonials: Testimonial[] = [];

export const personalInfo = {
  name: "Sajid Rehman",
  title: "AI & Data Science Engineer",
  headline: "AI & Data Science Engineer | Building intelligent systems with Python, LLMs & Computer Vision",
  subtitle: "BS IT Student @ University of Agriculture Peshawar | 16+ Projects | Available for Freelance & Internships",
  tagline: "Building intelligent systems with Python, LLMs & Computer Vision",
  email: "sajid.rehmanoffical95001@gmail.com",
  phone: "+923038047795",
  location: "Peshawar, Pakistan",
  bio: `AI & Data Science Engineer based in Peshawar, Pakistan, with 2+ years building ML, deep learning and LLM-powered products. Currently finishing my BS in IT at the University of Agriculture Peshawar while shipping 16+ end-to-end projects across computer vision, NLP and full-stack AI. I focus on practical, deployable systems — from CNN medical imaging to LangChain chatbots and FastAPI services.`,
  resumeUrl: "/Sajid_Rehman_Resume.pdf",
  cvUrl: "/Sajid_Rehman_CV.pdf",
};
