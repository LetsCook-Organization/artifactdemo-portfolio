export interface TimelineEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  type: 'leadership' | 'community' | 'education';
  description: string;
  accent: 'cyan' | 'violet' | 'sapphire';
}

export interface ActivityHighlight {
  id: string;
  title: string;
  organization: string;
  period: string;
  location?: string;
  domain: string;
  summary: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuerContext: string;
}

/**
 * Chronological milestones sourced directly from LinkedIn Profile PDF.
 */
export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'star-club-glau',
    role: 'Event Co-Head',
    organization: 'STAR CLUB GLAU',
    period: 'November 2026 – Present',
    location: 'Mathura, Uttar Pradesh, India',
    type: 'leadership',
    description:
      'Co-leading campus event planning and student technology engagement initiatives at GLA University.',
    accent: 'cyan',
  },
  {
    id: 'aws-sbcl',
    role: 'AWS Student Community Builder Leader (AWS SBCL)',
    organization: 'Amazon Web Services (AWS)',
    period: 'September 2026 – Present',
    location: 'Mathura, Uttar Pradesh, India',
    type: 'community',
    description:
      'Leading student-focused cloud community activities and fostering peer learning around AWS technologies.',
    accent: 'cyan',
  },
  {
    id: 'unstop-champion',
    role: 'Campus Champion',
    organization: 'Unstop',
    period: 'September 2026 – Present',
    location: 'Mathura, Uttar Pradesh, India',
    type: 'community',
    description:
      'Connecting campus peers with competitions, hackathons, and skill-building opportunities via Unstop.',
    accent: 'violet',
  },
  {
    id: 'lets-cook-foundry',
    role: 'Chief Strategy Officer',
    organization: "Let's Cook Community - The Foundry",
    period: 'September 2026 – Present',
    location: 'Mathura, Uttar Pradesh, India',
    type: 'leadership',
    description:
      'Shaping community strategy and collaborative student builder initiatives.',
    accent: 'sapphire',
  },
  {
    id: 'google-student-ambassador',
    role: 'Ambassador',
    organization: 'Google Student Ambassadors India',
    period: 'April 2026 – Present',
    type: 'community',
    description:
      'Engaging with peers to promote technology-driven initiatives, awareness, and knowledge-sharing across the academic community.',
    accent: 'cyan',
  },
  {
    id: 'gdg-glau',
    role: 'Associate Android Team',
    organization: 'Google Developers Groups - GLA University, Mathura',
    period: 'February 2026 – August 2026',
    location: 'Mathura, Uttar Pradesh, India',
    type: 'community',
    description:
      'Supported collaborative team projects leveraging Artificial Intelligence, Cloud Computing, and Microsoft Azure.',
    accent: 'violet',
  },
  {
    id: 'edc-iit-delhi',
    role: 'Ambassador',
    organization: 'eDC (Entrepreneurship Development Cell) IIT Delhi',
    period: 'December 2025 – January 2026',
    type: 'community',
    description:
      'Represented entrepreneurship and student innovation initiatives from eDC IIT Delhi.',
    accent: 'sapphire',
  },
  {
    id: 'gla-btech',
    role: 'Bachelor of Technology (B.Tech), Computer Science (AI-ML)',
    organization: 'GLA University',
    period: 'August 2025 – Present',
    location: 'Mathura, Uttar Pradesh, India',
    type: 'education',
    description:
      'Undergraduate engineering studies specializing in Artificial Intelligence and Machine Learning.',
    accent: 'cyan',
  },
  {
    id: 'iitm-bs',
    role: 'BS in Data Science',
    organization: 'Indian Institute of Technology, Madras',
    period: 'May 2025 – July 2026',
    type: 'education',
    description:
      'Pursuing IIT Madras BS Data Science coursework alongside B.Tech CSE (AI-ML).',
    accent: 'violet',
  },
  {
    id: 'mpsm-grace',
    role: 'School Education',
    organization: 'MPSM Grace Convent',
    period: 'January 2015 – April 2025',
    type: 'education',
    description: 'Completed foundational schooling prior to undergraduate dual-degree studies.',
    accent: 'sapphire',
  },
];

export const COMMUNITY_ACTIVITIES: ActivityHighlight[] = [
  {
    id: 'act-google',
    title: 'Google Student Ambassador',
    organization: 'Google Student Ambassadors India',
    period: 'April 2026 – Present',
    domain: 'Developer Advocacy & Campus Outreach',
    summary:
      'Promoting technology-driven initiatives, organizing peer awareness, and supporting knowledge-sharing within the student developer community.',
  },
  {
    id: 'act-aws',
    title: 'AWS Student Community Builder Leader',
    organization: 'Amazon Web Services (AWS)',
    period: 'September 2026 – Present',
    location: 'Mathura, Uttar Pradesh, India',
    domain: 'Cloud Community Leadership',
    summary:
      'Serving as AWS SBCL to encourage cloud literacy, collaboration, and builder-first learning across campus.',
  },
  {
    id: 'act-gdg',
    title: 'Associate Android Team Member',
    organization: 'Google Developers Groups - GLA University, Mathura',
    period: 'February 2026 – August 2026',
    location: 'Mathura, Uttar Pradesh, India',
    domain: 'Collaborative Engineering',
    summary:
      'Collaborated within the GDG campus chapter on student developer projects integrating AI, Cloud Computing, and Microsoft Azure.',
  },
  {
    id: 'act-unstop',
    title: 'Campus Champion',
    organization: 'Unstop',
    period: 'September 2026 – Present',
    location: 'Mathura, Uttar Pradesh, India',
    domain: 'Hackathons & Competitions',
    summary:
      'Helping students discover hackathons, technical challenges, and collaborative opportunities.',
  },
  {
    id: 'act-foundry',
    title: 'Chief Strategy Officer',
    organization: "Let's Cook Community - The Foundry",
    period: 'September 2026 – Present',
    location: 'Mathura, Uttar Pradesh, India',
    domain: 'Community Strategy',
    summary:
      'Contributing strategic direction for peer builder programs and community engagement.',
  },
  {
    id: 'act-star-edc',
    title: 'Event Co-Head & Campus Ambassador',
    organization: 'STAR CLUB GLAU · eDC IIT Delhi',
    period: 'Dec 2025 – Present',
    domain: 'Campus Events & Entrepreneurship',
    summary:
      'Co-heading campus events at STAR Club GLAU and previously serving as Ambassador for eDC IIT Delhi.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-azure',
    title: 'Microsoft Certified: Azure Fundamentals',
    issuerContext: 'Microsoft · Cloud Foundations',
  },
  {
    id: 'cert-ai-reports',
    title: 'Microsoft Applied Skills: Generate reports with AI research agents',
    issuerContext: 'Microsoft · Applied AI Agents',
  },
  {
    id: 'cert-genai-search',
    title: 'Generative AI: The Evolution of Thoughtful Online Search',
    issuerContext: 'Generative AI & Research',
  },
  {
    id: 'cert-design-thinking',
    title: 'Design Thinking',
    issuerContext: 'Human-Centered Problem Solving',
  },
  {
    id: 'cert-ai-beginners',
    title: 'AI FOR BEGINNERS',
    issuerContext: 'Artificial Intelligence Foundations',
  },
];
