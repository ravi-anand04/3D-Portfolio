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
import {
  beyoung,
  chess,
  moviedeck,
  portfolio,
  ticketCheckout,
} from "../assets/projects";

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
      "I value simple content structure, clean design patterns and thoughtful interactions.",
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
      "Built UI components for events management and Goals feature using React.js",
      "Implemented event register, waiting list, attendance and filter by date.",
      "Enabled CRUD operations as well as validations check for Goals feature",
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
      "Built an admin panel to manage product stocks, provide inventory updates, and filter operations.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Also implemented pagination and lazy loading, which significantly improved the performance.",
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
        name: "JavaScript",
        color: "green-text-gradient",
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
    name: "Cleartrip Clone",
    description:
      "Developed a functional clone of Cleartrip.com, with flights/hotel search, and booking. Built infinte scroll, search autocomplete and sort, filter operations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ticket Checkout",
    description:
      "Crafted with React and styled with Tailwind CSS, this UI offers a seamless experience for users as they finalize their ticket purchases. The UI features responsive design.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: ticketCheckout,
    source_code_link: "https://github.com/ravi-anand04/TicketeCheckout",
    live: "https://tickete-checkout.netlify.app/",
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
    live: "https://ravi-anand04.netlify.app/",
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
    live: "https://tmdb-movie-deck.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
