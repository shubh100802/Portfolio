/**
 * Profile Data for Shubham Raj Sharma
 * Strictly representing real academic & technical background.
 */

export const PROFILE_DATA = {
  name: "Shubham Raj Sharma",
  shortName: "SR",
  role: "Software Development Engineer",
  primaryFocus: "Backend Engineering • Full Stack Development • AI / LLM Integration",
  education: {
    institution: "Vellore Institute of Technology - VIT",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Aug 2022 – May 2026",
    cgpa: "8.12 / 10.0",
    highlights: "Core focus on DSA, Database Systems, Object-Oriented Architecture, and Distributed Software Design."
  },
  dialogueLines: [
    "Hello! I'm Shubham.",
    "I'm a Software Development Engineer.",
    "I build secure and scalable applications.",
    "Specializing in Backend, Full Stack & AI Integration."
  ],
  aboutDialogueLines: [
    "Hi again.",
    "I'm Shubham — a Computer Science Graduate and Software Development Engineer.",
    "I enjoy building secure, reliable and scalable applications.",
    "My work mainly revolves around backend systems, full-stack development and AI-powered solutions."
  ],
  experienceDialogueLines: [
    "Welcome to Engineering in Practice.",
    "At Graphura, I worked across the MERN stack, building secure authentication flows and contributing to real development workflows.",
    "Before that, at CNC Web World, I engineered backend systems for a Geo-Attendance platform tested by 120+ users.",
    "Focusing on production-ready APIs, robust database design, and secure authentication."
  ],
  projectsDialogueLines: [
    "A curated selection of real-world backend systems, agentic AI pipelines, and production architectures.",
    "Geo-Attendance: GPS radius validation with anti-proxy detection for 120+ users.",
    "SafeDischarge AI: Deterministic agent loop with clinical medication reconciliation.",
    "Hostel Roommate Sync: Mutual matching algorithms engineered for 1,000+ students.",
    "Dispatch Load Balancer: Spring Boot fleet allocator using Haversine distance optimization."
  ],
  skillsDialogueLines: {
    default: [
      "I don't collect technologies just to list them. I use them to solve different engineering problems.",
      "Explore the interactive tech universe to inspect my core backend stack, databases, AI pipelines, and cloud tooling."
    ],
    languages: [
      "Core foundation across object-oriented programming, scripting, systems, and relational queries.",
      "Writing type-safe, maintainable, and efficient code with Java, Python, JavaScript, and SQL."
    ],
    backend: [
      "Backend is where I spend most of my time — APIs, authentication, databases and the systems connecting them.",
      "Architecting event-driven Node.js and Express services with robust middleware and RESTful endpoints."
    ],
    database: [
      "From normalized MySQL relational models to scalable MongoDB document pipelines and indexed lookups.",
      "Ensuring ACID transactional integrity, optimized indexing strategies, and reliable schema migrations."
    ],
    ai: [
      "Integrating deterministic logic with LLMs to build reliable agentic workflows and practical automation.",
      "Leveraging Gemini API, structured prompt engineering, and persistent memory layers for real-world utility."
    ],
    engineering: [
      "Engineering fundamentals — OOP design principles, DSA optimization, and secure JWT / RBAC access control.",
      "Focusing on high scalability, clean architectural patterns, and defensive engineering practices."
    ],
    tools: [
      "From version control with Git to cloud deployments on Google Cloud Run, Render, and AWS.",
      "Validating endpoints rigorously with Postman test suites and automating deployment workflows."
    ]
  },
  aiDialogueLines: {
    default: [
      "I've been exploring AI not just as a tool, but as another layer for building useful software.",
      "Focusing on deterministic prompt engineering, Gemini API integration, and verifiable agent loops."
    ],
    capabilities: [
      "Engineering practical GenAI workflows where LLMs plan actions, parse unstructured data, and follow strict schemas.",
      "Combining deterministic validation rules with multimodal Gemini reasoning to prevent hallucinations."
    ],
    achievements: [
      "Competing in time-bounded AI hackathons and agent challenges to build working prototypes under constraints.",
      "Ranked 738 / 1773 in HackerRank Orchestrate AI Agent Challenge, and Top 30 in Blostem AI Hackathon."
    ],
    certifications: [
      "Validating database administration and distributed systems foundations through industry certifications.",
      "Certified MongoDB Associate Database Administrator and IBM SkillsBuild Blockchain Developer."
    ]
  },
  contactDialogueLines: [
    "Thanks for making it this far.",
    "If you're building something interesting, I'd love to hear about it.",
    "Let's build what's next."
  ],
  projects: [
    {
      id: "geo-attendance",
      index: "01",
      name: "GEO-ATTENDANCE SYSTEM",
      category: "GPS Geofenced Anti-Proxy Attendance Platform",
      tag: "FULL STACK & GEO-SECURITY",
      shortDescription: "Production GPS attendance system with dynamic geofence radii and anti-proxy tab detection.",
      metrics: [
        { label: "Active Testing", value: "120+ Users" },
        { label: "Validation", value: "GPS Geofence" },
        { label: "Deployment", value: "GCP Cloud Run" }
      ],
      highlights: [
        "Engineered real-time GPS coordinate validation against active teacher geofences for 120+ users.",
        "Implemented browser tab-switching detection, auto-logout, and JWT multi-role authorization."
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Geolocation API", "Excel (xlsx)", "GCP Cloud Run"],
      github: "https://github.com/shubh100802/Geo-Attendance-System",
      demo: "https://attendance-app-294842178490.asia-southeast1.run.app",
      architectureType: "geofence"
    },
    {
      id: "safedischarge-ai",
      index: "02",
      name: "SAFEDISCHARGE AI",
      category: "Agentic Clinical Discharge Summary Pipeline",
      tag: "AI & AGENTIC WORKFLOWS",
      shortDescription: "Agentic clinical pipeline converting fragmented medical PDFs into structured, verified discharge summaries.",
      metrics: [
        { label: "Workflow", value: "Agentic Loop" },
        { label: "Safety", value: "Zero Hallucination" },
        { label: "Learning", value: "Correction Memory" }
      ],
      highlights: [
        "Built deterministic LLM agent loop with bounded iterations and contradiction detection.",
        "Implemented automated admission vs. discharge medication reconciliation with clinician review flags."
      ],
      technologies: ["Python 3.11+", "Agentic LLM Loop", "Pydantic", "OCR Pipeline", "PDF Ingestion", "Medication Reconciliation"],
      github: "https://github.com/shubh100802/SafeDischargeAI",
      architectureType: "ai-agent"
    },
    {
      id: "myloancredit",
      index: "03",
      name: "MYLOANCREDIT.COM",
      category: "Production Loan Management & Processing System",
      tag: "FINTECH & WORKFLOWS",
      shortDescription: "Live fintech platform with automated application intake, OTP verification, and multi-tier admin review.",
      metrics: [
        { label: "Environment", value: "Live Production" },
        { label: "Workflows", value: "Multi-Tier Review" },
        { label: "Security", value: "JWT & OTP Auth" }
      ],
      highlights: [
        "Engineered multi-tier admin approval workflows, status tracking, and interactive EMI calculators.",
        "Implemented OTP email verification via Nodemailer and secure JWT token sessions in production."
      ],
      technologies: ["Node.js", "Express.js", "MongoDB Atlas", "JWT", "Tailwind CSS", "Nodemailer", "SSL"],
      github: "https://github.com/shubh100802/Loan-App",
      demo: "https://myloancredit.com/",
      architectureType: "fintech"
    },
    {
      id: "roommate-sync",
      index: "04",
      name: "HOSTEL ROOMMATE SYNC",
      category: "Campus-Scale Mutual Roommate Allocation Platform",
      tag: "CAMPUS SCALE & DATA",
      shortDescription: "Mutual roommate matching and room allocation platform built for 1,000+ campus students and wardens.",
      metrics: [
        { label: "Scale", value: "Campus-Wide" },
        { label: "Validation", value: "Mutual Matching" },
        { label: "Administration", value: "Warden Dashboard" }
      ],
      highlights: [
        "Engineered bidirectional matching logic with instant accept/decline validation.",
        "Built warden administration dashboard with time-window controls, RBAC, and bulk Excel reports."
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "Excel Reports"],
      github: "https://github.com/shubh100802/Hostel-RoomMate-Sync",
      architectureType: "database"
    },
    {
      id: "dispatch-load-balancer",
      index: "05",
      name: "DISPATCH LOAD BALANCER",
      category: "Enterprise Fleet Allocation & Routing Engine",
      tag: "JAVA & DISTRIBUTED SYSTEMS",
      shortDescription: "Spring Boot 3.5 backend service allocating delivery orders to vehicle fleets using Haversine optimization.",
      metrics: [
        { label: "Runtime", value: "Java 24 / Spring 3.5" },
        { label: "Algorithm", value: "Haversine Greedy" },
        { label: "Testing", value: "JUnit 5 & Mockito" }
      ],
      highlights: [
        "Architected greedy priority dispatch (High → Medium → Low) with geospatial Haversine routing.",
        "Engineered Spring Data JPA domain models with Jakarta validation and JUnit 5 test suites."
      ],
      technologies: ["Java 24", "Spring Boot 3.5", "Spring Data JPA", "MySQL", "Haversine Distance", "Jakarta Validation", "JUnit 5"],
      github: "https://github.com/shubh100802/Backend-Dispatch-Load-Balancer",
      architectureType: "java-dispatch"
    }
  ],
  experiences: [
    {
      id: "graphura",
      index: "01",
      company: "Graphura India Private Limited",
      role: "MERN Stack Development Intern",
      period: "July 2026",
      tag: "FULL STACK & AUTH",
      highlights: [
        "Built secure admin login APIs with JWT authentication, bcrypt password hashing, and HTTP-only cookies.",
        "Contributed to full-stack MERN features with team PR reviews, testing, and debugging."
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "HTTP-only Cookies", "Git"]
    },
    {
      id: "cnc",
      index: "02",
      company: "CNC WEB WORLD Technologies Pvt. Ltd.",
      role: "Software Development Engineer (Backend) Intern",
      period: "September 2024 — February 2025",
      tag: "BACKEND & GEO-SYSTEMS",
      highlights: [
        "Architected scalable Geo-Attendance REST APIs using Node.js, Express.js, and MongoDB — tested by 120+ users.",
        "Implemented token-based authentication, role authorization, and database query optimizations."
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Token Auth", "API Testing"]
    }
  ],
  socials: {
    github: "https://github.com/shubh100802",
    linkedin: "https://www.linkedin.com/in/shubham-raj-sharma/",
    email: "mailto:shubhamraj1414@gmail.com",
    linkedinTag: "in/shubham-raj-sharma",
    emailRaw: "shubhamraj1414@gmail.com",
    location: "Noida, India",
    githubTag: "shubh100802"
  },
  resumePath: "/Shubham_Raj_Sharma_SDE.pdf",
  navLinks: [
    { label: "ABOUT", href: "#about", placeholder: false },
    { label: "EXPERIENCE", href: "#experience", placeholder: false },
    { label: "PROJECTS", href: "#projects", placeholder: false },
    { label: "SKILLS", href: "#skills", placeholder: false },
    { label: "AI", href: "#ai", placeholder: false },
    { label: "CONTACT", href: "#contact", placeholder: false }
  ],
  techUniverseCategories: [
    { id: "all", label: "ALL SYSTEMS", icon: "Orbit", desc: "Complete Technical Constellation" },
    { id: "languages", label: "LANGUAGES", icon: "Code2", desc: "Core Programming & Query Languages" },
    { id: "backend", label: "BACKEND / WEB", icon: "Server", desc: "Server Architectures & REST Services" },
    { id: "database", label: "DATABASES", icon: "Database", desc: "Relational & NoSQL Data Persistence" },
    { id: "ai", label: "AI & GENAI", icon: "Sparkles", desc: "LLM Pipelines & Agentic Systems" },
    { id: "engineering", label: "ENGINEERING", icon: "Cpu", desc: "OOP, Algorithms & Access Security" },
    { id: "tools", label: "CLOUD & TOOLS", icon: "Cloud", desc: "DevOps, Postman & Deployment Platforms" }
  ],
  techUniverseNodes: [
    // LANGUAGES
    {
      id: "java",
      name: "Java",
      category: "languages",
      categoryLabel: "LANGUAGES",
      tagline: "Object-Oriented Architecture & JVM Systems",
      description: "Developing scalable backend services, robust class hierarchies, and optimized algorithms with Java 24.",
      practicalUse: "Backend Dispatch Load Balancer (Spring Boot 3.5, JUnit 5)",
      related: ["oop", "dsa", "mysql", "git"],
      accentColor: "cyan"
    },
    {
      id: "python",
      name: "Python",
      category: "languages",
      categoryLabel: "LANGUAGES",
      tagline: "Agentic Workflows & OCR Ingestion Pipelines",
      description: "Building deterministic agent loops, PDF parsing pipelines, and structured medical data extraction scripts.",
      practicalUse: "SafeDischarge AI (Pydantic, Regex, Agentic Clinical Parsing)",
      related: ["ai", "prompt", "llm", "git"],
      accentColor: "cyan"
    },
    {
      id: "javascript",
      name: "JavaScript (ES6+)",
      category: "languages",
      categoryLabel: "LANGUAGES",
      tagline: "Asynchronous Full-Stack Runtime & Event Loops",
      description: "Writing modern asynchronous code, promise pipelines, and dynamic client/server web architectures.",
      practicalUse: "Geo-Attendance, Hostel Roommate Sync, MyLoanCredit.com",
      related: ["nodejs", "express", "mongodb", "restapi"],
      accentColor: "cyan"
    },
    {
      id: "sql",
      name: "SQL",
      category: "languages",
      categoryLabel: "LANGUAGES",
      tagline: "Relational Modeling & Transactional Integrity",
      description: "Authoring normalized relational schemas, multi-table joins, indexing plans, and ACID transactions.",
      practicalUse: "Dispatch Load Balancer (MySQL), Academic Relational Design",
      related: ["mysql", "dbdesign", "java"],
      accentColor: "cyan"
    },

    // BACKEND
    {
      id: "nodejs",
      name: "Node.js",
      category: "backend",
      categoryLabel: "BACKEND / WEB",
      tagline: "Event-Driven Asynchronous Server Runtime",
      description: "Architecting non-blocking backend runtimes, microservices, and server-side business logic.",
      practicalUse: "Geo-Attendance Platform, Graphura MERN Stack Services",
      related: ["express", "javascript", "restapi", "mongodb", "auth"],
      accentColor: "violet"
    },
    {
      id: "express",
      name: "Express.js",
      category: "backend",
      categoryLabel: "BACKEND / WEB",
      tagline: "Modular HTTP Routing & Middleware Pipelines",
      description: "Creating structured REST API routing, custom error-handling middleware, and authentication interceptors.",
      practicalUse: "Hostel Roommate Sync API, MyLoanCredit Backend Engine",
      related: ["nodejs", "restapi", "auth", "rbac", "postman"],
      accentColor: "violet"
    },
    {
      id: "restapi",
      name: "RESTful APIs",
      category: "backend",
      categoryLabel: "BACKEND / WEB",
      tagline: "Stateless Communication & JSON Interfaces",
      description: "Designing standards-compliant REST endpoints with clean HTTP semantics, pagination, and payload validation.",
      practicalUse: "All 5 production and audited GitHub backend systems",
      related: ["express", "postman", "auth", "nodejs"],
      accentColor: "violet"
    },

    // DATABASE
    {
      id: "mongodb",
      name: "MongoDB",
      category: "database",
      categoryLabel: "DATABASES",
      tagline: "NoSQL Document Storage & Aggregation Pipelines",
      description: "Structuring high-throughput JSON document schemas, compound indexes, and aggregation queries.",
      practicalUse: "Hostel Roommate Sync (1,000+ records), Geo-Attendance Logs",
      related: ["nodejs", "express", "dbdesign", "javascript"],
      accentColor: "cyan"
    },
    {
      id: "mysql",
      name: "MySQL",
      category: "database",
      categoryLabel: "DATABASES",
      tagline: "ACID Transactions & Foreign Key Relationships",
      description: "Designing normalized relational databases with strict constraints, stored logic, and JPA mappings.",
      practicalUse: "Backend Dispatch Load Balancer (Spring Data JPA)",
      related: ["sql", "dbdesign", "java"],
      accentColor: "cyan"
    },
    {
      id: "dbdesign",
      name: "Database Design",
      category: "database",
      categoryLabel: "DATABASES",
      tagline: "Schema Normalization, Indexing & Concurrency",
      description: "Engineering resilient data models to avoid data redundancy, handle concurrent traffic, and ensure quick lookups.",
      practicalUse: "VIT Bhopal Roommate Mutual Allocation & Geofence Logs",
      related: ["mongodb", "mysql", "sql", "dsa"],
      accentColor: "cyan"
    },

    // AI & GENAI
    {
      id: "gemini",
      name: "Gemini API",
      category: "ai",
      categoryLabel: "AI & GENAI",
      tagline: "Multimodal LLM Reasoning & Structured Outputs",
      description: "Integrating Google's Gemini models for structured medical text extraction and clinical summarization.",
      practicalUse: "SafeDischarge AI clinical document understanding",
      related: ["llm", "prompt", "python"],
      accentColor: "violet"
    },
    {
      id: "llm",
      name: "LLM Integration",
      category: "ai",
      categoryLabel: "AI & GENAI",
      tagline: "Deterministic Agent Loops & Correction Memory",
      description: "Engineering robust LLM workflows with feedback loops, bounded iterations, and zero-hallucination guardrails.",
      practicalUse: "Agentic Clinical Discharge Summary Pipeline",
      related: ["gemini", "prompt", "python"],
      accentColor: "violet"
    },
    {
      id: "prompt",
      name: "Prompt Engineering",
      category: "ai",
      categoryLabel: "AI & GENAI",
      tagline: "Few-Shot Formatting & Strict JSON Schemas",
      description: "Authoring deterministic prompts with schema enforcement to guarantee safe, validated outputs for critical systems.",
      practicalUse: "Prescription and dosage reconciliation without hallucinations",
      related: ["gemini", "llm", "python"],
      accentColor: "violet"
    },

    // ENGINEERING
    {
      id: "oop",
      name: "OOP Principles",
      category: "engineering",
      categoryLabel: "ENGINEERING CORE",
      tagline: "Encapsulation, Polymorphism & SOLID Design",
      description: "Structuring modular, decoupled software architectures using proven design patterns and clean object contracts.",
      practicalUse: "Java Spring Boot Fleet Balancers & MERN controllers",
      related: ["java", "dsa", "dbdesign"],
      accentColor: "cyan"
    },
    {
      id: "dsa",
      name: "DSA",
      category: "engineering",
      categoryLabel: "ENGINEERING CORE",
      tagline: "Optimized Algorithms & Spatial Computations",
      description: "Applying data structures, greedy optimization, and algorithmic complexity analysis for real-world speed.",
      practicalUse: "Haversine distance routing & priority queue dispatch",
      related: ["java", "oop", "dbdesign"],
      accentColor: "cyan"
    },
    {
      id: "auth",
      name: "Authentication",
      category: "engineering",
      categoryLabel: "ENGINEERING CORE",
      tagline: "JWT Session Tokens, Bcrypt & OTP Verification",
      description: "Implementing stateless JWT token sessions, secure password hashing with bcrypt, and OTP email validation.",
      practicalUse: "Geo-Attendance, MyLoanCredit.com, Graphura MERN flows",
      related: ["rbac", "express", "nodejs", "postman"],
      accentColor: "cyan"
    },
    {
      id: "rbac",
      name: "Authorization (RBAC)",
      category: "engineering",
      categoryLabel: "ENGINEERING CORE",
      tagline: "Role-Based Access Control & Route Guards",
      description: "Enforcing granular privilege tiers (Students, Wardens, Admins, Teachers) through dedicated route guards.",
      practicalUse: "Hostel Roommate Sync Warden Controls & Geo-Attendance Roles",
      related: ["auth", "express", "nodejs"],
      accentColor: "cyan"
    },

    // TOOLS / CLOUD
    {
      id: "git",
      name: "Git",
      category: "tools",
      categoryLabel: "TOOLS & CLOUD",
      tagline: "Distributed Version Control & Branch Workflows",
      description: "Managing codebase history, feature branches, rebasing, and atomic semantic commits.",
      practicalUse: "Daily workflow across all personal & collaborative repositories",
      related: ["github", "postman", "gcp"],
      accentColor: "violet"
    },
    {
      id: "github",
      name: "GitHub",
      category: "tools",
      categoryLabel: "TOOLS & CLOUD",
      tagline: "Repository Management, PRs & CI/CD",
      description: "Hosting production codebases, collaborating via code reviews, and automating workflows.",
      practicalUse: "shubh100802 audited production projects repository hub",
      related: ["git", "render", "gcp"],
      accentColor: "violet"
    },
    {
      id: "postman",
      name: "Postman",
      category: "tools",
      categoryLabel: "TOOLS & CLOUD",
      tagline: "API Endpoint Debugging & Automated Test Collections",
      description: "Testing API contracts, documenting JSON schemas, simulating payloads, and verifying edge-case response codes.",
      practicalUse: "Validation suite for Geo-Attendance & Dispatch APIs",
      related: ["restapi", "express", "auth"],
      accentColor: "violet"
    },
    {
      id: "gcp",
      name: "Google Cloud (GCP)",
      category: "tools",
      categoryLabel: "TOOLS & CLOUD",
      tagline: "Cloud Run Container Deployments & Cloud Infra",
      description: "Deploying containerized backend applications to GCP Cloud Run with autoscaling and secure domain routing.",
      practicalUse: "Geo-Attendance live production system deployment",
      related: ["git", "github", "render", "aws"],
      accentColor: "violet"
    },
    {
      id: "render",
      name: "Render",
      category: "tools",
      categoryLabel: "TOOLS & CLOUD",
      tagline: "Automated Web Service Deployments & Cloud Environments",
      description: "Configuring continuous deployment web services with environment variable management and health checks.",
      practicalUse: "Backend deployments and live demo hosting",
      related: ["gcp", "github", "git"],
      accentColor: "violet"
    },
    {
      id: "aws",
      name: "AWS",
      category: "tools",
      categoryLabel: "TOOLS & CLOUD",
      tagline: "Cloud Fundamentals & Scalable Infrastructure",
      description: "Deploying and managing web assets, scalable cloud compute instances, and cloud storage configurations.",
      practicalUse: "Cloud hosting and scalable infrastructure setups",
      related: ["gcp", "render", "github"],
      accentColor: "violet"
    }
  ],
  techNodes: [
    {
      id: "java",
      name: "Java",
      category: "Backend & Core",
      tagline: "Robust OOP, DSA & High-Performance Systems",
      color: "#f59e0b",
      glowColor: "rgba(245, 158, 11, 0.4)",
      position: [-1.65, 0.48, 0.1],
      description: "Developing scalable backend systems, robust object-oriented architectures, and optimized data structures and algorithms."
    },
    {
      id: "nodejs",
      name: "Node.js & Express",
      category: "Backend Services",
      tagline: "Asynchronous APIs & Microservices",
      color: "#10b981",
      glowColor: "rgba(16, 185, 129, 0.4)",
      position: [1.35, 0.48, 0.1],
      description: "Designing RESTful APIs, asynchronous event-driven backend architectures, and secure server-side logic."
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "NoSQL Database",
      tagline: "Document Stores & Scalable Schemas",
      color: "#00e5ff",
      glowColor: "rgba(0, 229, 255, 0.4)",
      position: [-1.75, 0.02, 0.15],
      description: "Building high-throughput document schemas, aggregation pipelines, and flexible persistent data layers."
    },
    {
      id: "sql",
      name: "SQL & MySQL",
      category: "Relational DB",
      tagline: "ACID Transactions & Database Design",
      color: "#38bdf8",
      glowColor: "rgba(56, 189, 248, 0.4)",
      position: [1.45, 0.05, 0.15],
      description: "Crafting normalized relational models, optimized indexing strategies, complex joins, and transactional integrity."
    },
    {
      id: "restapi",
      name: "RESTful APIs",
      category: "Integration",
      tagline: "Secure Endpoints & Postman Testing",
      color: "#818cf8",
      glowColor: "rgba(129, 140, 248, 0.4)",
      position: [-1.60, -0.42, 0.2],
      description: "Engineering authenticated, modular, and well-documented HTTP services validated thoroughly with Postman."
    },
    {
      id: "ai",
      name: "AI & LLM Integration",
      category: "Intelligence",
      tagline: "Gemini API & Prompt Engineering",
      color: "#c084fc",
      glowColor: "rgba(192, 132, 252, 0.4)",
      position: [1.30, -0.42, 0.2],
      description: "Integrating Gemini API, developing context-aware LLM pipelines, and applying structured prompt engineering for intelligent apps."
    }
  ],
  engineeringPillars: [
    {
      title: "Backend Engineering",
      desc: "Robust APIs, OOP architecture, database design, and high-performance server logic."
    },
    {
      title: "Full Stack Development",
      desc: "End-to-end web architectures bridging responsive frontends with resilient backends."
    },
    {
      title: "AI / LLM Integration",
      desc: "Empowering modern applications with Gemini API, generative models, and structured prompt flows."
    }
  ],
  aiCapabilities: [
    {
      id: "prompt-engineering",
      index: "01",
      title: "Prompt Engineering",
      tag: "DETERMINISTIC DIRECTIVES",
      tagline: "Structured JSON Schemas & Few-Shot Directives",
      description: "Authoring deterministic prompts with schema enforcement to guarantee safe, validated outputs for critical systems.",
      highlights: [
        "Few-shot contextual steering for consistent structured payloads",
        "Strict JSON schema outputs to eliminate response variability",
        "Negative constraints and guardrail directives"
      ],
      projectRef: "SafeDischarge AI clinical document understanding",
      accent: "cyan"
    },
    {
      id: "gemini-api",
      index: "02",
      title: "Gemini API Integration",
      tag: "MULTIMODAL REASONING",
      tagline: "Document Intelligence & OCR Stream Parsing",
      description: "Integrating Google's Gemini models for structured medical text extraction, contextual reasoning, and PDF summarization.",
      highlights: [
        "Multimodal document parsing and tabular extraction",
        "Context window optimization for multi-page clinical records",
        "Structured tool calling and function integration"
      ],
      projectRef: "SafeDischarge AI OCR and medication reconciliation",
      accent: "violet"
    },
    {
      id: "llm-agentic",
      index: "03",
      title: "LLM & Agentic Workflows",
      tag: "AUTONOMOUS REASONING",
      tagline: "Bounded Iteration Loops & Correction Memory",
      description: "Developing deterministic agentic loops with shared state management, contradiction detection, and persistent correction memory.",
      highlights: [
        "Bounded iteration loops preventing infinite or drifting executions",
        "Contradiction detection preserving conflicting clinical evidence",
        "Persistent correction memory reducing repeated clinician edits"
      ],
      projectRef: "SafeDischarge AI multi-step agent architecture",
      accent: "cyan"
    }
  ],
  achievements: [
    {
      id: "hackerrank-orchestrate",
      index: "01",
      title: "HackerRank Orchestrate AI Agent Challenge",
      rank: "Rank: 738 / 1773",
      category: "Global Competitive AI Agent Challenge",
      tag: "AI AGENTS",
      period: "2024",
      description: "Competed in the global HackerRank Orchestrate AI Challenge, designing autonomous multi-step agent logic to solve algorithmic problem sets under strict execution benchmarks.",
      highlights: [
        "Ranked 738 out of 1,773 global participants",
        "Engineered multi-step automated agent reasoning flows",
        "Optimized computational performance and accuracy under test cases"
      ],
      accent: "cyan"
    },
    {
      id: "blostem-hackathon",
      index: "02",
      title: "Blostem AI Hackathon",
      rank: "Top 30 Finalist",
      category: "National AI Hackathon",
      tag: "AI HACKATHON",
      period: "2024",
      description: "Engineered a working full-stack AI-driven software prototype under hackathon time constraints, placing in the Top 30 finalists nationwide.",
      highlights: [
        "Placed in Top 30 finalists nationwide",
        "Built end-to-end working prototype within hackathon timeline",
        "Integrated AI reasoning with responsive user interfaces"
      ],
      accent: "violet"
    }
  ],
  certifications: [
    {
      id: "mongodb-dba",
      index: "01",
      title: "MongoDB Associate Database Administrator",
      issuer: "MongoDB",
      category: "DATABASE ADMINISTRATION & ARCHITECTURE",
      tag: "CERTIFIED DBA",
      description: "Certified in production MongoDB management, indexing optimization, aggregation pipelines, replica set failover, and high-throughput data architectures.",
      highlights: [
        "Document modeling and compound indexing optimization",
        "High-availability replica set clustering and sharding",
        "Diagnostic monitoring and performance query tuning"
      ],
      accent: "cyan"
    },
    {
      id: "ibm-blockchain",
      index: "02",
      title: "Blockchain Fundamentals & Developer",
      issuer: "IBM SkillsBuild / Cognitive Class",
      category: "DISTRIBUTED LEDGER SYSTEMS",
      tag: "IBM CERTIFIED",
      description: "Certified in decentralized distributed architectures, smart contract logic, cryptographic hashing, and consensus protocols.",
      highlights: [
        "Cryptographic foundations and distributed ledger state machines",
        "Smart contract lifecycle and transaction validation",
        "Consensus mechanisms and enterprise blockchain design"
      ],
      accent: "violet"
    }
  ]
};
