import { HiOutlineExternalLink } from 'react-icons/hi';
import { IoMail, IoLogoWhatsapp } from 'react-icons/io5';
import {
  SiJavascript,
  SiTypescript,
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
  SiRedux,
  SiChakraui,
  SiReact,
  SiZoho,
} from 'react-icons/si';

import { IData } from '@/interfaces';

export const data: IData = {
  projects: [
    {
      tools: [
        { tool: SiNextdotjs, color: 'gray.300' },
        { tool: SiChakraui, color: 'teal' },
        { tool: SiZoho, color: 'blue.500' },
      ],
      title: 'Scrubs & Brushes',
      colorScheme: ['#2F855A', '#F8F9FA', '#212529'],
      description: 'Cleaning service landing page and cost estimator',
      logo: '/images/assets/sb.webp',
      links: [{ label: 'live', link: 'https://scrubsandbrushes.com', icon: HiOutlineExternalLink }],
    },

    {
      tools: [
        { tool: SiNextdotjs, color: 'gray.300' },
        { tool: SiChakraui, color: 'teal' },
      ],
      title: 'Portfolio',
      colorScheme: ['gray.900', 'gray.50'],
      description: 'My personal portfolio',
      logo: '/images/assets/okino.webp',
      bgGradient: 'linear(to-b,  #cf59e6, #6bc5f8,)',
      links: [{ label: 'live', link: '/', icon: HiOutlineExternalLink }],
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
      qualification: `Product Management`,
      university: 'Udemy',
      date: 'January 2024',
      description: ` Enrolling in the Udemy course "Become a Product Manager | Learn the Skills & Get the Job" by Cole Mercer and Evan Kimbrell, I discovered parallels between marketing and product management, delved into metrics and frameworks, and grasped concepts like MVP and user-centricity. Equipped with newfound knowledge and a passion for innovation, I eagerly seek opportunities to apply my skills and contribute to the dynamic field of product management. `,
    },
    {
      qualification: ` BACHELOR OF ARTS BA: ADVERTISING, PUBLIC RELATIONS, AND BRANDING`,
      university: 'Middlesex University',
      date: 'October 2018 – July 2022',
      grade: 'Upper Second Class Honours',
      description: ` Creative Advertising, Public relations practice, Content Design, Understanding Consumer Culture, Brand
Management, Campaign Planning, Social Media & Public Relations and Digital Advertising.`,
    },
  ],

  experience: [
    {
      role: ` Brand services and Business development Executive`,
      company: ' VERDANT ZEAL',
      date: 'January 2023 – Present',
      description: [
        ` Developed and crafted engaging social media content aligned with clients' brand identities and targeted audience demographics.
 Employed critical thinking skills to formulate strategic solutions and address challenges across diverse client projects.
 Played an active role in generating ideas and insights, resulting in innovative solutions that effectively met client objectives.
Communicated between 4 different teams including sales and legal to orchestrate unified marketing initiatives
Spearheaded the successful implementation of brand activation initiatives for clients, demonstrating leadership.
Led and coordinated new brand launch activations in several locations, achieving our activation reach of 320.
Team Lead for a cross-team campaign launch resulting in successfully secured coverage in 15 prominent nationwide publications. Notably, 60% of this exposure was directed towards our target local area.
Developed and secured approval for the client campaign budget, achieving a 15% reduction in overall expenditure
      `,
      ],
    },
    {
      role: 'Public relations Intern',
      company: '` NEWCROSS EXPLORATION AND PRODUCTION ',
      date: 'March 2022 – March 2023',
      description: [
        ` Drafted Internal memoranda for company employees
Helped Plan and execute private, company, and client events
Wrote and distributed press releases for the company
Cultivated and maintained strong relationships with media outlets
Developed original content for the company website
Stayed updated with the latest marketing concepts and techniques.
Planned and executed PR strategies and internal communication strategies
      `,
      ],
    },
  ],

  links: {
    contacts: [
      {
        label: 'Send an Email',
        name: 'email',
        href: 'olaleyeoluwademilade0@Gmail.com',
        icon: IoMail,
        color: 'cyan',
      },
    ],

    socials: [
      {
        label: 'Visit my linkedin',
        icon: SiLinkedin,
        href: ' http://www.linkedin.com/in/demilade-olaleye-12a7b6235',
        name: 'Linkedin',
        color: 'linkedin',
      },
      {
        label: 'Visit my instagram',
        icon: SiInstagram,
        href: ' https://www.instagram.com/_de.milade/ ',
        name: 'Instagram',
        color: 'pink',
      },
    ],
  },
};
