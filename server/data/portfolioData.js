// All my portfolio content lives here.
// After changing anything, run `npm run seed` to update the database.
// Leave a value empty ("") if it's not ready yet - the site hides empty links.

const profile = {
  name: "Hariprasad",
  role: "Full Stack Developer",
  headline: "Building clean, responsive interfaces and the reliable APIs behind them.",
  intro:
    "I'm Hariprasad, a Software Engineer with 3+ years of experience building full-stack web applications with React and Node.js - from user interfaces to APIs, integrations and AI-powered features.",
  bio: [
    "I'm a software engineer with more than three years of experience building full-stack web applications with the MERN stack - responsive React interfaces on the frontend and REST APIs and databases on the backend.",
    "At Haspaces Technology Solutions (May 2023 - Sep 2026) I grew from Associate Software Engineer to Software Engineer, working on an HR recruitment platform. My work there covered resume parsing, candidate scoring, subscription billing with Stripe webhooks, AI chatbot features, AI voice calling, ATS integrations and cloud-based processing. I worked across the whole stack, from React and TypeScript screens to Node.js services.",
    "Outside work I build my own projects - a trading alert system based on Fair Value Gap rules, an AI-powered task manager and a prompt-to-video engine for YouTube Shorts.",
    "I enjoy owning features end to end - building interfaces people find easy to use, the systems behind them that keep working, integrating third-party services and shipping software that people actually use.",
  ],
  location: "Trivandrum, Kerala, India",
  email: "hariprasad72172@gmail.com",
  phone: "+91 8848576772",
  resumeUrl: "/resume.pdf",
  photoUrl: "/profile.jpg",
  available: true, // shows the "Open to new opportunities" badge
  focus: ["Frontend", "Backend", "Full Stack", "AI"],
  links: {
    github: "https://github.com/Hxri72",
    linkedin: "https://www.linkedin.com/in/hari-prasad-1636861b2",
  },
  stats: [
    { value: "3+", label: "Years of professional experience" },
    { value: "2", label: "Roles at Haspaces, Associate to Software Engineer" },
    { value: "6", label: "Projects featured on this site" },
  ],
  services: [
    {
      icon: "frontend",
      title: "Frontend Development",
      description: "Responsive, accessible interfaces with React, TypeScript and modern CSS, from reusable components to full pages.",
    },
    {
      icon: "backend",
      title: "Backend Development",
      description: "REST APIs with Node.js and Express, data modelling with MongoDB, webhooks and async workflows.",
    },
    {
      icon: "ai",
      title: "Integrations & AI",
      description: "Stripe billing, ATS integrations, AWS services and OpenAI-powered features inside real products.",
    },
  ],
  facts: [
    { label: "Location", value: "Trivandrum, Kerala" },
    { label: "Experience", value: "3+ years" },
    { label: "Last role", value: "Software Engineer (Full Stack)" },
    { label: "Last company", value: "Haspaces Technology Solutions" },
    { label: "Focus", value: "Full Stack (Frontend & Backend)" },
  ],
};

const skills = [
  {
    category: "Frontend",
    icon: "frontend",
    items: ["JavaScript", "TypeScript", "React.js", "HTML5", "CSS3", "Tailwind CSS", "Mantine UI"],
  },
  {
    category: "Backend",
    icon: "backend",
    items: [
      "Node.js",
      "Express.js",
      "REST API development",
      "Authentication & authorization",
      "Middleware & error handling",
      "Async programming",
      "Third-party API integrations",
      "Webhooks",
    ],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["MongoDB", "Mongoose", "MongoDB Atlas", "MongoDB Compass", "Aggregation pipelines", "Indexing & query optimisation"],
  },
  {
    category: "Cloud & Tools",
    icon: "cloud",
    items: ["AWS S3", "AWS Lambda", "Serverless workflows", "Git", "GitHub", "npm"],
  },
  {
    category: "Payments & Integrations",
    icon: "payments",
    items: ["Stripe subscriptions & billing", "Stripe webhooks", "Razorpay", "ATS integrations", "Unified.io", "Greenhouse", "Twilio"],
  },
  {
    category: "AI & Automation",
    icon: "ai",
    items: [
      "OpenAI API integrations",
      "AI chatbot features",
      "Voice AI (speech-to-text, text-to-speech)",
      "Resume parsing workflows",
      "AI-powered app development",
      "Trading automation",
      "Video-generation automation",
    ],
    note: "Trading and video automation come from my personal projects.",
  },
];

