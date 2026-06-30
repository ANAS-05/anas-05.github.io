import type { NavItem, SocialLink } from "@/types";

export const site = {
  name: "Anas Syed",
  domain: "anassyed.me",
  url: "https://anassyed.me",
  role: "Frontend Engineer",
  description:
    "Crafting robust, hardened user interfaces that give every user a trusted experience, with enterprise-grade standards for accessibility, performance, and long-term maintainability.",
  email: "hello@anassyed.me",
  resumeUrl: "/resume.pdf",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/ANAS-05", icon: "gitHub" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anassyed05", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com/anassyed05", icon: "twitter" },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    icon: "gmail",
  },
];
