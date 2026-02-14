// Sanity-specific types matching our GROQ queries

export interface SanityImage {
  asset: {
    _ref: string;
    _type: 'reference';
  };
  _type: 'image';
}

export interface SanitySlug {
  current: string;
  _type: 'slug';
}

export interface SanitySkill {
  _id: string;
  name: string;
  image?: {
    asset: {
      url: string;
    };
  };
}

export interface SanityTechnologies {
  languages?: SanitySkill[];
  frontend?: SanitySkill[];
  backend?: SanitySkill[];
  database?: SanitySkill[];
  tools?: SanitySkill[];
}

export interface SanityProject {
  _id: string;
  title: string;
  slug: SanitySlug;
  description: string;
  category: ('projects' | 'building' | 'collabs' | 'marketplace')[];
  teamSize?: number;
  roles?: string[];
  mainImage: SanityImage;
  gallery?: SanityImage[];
  technologies: SanityTechnologies;
  liveUrl?: string;
  githubUrl?: string;
  verified: boolean;
  content?: any[];
}

// Query result types
export interface ProjectsQueryResult {
  projects: SanityProject[];
}

export interface ProjectQueryResult {
  project: SanityProject | null;
}
