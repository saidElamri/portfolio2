export const projects = [
  {
    id: 0,
    title: "MLS Quiz App",
    desc: "Interactive quiz platform with real-time scoring and favorites system.",
    longDesc: "A comprehensive quiz application featuring user authentication, favorite questions system, progress tracking, and an engaging owl mascot theme. Built to scale with a robust backend.",
    tech: ["React", "Express", "MongoDB", "Node.js", "JWT"],
    github: "https://github.com/saidElamri/Quizz-LMS",
    demo: "https://lmsquiz.netlify.app/",
    image: "./projects/lms.png",
    category: "Full Stack",
    icon: "🎓",
    color: "#58a6ff",
    featured: true
  },
  {
    id: 1,
    title: "WorkConnect CRM",
    desc: "Moroccan-themed job matching platform with full i18n support.",
    longDesc: "A modern CRM job-matching platform with worker registration, company job posting, and admin dashboard. Features full internationalization in English, French, Arabic, and Tamazight.",
    tech: ["React", "Vite", "Tailwind CSS", "i18n", "RTL Support"],
    github: "https://github.com/saidElamri/workconnect",
    demo: "#",
    image: "./projects/workconnect.png",
    category: "Enterprise",
    icon: "🏢",
    color: "#7ee787",
    featured: true
  },
  {
    id: 2,
    title: "Hybrid-Analyzer",
    desc: "AI-powered text analysis orchestrating Hugging Face & Gemini APIs.",
    longDesc: "Fullstack application automating article analysis with FastAPI backend, React frontend, JWT authentication, and PostgreSQL. Orchestrates Hugging Face Zero-Shot Classification with Gemini API.",
    tech: ["FastAPI", "React", "Hugging Face", "Gemini API", "PostgreSQL", "Docker"],
    github: "https://github.com/saidElamri/hybrid-analyzer",
    demo: "#",
    image: "./projects/hybrid.png",
    category: "AI / ML",
    icon: "🧠",
    color: "#a371f7",
    featured: true
  },
  {
    id: 3,
    title: "Code Explainer AI",
    desc: "AI-powered Python code analysis and explanation engine.",
    longDesc: "A Flask-based web application that leverages Google Gemini to explain Python code. Supports Markdown formatting, step-by-step logic breakdown, and secure API key management.",
    tech: ["Python", "Flask", "Google Gemini", "Markdown", "AI"],
    github: "https://github.com/saidElamri/codexplainer",
    demo: "https://codexplainer-gray.vercel.app/",
    image: "./projects/codeex.png",
    category: "AI / ML",
    icon: "🤖",
    color: "#a371f7"
  },
  {
    id: 4,
    title: "Food Xplorers",
    desc: "Global culinary discovery platform with detailed recipes.",
    longDesc: "A culinary exploration platform that allows users to discover traditional dishes from various cities around the world. Integrates with TheMealDB API for rich content delivery.",
    tech: ["Vite", "React", "TheMealDB API", "Tailwind CSS"],
    github: "https://github.com/saidElamri/native-food",
    demo: "https://foodxplorers.netlify.app/",
    image: "./projects/foodapp.png",
    category: "Frontend",
    icon: "🍜",
    color: "#f0b429"
  },
  {
    id: 5,
    title: "PetroSolPro",
    desc: "Enterprise stock & distribution management for fuel stations.",
    longDesc: "Professional solution for stock management and distribution. Features real-time delivery tracking, precise stock level visualization, fraud/leak detection alerts, and automation tools.",
    tech: ["React", "Recharts", "Tailwind CSS", "Vite"],
    github: "https://github.com/saidElamri/petro",
    demo: "https://aga-petro.netlify.app/",
    image: "./projects/petro.png",
    category: "Enterprise",
    icon: "⛽",
    color: "#7ee787"
  }
];

// Category definitions for filtering
export const projectCategories = [
  { id: 'all', label: 'All Projects', icon: '📁' },
  { id: 'Full Stack', label: 'Full Stack', icon: '🔥' },
  { id: 'Frontend', label: 'Frontend', icon: '🎨' },
  { id: 'AI / ML', label: 'AI / ML', icon: '🤖' },
  { id: 'Enterprise', label: 'Enterprise', icon: '🏢' },
];

