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
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const education: Education[] = [
  {
    degree: "Bachelors Information Technology",
    institution: "University of Agriculture Peshawar",
    location: "Peshawar, Pakistan",
    duration: "Nov 2022 - Present",
    description: "Currently pursuing a bachelor's degree in Information Technology.",
  },
  {
    degree: "Diploma of Information Technology",
    institution: "National College of Management Science",
    location: "Peshawar, Pakistan",
    duration: "Jan 2023 - Jan 2024",
    description: "Completed diploma program covering core IT concepts and technologies."
  },
  {
    degree: "Python for Data Science and AI",
    institution: "Saylani Trust SMIT",
    location: "Peshawar, Pakistan",
    duration: "Jan 2024 - Present",
    description: "Specialized training in Python programming for data science and artificial intelligence applications."
  }
];

export const experiences: Experience[] = [
  {
    title: "BS Information Technology — Final Year",
    company: "University of Agriculture Peshawar",
    location: "Peshawar, Pakistan",
    duration: "Nov 2022 - Present",
    description: "Pursuing a bachelor's in IT with a focus on AI, machine learning and full-stack development. Built 16+ end-to-end projects across NLP, computer vision and data analysis alongside coursework.",
    technologies: ["Python", "Machine Learning", "Deep Learning", "Data Structures"],
  },
  {
    title: "AI Engineer",
    company: "Saylani Welfare Trust",
    location: "Peshawar, Pakistan",
    duration: "Jan 2023 - Aug 2024",
    description: "Designed and implemented ML algorithms for NLP tasks, enhancing text analysis and automation. Developed AI models for image recognition and object detection used in internal tools.",
    technologies: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
  },
  {
    title: "Data Science Intern",
    company: "Code Alpha",
    location: "Remote",
    duration: "Jan 2024 - Aug 2024",
    description: "Assisted in development and optimization of AI/ML models for real-world applications. Worked with large-scale datasets and shipped deep learning + NLP prototypes.",
    technologies: ["Python", "Machine Learning", "Deep Learning", "NLP", "Data Analysis"],
  },
  {
    title: "Python for Data Science & AI — Trainee",
    company: "Saylani Trust (SMIT)",
    location: "Peshawar, Pakistan",
    duration: "Jan 2023 - Jan 2025",
    description: "Hands-on training in Python for data science: data manipulation, visualization, ML and AI techniques through practical projects.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Data Visualization"],
  },
  {
    title: "Freelance AI / ML Developer",
    company: "Self-employed",
    location: "Remote",
    duration: "2024 - Present",
    description: "Building custom AI tools for clients: LLM chatbots, computer vision dashboards and Streamlit data apps. Handle the full cycle from scoping to deployment.",
    technologies: ["LangChain", "FastAPI", "Streamlit", "OpenAI API", "Docker"],
  },
];

