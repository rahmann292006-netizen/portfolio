/**
 * Central content config for the portfolio.
 * Update links, project URLs, and social handles here.
 */

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Projects', href: '#projects' },
  { name: 'GitHub', href: '#github' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

export const skills = {
  programming: ['Python', 'SQL'],
  libraries: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
  upcoming: ['PyTorch', 'FastAPI', 'LangChain', 'LangGraph', 'LLMs', 'RAG'],
  tools: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Firebase'],
}

/** Learning journey — status: completed | current | upcoming */
export const journey = [
  { title: 'Python', status: 'completed', description: 'Core language fundamentals & scripting' },
  { title: 'NumPy', status: 'completed', description: 'Numerical computing foundations' },
  { title: 'Pandas', status: 'completed', description: 'Data manipulation & analysis' },
  { title: 'Matplotlib', status: 'current', description: 'Data visualization basics' },
  { title: 'Seaborn', status: 'upcoming', description: 'Statistical visualizations' },
  { title: 'Machine Learning', status: 'upcoming', description: 'Supervised & unsupervised learning' },
  { title: 'Deep Learning', status: 'upcoming', description: 'Neural networks & architectures' },
  { title: 'NLP', status: 'upcoming', description: 'Text processing & language models' },
  { title: 'LLMs', status: 'upcoming', description: 'Large language models & prompting' },
  { title: 'AI Engineering', status: 'upcoming', description: 'Production AI systems & products' },
]

export const projects = [
  {
    title: 'Fitzy',
    subtitle: 'AI Fitness App',
    description:
      'An intelligent fitness companion that personalizes workouts, tracks progress, and uses AI to adapt plans based on user goals and performance data.',
    tech: ['Python', 'Machine Learning', 'Firebase', 'React'],
    github: 'https://github.com/',
    demo: '#',
    status: 'In Development',
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'Bank Fraud Detection',
    subtitle: 'ML Classification System',
    description:
      'A machine learning pipeline that detects fraudulent banking transactions using classification models, feature engineering, and anomaly detection techniques.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/',
    demo: '#',
    status: 'Completed',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Iris Flower Classification',
    subtitle: 'Classic ML Project',
    description:
      'End-to-end classification of Iris flower species using classical ML algorithms — exploratory analysis, model training, evaluation, and visualization.',
    tech: ['Python', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/',
    demo: '#',
    status: 'Completed',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'Future ML Projects',
    subtitle: 'Coming Soon',
    description:
      'Exploring RAG systems, LLM applications, and production-ready AI products. More impactful projects launching soon — stay tuned.',
    tech: ['PyTorch', 'LangChain', 'FastAPI', 'LLMs'],
    github: 'https://github.com/',
    demo: '#',
    status: 'Upcoming',
    gradient: 'from-violet-500/20 to-indigo-500/20',
  },
]

export const certifications = [
  {
    title: 'Machine Learning',
    issuer: 'Certification Placeholder',
    year: '2024–2025',
    status: 'In Progress',
    description: 'Supervised learning, model evaluation, and real-world ML workflows.',
  },
  {
    title: 'Data Science',
    issuer: 'Certification Placeholder',
    year: '2024–2025',
    status: 'In Progress',
    description: 'Data analysis, visualization, statistics, and end-to-end pipelines.',
  },
  {
    title: 'Python Programming',
    issuer: 'Certification Placeholder',
    year: '2024',
    status: 'Completed',
    description: 'Python fundamentals for data science and AI applications.',
  },
  {
    title: 'AI & Generative AI',
    issuer: 'Certification Placeholder',
    year: '2025+',
    status: 'Upcoming',
    description: 'Deep learning, generative AI, and AI engineering credentials.',
  },
]

/** Replace with your real profiles before deploying */
export const socials = {
  linkedin: 'https://www.linkedin.com/in/abdul-rahman-75366b343/',
  github: 'https://github.com/rahmann292006-netizen/AI-Engineer-Journey.git',
  twitter: 'https://x.com/rahman_aibuilds',
  email: 'mailto:rahmann292006@gmail.com',
}

export const aboutPoints = [
  'Computer Science Engineering student building a strong foundation in software and AI.',
  'Passionate about Artificial Intelligence, Machine Learning, and Generative AI.',
  'I enjoy learning in public, building projects, and documenting my progress.',
  'Interested in AI for Fitness, Health, and Productivity.',
  'Long-term goal: Build AI products used by millions of people worldwide.',
]

export const githubStats = {
  repos: '12+',
  contributions: '500+',
  stars: '25+',
  followers: '50+',
}

export const topLanguages = [
  { name: 'Python', percent: 72, color: '#3b82f6' },
  { name: 'Jupyter', percent: 15, color: '#a855f7' },
  { name: 'JavaScript', percent: 8, color: '#60a5fa' },
  { name: 'Other', percent: 5, color: '#71717a' },
]

export const recentRepos = [
  { name: 'fitzy-ai', description: 'AI-powered fitness companion app', lang: 'Python', stars: 8 },
  { name: 'fraud-detection-ml', description: 'Bank fraud detection with ML', lang: 'Python', stars: 5 },
  { name: 'iris-classifier', description: 'Classic Iris flower classification', lang: 'Jupyter', stars: 3 },
  { name: 'ml-learning-notes', description: 'Public ML learning documentation', lang: 'Markdown', stars: 12 },
]
