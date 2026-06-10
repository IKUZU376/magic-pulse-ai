export type Page = 'home' | 'solutions' | 'about' | 'contact';

export interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: string;
  features: string[];
  benefit: string;
  image: string;
}
