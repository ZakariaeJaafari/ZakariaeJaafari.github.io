export interface RoleCopy {
  id: string;
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  summary?: string;
  bullets: string[];
}

export interface ProjectCopy {
  oneLiner: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  decisions?: { title: string; body: string }[];
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
    cv: string;
    menu: string;
    skip: string;
    primary: string;
    mobile: string;
    languages: string;
  };
  hero: {
    kickerLocation: string;
    kickerAvailability: string;
    title: string;
    headline: string;
    summary: string;
    viewProjects: string;
    photoAlt: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    spoken: { name: string; level: string }[];
  };
  experience: {
    heading: string;
    environment: string;
    roles: RoleCopy[];
  };
  projects: {
    heading: string;
    intro: string;
    details: string;
    github: string;
    demo: string;
    all: string;
    overview: string;
    problem: string;
    solution: string;
    architecture: string;
    inRepo: string;
    decisions: string;
    technologies: string;
    links: string;
    source: string;
    crumb: string;
    pathLabel: string;
    business: string;
  };
  projectPages: Record<string, ProjectCopy>;
  skills: {
    heading: string;
    intro?: string;
    groups: { name: string; items: string[] }[];
  };
  education: {
    heading: string;
    certsHeading: string;
    items: {
      title: string;
      school: string;
      location: string;
      start: string;
      end: string;
      note?: string;
    }[];
    certs: { title: string; issuer: string; date: string }[];
  };
  contact: {
    heading: string;
    intro: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    cvVersions: string;
  };
  footer: {
    nameLine: string;
  };
  notFound: {
    title: string;
    heading: string;
    body: string;
    home: string;
  };
}
