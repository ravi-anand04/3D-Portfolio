import {
  mobile,
  backend,
  creator,
  web,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import { beyoung, chess, moviedeck, portfolio } from "../assets/projects";

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
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: mobile,
    description:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
  },
  {
    title: "UI Designer",
    icon: web,
    description:
      "I value simple content structure, clean design patterns, and thoughtful interactions.",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Systems Engineer",
    company_name: "Infosys Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2022 - Dec 2023",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",
      "Collaborated with cross-functional teams including designers and other developers to build high-quality products.",
      "Ensured software integrity through regression testing and issue resolution.",
    ],
  },
  {
    title: "Full Stack Developer (Intern)",
    company_name: "Plutonics Services Ltd.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Sep 2021",
    points: [
      "Developed web applications using React.js and Ant Design",
      "Built UI components of an admin panel and added filter and sort functionality",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews",
    ],
  },
];

const projects = [
  {
    name: "Beyoung Clone",
    description:
      "Crafted an eCommerce website clone inspired by Beyoung.in. Implemented login, product filter, add to cart and payment functionality.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: beyoung,
    source_code_link: "https://github.com/ravi-anand04/Beyoung-Clone",
    live: "https://beyoung-store-clone.netlify.app/",
  },
  {
    name: "3D Portfolio",
    description:
      "Portfolio website built using React Fiber, Three.js and Framer motion. Integrated EmailJS for automating the email sending process.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "React 3 Fiber",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/ravi-anand04/3D-Portfolio",
  },
  {
    name: "Royal Chess",
    description:
      "Developed a web-based chess application focusing on the chess-playing experience. Added piece movement logic, current player and handled edge cases",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: chess,
    source_code_link: "https://github.com/",
  },
  {
    name: "Movie Deck",
    description:
      "The Movie Deck App is a web application that allows users to discover and explore movies. It provides information about movies, including details and ratings.",
    tags: [
      {
        name: "Vanilla JS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: moviedeck,
    source_code_link: "https://github.com/ravi-anand04/Movie-Deck",
  },
  // {
  //   name: "Cleartrip Clone",
  //   description:
  //     "Developed a functional clone of Cleartrip.com, emulating its seamless travel booking experience. Implemented features like search, and booking.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Redux",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, projects };
