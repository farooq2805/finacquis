
import { FounderProblem, NavItem, BlogPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Market Intelligence', href: '#solutions' },
  { label: 'Exit Process', href: '#process' },
  { label: 'Exit Advisor', href: '#advisor' },
  { label: 'Resources', href: '#resources' },
];

export const FOUNDER_PROBLEMS: FounderProblem[] = [
  {
    id: 'valuation',
    title: 'The Multiples Gap',
    description: 'Founders often rely on public market noise rather than private deal data, leaving millions on the table at exit.',
    solution: 'We leverage proprietary deal flow data to secure strategic premiums 25% higher than industry benchmarks.',
    icon: '📈'
  },
  {
    id: 'matching',
    title: 'Strategic Mismatch',
    description: 'Selling to the wrong buyer leads to earn-out failures and long-term erosion of the company legacy.',
    solution: 'We vet over 500+ strategic partners globally to find the exact cultural and financial fit for your specific exit.',
    icon: '🤝'
  },
  {
    id: 'fatigue',
    title: 'Operational Decay',
    description: 'M&A processes are marathon sprints that distract from core growth, often derailing valuation mid-deal.',
    solution: 'We act as your auxiliary co-founder, managing every detail of the VDR and Q&A so you stay focused on growth.',
    icon: '⚡'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The 2024 SaaS M&A Outlook: Multiples & Market Sentiment',
    excerpt: 'A deep dive into why EBITDA efficiency is now outperforming revenue growth in mid-market tech acquisitions.',
    category: 'Market Intelligence',
    slug: 'saas-ma-outlook-2024',
    readTime: '12 min'
  },
  {
    id: '2',
    title: 'Mastering the Data Room: A 90-Day Pre-Exit Checklist',
    excerpt: 'Clean up your technical debt, cap table, and employment contracts before the LoI hits your inbox.',
    category: 'Strategy',
    slug: 'due-diligence-mastery',
    readTime: '15 min'
  },
  {
    id: '3',
    title: 'Strategic vs. Financial Buyers: Choosing Your Legacy',
    excerpt: 'Understanding the trade-offs between Private Equity roll-ups and high-integration strategic acquisitions.',
    category: 'Founder Insights',
    slug: 'strategic-vs-financial-buyers',
    readTime: '10 min'
  }
];
