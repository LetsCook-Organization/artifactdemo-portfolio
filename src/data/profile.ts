export interface SocialLink {
  id: 'linkedin' | 'email' | 'github';
  label: string;
  href: string;
  display: string;
}

export interface ProfileData {
  name: string;
  monogram: string;
  headline: string;
  roles: string[];
  location: string;
  availabilityLabel: string;
  greeting: string;
  heroStatement: string[];
  heroIntro: string;
  email: string;
  linkedinUrl: string;
  /**
   * Optional GitHub username. Leave empty until verified/configured.
   * When set (e.g. "octocat"), the GitHub section automatically loads
   * live public profile & repositories from the GitHub REST API.
   */
  githubUsername: string;
  /**
   * Optional path or URL to a downloadable resume PDF (e.g. "/resume.pdf").
   * Place resume.pdf inside /public and update this path to enable direct download.
   */
  resumeUrl: string | null;
  /**
   * Optional path to a portrait image (e.g. "/avatar.jpg").
   */
  avatarUrl: string | null;
  academicSummary: {
    institution: string;
    degree: string;
    period: string;
    focus: string;
  }[];
  aboutNarrative: string[];
  aboutHighlights: {
    label: string;
    detail: string;
  }[];
  verifiedCounts: {
    label: string;
    value: string;
    context: string;
  }[];
  socialLinks: SocialLink[];
}

export const PROFILE: ProfileData = {
  name: 'Anmol Gola',
  monogram: 'AG',
  headline:
    'Ambassador @Google | SBCL @AWS | Campus Champion @Unstop | Aspiring AI/ML Developer | CSE AI-ML @GLA | BS Data Science @IITM',
  roles: [
    'AI & ML Enthusiast',
    'Software Engineer in Progress',
    'Google Student Ambassador',
    'AWS Student Community Builder Leader',
    'Developer Community Builder',
  ],
  location: 'Mathura, Uttar Pradesh, India',
  availabilityLabel: 'Open to Collaborations, Hackathons & Opportunities',
  greeting: 'Hello, I am',
  heroStatement: ['BUILDING.', 'LEARNING.', 'EXPLORING.'],
  heroIntro:
    'Pursuing dual undergraduate studies in Computer Science (AI-ML) at GLA University and Data Science at IIT Madras—exploring AI research agents, cloud systems, and developer community building.',
  email: 'anmolgola5678@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/anmolgola66571',
  githubUsername: '',
  resumeUrl: null,
  avatarUrl: null,
  academicSummary: [
    {
      institution: 'GLA University',
      degree: 'B.Tech in Computer Science Engineering (AI-ML)',
      period: 'August 2025 – Present',
      focus: 'Artificial Intelligence & Machine Learning',
    },
    {
      institution: 'Indian Institute of Technology, Madras',
      degree: 'BS in Data Science',
      period: 'May 2025 – July 2026',
      focus: 'Data Science & Statistical Foundations',
    },
  ],
  aboutNarrative: [
    'I am building at the intersection of artificial intelligence, data science, and cloud computing while pursuing my B.Tech in Computer Science (AI-ML) at GLA University alongside the BS in Data Science at IIT Madras.',
    'Beyond coursework, I spend my time learning how AI research agents and cloud platforms work in practice—and sharing that curiosity with peers through Google Student Ambassadors India, AWS Student Community Builders, and Google Developers Groups at GLA University.',
  ],
  aboutHighlights: [
    {
      label: 'Currently Learning',
      detail: 'AI research agents, generative AI workflows, data science foundations, and cloud architecture on Microsoft Azure and AWS.',
    },
    {
      label: 'What I Enjoy Building',
      detail: 'Collaborative technical initiatives, Android team projects, and structured AI-assisted research & reporting workflows.',
    },
    {
      label: 'Community Mindset',
      detail: 'Bringing student developers together across campus events, workshops, and peer knowledge-sharing programs.',
    },
  ],
  verifiedCounts: [
    {
      label: 'Academic Programs',
      value: '02',
      context: 'GLA University & IIT Madras',
    },
    {
      label: 'Certifications',
      value: '05',
      context: 'Azure, AI Agents & Design Thinking',
    },
    {
      label: 'Community & Campus Roles',
      value: '07',
      context: 'Google, AWS, GDG, Unstop & Campus Clubs',
    },
  ],
  socialLinks: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anmolgola66571',
      display: 'linkedin.com/in/anmolgola66571',
    },
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:anmolgola5678@gmail.com',
      display: 'anmolgola5678@gmail.com',
    },
  ],
};