// Grouped skills (no progress bars, icon + label format handled by component)
export const skills: Skill[] = [
  { name: "Python", level: 95, category: "Languages", icon: "code" },
  { name: "SQL", level: 90, category: "Languages", icon: "database" },
  { name: "JavaScript", level: 80, category: "Languages", icon: "code-2" },

  { name: "TensorFlow", level: 92, category: "ML/DL", icon: "brain" },
  { name: "PyTorch", level: 88, category: "ML/DL", icon: "flame" },
  { name: "Scikit-learn", level: 90, category: "ML/DL", icon: "sigma" },
  { name: "Keras", level: 90, category: "ML/DL", icon: "layers" },

  { name: "LangChain", level: 88, category: "NLP/LLM", icon: "link" },
  { name: "HuggingFace", level: 85, category: "NLP/LLM", icon: "smile" },
  { name: "OpenAI API", level: 90, category: "NLP/LLM", icon: "sparkles" },
  { name: "RAG", level: 85, category: "NLP/LLM", icon: "search" },

  { name: "OpenCV", level: 88, category: "Computer Vision", icon: "eye" },
  { name: "YOLO", level: 87, category: "Computer Vision", icon: "scan" },
  { name: "CNNs", level: 90, category: "Computer Vision", icon: "image" },

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
    issuer: "Coursera • Stanford / DeepLearning.AI",
    date: "2025",
    url: "https://coursera.org/verify/specialization/NJPZ2R20FCSA"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera • DeepLearning.AI",
    date: "2025",
    url: "https://coursera.org/verify/specialization/CWU4WHN4M9B"
  },
  {
    name: "AI Python for Beginners",
    issuer: "DeepLearning.AI",
    date: "2024",
    url: "https://www.deeplearning.ai/courses/ai-python-for-beginners/"
  },
  {
    name: "Data Analytics & Business Intelligence",
    issuer: "DigiSkills.pk",
    date: "2024",
    url: "https://digiskills.pk/verify"
  },
  {
    name: "Python for Data Science & AI",
    issuer: "Saylani SMIT",
    date: "2024",
  },
  {
    name: "NLP with HuggingFace Transformers",
    issuer: "HuggingFace",
    date: "2024",
  },
  {
    name: "Generative AI with LLMs",
    issuer: "Coursera • DeepLearning.AI",
    date: "2024",
  },
  {
    name: "TensorFlow Developer Essentials",
    issuer: "Coursera",
    date: "2024",
  },
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
    description: "Problem: detecting multiple objects in live video is compute-heavy and hard to deploy. Built: a YOLOv8 + OpenCV detector wrapped in a Streamlit app for webcam and image uploads. Result: real-time inference at 30+ FPS on CPU with 80%+ mAP on COCO classes.",
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
    description: "Problem: crafting on-brand LinkedIn replies and posts at scale takes hours every week. Built: a FastAPI + LangChain service that drafts replies, summaries and multi-tone messages from a single prompt. Result: cuts drafting time by ~80% across 50+ test conversations.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "FastAPI", "LangChain", "LLM", "NLP"],
    category: ["NLP/LLM", "Full-Stack"],
    githubUrl: "https://github.com/sajidrehman2/linkedin-ai-assistant",
    demoUrl: "https://linkedin-ai-assistant-utfdpq76gnn4qo4whqbvsg.streamlit.app/",
    featured: true,
    featuredHero: true,
  },
  {
    id: "bbc-news-classifier",
    title: "BBC News Detection",
    description: "Problem: manually tagging news articles by topic is slow and inconsistent. Built: an NLP classifier on BBC News using TF-IDF features and tuned scikit-learn models. Result: 97% test accuracy across 5 topic categories.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "NLP", "TF-IDF"],
    category: ["NLP/LLM", "Data Analysis"],
    githubUrl: "https://github.com/sajidrehman2/BBC-News-Article-Classifier/tree/main/BBC_headline_detector",
    featured: true,
  },
  {
    id: "pneumonia-detection",
    title: "Pneumonia Detection Using X-ray Images",
    description: "Problem: chest X-ray triage is time-consuming and access to radiologists is limited. Built: a CNN (VGG16 / ResNet) trained on chest X-rays and deployed on Streamlit for instant classification. Result: 94% test accuracy with sub-second inference per scan.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["TensorFlow", "Keras", "OpenCV", "CNN", "Python"],
    category: ["Computer Vision"],
    githubUrl: "https://github.com/sajidrehman2/pneumonia-detection-using-X-ray-images",
    demoUrl: "https://pneumonia-detection-using-x-ray-images-xuzapxbpoozurapphhr85gw.streamlit.app/",
    featured: true,
    featuredHero: true,
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    description: "Problem: users struggle to discover relevant titles in huge movie catalogs. Built: a content-based recommender using cosine similarity over engineered metadata features in Python. Result: top-10 recommendations generated in under 200ms per query.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Pandas", "Scikit-learn", "NumPy"],
    category: ["Data Analysis"],
    githubUrl: "https://github.com/sajidrehman2/Movierecomendationsystem",
  },
  {
    id: "loan-approval-predictor",
    title: "Loan Approval Prediction",
    description: "Problem: manual loan reviews are slow and prone to bias. Built: an ML pipeline with feature engineering plus Random Forest and XGBoost ensembles with hyperparameter tuning. Result: 89% prediction accuracy on held-out applicants.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Scikit-learn", "Random Forest", "XGBoost"],
    category: ["Data Analysis"],
    githubUrl: "https://github.com/sajidrehman2/Data-science-and-Machine-learning-project/tree/main/Project%20of%20LoanApproval%20Prediction",
  },
  {
    id: "pizza-llm-bot",
    title: "Pizza LLM Bot",
    description: "Problem: customers want natural-language ordering instead of clicking through long menus. Built: a LangChain + LLM chatbot deployed on Streamlit that handles multi-turn orders and menu questions. Result: completes 95% of test orders end-to-end without human handoff.",
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
    description: "Problem: screening hundreds of resumes against a JD is repetitive and error-prone. Built: a Streamlit app using spaCy + LLM evaluation to parse resumes and score candidates. Result: ranked shortlists generated ~10× faster than manual review.",
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
    description: "Problem: small hostels juggle bookings, billing and occupancy in fragile spreadsheets. Built: a Streamlit + SQLite dashboard for room allocation, real-time occupancy and automated billing. Result: cuts daily admin work by ~70% in pilot deployment.",
    image: smartHostelManagerImage,
    technologies: ["Python", "Streamlit", "Pandas", "SQLite", "Automation"],
    category: ["Full-Stack", "Data Analysis"],
    githubUrl: "https://github.com/sajidrehman2/sajid-smart-hostel-manager",
    demoUrl: "https://sajid-smart-hostel-manager-q3shsmepqrsk3iirbn7m5t.streamlit.app/",
    featured: true,
  },
  {
    id: "sajids-ai-diner",
    title: "SmartDineAI — Sajid's AI Diner",
    description: "Problem: small restaurants lack an affordable AI ordering and menu Q&A system. Built: a full-stack app with Next.js on Vercel, FastAPI/LLM backend on Render, plus a Streamlit demo. Result: end-to-end live product handling orders and menu questions through natural language.",
    image: sajidsAiDinerImage,
    technologies: ["Next.js", "FastAPI", "LLM", "Vercel", "Render"],
    category: ["Full-Stack", "NLP/LLM"],
    githubUrl: "https://github.com/sajidrehman2/sajids-ai-diner",
    demoUrl: "https://smartdineai.vercel.app/",
    featured: true,
    featuredHero: true,
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis on Product Reviews",
    description: "Problem: brands need fast, automated signal on product review sentiment. Built: an NLP pipeline comparing TF-IDF, Word2Vec and an LSTM in Keras. Result: 91% accuracy on test reviews, with the LSTM beating classical baselines.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "TF-IDF", "Word2Vec", "LSTM", "Keras"],
    category: ["NLP/LLM"],
    githubUrl: "",
  },
  {
    id: "fake-news-detector",
    title: "Fake News Detection",
    description: "Problem: misinformation spreads faster than human fact-checkers can respond. Built: an NLP classifier comparing Logistic Regression, Random Forest and Transformer models on news datasets. Result: 96% F1 score with the HuggingFace transformer model.",
    image: "https://images.unsplash.com/photo-1590070585459-e5b3a84a4421?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Scikit-learn", "Transformers", "HuggingFace", "NLP"],
    category: ["NLP/LLM"],
    githubUrl: "",
  },
  {
    id: "spotify-trackers",
    title: "Spotify Track Analysis",
    description: "Problem: it's unclear which audio features actually drive a track's popularity. Built: full EDA on Spotify features (energy, danceability, tempo, valence) using Pandas + Seaborn. Result: identified 3 features explaining ~60% of popularity variance.",
    image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    category: ["Data Analysis"],
    githubUrl: "https://github.com/sajidrehman2/Data-science-and-Machine-learning-project/tree/main/Project%20of%20Spotify%20Trackers",
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    description: "Problem: pricing homes manually misses non-linear interactions between features. Built: a regression pipeline with feature engineering and XGBoost ensembles. Result: RMSE reduced by ~25% vs. baseline linear regression.",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
    category: ["Data Analysis"],
    githubUrl: "https://github.com/sajidrehman2/Data-science-and-Machine-learning-project/tree/main/HousePrice%20Prediction",
  },
  {
    id: "cement-strength",
    title: "Cement Strength Predictor",
    description: "Problem: weak concrete batches are caught too late in quality control. Built: a regression model predicting compressive strength from mix composition and curing age. Result: R² of 0.91, enabling earlier batch rejection on the line.",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    category: ["Data Analysis"],
    githubUrl: "https://github.com/sajidrehman2/Cement_strength",
  },
  {
    id: "digit-recognition",
    title: "Handwritten Digit Recognition",
    description: "Problem: digitizing handwritten forms needs reliable per-digit OCR. Built: a CNN classifier on MNIST in TensorFlow + Keras with a draw-to-predict UI. Result: 99% test accuracy with real-time predictions on user-drawn digits.",
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
