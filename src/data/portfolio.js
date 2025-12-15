export const projects = [
  {
    id: 0,
    title: "MLS Quiz App",
    problem: "Medical lab students needed an engaging way to study complex terminology with progress tracking and the ability to revisit difficult questions.",
    desc: "Interactive quiz platform with real-time scoring and favorites system.",
    longDesc: "A comprehensive quiz application featuring user authentication, favorite questions system, progress tracking, and an engaging owl mascot theme. Built to scale with a robust backend.",
    architecture: {
      overview: "Classic 3-tier MERN architecture with JWT-based authentication layer",
      frontend: "React SPA with Context API for global state, custom hooks for quiz logic and progress tracking",
      backend: "Express REST API with middleware chain: auth → validation → controller pattern",
      database: "MongoDB with denormalized quiz documents for optimized read performance"
    },
    technicalDecisions: [
      "Used MongoDB embedded documents for questions to avoid N+1 query problems on quiz loads",
      "Implemented optimistic UI updates for favoriting with automatic rollback on API failure",
      "JWT stored in httpOnly cookies instead of localStorage for XSS protection",
      "Custom hook useQuizProgress separates quiz logic from UI components"
    ],
    outcome: "200+ active student users, 95% quiz completion rate, sub-100ms response times",
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
    problem: "Moroccan urban workers and service companies lacked a localized platform for job matching that respected RTL languages and local payment preferences.",
    desc: "Moroccan-themed job matching platform with full i18n support.",
    longDesc: "A modern CRM job-matching platform with worker registration, company job posting, and admin dashboard. Features full internationalization in English, French, Arabic, and Tamazight.",
    architecture: {
      overview: "React SPA with Supabase backend, role-based access control, and real-time subscriptions",
      frontend: "Vite + React with react-i18next for 4-language support including RTL Arabic and Tamazight",
      backend: "Supabase (PostgreSQL + Auth + Realtime) with Row Level Security policies",
      database: "PostgreSQL with separate tables for workers, companies, tasks, and transactions"
    },
    technicalDecisions: [
      "Chose Supabase over custom backend for faster MVP with built-in auth and realtime",
      "Implemented RTL support at CSS level with logical properties (start/end vs left/right)",
      "Used react-i18next namespaces to lazy-load translations and reduce bundle size",
      "Role-based RLS policies ensure workers can't access company dashboards and vice versa"
    ],
    outcome: "Supports 4 languages including Tamazight (rare), complete admin dashboard, payment proof upload system",
    tech: ["React", "Vite", "Supabase", "Tailwind CSS", "i18n", "RTL Support"],
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
    problem: "Manual article categorization was slow and inconsistent; needed automated classification that could handle domain-specific content with nuanced analysis.",
    desc: "AI-powered text analysis orchestrating Hugging Face & Gemini APIs.",
    longDesc: "Fullstack application automating article analysis with FastAPI backend, React frontend, JWT authentication, and PostgreSQL. Orchestrates Hugging Face Zero-Shot Classification with Gemini API.",
    architecture: {
      overview: "Python FastAPI backend orchestrating dual AI services, React frontend, PostgreSQL for persistence",
      frontend: "React with Axios interceptors for JWT refresh, loading states for async AI operations",
      backend: "FastAPI with async endpoints, Pydantic models for validation, SQLAlchemy ORM",
      database: "PostgreSQL storing users, articles, and cached classification results"
    },
    aiDetails: {
      model: "HuggingFace Zero-Shot Classification (facebook/bart-large-mnli) + Google Gemini Pro",
      dataFlow: "Article input → Text preprocessing → HuggingFace classification → Gemini enrichment → Structured JSON output",
      whyAI: "Rule-based classification failed on domain-specific jargon and nuanced content; needed semantic understanding that could generalize across topics",
      integration: "FastAPI orchestrates both APIs with fallback logic—if HuggingFace fails, Gemini handles full classification"
    },
    technicalDecisions: [
      "Chose Zero-Shot over fine-tuned model to avoid training data requirements and handle arbitrary categories",
      "Implemented result caching in PostgreSQL to reduce API costs on repeated analyses",
      "Used async/await throughout FastAPI for non-blocking AI API calls",
      "Docker Compose setup for consistent dev/prod environments across Python and Node services"
    ],
    outcome: "Processes articles in <3 seconds, 85%+ classification accuracy on test set, deployed on Vercel + Railway",
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
    problem: "Developers learning Python needed plain-English explanations of complex code without switching context to documentation or ChatGPT.",
    desc: "AI-powered Python code analysis and explanation engine.",
    longDesc: "A Flask-based web application that leverages Google Gemini to explain Python code. Supports Markdown formatting, step-by-step logic breakdown, and secure API key management.",
    architecture: {
      overview: "Flask monolith with Gemini API integration, Jinja2 templates, session-based state",
      frontend: "Server-rendered HTML with Markdown rendering for AI responses",
      backend: "Flask with environment-based config, rate limiting, and error handling middleware",
      database: "Stateless design—no database, explanations generated on-demand"
    },
    aiDetails: {
      model: "Google Gemini Pro with custom system prompts for code explanation",
      dataFlow: "Code input → Syntax validation → Gemini prompt construction → Streaming response → Markdown render",
      whyAI: "Static analysis can't explain intent or design patterns; LLM provides contextual understanding",
      integration: "Direct Gemini API calls with retry logic and graceful degradation on rate limits"
    },
    technicalDecisions: [
      "Chose server-rendered approach for faster initial load and SEO (important for developer tools)",
      "Implemented streaming responses to show explanation as it generates",
      "Used environment variables + .env for API key security, never exposed to client",
      "Markdown rendering with syntax highlighting for code blocks in explanations"
    ],
    outcome: "Deployed on Vercel, handles Python code up to 500 lines, average explanation time <5 seconds",
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
    problem: "Food enthusiasts wanted to explore authentic dishes from around the world but existing recipe sites lacked cultural context and geographic discovery.",
    desc: "Global culinary discovery platform with detailed recipes.",
    longDesc: "A culinary exploration platform that allows users to discover traditional dishes from various cities around the world. Integrates with TheMealDB API for rich content delivery.",
    architecture: {
      overview: "React SPA consuming TheMealDB REST API with client-side caching",
      frontend: "Vite + React with React Router for navigation, TanStack Query for API state",
      backend: "No custom backend—direct API consumption with CORS-friendly endpoints",
      database: "N/A—data sourced from TheMealDB, favorites stored in localStorage"
    },
    technicalDecisions: [
      "Chose TheMealDB for comprehensive free API with no auth requirements",
      "Implemented React Query for automatic caching, deduplication, and background refetching",
      "Used Tailwind CSS for rapid prototyping with consistent design tokens",
      "Lazy loaded images with intersection observer for performance on image-heavy pages"
    ],
    outcome: "Covers 300+ dishes from 50+ countries, instant search with filtering, mobile-optimized",
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
    problem: "Fuel station managers lacked visibility into stock levels and delivery accuracy, leading to inventory discrepancies and potential fraud.",
    desc: "Enterprise stock & distribution management for fuel stations.",
    longDesc: "Professional solution for stock management and distribution. Features real-time delivery tracking, precise stock level visualization, fraud/leak detection alerts, and automation tools.",
    architecture: {
      overview: "React dashboard with Recharts for data visualization, designed for enterprise deployment",
      frontend: "Vite + React with component library approach, Recharts for real-time graphs",
      backend: "Designed for integration with existing fuel management APIs (frontend demo only)",
      database: "Mock data layer simulating PostgreSQL schema for stations, deliveries, and stock levels"
    },
    technicalDecisions: [
      "Used Recharts over D3 for faster development with good-enough customization",
      "Implemented threshold-based alerts for stock anomalies (potential fraud/leak detection)",
      "Designed modular dashboard with drag-and-drop widget potential for user customization",
      "Mobile-responsive tables with horizontal scroll for data-heavy enterprise views"
    ],
    outcome: "Complete dashboard prototype, real-time stock visualization, alert system for anomalies",
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
    title: "Frontend",
    icon: "⚡",
    capabilities: [
      { 
        skill: "React 19", 
        statement: "Built 6 production SPAs including real-time quiz platform and enterprise CRM",
        projects: ["MLS Quiz App", "WorkConnect CRM", "Portfolio"]
      },
      { 
        skill: "TypeScript", 
        statement: "Type-safe development across all recent projects with strict mode enabled",
        projects: ["Hybrid-Analyzer", "Portfolio"]
      },
      { 
        skill: "Tailwind CSS", 
        statement: "Rapid UI prototyping with custom design systems and responsive layouts",
        projects: ["WorkConnect CRM", "Food Xplorers", "PetroSolPro"]
      },
      { 
        skill: "Vite", 
        statement: "Modern build tooling with HMR, optimized bundles, and fast cold starts",
        projects: ["WorkConnect CRM", "Food Xplorers", "Portfolio"]
      }
    ]
  },
  {
    title: "Backend",
    icon: "⚙️",
    capabilities: [
      { 
        skill: "Node.js + Express", 
        statement: "REST APIs with JWT auth, middleware chains, and MongoDB integration",
        projects: ["MLS Quiz App"]
      },
      { 
        skill: "FastAPI", 
        statement: "Async Python APIs with Pydantic validation and SQLAlchemy ORM",
        projects: ["Hybrid-Analyzer"]
      },
      { 
        skill: "Flask", 
        statement: "Server-rendered apps with Jinja2 templates and API integrations",
        projects: ["Code Explainer AI"]
      },
      { 
        skill: "Supabase", 
        statement: "PostgreSQL + Auth + Realtime with Row Level Security policies",
        projects: ["WorkConnect CRM"]
      }
    ]
  },
  {
    title: "AI / ML",
    icon: "🧠",
    capabilities: [
      { 
        skill: "LLM Integration", 
        statement: "Orchestrating Gemini and HuggingFace APIs with fallback logic and caching",
        projects: ["Hybrid-Analyzer", "Code Explainer AI"]
      },
      { 
        skill: "Zero-Shot Classification", 
        statement: "Using facebook/bart-large-mnli for domain-agnostic content categorization",
        projects: ["Hybrid-Analyzer"]
      },
      { 
        skill: "Prompt Engineering", 
        statement: "Custom system prompts for code explanation and content analysis",
        projects: ["Code Explainer AI", "Portfolio AI Assistant"]
      },
      { 
        skill: "RAG Concepts", 
        statement: "Understanding of retrieval-augmented generation for context-aware AI",
        projects: []
      }
    ]
  },
  {
    title: "DevOps & Security",
    icon: "🛡️",
    capabilities: [
      { 
        skill: "Docker", 
        statement: "Containerized dev/prod environments with Docker Compose multi-service setups",
        projects: ["Hybrid-Analyzer"]
      },
      { 
        skill: "JWT Auth", 
        statement: "Secure authentication with httpOnly cookies, refresh tokens, and RLS",
        projects: ["MLS Quiz App", "Hybrid-Analyzer", "WorkConnect CRM"]
      },
      { 
        skill: "Database Design", 
        statement: "MongoDB and PostgreSQL schema design with performance optimization",
        projects: ["MLS Quiz App", "Hybrid-Analyzer", "WorkConnect CRM"]
      },
      { 
        skill: "Google Cybersecurity", 
        statement: "Certified in network security, incident response, and OWASP principles",
        projects: []
      }
    ]
  }
];

// Legacy format for backward compatibility with SkillsWindow progress bars
export const skillsLegacy = [
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
