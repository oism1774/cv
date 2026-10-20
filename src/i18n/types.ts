export interface Job {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export interface Item {
  name: string;
  value: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  hero: {
    name: string;
    role: string;
    tagline: string;
    location: string;
    cv: string;
    contact: string;
  };
  about: { title: string; text: string };
  experience: { title: string; jobs: Job[] };
  stack: { title: string; groups: { name: string; tags: string[] }[] };
  learning: { title: string; items: Item[] };
  education: {
    title: string;
    school: string;
    degree: string;
    period: string;
    languages: Item[];
  };
  contact: { title: string; text: string };
  footer: string;
}
