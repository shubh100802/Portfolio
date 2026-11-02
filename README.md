# Shubham Raj Sharma — Cinematic Developer Portfolio

> An interactive, character-driven 3D personal portfolio engineered with React, Three.js, and modern CSS architecture. Showcases production full-stack systems, scalable backend architectures, agentic AI pipelines, and interactive technical skills through a cinematic narrative.

[![Live Deployment](https://img.shields.io/badge/Live_Site-Render-00E5FF?style=for-the-badge&logo=render&logoColor=white)](https://shubhs-portfolio-sfy2.onrender.com/)
[![GitHub Profile](https://img.shields.io/badge/GitHub-shubh100802-18181B?style=for-the-badge&logo=github&logoColor=white)](https://github.com/shubh100802)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-in%2Fshubham--raj--sharma-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shubham-raj-sharma/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.2.11-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r164-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)

<!-- Portfolio Preview Placeholder: Replace with project screenshot once generated (e.g. ![Portfolio Preview](public/preview.png)) -->

---

## 📑 Table of Contents

- [Overview & Vision](#-overview--vision)
  - [Why This Project Exists](#why-this-project-exists)
  - [Primary Objectives](#primary-objectives)
  - [Key Differentiators](#key-differentiators)
- [System Architecture](#-system-architecture)
- [The Seven Narrative Chapters](#-the-seven-narrative-chapters)
- [Core Feature Highlights](#-core-feature-highlights)
- [Character Video Pipeline](#-character-video-pipeline)
- [Technology Stack](#-technology-stack)
- [Repository Structure](#-repository-structure)
- [Data-Driven Architecture](#-data-driven-architecture)
- [Getting Started & Local Development](#-getting-started--local-development)
  - [Prerequisites](#prerequisites)
  - [Installation & Execution](#installation--execution)
- [API Integrations & Environment Configuration](#-api-integrations--environment-configuration)
- [Responsive Engineering Strategy](#-responsive-engineering-strategy)
- [Performance & Accessibility](#-performance--accessibility)
- [Deployment Guide](#-deployment-guide)
- [Quality Assurance & Verification](#-quality-assurance--verification)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [License & Attributions](#-license--attributions)
- [Author & Contact](#-author--contact)

---

## 🌟 Overview & Vision

### Why This Project Exists
Conventional software engineering portfolios often resemble static resumes formatted in HTML. They list technical keywords and static project screenshots without communicating the problem-solving mindset, technical rigor, or architectural decisions behind the work.

This portfolio was designed from the ground up to bridge the gap between creative visual presentation and deep technical substance. Built as an interactive cinematic experience, it transforms personal career milestones, production systems, and engineering competencies into an exploratory narrative stream.

### Primary Objectives
1. **Showcase Real Systems**: Highlight verified, production-tested software systems—including anti-proxy geofenced attendance platforms, clinical agentic loops, live fintech loan engines, and campus-scale allocation algorithms.
2. **Demonstrate Creative Frontend Engineering**: Seamlessly integrate WebGL 3D scene graphs, responsive CSS grid architectures, and hardware-accelerated video streaming without sacrificing performance or accessibility.
3. **Provide High Technical Transparency**: Give technical recruiters and hiring managers immediate access to system topology diagrams, technology tags, measurable metrics, live deployment links, and source code repositories.

### Key Differentiators
- **Cinematic Character Persona**: Section-synchronized character video animations that react to chapter transitions, establish direct presence, and guide visitors through complex architectures.
- **Fixed WebGL Background**: A persistent 3D canvas powered by Three.js and `@react-three/fiber` that dynamically shifts camera perspective and studio lighting rigs based on scroll depth.
- **Deterministic Typewriter Monologues**: HUD dialogue terminals that present technical reflections and context for each chapter with skip and advance controls.
- **Strict Data-Presentation Separation**: Complete decoupling of portfolio information (projects, skills, dialogue lines, achievements) from React rendering components via structured registries.

---

## 🏗️ System Architecture

The application is structured as a dual-layer interactive application:
1. **The 3D Canvas Layer (`Scene.jsx`)**: Sits fixed in the background (`z-index: 1`) managing the WebGL canvas, smooth camera lerping, and multi-point studio lighting rigs.
2. **The Narrative Content Stream (`narrative-content-stream`)**: Sits above the 3D canvas (`z-index: 10`) hosting the seven scrollable storytelling chapters, each paired with interactive workstations, HUD dialogues, and character presentation stages.

```
                    ┌───────────────────────────────────────────────┐
                    │               App.jsx Root                   │
                    └───────┬───────────────────────────────┬───────┘
                            │                               │
            ┌───────────────▼──────────────┐ ┌──────────────▼──────────────┐
            │   Global Fixed 3D Canvas     │ │  Narrative Content Stream   │
            │        (Scene.jsx)           │ │  (Seven Story Chapters)     │
            └───────┬──────────────┬───────┘ └──────┬──────────────┬───────┘
                    │              │                │              │
      ┌─────────────▼────┐   ┌─────▼──────────┐ ┌───▼────────────┐ ┌▼───────────────┐
      │ CameraController │   │ Studio Lighting│ │ 01 — Hero      │ │ 04 — Projects  │
      │ (Scroll Lerping) │   │ (Dual Rigs)    │ │ 02 — About     │ │ 05 — Skills    │
      └──────────────────┘   └────────────────┘ │ 03 — Experience│ │ 06 — AI / Achi │
                                                │                │ │ 07 — Contact   │
                                                └────────────────┘ └────────────────┘
```

---

## 📖 The Seven Narrative Chapters

The portfolio is organized into seven sequential chapters, each serving a distinct informational purpose:

| Chapter | Title | Focus & Core Content | Character Video Asset | Key Mechanics |
| :---: | :--- | :--- | :--- | :--- |
| **01** | **Hero** | Welcoming introduction, professional focus, quick resume access, social profiles | `hero_idle_animation.mp4` | Live status telemetry, dialogue typewriter HUD, scroll prompt |
| **02** | **About** | Engineering identity, foundational pillars, academic foundation (VIT B.Tech) | `About_idle.mp4` | Interactive 3D focus node grid, education foundation card |
| **03** | **Experience** | Professional track record at Graphura (MERN) and CNC Web World (Backend) | `Exp_idle.mp4` | Chronological experience cards, responsibility metrics, tech tags |
| **04** | **Projects** | 5 production architectures: Geo-Attendance, SafeDischarge, MyLoanCredit, Roommate Sync, Dispatch Balancer | `Projects_idle.mp4` | System topology diagrams, telemetry metrics, live links, tab selector |
| **05** | **Skills** | Tech Universe containing 25+ categorized technologies across 6 disciplines | `Skill.mp4` | Multi-category filter bar, 2-column node chips, connected node inspector |
| **06** | **AI / Achievements** | GenAI workflows, prompt engineering, Gemini API, hackathons, and certifications | `Ai+achi.mp4` | Neural pipeline topology, competition highlights, certified DBA badges |
| **07** | **Contact** | Direct outreach hub, direct contact channels, instant Telegram inquiry composer | `Contact_idle.mp4` | Direct Telegram API bot dispatcher, one-click email copy, footer navigation |

---

## ⚡ Core Feature Highlights

### 1. Interactive Production Systems Showcase (Chapter 04)
Rather than displaying generic project cards, the **Projects** chapter operates as an interactive workstation:
- **System Topology Visualizers**: Custom diagrams demonstrating client GPS radius validation, PDF OCR ingestion loops, SSL/OTP multi-tier approval flows, and greedy Haversine route algorithms.
- **Telemetry Metric Cards**: Quantitative highlights for each system (e.g., active testing scale, zero-hallucination verification, cloud run runtimes).
- **Architecture Tabs**: Seamless tab-based selection allowing deep-dive inspection of each system without navigating away.

### 2. The Tech Universe & Constellation Hub (Chapter 05)
The **Skills** section is modeled as an interactive constellation of engineering tools:
- **Disciplines Covered**: Languages (Java, Python, JavaScript, SQL), Backend/Web (Node.js, Express.js), Databases (MongoDB, MySQL), AI & GenAI (Prompt Engineering, Gemini API, LLM Agents), Core Engineering (OOP, DSA, RBAC Security), and Tools/Cloud (Git, GCP Cloud Run, Postman, Render).
- **Connected Architecture Inspector**: Selecting any technology chip surfaces its practical application in Shubham's projects and highlights connected architecture nodes.

### 3. Direct Message Composer with Telegram Dispatch (Chapter 07)
Visitors can dispatch queries directly to Shubham from the browser:
- Client-side form with real-time field validation (name, email, subject, message).
- Secure asynchronous dispatch to the Telegram Bot HTTP API with instant notifications.
- Non-blocking UX with loading states, success confirmation, and error fallbacks.

### 4. Dynamic Cyber Mobile Navigation
- Dedicated full-screen navigation drawer tailored for touch devices.
- Numbered chapter navigation cards displaying active section tracking during scroll.
- Quick-access resume download and social link integration.
- Hardware-accelerated transitions with background blur overlays.

---

## 🎥 Character Video Pipeline

One of the defining features of this portfolio is the integrated character video system.

### How It Works
1. **Asset Architecture**: High-definition MP4 character renders are hosted directly in `public/character/` and cataloged in [src/data/characterAnimations.js](file:///d:/Portfolio-1/src/data/characterAnimations.js).
2. **MasterCharacter Component**: [src/components/character/MasterCharacter.jsx](file:///d:/Portfolio-1/src/components/character/MasterCharacter.jsx) orchestrates media loading, pointer-driven parallax offset, and playback states.
3. **Visibility-Aware Playback Management**: An `IntersectionObserver` instance monitors the character stage. When a section enters the viewport (threshold `0.10`), playback automatically begins; when scrolled out of view, playback pauses to conserve CPU, GPU, and battery resources.
4. **Resilient Load Lifecycle**: Listens across `onLoadedMetadata`, `onLoadedData`, `onCanPlay`, `onPlay`, and `onTimeUpdate` to guarantee instant visibility transitions, ensuring mobile browsers that restrict background preloading display smoothly.
5. **Seamless Visual Blending**:
   - The videos are encoded against a pure black (`#000000`) studio background.
   - The surrounding container utilizes a soft radial feathering vignette mask (`radial-gradient(ellipse 96% 96% at 50% 50%, #000000 84%, transparent 100%)`) that dissolves outer video boundaries into the dark site background without cutting into the character's clothing, gestures, or glowing UI holograms.
   - An ambient backlight aura and ground shadow disc pulse gently behind the character stage.

### Asset Registry & Verification

All seven section character video assets are present and verified in the repository:

| # | Animation ID | Section | Asset Path | File Size | Status |
| :-: | :--- | :--- | :--- | :-: | :-: |
| 01 | `hero_idle` | HERO | `public/character/hero_idle_animation.mp4` | 640 KB | Active |
| 02 | `about_explain` | ABOUT | `public/character/About_idle.mp4` | 781 KB | Active |
| 03 | `experience_point` | EXPERIENCE | `public/character/Exp_idle.mp4` | 753 KB | Active |
| 04 | `projects_work` | PROJECTS | `public/character/Projects_idle.mp4` | 869 KB | Active |
| 05 | `skills_interact` | SKILLS | `public/character/Skill.mp4` | 1.16 MB | Active |
| 06 | `ai_interact` | AI / ACHIEVEMENTS | `public/character/Ai+achi.mp4` | 1.17 MB | Active |
| 07 | `contact_welcome` | CONTACT | `public/character/Contact_idle.mp4` | 3.65 MB | Active |

---

## 🛠️ Technology Stack

| Category | Technology | Version | Purpose in Project |
| :--- | :--- | :---: | :--- |
| **Frontend Framework** | React | `^18.3.1` | Core declarative UI architecture and component state management |
| **Build Tool & Server** | Vite | `^5.2.11` | Rapid HMR development environment and optimized Rollup production bundling |
| **3D Rendering** | Three.js | `^0.164.1` | WebGL scene graph, custom camera projection, and multi-rig studio lighting |
| **3D React Reconciler**| @react-three/fiber | `^8.16.6` | Declarative fiber tree management for Three.js inside React |
| **3D Ecosystem Helpers**| @react-three/drei | `^9.105.6` | Pre-built abstractions and hooks for Three.js canvas management |
| **Animation Engine** | GSAP | `^3.12.5` | High-performance tweening and smooth UI transitions |
| **UI Iconography** | Lucide React | `^0.378.0` | Modern, consistent SVG iconography for technical HUDs and navigation |
| **Class Utilities** | clsx | `^2.1.1` | Conditional class composition utility |
| **Styling Architecture**| Vanilla CSS / Custom Design System | Native | CSS variables, radial gradient masking, custom glassmorphism, responsive queries |
| **Video Playback** | HTML5 Video API | Native | Hardware-accelerated MP4 playback with IntersectionObserver auto-pause |
| **External Messaging**| Telegram Bot HTTP API | Native | Asynchronous query transmission via HTTPS endpoint |
| **Deployment** | Render Static Site | Cloud | Global CDN distribution, HTTPS termination, and SPA route rewrites |

---

## 📂 Repository Structure

```
Portfolio-1/
├── public/
│   ├── character/                     # Section-synchronized MP4 character video renders
│   │   ├── hero_idle_animation.mp4    # Chapter 01: Hero welcoming animation
│   │   ├── About_idle.mp4             # Chapter 02: About explaining animation
│   │   ├── Exp_idle.mp4               # Chapter 03: Experience timeline presentation
│   │   ├── Projects_idle.mp4          # Chapter 04: Projects workstation interaction
│   │   ├── Skill.mp4                  # Chapter 05: Tech universe gesture interaction
│   │   ├── Ai+achi.mp4                # Chapter 06: AI pipelines & reasoning interaction
│   │   └── Contact_idle.mp4           # Chapter 07: Closing welcome and contact gesture
│   ├── favicon.png                    # Brand favicon icon
│   └── Shubham_Raj_Sharma_SDE.pdf     # Official downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── about/                     # Chapter 02: About components
│   │   │   ├── About.jsx              # Main About section container & split grid
│   │   │   ├── AboutDialogue.jsx      # Monologue typewriter HUD
│   │   │   ├── AboutEducation.jsx     # VIT Computer Science education card
│   │   │   ├── AboutTechGrid.jsx      # Interactive 3D technical focus nodes
│   │   │   └── AboutTransitionAnchor.jsx # Transition indicator
│   │   ├── ai/                        # Chapter 06: AI & Achievements components
│   │   │   ├── Ai.jsx                 # AI chapter container
│   │   │   ├── AiAchievementsList.jsx # Capabilities, Hackathons, and DBA Certifications
│   │   │   ├── AiDialogue.jsx         # AI monologue HUD
│   │   │   └── AiPipelineVisual.jsx   # Abstract deterministic/agentic neural pipeline diagram
│   │   ├── character/                 # Master Character video pipeline
│   │   │   ├── CharacterPlaceholder.jsx # Stage placeholder wireframe
│   │   │   └── MasterCharacter.jsx    # Hardware-accelerated MP4 character stage
│   │   ├── contact/                   # Chapter 07: Contact components
│   │   │   ├── Contact.jsx            # Contact chapter container & split grid
│   │   │   ├── ContactCard.jsx        # Direct channels & Telegram query composer
│   │   │   ├── ContactDialogue.jsx    # Contact monologue HUD
│   │   │   └── ContactFooter.jsx      # Minimal bottom branding and back-to-top button
│   │   ├── experience/                # Chapter 03: Experience components
│   │   │   ├── Experience.jsx         # Experience chapter container
│   │   │   ├── ExperienceDialogue.jsx # Experience monologue HUD
│   │   │   ├── ExperienceList.jsx     # Graphura & CNC Web World experience cards
│   │   │   └── ExperienceTransitionAnchor.jsx # Experience section transition
│   │   ├── hero/                      # Chapter 01: Hero components
│   │   │   ├── Hero.jsx               # Hero chapter container
│   │   │   ├── HeroDialogue.jsx       # Introduction monologue typewriter HUD
│   │   │   ├── HeroNavigation.jsx     # Desktop navbar & cyber mobile drawer
│   │   │   ├── HeroResumeCTA.jsx      # Resume download button
│   │   │   ├── HeroScrollIndicator.jsx # Interactive mouse scroll indicator
│   │   │   ├── HeroSocials.jsx        # GitHub, LinkedIn, Instagram links
│   │   │   └── HeroText.jsx           # Main headline and role typography
│   │   ├── projects/                  # Chapter 04: Projects components
│   │   │   ├── ProjectDetail.jsx      # Selected project architecture outcomes & stack
│   │   │   ├── Projects.jsx           # Projects chapter container
│   │   │   ├── ProjectsDialogue.jsx   # Projects monologue HUD
│   │   │   ├── ProjectSelector.jsx    # Interactive tab selector for 5 systems
│   │   │   ├── ProjectsTransitionAnchor.jsx # Section transition
│   │   │   └── ProjectVisuals.jsx     # System topology diagrams (GPS, Agent, Fintech, Dispatch)
│   │   ├── skills/                    # Chapter 05: Skills components
│   │   │   ├── Skills.jsx             # Skills chapter container
│   │   │   ├── SkillsDialogue.jsx     # Skills monologue HUD
│   │   │   ├── TechConstellation.jsx  # Interactive multi-category filterable node grid
│   │   │   └── TechDetailCard.jsx     # Detailed telemetry inspector for selected skill
│   │   ├── three/                     # WebGL 3D Canvas components
│   │   │   ├── AboutCharacter.jsx     # Procedural 3D character model
│   │   │   ├── CameraController.jsx   # Lerped scroll-progress camera controller
│   │   │   ├── CharacterModel.jsx     # Procedural developer avatar mesh
│   │   │   ├── FloatingTechNodes.jsx  # Floating 3D orbital tech nodes
│   │   │   ├── InteractiveTechNodes.jsx # Synced orbital nodes
│   │   │   ├── Lighting.jsx           # Dual-rig studio lighting (Hero & About)
│   │   │   └── Scene.jsx              # Canvas container with WebGL availability check
│   │   └── ui/                        # Shared UI primitives
│   │       ├── Loader.jsx             # Initial entry loading bar
│   │       ├── MotionToggle.jsx       # Accessibility motion toggle
│   │       └── SoundToggle.jsx        # Audio state toggle
│   ├── data/                          # Data-Driven Content Registries
│   │   ├── characterAnimations.js     # Character video paths, glow colors, and metadata
│   │   └── profile.js                 # Complete portfolio content (projects, skills, monologues)
│   ├── styles/                        # Styling Architecture
│   │   └── index.css                  # Unified CSS design system & responsive media queries
│   ├── App.jsx                        # Root React component managing section state & scroll
│   └── main.jsx                       # Application DOM entry point
├── .gitignore                         # Git ignore specifications
├── index.html                         # HTML5 template with Google Fonts & Open Graph meta
├── package.json                       # Project manifests, dependencies, and scripts
├── package-lock.json                  # Deterministic npm dependency lockfile
├── README.md                          # Repository documentation
├── render.yaml                        # Render Static Site build & routing configuration
└── vite.config.js                     # Vite build configuration with React plugin
```

---

## 💾 Data-Driven Architecture

The portfolio follows a strict data-driven pattern: presentation components do not hardcode personal achievements, project outcomes, or dialogue monologues. Instead, content is centralized in two primary files:

1. **[src/data/profile.js](file:///d:/Portfolio-1/src/data/profile.js)**:
   - `education`: Academic institution, degree, CGPA, graduation period, and coursework.
   - `dialogueLines`: Chapter-specific typewriter strings for Hero, About, Experience, Projects, Skills, AI, and Contact.
   - `projects`: Detailed array for each software system (IDs, names, categories, tags, descriptions, quantitative metrics, outcome highlights, technology pills, and GitHub / live demo links).
   - `experiences`: Professional employment history (Graphura India, CNC Web World) with role titles, dates, tags, and achievements.
   - `techUniverseCategories` & `techUniverseNodes`: Multi-category taxonomy (Languages, Backend, Databases, AI, Engineering, Cloud) with descriptions, practical usage notes, and interconnected relationship maps.
   - `achievements` & `certifications`: Hackathon placements (HackerRank, Blostem) and official credentials (MongoDB Associate DBA, IBM Blockchain Developer).
   - `socials`: Configured URLs for GitHub, LinkedIn, Instagram, and email.

2. **[src/data/characterAnimations.js](file:///d:/Portfolio-1/src/data/characterAnimations.js)**:
   - Maps each chapter index to its specific MP4 video asset in `public/character/`, ambient backlight glow color, description, and accessibility text.

*To update the portfolio's content, a developer only needs to modify `profile.js` without altering any JSX or CSS layout logic.*

---

## 🚀 Getting Started & Local Development

### Prerequisites
- **Node.js**: `v18.0.0` or higher (tested on Node.js `v20.10.0`)
- **Package Manager**: `npm` (uses `package-lock.json`)

### Installation & Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shubh100802/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`. Vite provides instant Hot Module Replacement (HMR).

4. **Compile the production build**:
   ```bash
   npm run build
   ```
   Compiles optimized production assets into the `dist/` directory.

5. **Preview the production build locally**:
   ```bash
   npm run preview
   ```
   Serves the static `dist/` directory on a local web server for production verification.

---

## 🔐 API Integrations & Environment Configuration

### Zero-Dependency Local Setup
The repository is engineered to run out-of-the-box upon cloning without requiring any local `.env` file. All assets, data registries, and 3D scenes execute immediately in both development and production.

### Direct Message Telegram Dispatch
In [src/components/contact/ContactCard.jsx](file:///d:/Portfolio-1/src/components/contact/ContactCard.jsx), the message composer communicates asynchronously with the official Telegram Bot HTTP API:

```
[User Inquiry Form] ──(HTTPS POST)──> [Telegram Bot API] ──(Push Notification)──> [Shubham's Telegram]
```

- **Dispatch Endpoint**: `https://api.telegram.org/bot<token>/sendMessage`
- **Payload**: Formatted HTML message containing sender name, email address, subject line, inquiry message, and client submission timestamp.
- **Safety**: Client input strings are escaped via `escapeHtml()` prior to dispatch to prevent HTML injection.

*(For teams deploying dedicated forks, the bot token and recipient chat ID can be decoupled into Vite environment variables such as `VITE_TELEGRAM_BOT_TOKEN` and `VITE_TELEGRAM_CHAT_ID` via `.env`)*.

---

## 📱 Responsive Engineering Strategy

The portfolio utilizes a cohesive responsive design architecture built in [src/styles/index.css](file:///d:/Portfolio-1/src/styles/index.css) without third-party utility frameworks:

```
┌────────────────────────────────────────────────────────────────────────┐
│                              BREAKPOINTS                               │
├─────────────────────┬───────────────────────────┬──────────────────────┤
│ Mobile (<= 480px)   │ Tablet (768px - 1024px)   │ Desktop (>= 1280px)  │
├─────────────────────┼───────────────────────────┼──────────────────────┤
│ • Cyber Nav Drawer  │ • Stacked Column Grids    │ • Split 2-Column Grid│
│ • Single-column 1fr │ • 380px-460px Stage       │ • 560px Stage        │
│ • Horizontal scroll │ • Touch-friendly Targets  │ • Pointer Parallax   │
│ • 290px-330px Stage │ • Fluid Typography        │ • 3D Camera Lerp     │
└─────────────────────┴───────────────────────────┴──────────────────────┘
```

- **Mobile Viewports ($320\text{px} - 480\text{px}$)**:
  - Grid columns use `grid-template-columns: minmax(0, 1fr)` and parent containers declare `min-width: 0; width: 100%; box-sizing: border-box; overflow: hidden;` to strictly eliminate horizontal layout blowout.
  - Project tabs (`.project-tabs-row`) and tech category pills (`.tech-category-bar`) leverage native smooth touch scrolling with `-webkit-overflow-scrolling: touch`.
  - Tech chips adapt to a clean 2-column grid (`repeat(2, minmax(0, 1fr))`) with text ellipsis truncation.
  - Character video stages scale down to $330\text{px}$ (and $290\text{px}$ on ultra-compact devices like Galaxy Fold / iPhone SE).
- **Tablet Viewports ($768\text{px} - 1024\text{px}$)**:
  - 2-column split grids transition gracefully to vertical stacks.
  - Character stages scale to $380\text{px} - 460\text{px}$.
- **Desktop Viewports ($1280\text{px} - 1920\text{px}$)**:
  - Dual-column layouts with dedicated Master Character presentation stages ($560\text{px}$ height).
  - Subtle pointer parallax tracking mouse movement across the character stage.

---

## ⚡ Performance & Accessibility

### Performance
- **Zero Video CPU Leaks**: `IntersectionObserver` automatically pauses off-screen character MP4s, dropping rendering cost to zero when users read other sections.
- **WebGL Fallback**: `isWebGLAvailable()` tests for WebGL rendering support before instantiating the Three.js `Canvas`. On devices without hardware WebGL support, the canvas unmounts cleanly without throwing uncaught runtime exceptions.
- **Lightweight Iconography**: Direct icon imports from `lucide-react` ensure minimal tree-shaken SVG bundle sizes.
- **Edge Feathering Vignette**: Soft radial masks feather outer video boundaries without requiring heavyweight real-time chroma-key shaders or canvas frame processing.

### Accessibility
- **Semantic Structure**: Built with native HTML5 landmark elements (`<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
- **ARIA Standards**: Dialogues and interactive elements implement `role="region"`, `role="tablist"`, `role="tab"`, `aria-selected`, `aria-expanded`, and `aria-label` attributes for screen readers.
- **Reduced Motion Support**: An active `@media (prefers-reduced-motion: reduce)` media query zeroes out CSS animation and transition durations for users with vestibular sensitivities.
- **High-Contrast Dark Theme**: Deep `#000000` base with crisp cyan (`#00e5ff`), violet (`#7c3aed`), and slate (`#f8fafc`) typography designed for high readability.

---

## 🚢 Deployment Guide

The portfolio is deployed as a high-availability static web application on **Render**:

- **Platform**: [Render Static Site](https://render.com/)
- **Repository**: Connected to GitHub repository `shubh100802/Portfolio`
- **Build Command**: `npm run build`
- **Publish Directory**: `./dist`
- **SPA Rewrites**: Configured via `render.yaml` to route all incoming traffic (`/*`) to `/index.html`.
- **Live Production URL**: [https://shubhs-portfolio-sfy2.onrender.com/](https://shubhs-portfolio-sfy2.onrender.com/)

---

## 🧪 Quality Assurance & Verification

The project build pipeline is strictly verified:
- **Build Execution**: `npm run build` compiles `2,124 modules` via Vite and Rollup into `dist/` in under 7 seconds with **0 errors** and **0 CSS syntax warnings**.
- **CSS Balance**: Unified `src/styles/index.css` (over 5,800 lines of custom styles) has been validated for strict brace matching across all mobile, tablet, and desktop media queries.
- **Cross-Platform Assets**: Verified that all seven MP4 character assets exist in `public/character/` and resolve correctly in production builds.

*(Note: Automated unit/integration test runners like Vitest or Cypress are not currently configured in `package.json`; introducing component testing is outlined in the roadmap below).*

---

## 🤝 Contributing

Contributions, feedback, and architectural discussions are welcome!

1. **Fork the Repository**: Click the **Fork** button at the top right of this page.
2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit Your Changes**: Follow clear, conventional commit messages:
   ```bash
   git commit -m "feat: enhance tech constellation keyboard navigation"
   ```
4. **Verify the Build**: Ensure the production build compiles cleanly without errors:
   ```bash
   npm run build
   ```
5. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**: Submit a Pull Request to the `main` branch with a concise description of your changes.

---

## 🗺️ Roadmap

- [ ] **Automated Test Suite**: Integrate Vitest and React Testing Library for regression testing across interactive tabs, dialogue monologues, and form validation.
- [ ] **Next-Gen Video Formats**: Explore AV1 and WebM video formats with native alpha channels for browsers that support transparent video playback.
- [ ] **Audio Soundscape**: Add subtle, opt-in cyberpunk ambient sound effects (using Web Audio API) with user-controlled volume and mute toggles.
- [ ] **Technical Blog / Case Studies**: Expand the Projects section with comprehensive Markdown-powered deep dives into distributed system trade-offs.

---

## 📄 License & Attributions

### License
Copyright © 2026 **Shubham Raj Sharma**. All rights reserved.  
The source code structure is available for review, educational inspection, and portfolio reference. The personal branding, identity, character 3D renders, and character video assets are proprietary and may not be redistributed or reused without permission.

### Attributions & Acknowledgments
- **Icons**: [Lucide React](https://lucide.dev/) by Lucide Contributors.
- **3D Engine**: [Three.js](https://threejs.org/) by Ricardo Cabello (Mr.doob) and the Three.js team.
- **Typography**: [Google Fonts](https://fonts.google.com/) — *Unbounded*, *Outfit*, *Plus Jakarta Sans*, and *JetBrains Mono*.

---

## 📬 Author & Contact

**Shubham Raj Sharma**  
*Software Development Engineer • Computer Science Graduate (VIT)*  
Noida, Uttar Pradesh, India

- 🌐 **Live Portfolio**: [shubhs-portfolio-sfy2.onrender.com](https://shubhs-portfolio-sfy2.onrender.com/)
- 💻 **GitHub**: [@shubh100802](https://github.com/shubh100802)
- 👔 **LinkedIn**: [in/shubham-raj-sharma](https://www.linkedin.com/in/shubham-raj-sharma/)
- 📸 **Instagram**: [@itsmeshubh1008](https://www.instagram.com/itsmeshubh1008?xtok=dzZ5cmgyNzhkanRp)
- 📧 **Email**: [shubhamraj1414@gmail.com](mailto:shubhamraj1414@gmail.com)

---

<div align="center">
  <sub>Engineered with precision, curiosity, and code. Built by Shubham Raj Sharma.</sub>
</div>
