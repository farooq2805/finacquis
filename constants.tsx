
import { FounderProblem, NavItem, BlogPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Intelligence', href: '#solutions' },
  { label: 'Methodology', href: '#process' },
  { label: 'Exit Simulator', href: '#advisor' },
  { label: 'Reports', href: '#resources' },
];

export const FOUNDER_PROBLEMS: FounderProblem[] = [
  {
    id: 'valuation',
    title: 'The Arbitrage Gap',
    description: 'Founders often leave 30%+ of enterprise value on the table by relying on generic industry multiples instead of strategic buyer appetite.',
    solution: 'Our proprietary "Strategic Premium" modeling identifies hidden synergies that institutional buyers are willing to pay for upfront.',
    icon: '📊'
  },
  {
    id: 'matching',
    title: 'Selection Asymmetry',
    description: 'A misaligned buyer doesnt just ruin the exit; it destroys your legacy. Most advisors prioritize speed over the right cultural and operational fit.',
    solution: 'We maintain an exclusive network of 500+ global corporate development heads, ensuring your legacy is placed in the right hands.',
    icon: '🏢'
  },
  {
    id: 'fatigue',
    title: 'Process Paralysis',
    description: 'Managing a full-scale due diligence process while running a high-growth company is the primary reason for deal collapse.',
    solution: 'We deploy a "Shadow Ops" team to handle your VDR, Q&A, and technical audits, allowing you to focus purely on hitting your growth targets.',
    icon: '🛡️'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '2024 Tech M&A: The Rise of EBITDA-Native Valuations',
    excerpt: 'Why revenue growth is no longer the primary driver for high-multiple exits in the current capital climate.',
    category: 'Market Intelligence',
    slug: 'ebitda-native-valuations-2024',
    readTime: '14 min'
  },
  {
    id: '2',
    title: 'The Zero-Day Audit: Preparing Your VDR for Sequoia-Grade Buyers',
    excerpt: 'A comprehensive guide to technical and financial hygiene that withstands the most rigorous institutional scrutiny.',
    category: 'Exit Readiness',
    slug: 'vdr-preparation-guide',
    readTime: '18 min'
  },
  {
    id: '3',
    title: 'Earn-outs vs. Cash-at-Close: Structuring for Founder Freedom',
    excerpt: 'Analyzing the long-term impact of various deal structures on founder liquidity and post-acquisition autonomy.',
    category: 'Deal Structure',
    slug: 'structuring-for-freedom',
    readTime: '11 min'
  }
];
