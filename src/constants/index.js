import {
  mobile,
  backend,
  creator,
  web,
  b1,
  b4,
  b5,
  grid,
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
  njcu,
  gwc,
  carepulse,
  promptopia,
  bahay,
  threejs,
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

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: b1,
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: grid,
    spareImg: b4,
  },

  {
    id: 5,
    title: "Currently building a NextJS Banking App Platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: b5,
    spareImg: grid,
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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

const experiences = [
  {
    title: "Fellow, Project Lead",
    company_name: "Girls Who Code",
    icon: gwc,
    iconBg: "#383E56",
    date: "August 2023 - December 2023",
    points: [
      "Participated in a four-month leadership development and career readiness program with senior leaders and engineers at RTX.",
      "Designed, managed, and developed a Give Back Project that focuses on spreading awareness about homelessness and providing resources in New Jersey.",
      "Networked with peers and industry professionals through cohort meetings for leadership development and project management, mock technical interviews, and speed networking.",
    ],
  },
  {
    title: "CS Research Intern",
    company_name: "New Jersey City University",
    icon: njcu,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Enhanced reinforcement learning algorithms using Python to achieve a 36% improvement in training efficiency for the Amazon Web Services (AWS) DeepRacer project, ensuring seamless deployment and faster model iterations.",
      "Conducted comprehensive data analysis and model evaluation, leading to targeted optimizations that improved overall model performance and accuracy.",
      "Communicated research findings through engaging presentations at a research symposium, bridging technical and non-technical audiences.",
    ],
  },
  {
    title: "Mathematics Tutor",
    company_name: "New Jersey City University",
    icon: njcu,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Facilitated group tutoring sessions for fellow university students, focusing on critical mathematics topics to help them pass the end-of-program exam, enabling them to satisfy math requirements and advance their studies quickly.",
      "Monitored student performance and progress using MyMathTest, identifying key areas for improvement and customizing tutoring sessions to address specific needs, resulting in improved comprehension and an average grade increase of 59%.",
      "Provided personalized one-on-one assistance on Zoom and in person and recorded attendance information in Microsoft Excel.",
    ],
  },
];

const projects = [
  {
    name: "CarePulse",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carepulse,
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
    image: promptopia,
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
    image: bahay,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
