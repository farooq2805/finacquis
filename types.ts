
export interface FounderProblem {
  id: string;
  title: string;
  description: string;
  solution: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  readTime: string;
}

export enum ExitReadinessMetric {
  FINANCIALS = 'Financial Hygiene',
  TEAM = 'Team Stability',
  TECH = 'IP & Technology',
  MARKET = 'Market Positioning'
}
