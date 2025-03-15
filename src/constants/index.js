import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  expressjs,
  meta,
  starbucks,
  tesla,
  cdao,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "express js",
    icon: expressjs,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Self Employed",
    icon: null,
    iconBg: "#383E56",
    date: "March 2021 - June 2022",
    points: [
      "Responsive Web Design - Built fully responsive websites ensuring seamless experiences across all devices and screen sizes.",
      "Interactive UI/UX - Developed engaging, user-friendly interfaces using HTML, CSS, JavaScript, and Tailwind CSS.",
      "Optimized Performance - Improved site speed and performance through efficient coding and asset optimization.",
      "API Integration - Enhanced website functionality by integrating and managing third-party APIs effectively.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Independent",
    icon: null,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "RESTful API Development - Designed and implemented scalable REST APIs to handle seamless data exchange and functionality.",
      "Database Management - Built and optimized databases, ensuring efficient data storage, retrieval, and integrity.",
      "Server-Side Logic - Developed robust server-side applications to manage business logic and user authentication.",
      "Security Implementation - Implemented secure authentication, authorization, and data protection practices to safeguard applications.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "cdao.fun",
    icon: cdao,
    iconBg: "#383E56",
    date: "Jan 2022 - October 2022",
    points: [
      "Full-Stack Development - Built dynamic, responsive web applications using modern frontend and backend technologies.",
      "Website Optimization - Improved website performance, ensuring faster load times and enhanced user experiences.",
      "Responsive Design - Created mobile-friendly, cross-platform websites with seamless functionality across all devices.",
      "Version Control - Managed projects efficiently using Git for tracking changes and collaborating with teams.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Self Employed",
    icon: null,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "End-to-End Development - Built and deployed complete web applications from frontend to backend seamlessly.",
      "API Design & Integration - Created and integrated RESTful APIs to enable smooth data communication.",
      "Database & Server Management - Designed, managed, and optimized databases and server infrastructure for scalability.",
      "Cross-Functional Collaboration - Worked across teams to deliver cohesive, high-performing web solutions efficiently.",
    ],
  },
];

const testimonials = [
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

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
