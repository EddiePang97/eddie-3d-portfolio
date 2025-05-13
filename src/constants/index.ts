import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  code,
  react,
  flutter,
  js,
  greypanel,
  adminpanel,
  totoscanner,
  websitedesign,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Coding Skill",
    icon: code,
  },
  {
    title: "React Frontend Developer",
    icon: react,
  },
  {
    title: "Cross Device Developer",
    icon: flutter,
  },
  {
    title: "Javascript",
    icon: js,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
const experiences: TExperience[] = [
  {
    title: "Frontend Developer (Junior)",
    companyName: "GreyPanel",
    icon: greypanel,
    iconBg: "#E6DEDD",
    date: "Aug 2020 – Jul 2021",
    points: [
      "Focused on learning React.js, TypeScript, and team development workflows.",
      "Assisted in developing and maintaining UI components, and fixing simple bugs.",
      "Gained familiarity with Git collaboration, pull requests, and code review processes.",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "GreyPanel",
    icon: greypanel,
    iconBg: "#E6DEDD",
    date: "Aug 2021 – Jul 2022",
    points: [
      "Responsible for maintaining and optimizing core frontend features of the company’s CDN console.",
      "Independently developed multiple UI components supporting different product modules.",
      "Collaborated closely with designers and backend developers to enhance product consistency and user experience.",
    ],
  },
  {
    title: "Frontend Developer (Mid-Level)",
    companyName: "GreyPanel",
    icon: greypanel,
    iconBg: "#E6DEDD",
    date: "Aug 2022 – Present",
    points: [
      "Explored Three.js out of personal interest and experimented with simple 3D visual effects in projects.",
      "Supported the maintenance of complex modules and contributed ideas for refactoring and optimization.",
      "Participated in code reviews and proposed improvements to the development workflow.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const projects: TProject[] = [
  {
    name: "Toto Scanner",
    description: "A mobile app built with Flutter and Firebase for scanning and managing Toto tickets.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: totoscanner, // 你可以換成你的 Flutter App 截圖
    sourceCodeLink: "",
  },
  {
    name: "CDN Admin Panel",
    description: "An admin dashboard built with React and TypeScript for managing CDN configurations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: adminpanel, // 換成你 CDN 管理後台的截圖
    sourceCodeLink: "",
  },
  {
    name: "Website Design",
    description: "Designed and developed a modern responsive website with animations and UI/UX in mind.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: websitedesign, // 可以放上網站設計預覽圖
    sourceCodeLink: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
