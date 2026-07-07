import {
  Brain,
  Cloud,
  Globe,
  Palette,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  accent: string;
}

export const services: ServiceItem[] = [
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform applications built for Android, iOS and enterprise use.",
    bullets: [
      "Cross-platform & Native Apps",
      "App Store Deployment & Support",
      "API & Backend Integration",
    ],
    icon: Smartphone,
    accent: "#7dd3e8",
  },
  {
    title: "Web App Development",
    description:
      "Modern web applications with scalable architecture and real-time functionality.",
    bullets: ["SaaS Platforms", "Admin Panels", "CRM Systems"],
    icon: Globe,
    accent: "#9b7fe8",
  },
  {
    title: "Website Development",
    description:
      "Responsive business websites focused on branding, speed and conversions.",
    bullets: ["Corporate Websites", "eCommerce Solutions", "SEO Optimized"],
    icon: Cloud,
    accent: "#f8c471",
  },
  {
    title: "AI Powered Solutions",
    description:
      "Build intelligent software using Artificial Intelligence and Machine Learning.",
    bullets: ["Chatbots", "Predictive Analytics", "AI Automation"],
    icon: Brain,
    accent: "#7ddd88",
  },
  {
    title: "UI / UX Design",
    description:
      "Beautiful, intuitive and conversion-focused user experiences.",
    bullets: ["Product Design", "Wireframing", "Design Systems"],
    icon: Palette,
    accent: "#e88fa8",
  },
  {
    title: "Strategy & Product Consulting",
    description:
      "Help businesses validate ideas, plan products and execute digital transformation.",
    bullets: ["Product Strategy", "Market Analysis", "Roadmap Planning"],
    icon: TrendingUp,
    accent: "#38bdf8",
  },
];
