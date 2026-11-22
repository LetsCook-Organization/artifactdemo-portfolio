export type ProjectCategory = 'all' | 'ai-agents' | 'cloud' | 'community-dev';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  statusLabel: string;
  summary: string;
  problemStatement: string;
  alignedWith: string;
  technologies: string[];
  visualType: 'ai-agent' | 'cloud-azure' | 'android-gdg';
  /**
   * Populate with real repository or deployment URLs when ready.
   * Links are only rendered when a valid URL is provided.
   */
  githubUrl?: string;
  liveUrl?: string;
  isEditableSlot: boolean;
}

export const PROJECT_CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Focus Tracks' },
  { id: 'ai-agents', label: 'AI & Research Agents' },
  { id: 'cloud', label: 'Cloud & Azure' },
  { id: 'community-dev', label: 'Android & Community' },
];

/**
 * Editable Project Showcase entries.
 * Because specific repository URLs and project screenshots were not supplied
 * in the LinkedIn profile export, these slots faithfully represent Anmol's
 * verified technical focus areas and are structured for instant 1-line updates
 * once project links and media are added.
 */
export const PROJECTS: ProjectItem[] = [
  {
    id: 'ai-research-reports',
    title: 'AI Research & Report Generation Track',
    category: 'ai-agents',
    categoryLabel: 'AI Agents & Research',
    statusLabel: 'Editable Project Slot · Ready for Repo Link',
    summary:
      'Exploring structured AI research agent workflows that synthesize online information into clear, verifiable reports—aligned with Microsoft Applied Skills.',
    problemStatement:
      'Turning fragmented research queries into concise, structured technical reports while maintaining thoughtful search habits and source clarity.',
    alignedWith: 'Microsoft Applied Skills: Generate reports with AI research agents',
    technologies: ['AI Agents', 'AI for Research', 'AI Reports', 'Generative AI'],
    visualType: 'ai-agent',
    isEditableSlot: true,
  },
  {
    id: 'cloud-azure-foundations',
    title: 'Cloud & Azure Architecture Track',
    category: 'cloud',
    categoryLabel: 'Cloud Computing',
    statusLabel: 'Editable Project Slot · Ready for Repo Link',
    summary:
      'Hands-on cloud architecture exploration bridging Microsoft Azure Fundamentals and AWS Student Community Builder initiatives.',
    problemStatement:
      'Understanding core cloud compute, identity, deployment, and community-ready architectural patterns for student builders.',
    alignedWith: 'Microsoft Certified: Azure Fundamentals · AWS SBCL',
    technologies: ['Cloud Computing', 'Microsoft Azure', 'AWS Community'],
    visualType: 'cloud-azure',
    isEditableSlot: true,
  },
  {
    id: 'gdg-android-collaboration',
    title: 'GDG GLAU Collaborative Android Track',
    category: 'community-dev',
    categoryLabel: 'Collaborative Development',
    statusLabel: 'Editable Project Slot · Ready for Repo Link',
    summary:
      'Team-based mobile and community project collaboration as a member of the Associate Android Team at Google Developers Groups – GLA University.',
    problemStatement:
      'Supporting student-led collaborative engineering by combining design thinking with practical mobile and cloud tooling.',
    alignedWith: 'Google Developers Groups - GLA University (Associate Android Team)',
    technologies: ['Android Team Collaboration', 'Design Thinking', 'Artificial Intelligence'],
    visualType: 'android-gdg',
    isEditableSlot: true,
  },
];
