export interface NavItem {
  label: string;
  href: string;
}

export interface TechItem {
  name: string;
  icon: string;
  color: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "gitHub" | "linkedin" | "twitter" | "gmail";
}
