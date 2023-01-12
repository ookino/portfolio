import { HiOutlineExternalLink } from 'react-icons/hi';
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
      links: [{ label: 'live', link: 'https://scrubsandbrushes.com', icon: HiOutlineExternalLink }],
    },
    {
      stack: ['next js', 'trpc.io', 'mongo db', 'chakra ui', 'typescript'],
      title: 'Rentar',
      description:
        'Web-based application which allows for managing vehicle rentals and includes features such as reservation management, vehicle inventory tracking, and customer management. The platform enables customers to easily reserve vehicles and rental companies to efficiently manage their fleet and operations.',
      logo: '/images/assets/rentar.webp',
      bg: 'gray.50',
      status: 'under-construction',
    },
    {
      stack: ['next js', 'chakra ui', 'typescript'],
      title: 'Portfolio',
      description:
        'My personal portfolio showcases my skills and experience in web development. The website features a clean and modern design, easy navigation, and highlights the projects I have worked on',
      logo: '/images/assets/okino.webp',
      bg: 'gray.600',
      bgGradient: 'linear(to-b,  #cf59e6, #6bc5f8,)',
      status: 'live',
      links: [{ label: 'live', link: 'https://okino.dev', icon: HiOutlineExternalLink }],
    },
    {
      stack: ['nest js', 'next js', 'mongo db', 'typescript'],
      title: 'Mart',
      description:
        'E-commerce web-application to aid small and medium-sized product-based businesses to sell their products online. The multivendor platform allows multiple vendors to create their own store and manage their products, orders, and transactions seamlessly.',
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
