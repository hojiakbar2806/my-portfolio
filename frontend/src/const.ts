import {
  Diamond,
  Flame,
  GitBranch,
  Github,
  Gitlab,
  Grid,
  Instagram,
  Linkedin,
  LucideIcon,
  MailIcon,
} from "lucide-react";
export const NAV_ITEMS = [
  { name: "Home" },
  { name: "About Me" },
  { name: "My Projects" },
  { name: "Contact" },
];

export const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/EkiZR" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/ekizr/" },
  { icon: Instagram, link: "https://www.instagram.com/ekizr_/?hl=id" },
  { icon: MailIcon, link: "mailto:hojiakbarnasriddinov@gmail.com" },
];

import {
  Atom,
  Layout,
  Cpu,
  Code,
  Globe,
  Triangle,
  Layers,
  Database,
  Server,
  Package,
  Shield,
  Cloud,
  Terminal,
  Code2,
  Wrench,
  Rocket,
  HardDrive,
  FileCode,
  Network,
  FileStack,
  Settings,
  Plug,
  CloudCog,
} from "lucide-react";

const TECH_ICONS: { [key: string]: LucideIcon } = {
  // Frontend Frameworks & Libraries
  React: Atom,
  NextJS: Layers,
  VueJS: Triangle,
  Angular: Globe,
  Svelte: Flame,
  SolidJS: Rocket,

  // Styling & UI
  Tailwind: Layout,
  Bootstrap: Layers,
  MaterialUI: Grid,

  // Backend Frameworks & Libraries
  Express: Cpu,
  FastAPI: Server,
  Django: Shield,
  Flask: Server,
  NestJS: Network,

  // Programming Languages
  JavaScript: Code,
  TypeScript: Code2,
  Python: Code,
  Java: FileCode,
  CSharp: Terminal,
  CPlusPlus: FileStack,
  PHP: Server,
  Ruby: Diamond,

  // Databases & Data Management
  MySQL: Database,
  PostgreSQL: Database,
  MongoDB: HardDrive,
  Redis: Cloud,
  Firebase: CloudCog,

  // DevOps & Cloud
  Docker: Package,
  Kubernetes: Network,
  AWS: Cloud,
  GCP: Cloud,
  Azure: Cloud,

  // Version Control & CI/CD
  Git: GitBranch,
  GitHub: Github,
  GitLab: Gitlab,
  Bitbucket: Gitlab,
  Jenkins: Settings,

  // Package Managers
  NPM: Package,
  Yarn: Package,
  PNPM: Package,

  // Other Tools & Utilities
  Webpack: Wrench,
  Babel: Rocket,
  ESLint: Plug,
  Prettier: Settings,

  // Default icon
  default: Layers,
};

export default TECH_ICONS;
