export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  accent: 'cyan' | 'violet' | 'sapphire';
  items: {
    name: string;
    context: string;
  }[];
}

/**
 * Technologies and skills strictly supported by the supplied LinkedIn profile.
 * No percentage bars or unverified stack claims are included.
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI & Research',
    subtitle: 'Core exploration focus and Microsoft Applied Skills',
    accent: 'cyan',
    items: [
      { name: 'Artificial Intelligence', context: 'B.Tech CSE (AI-ML) & GDG Projects' },
      { name: 'AI Agents', context: 'Top Profile Skill · Applied Research' },
      { name: 'AI for Research', context: 'Top Profile Skill · Search & Synthesis' },
      { name: 'AI Reports', context: 'Microsoft Applied Skills Track' },
      { name: 'Generative AI', context: 'Thoughtful Online Search & Workflows' },
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science & Foundations',
    subtitle: 'Dual-degree academic specialization',
    accent: 'violet',
    items: [
      { name: 'Data Science', context: 'BS Data Science @ IIT Madras' },
      { name: 'Machine Learning Foundations', context: 'B.Tech CSE (AI-ML) @ GLA University' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    subtitle: 'Certified fundamentals & community leadership',
    accent: 'sapphire',
    items: [
      { name: 'Microsoft Azure', context: 'Microsoft Certified: Azure Fundamentals' },
      { name: 'Cloud Computing', context: 'GDG Collaborative Engineering' },
      { name: 'AWS Ecosystem', context: 'AWS Student Community Builder Leader' },
    ],
  },
  {
    id: 'development-product',
    title: 'Development & Design',
    subtitle: 'Collaborative team & human-centered workflows',
    accent: 'cyan',
    items: [
      { name: 'Android Team Collaboration', context: 'Associate Android Team @ GDG GLAU' },
      { name: 'Design Thinking', context: 'Certified Problem-Solving Methodology' },
      { name: 'Community Strategy & Events', context: 'Google Ambassador · Unstop · STAR Club' },
    ],
  },
];
