export const projects = [
  // FLAGSHIP: MERN + AI
  {
    id: 2,
    title: "Hybrid-Analyzer",
    problem: "Manual article categorization was slow and inconsistent. Rule-based systems failed on domain-specific jargon.",
    desc: "AI text analysis orchestrating Hugging Face + Gemini APIs.",
    architecture: {
      overview: "FastAPI backend orchestrating dual AI services. React frontend. PostgreSQL persistence.",
      frontend: "React SPA with Axios interceptors for JWT refresh. Loading states for async AI ops.",
      backend: "FastAPI async endpoints. Pydantic validation. SQLAlchemy ORM.",
      database: "PostgreSQL storing users, articles, cached classification results."
    },
    aiDetails: {
      model: "HuggingFace Zero-Shot (facebook/bart-large-mnli) + Gemini Pro",
      dataFlow: "Input → Preprocessing → HuggingFace classification → Gemini enrichment → JSON output",
      whyAI: "Needed semantic understanding that generalizes across topics. Rule-based failed.",
      integration: "FastAPI orchestrates both APIs with fallback logic."
    },
    technicalDecisions: [
      "Zero-Shot over fine-tuned: no training data needed, handles arbitrary categories",
      "Result caching in PostgreSQL: reduces API costs on repeated analyses",
      "Async/await throughout: non-blocking AI calls",
      "Docker Compose: consistent dev/prod across Python and Node"
    ],
    failureHandling: "If HuggingFace fails, Gemini handles full classification. If Gemini rate limits, cached results served. If both fail, user gets retry prompt with exponential backoff.",
    outcome: "<3 second processing. 85%+ classification accuracy. Deployed Vercel + Railway.",
    tech: ["FastAPI", "React", "Hugging Face", "Gemini API", "PostgreSQL", "Docker"],
    github: "https://github.com/saidElamri/hybrid-analyzer",
    demo: "#",
    category: "AI / ML",
    icon: "🧠",
    color: "#a371f7",
    featured: true
  },
  // MERN FULL-STACK
  {
    id: 0,
    title: "MLS Quiz App",
    problem: "Medical lab students needed engaging study tool with progress tracking. Existing tools lacked favorites and revisit functionality.",
    desc: "Quiz platform with real-time scoring and favorites.",
    architecture: {
      overview: "3-tier MERN architecture. JWT authentication layer.",
      frontend: "React SPA. Context API for state. Custom hooks for quiz logic.",
      backend: "Express REST API. Middleware chain: auth → validation → controller.",
      database: "MongoDB with embedded documents for optimized reads."
    },
    technicalDecisions: [
      "Embedded documents: avoids N+1 queries on quiz loads",
      "Optimistic UI: instant favorites with rollback on failure",
      "httpOnly cookies: XSS protection over localStorage",
      "useQuizProgress hook: separates logic from UI"
    ],
    failureHandling: "Optimistic UI rolls back on API failure. JWT refresh on 401. Offline mode caches current quiz progress in localStorage.",
    outcome: "200+ users. 95% completion rate. <100ms response times.",
    tech: ["React", "Express", "MongoDB", "Node.js", "JWT"],
    github: "https://github.com/saidElamri/Quizz-LMS",
    demo: "https://lmsquiz.netlify.app/",
    category: "Full Stack",
    icon: "🎓",
    color: "#58a6ff",
    featured: true
  },
  // ENTERPRISE + i18n
  {
    id: 1,
    title: "WorkConnect CRM",
    problem: "Moroccan workers lacked localized job platform. No RTL support. No Tamazight. Payment preferences ignored.",
    desc: "Job matching platform with 4-language i18n including RTL.",
    architecture: {
      overview: "React SPA. Supabase backend. Role-based access. Realtime subscriptions.",
      frontend: "Vite + React. react-i18next for 4 languages including RTL Arabic.",
      backend: "Supabase: PostgreSQL + Auth + Realtime with RLS policies.",
      database: "PostgreSQL. Workers, companies, tasks, transactions tables."
    },
    technicalDecisions: [
      "Supabase over custom backend: faster MVP with built-in auth",
      "CSS logical properties: proper RTL without layout hacks",
      "Namespaced translations: lazy-load per route, smaller bundles",
      "RLS policies: workers can't see company data, enforceable at DB level"
    ],
    failureHandling: "Realtime subscription auto-reconnects on disconnect. Failed payments show proof upload fallback. Language detection falls back to French if locale unknown.",
    outcome: "4 languages including Tamazight (rare). Complete admin dashboard. Payment proof system.",
    tech: ["React", "Vite", "Supabase", "Tailwind CSS", "i18n"],
    github: "https://github.com/saidElamri/workconnect",
    demo: "#",
    category: "Enterprise",
    icon: "🏢",
    color: "#7ee787",
    featured: true
  },
  // AI / LLM
  {
    id: 3,
    title: "Code Explainer AI",
    problem: "Developers needed plain-English code explanations without switching to docs or ChatGPT.",
    desc: "Gemini-powered Python code explanation engine.",
    architecture: {
      overview: "Flask monolith. Gemini API. Server-rendered.",
      frontend: "Jinja2 templates. Markdown rendering for AI responses.",
      backend: "Flask. Rate limiting middleware. Error handling.",
      database: "Stateless. No persistence. Explanations on-demand."
    },
    aiDetails: {
      model: "Gemini Pro with custom system prompts",
      dataFlow: "Code → Validation → Prompt construction → Stream → Markdown",
      whyAI: "Static analysis can't explain intent. LLM provides context.",
      integration: "Direct API with retry logic."
    },
    technicalDecisions: [
      "Server-rendered: faster initial load, SEO for dev tools",
      "Streaming responses: shows explanation as it generates",
      "Env vars only: API key never in client bundle",
      "Syntax highlighting: readable code blocks in explanations"
    ],
    failureHandling: "Rate limit hit: graceful degradation message with retry timer. Invalid code: validation error before API call. Gemini down: cached example explanations shown.",
    outcome: "Deployed Vercel. Handles 500-line files. <5 second avg.",
    tech: ["Python", "Flask", "Gemini API", "Markdown"],
    github: "https://github.com/saidElamri/codexplainer",
    demo: "https://codexplainer-gray.vercel.app/",
    category: "AI / ML",
    icon: "🤖",
    color: "#a371f7"
  },
  // ENTERPRISE DASHBOARD
  {
    id: 5,
    title: "PetroSolPro",
    problem: "Fuel station managers lacked stock visibility. Inventory discrepancies led to fraud suspicion.",
    desc: "Enterprise stock management dashboard for fuel stations.",
    architecture: {
      overview: "React dashboard. Recharts visualization. Enterprise design.",
      frontend: "Vite + React. Component library approach. Real-time graphs.",
      backend: "API integration layer (frontend demo).",
      database: "Mock schema simulating PostgreSQL for stations, deliveries."
    },
    technicalDecisions: [
      "Recharts over D3: faster dev, sufficient customization",
      "Threshold alerts: flags stock anomalies automatically",
      "Modular widgets: drag-drop layout for user customization",
      "Horizontal scroll tables: mobile-friendly enterprise data"
    ],
    failureHandling: "API timeout: shows last cached data with stale indicator. Chart render fail: falls back to table view. Alert system: queues notifications if delivery fails.",
    outcome: "Complete dashboard prototype. Real-time visualization. Anomaly detection.",
    tech: ["React", "Recharts", "Tailwind CSS", "Vite"],
    github: "https://github.com/saidElamri/petro",
    demo: "https://aga-petro.netlify.app/",
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
