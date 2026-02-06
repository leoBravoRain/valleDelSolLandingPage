// Shared types for components

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface FeatureBlock {
  title: string;
  subtitle: string;
  href: string;
  imageUrl?: string;
}

export interface CarouselItem {
  imageUrl: string;
  alt: string;
  caption: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
