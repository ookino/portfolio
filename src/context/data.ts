import { IoMail, IoLogoWhatsapp } from 'react-icons/io5';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiRuby,
  SiRubyonrails,
  SiNextdotjs,
  SiNestjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiGithub,
  SiLinkedin,
  SiInstagram,
} from 'react-icons/si';

import { IData } from './../interfaces';

export const data: IData = {
  projects: [
    {
      stack: ['next js', 'chakra ui', 'zoho api', 'typescript'],
      title: 'Scrubs & Brushes',
      description:
        'Cleaning service website featuring a landing page detailing key information about the business and automatic price estimator and booking system. The user-friendly website allows potential customers to easily determine the cost of their cleaning service and schedule an inspection of the customers',
      logo: '/images/assets/sb.webp',
      bg: 'green.600',
      status: 'live',
    },
    {
      stack: ['next js', 'trpc.io', 'mongo db', 'chakra ui', 'typescript'],
      title: 'Rentar',
      description:
        'Cleaning service website featuring a landing page detailing key information about the business and automatic price estimator and booking system. The user-friendly website allows potential customers to easily determine the cost of their cleaning service and schedule an inspection of the customers',
      logo: '/images/assets/rentar.webp',
      bg: 'gray.50',
      status: 'under-construction',
    },
    {
      stack: ['next js', 'chakra ui', 'typescript'],
      title: 'Portfolio',
      description:
        'Cleaning service website featuring a landing page detailing key information about the business and automatic price estimator and booking system. The user-friendly website allows potential customers to easily determine the cost of their cleaning service and schedule an inspection of the customers',
      logo: '/images/assets/okino.webp',
      bg: 'gray.600',
      bgGradient: 'linear(to-b,  #cf59e6, #6bc5f8,)',
      status: 'live',
    },
    {
      stack: ['nest js', 'next js', 'mongo db', 'typescript'],
      title: 'Mart',
      description:
        'Cleaning service website featuring a landing page detailing key information about the business and automatic price estimator and booking system. The user-friendly website allows potential customers to easily determine the cost of their cleaning service and schedule an inspection of the customers',
      logo: '/images/assets/mart.webp',
      bg: 'orange.600',
      status: 'down',
    },
  ],

  stack: [
    { icon: SiJavascript, color: '#E3D04C', label: 'Javascript' },
    { icon: SiPython, color: '#356FA1', label: 'Python' },
    { icon: SiRuby, color: '#cc342d', label: 'Ruby' },
    { icon: SiTypescript, color: '#2e72bb', label: 'Typescript' },
    { icon: SiNodedotjs, color: '#61995e', label: 'Node Js' },
    { icon: SiRubyonrails, color: '#D30002', label: 'Ruby on Rails' },
    { icon: SiReact, color: '#01d1f2', label: 'React' },
    { icon: SiNestjs, color: '#de2641', label: 'Nest Js' },
    { icon: SiNextdotjs, color: 'gray.50', label: 'Next Js' },
    { icon: SiMongodb, color: '#569035', label: 'Mongo Db' },
    { icon: SiPostgresql, color: '#306289', label: 'Postgres' },
  ],

  aboutEmojis: ['💡', '💻', '🎨', '📚', '🤓', '🔍'],

  education: [
    {
      qualification: `Remote Full Stack Web Development Program`,
      university: 'Microverse',
      date: 'July 2021 – June 2022',
      description: `Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux. Additionally,  Developed skills in remote pair-programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers. `,
    },
    {
      qualification: `Bachelor of Science - BSc, Computer Science (Systems
        Engineering)`,
      university: 'Middlesex University',
      date: 'October 2018 – July 2021',
      grade: 'First Class Honours',
      description: `For my final project titled "Developing Web-Based Selling Platform
                for Small and Medium-Sized Enterprises in Mauritius. The project
                covers a literature review on how the adoption of an online web
                selling application can aid SMEs (especially start-up SMEs) sell
                their products online and the design, development and evaluation
                of an web-based multi-vendor eCommerce application.`,
    },
  ],

  experience: [
    {
      role: `Mentor - Volunteer`,
      company: 'Microverse',
      date: 'August 2021 – Present',
      description: `Mentored junior web developers by providing technical support through code reviews
      proposed improvements to code organization to improve code quality and overall performance and
      provided advice and tips on how to maintain motivation to maintain longevity in the program.
      `,
    },
    {
      role: `Full Stack Web Development`,
      company: 'Highlighted personal projects',
      date: 'July 2021 – Present',
      description: `Mastered intermediate and advanced topics in full-stack development (including Rails, Git, and DS&A challenges) while building multiple full-stack projects [SEE Works page] both independently and via pair-programming.
      `,
    },
  ],
  links: {
    contacts: [
      {
        label: 'Send an Email',
        name: 'email',
        href: 'mailto:hello@yaseerokino.com',
        icon: IoMail,
        color: 'cyan',
      },

      {
        label: 'Send a Whatsapp message',
        name: 'whatsapp',
        href: 'https://wa.me/message/SOQ7CQXDDHMVP1',
        icon: IoLogoWhatsapp,
        color: 'green',
      },
    ],
    socials: [
      {
        label: 'Visit my github',
        icon: SiGithub,
        href: 'https://github.com/yaseerokino',
        name: 'Github',
        color: 'gray',
      },
      {
        label: 'Visit my linkedin',
        icon: SiLinkedin,
        href: 'https://linkedin.com/in/yaseerokino/',
        name: 'Linkedin',
        color: 'linkedin',
      },
      {
        label: 'Visit my instagram',
        icon: SiInstagram,
        href: 'https://www.instagram.com/okino.wrk/',
        name: 'Instagram',
        color: 'pink',
      },
    ],
  },
};
