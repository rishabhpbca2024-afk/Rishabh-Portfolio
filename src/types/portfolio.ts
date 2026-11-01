export type SkillLevel = 'practiced' | 'learning';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  highlight?: string;
  category: 'languages' | 'frontend' | 'backend' | 'database' | 'tools';
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  badge?: string;
}

export type ProjectCategory = 'all' | 'mern' | 'mobile' | 'systems';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  detailedDescription: string;
  category: ProjectCategory;
  tags: string[];
  features: string[];
  architectureHighlights: string[];
  githubUrl: string;
  demoUrl?: string;
  demoStatus: 'live' | 'offline' | 'none';
  demoStatusNote?: string;
  verifiedDetails: string;
  academicContext?: string;
  iconName: string;
  downloadUrl?: string;
  downloadLabel?: string;
  apkSize?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  affiliation?: string;
  location?: string;
  websiteUrl?: string;
  score?: string;
  period: string;
  status: string;
  overview?: string;
  coursework?: string[];
  keyTakeaways?: string[];
}

export interface CurrentLearningItem {
  title: string;
  focus: string;
  whyItMatters: string;
  progressStage: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconName: string;
  isExternal: boolean;
  actionText: string;
}

export interface PersonalDetails {
  name: string;
  role: string;
  badge: string;
  bioSummary: string;
  location: string;
  phone: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeFileName: string;
  resumePath: string;
}

export interface TargetRole {
  role: string;
  badge: string;
  description: string;
  keySkills: string[];
  icon: string;
}