export const certificates = [
  {
    id: 1,
    title: "ODC Orange Bootcamp",
    issuer: "Orange Digital Center",
    date: "2024",
    description: "Intensive full-stack development bootcamp focusing on MERN stack and algorithms",
    image: "./certificates/odc.jpg",
    icon: "🟠",
    color: "#ff6600"
  },
  {
    id: 2,
    title: "Google Cybersecurity",
    issuer: "Google",
    date: "2024",
    description: "Professional certification covering security fundamentals, network protection, and incident response",
    image: "certificates/google-cybersecurity.jpg",
    icon: "🛡️",
    color: "#4285f4"
  },
  {
    id: 3,
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    date: "2023",
    description: "Advanced data structures and algorithms certification",
    image: "./certificates/js.png",
    icon: "📜",
    color: "#f7df1e"
  },
  {
    id: 4,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    description: "Modern web design certification including HTML5, CSS3, and Accessibility",
    image: "./certificates/responsive.png",
    icon: "📱",
    color: "#0a0a23"
  }
];

export const skills = [
  {
    title: "Core Stack",
    icon: "⚡",
    items: [
      { name: "React 19", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 }
    ]
  },
  {
    title: "AI & Data",
    icon: "🧠",
    items: [
      { name: "LangChain", level: 80 },
      { name: "TensorFlow", level: 75 },
      { name: "OpenAI API", level: 90 },
      { name: "RAG Pipelines", level: 82 }
    ]
  },
  {
    title: "Infrastructure",
    icon: "🏗️",
    items: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 70 },
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 85 }
    ]
  },
  {
    title: "Security",
    icon: "🛡️",
    items: [
      { name: "JWT/OAuth", level: 88 },
      { name: "Network Security", level: 75 },
      { name: "OWASP", level: 70 },
      { name: "Incident Response", level: 72 }
    ]
  }
];

// Languages spoken - Multilingual capability
export const languages = [
  { name: "English", level: "Fluent", flag: "🇬🇧" },
  { name: "French", level: "Fluent", flag: "🇫🇷" },
  { name: "Arabic", level: "Native", flag: "🇲🇦" },
  { name: "Tamazight", level: "Native", flag: "ⵣ" },
];

// Journey timeline for career progression
export const journey = [
  {
    year: "2021",
    title: "Started Coding Journey",
    description: "Began learning HTML, CSS, and JavaScript. Built first static websites.",
    icon: "🌱",
    skills: ["HTML", "CSS", "JavaScript"],
    color: "#7ee787"
  },
  {
    year: "2022",
    title: "Frontend Development",
    description: "Mastered React and modern frontend tooling. Started freelancing.",
    icon: "🎨",
    skills: ["React", "Tailwind CSS", "Vite"],
    color: "#58a6ff"
  },
  {
    year: "2023",
    title: "Full Stack Evolution",
    description: "Expanded to backend development. Built complete MERN stack applications.",
    icon: "🔥",
    skills: ["Node.js", "Express", "MongoDB"],
    color: "#f0b429"
  },
  {
    year: "2024",
    title: "AI Architecture & Security",
    description: "Deep dive into AI/ML and earned Google Cybersecurity certification.",
    icon: "🤖",
    skills: ["LangChain", "OpenAI", "RAG", "Security"],
    color: "#a371f7"
  },
  {
    year: "2025",
    title: "Enterprise Solutions",
    description: "Leading development of enterprise-grade applications with global reach.",
    icon: "🏢",
    skills: ["Docker", "AWS", "i18n", "FastAPI"],
    color: "#ff6b6b"
  }
];

// Personal info
export const personalInfo = {
  name: "Said Elamri",
  title: "AI Architect × Full Stack Engineer",
  location: "Morocco 🇲🇦",
  email: "said.elamri.evil@gmail.com",
  github: "saidElamri",
  linkedin: "saidelamri",
  bio: "I turn complex problems into elegant solutions and coffee into code.",
  taglines: [
    "AI Architect × Full Stack Engineer",
    "Turning complex problems into elegant solutions",
    "From neural networks to microservices",
    "Coffee → Code → Deploy → Repeat",
    "Building the future, one commit at a time",
  ],
  highlights: [
    { label: "Years Exp", value: "4+", icon: "🚀" },
    { label: "Projects", value: "50+", icon: "💼" },
    { label: "Tech Stack", value: "15+", icon: "⚡" },
    { label: "Languages", value: "4", icon: "🌍" },
  ]
};
