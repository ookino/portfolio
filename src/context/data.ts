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
      title: 'Creative copies and graphic portfolio',
      description: 'A showcase of my creativity',
      links: [
        {
          label: 'live',
          link: 'https://drive.google.com/drive/folders/1yIhP40tZITlYq0gtz8TH0GTH-CBmLK-t?usp=sharing',
          icon: HiOutlineExternalLink,
        },
      ],
    },

    {
      title: 'Portfolio',
      description: 'My personal portfolio',
      links: [
        {
          label: 'live',
          link: 'https://drive.google.com/file/d/1sYRlAxZ79hhIyDD2D-RrBnKUMimU9Z7u/view?usp=sharing',
          icon: HiOutlineExternalLink,
        },
      ],
    },

    {
      title: 'From Marketing to Aspiring Product Manager',

      description:
        'Building a bridge between the gap of my marketing background and the intricate world of product management. ',
      links: [
        {
          label: 'live',
          link: 'https://docs.google.com/document/d/10-8diu5xtX89P4mO-TlOokSYu97_fmBe/edit?usp=sharing&ouid=100219797326560231217&rtpof=true&sd=true',
          icon: HiOutlineExternalLink,
        },
      ],
    },
  ],

  certificates: [
    {
      title: 'Product Management Certificate',
      description:
        'Certificate of completion for the Udemy course, "Become a Product Manager | Learn the Skills & Get the Job" by Cole Mercer and Evan Kimbrell.',
      links: [
        {
          label: 'live',
          link: 'https://drive.google.com/file/d/1lvc9gtH8-9Kkx7VctsHkdAFn5qVZaXUD/view?usp=sharing',
          icon: HiOutlineExternalLink,
        },
      ],
    },

    {
      title: 'University Certificate',
      description: 'BA Advertising, Public relations and branding',
      links: [
        {
          label: 'live',
          link: 'https://drive.google.com/file/d/15BxhzfV0sd4OTwwwvIR9cPcFT1rkYwwr/view?usp=sharing',
          icon: HiOutlineExternalLink,
        },
      ],
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
