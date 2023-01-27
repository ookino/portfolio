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
      description: [
        `Mentored junior web developers by providing technical support through code reviews
      proposed improvements to code organization to improve code quality and overall performance and
      provided advice and tips on how to maintain motivation to maintain longevity in the program.
      `,
      ],
    },
    {
      role: `Software Development Intern`,
      company: 'National Information Technology Development Agency',
      date: 'March 2022 – March 2023',
      description: [
        `Developed a utility web application for generating bi-weekly awareness posters on new technological
      trends and also advisories on security vulnerabilities for software and any applicable technological service
      to minimize the time taken to create them using graphical software.

      `,
        `Supported in evaluation and testing of client applications for security vulnerabilities and system usability.`,
      ],
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