// The first three are "featured" and get bigger cards.
// links: type is "github" or "live"
// aiAssisted: true shows a "Built with Claude Code" tag and a short note in the details
const projects = [
  {
    title: "FVG Trading Bot",
    category: "Automated trading system",
    featured: true,
    status: "Personal project",
    isPrivate: true,
    aiAssisted: true,
    description:
      "A market-monitoring bot built around Fair Value Gap (FVG) concepts. It processes candle data for several forex pairs, applies multi-timeframe rules and sends an alert when a setup forms.",
    problem:
      "Watching several forex pairs across two timeframes for one specific setup is slow and easy to miss by hand. The bot does the scanning and only pings me when the rules line up.",
    features: [
      "Higher-timeframe market bias using the 4-hour chart",
      "Identifies 4-hour Fair Value Gaps",
      "Finds 15-minute FVG setups nested inside a 4-hour FVG",
      "Monitors multiple forex pairs",
      "Candle data from the Twelve Data API",
      "Telegram notifications when a setup is found",
    ],
    techStack: ["Node.js", "Twelve Data API", "Telegram Bot API"],
    links: [],
  },
  {
    title: "YouTube Shorts Automation Engine",
    category: "Prompt-to-video automation",
    featured: true,
    status: "Working prototype",
    isPrivate: true,
    aiAssisted: true,
    description:
      "Give it a prompt and it produces a short vertical video. Claude plans the script and scenes, ElevenLabs generates the voiceover and Remotion renders the final video.",
    problem:
      "Making one short video by hand means writing a script, recording a voiceover and editing visuals. This engine turns all of that into a single prompt.",
    features: [
      "Prompt in, rendered video out",
      "Script and scene planning generated by Claude",
      "Voiceover generated with ElevenLabs",
      "Video built and rendered with Remotion (React)",
      "Vertical format for YouTube Shorts",
    ],
    techStack: ["Claude API", "ElevenLabs", "Remotion", "React"],
    links: [],
  },
  {
    title: "TaskFlow AI",
    category: "AI-powered task management",
    featured: true,
    status: "Completed",
    isPrivate: false,
    aiAssisted: true,
    description:
      "A MERN task manager that uses AI to prioritise tasks, suggests what to work on next and shows productivity analytics.",
    problem:
      "With a long task list it's hard to decide what matters next. TaskFlow AI ranks tasks, recommends the next one and shows where the time actually goes.",
    features: [
      "JWT auth with access and refresh token rotation",
      "Task CRUD with filters, sorting and pagination",
      "AI prioritisation with GPT-4o-mini and a rule-based fallback",
      "\"What should I work on next?\" recommendations",
      "Analytics dashboard with Recharts",
      "Deadline reminders, notifications and streak tracking",
      "Rate limiting, Zod validation and Winston logging",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Zustand", "Node.js", "Express", "MongoDB", "JWT", "OpenAI API"],
    links: [{ type: "github", label: "GitHub", url: "https://github.com/Hxri72/ai-productivity-management-system" }],
  },
  {
    title: "Cineawe",
    category: "Movie booking app",
    featured: false,
    status: "Completed",
    isPrivate: false,
    description:
      "A full-stack movie booking app with separate flows for users, theatre owners and an admin, including seat selection and Razorpay payments.",
    problem: "Built to practise a complete booking flow - roles, seat availability, payments and dashboards - from end to end.",
    features: [
      "Three roles: user, theatre owner and admin",
      "Email OTP verification on sign-up",
      "Browse movies, show dates and available seats",
      "Seat booking with Razorpay order creation and payment verification",
      "View tickets and cancel bookings",
      "Owner dashboard to manage theatres, shows and bookings",
    ],
    techStack: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Razorpay"],
    links: [
      { type: "github", label: "Frontend", url: "https://github.com/Hxri72/Cineawe-Frontend" },
      { type: "github", label: "Backend", url: "https://github.com/Hxri72/Cineawe-Backend" },
    ],
  },
  {
    title: "Netflix Clone",
    category: "Frontend",
    featured: false,
    status: "Completed",
    isPrivate: false,
    description: "A React recreation of a streaming platform UI, with movie rows pulled from the TMDB API and trailers on click.",
    problem: "A practice project for working with a real public API and building a content-heavy UI in React.",
    features: [
      "Hero banner with a featured title",
      "Genre rows (originals, action, comedy, horror, romance) from TMDB",
      "Plays the trailer from YouTube when a poster is clicked",
    ],
    techStack: ["React", "Axios", "TMDB API", "react-youtube"],
    links: [{ type: "github", label: "GitHub", url: "https://github.com/Hxri72/Netflix_clone---React" }],
  },
  {
    title: "Starbucks-Themed UI",
    category: "Frontend",
    featured: false,
    status: "Completed",
    isPrivate: false,
    description:
      "A coffee-shop landing page inspired by Starbucks, built to practise layout, styling and visual presentation. Not affiliated with Starbucks.",
    problem: "An early project to get comfortable with page layout and styling using plain HTML and CSS.",
    features: ["Landing page layout with hero, menu and promo sections", "Hand-written HTML and CSS"],
    techStack: ["HTML5", "CSS3"],
    links: [{ type: "github", label: "GitHub", url: "https://github.com/Hxri72/Starbucks-Clone-Website" }],
  },
];

// newest first
const experience = [
  {
    role: "Software Engineer",
    company: "Haspaces Technology Solutions",
    location: "Trivandrum, Kerala, India",
    startDate: "2025-05", // year-month, duration is calculated on the site
    endDate: "2026-09", // empty = Present
    summary:
      "Worked on an HR recruitment platform (SkillKeepr / Talentkeepr) across the frontend and backend - REST APIs, AI-powered features, voice integrations with GCP and Grok, and third-party ATS integrations.",
    points: [
      "Worked on the platform's AI voice-calling feature, replacing the initial Retell AI setup with Google Cloud (GCP) Speech-to-Text and Text-to-Speech for standard calls, with Twilio for calling.",
      "Implemented a premium voice-calling tier using xAI's Grok voice API.",
      "Integrated AI-powered features, including an OpenAI chatbot.",
      "Worked on Stripe subscription billing and payment webhook workflows.",
      "Built frontend features and UI components using React.js and TypeScript.",
      "Improved backend performance and fixed issues across the stack, including API integrations, async operations, database queries and third-party services.",
    ],
    tech: ["Node.js", "React.js", "TypeScript", "Stripe", "OpenAI API", "GCP Speech-to-Text", "GCP Text-to-Speech", "Twilio", "xAI Grok", "AWS"],
  },
  {
    role: "Associate Software Engineer",
    company: "Haspaces Technology Solutions",
    location: "Trivandrum, Kerala, India",
    startDate: "2023-05",
    endDate: "2025-05",
    summary: "Joined the HR recruitment platform team and worked on core backend services and features across the stack.",
    points: [
      "Developed and maintained backend services using Node.js and Express.js.",
      "Built and maintained REST APIs for recruitment platform features.",
      "Worked with MongoDB and Mongoose for data modelling and database operations.",
      "Contributed to resume parsing and candidate resume-scoring features.",
      "Worked on ATS integrations, including Unified.io and Greenhouse.",
      "Used AWS S3 for file storage and AWS Lambda for serverless processing.",
      "Built and maintained frontend features using React.js.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "React.js", "AWS S3", "AWS Lambda", "Unified.io", "Greenhouse"],
  },
  {
    role: "Intern",
    company: "Brototype",
    location: "Kozhikode, Kerala, India",
    startDate: "2022-08",
    endDate: "2023-05",
    summary: "Full-time internship focused on full-stack web development with Node.js and Express.js.",
    points: [],
    tech: ["Node.js", "Express.js"],
  },
];

const education = [
  { course: "Master of Computer Applications (MCA)", institution: "Amity University Online", year: "2026" },
  { course: "BSc Physics", institution: "Zamorin's Guruvayurappan College", year: "2022" },
];

module.exports = { profile, skills, projects, experience, education };
