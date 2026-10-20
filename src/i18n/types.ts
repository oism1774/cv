export interface Job {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export interface Item {
  name: string;
  value: string;
  native?: boolean;
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
  // **...** marks key phrases shown in the brighter text colour.
  about: { title: string; text: string };
  experience: { title: string; jobs: Job[] };
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
