import { IconType } from 'react-icons';

export interface IProject {
  tools: Array<{
    tool: IconType;
    color: string;
  }>;
  colorScheme: Array<string>;
  title: string;
  description: string;
  logo: string;
  bg?: string;
  bgGradient?: string;
  github?: string;
  links?: Array<{
    label: string;
    link: string;
    icon: IconType;
  }>;
}

export interface IStack {
  icon: IconType;
  color: string;
  label: string;
}

export interface IEducation {
  qualification: string;
  university: string;
  date: string;
  grade?: string;
  description: string;
}

export interface IExperience {
  role: string;
  company: string;
  date: string;
  description: string[];
}

export interface ILink {
  label: string;
  name: string;
  href: string;
  icon: IconType;
  color: string;
}

export interface ILinks {
  socials: ILink[];
  contacts: ILink[];
}

export interface IData {
  projects: IProject[];
  stack: IStack[];
  aboutEmojis: Array<string>;
  education: IEducation[];
  experience: IExperience[];
  links: ILinks;
}

export interface IContext {
  data: IData;
}
