/**
 * Master Character Animation Registry
 * Derived from the official Shubham Raj Sharma Character Reference Sheet.
 * Supporting transparent WebM (alpha channel) with MP4 fallback.
 */

export const CHARACTER_CONFIG = {
  name: "Shubham Raj Sharma",
  role: "Software Development Engineer",
  style: "Modern, Minimal, Professional",
  look: "Young, Confident, Approachable",
  palette: {
    cyan: "#00E5FF",
    purple: "#7C3AED",
    charcoal: "#18181B",
    offWhite: "#E5E7EB"
  },
  keyTraits: [
    "Confident", "Curious", "Approachable",
    "Problem Solver", "Focused", "Creative",
    "Tech Enthusiast", "Learner", "Builder"
  ],
  animations: {
    hero_idle: {
      id: "hero_idle",
      index: "01",
      section: "HERO",
      title: "Confident Introduction",
      description: "Welcoming introduction with friendly expression and posture.",
      mp4: "/character/hero_idle_animation.mp4",
      poster: "/character/hero_idle.png",
      alt: "Shubham Raj Sharma - Software Development Engineer",
      glowColor: "rgba(0, 229, 255, 0.25)"
    },
    about_explain: {
      id: "about_explain",
      index: "02",
      section: "ABOUT",
      title: "Explaining / Talking",
      description: "Articulating engineering focus and identity with expressive gestures.",
      mp4: "/character/About_idle.mp4",
      poster: "/character/About_idle.png",
      alt: "Shubham Raj Sharma - Explaining & Presenting",
      glowColor: "rgba(124, 58, 237, 0.35)"
    },
    experience_point: {
      id: "experience_point",
      index: "03",
      section: "EXPERIENCE",
      title: "Engineering in Practice",
      description: "Presenting real-world full-stack development and backend engineering track record.",
      mp4: "/character/Exp_idle.mp4",
      poster: "/character/Exp_idle.png",
      alt: "Shubham Raj Sharma - Professional Experience",
      glowColor: "rgba(56, 189, 248, 0.3)"
    },
    projects_work: {
      id: "projects_work",
      index: "04",
      section: "PROJECTS",
      title: "Interacting with UI",
      description: "Developing code and building modern full-stack architectures.",
      mp4: "/character/Projects_idle.mp4",
      poster: "/character/Projects_idle.png",
      alt: "Shubham Raj Sharma - Working on Projects",
      glowColor: "rgba(0, 229, 255, 0.3)"
    },
    skills_interact: {
      id: "skills_interact",
      index: "05",
      section: "SKILLS",
      title: "Interacting with Tech Universe",
      description: "Directing attention to floating technology glyphs and technical systems.",
      mp4: "/character/skills_interact.mp4",
      poster: "/character/skills_interact.png",
      alt: "Shubham Raj Sharma - Interacting with Tech Universe",
      glowColor: "rgba(124, 58, 237, 0.35)"
    },
    ai_interact: {
      id: "ai_interact",
      index: "06",
      section: "AI / ACHIEVEMENTS",
      title: "Building with Intelligence",
      description: "Interacting with AI pipelines, agentic workflows, and reasoning systems.",
      mp4: "/character/ai_interact.mp4",
      poster: "/character/ai_interact.png",
      alt: "Shubham Raj Sharma - Building with Intelligence",
      glowColor: "rgba(192, 132, 252, 0.4)"
    },
    contact_welcome: {
      id: "contact_welcome",
      index: "07",
      section: "CONTACT",
      title: "Welcoming to Connect",
      description: "Warm final interaction inviting collaborations and engineering opportunities.",
      mp4: "/character/contact_welcome.mp4",
      poster: "/character/contact_welcome.png",
      alt: "Shubham Raj Sharma - Welcoming to Connect",
      glowColor: "rgba(0, 229, 255, 0.35)"
    }
  }
};
