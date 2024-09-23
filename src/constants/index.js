import {
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
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "📍 Based in Jersey, NJ, USA but",
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
    title: "Looking for my resume?",
    description: "... assuming you're not already coming from there.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    title: "CarePulse - Health Management System",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "The integration of Twilio for confirmation messaging and Sentry for monitoring is also possible. However, due to not wanting to pay for their subscriptions, I chose to exclude them for this demo. Thanks for understanding! *For testing: admin passcode is 111111",
    href: "https://carepulse-rg.vercel.app",
    sourceCode: "https://github.com/rachelgapasin/carepulse-nextjs",
    texture: "/textures/projects/carepulse.mp4",
    logo: "/assets/logos/carepulse.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/tech/nextjs.png",
      },

      {
        id: 2,
        name: "TypeScript",
        path: "/assets/tech/typescript.png",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/tech/tailwindcss.png",
      },
      {
        id: 4,
        name: "Appwrite",
        path: "/assets/tech/appwrite.png",
      },
    ],
  },
  {
    title: "Promptopia - AI Prompt-Sharing Platform",
    desc: "A simple way to discover, create, and share creative prompts to use when talking to chatbots like ChatGPT. It allows users to sign in, post/edit/delete their prompts, view their profiles and other users' profiles, copy prompts to clipboard, and search prompts by user, keyword, and tag/category.",
    subdesc:
      "Built with NextJS, Tailwind CSS, and MongoDB, Promptopia provides a dynamic interface for chatbot prompts. It features user authentication, prompt management, and robust search functionalities.",
    href: "https://promptopia-rg.vercel.app",
    sourceCode: "https://github.com/rachelgapasin/promptopia-nextjs",
    texture: "/textures/projects/promptopia.mp4",
    logo: "/assets/logos/promptopia.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/tech/nextjs.png",
      },

      {
        id: 2,
        name: "JavaScript",
        path: "/assets/tech/javascript.png",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/tech/tailwindcss.png",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/tech/mongodb.png",
      },
    ],
  },
  {
    title: "Bahay - Homelessness Resource Finder",
    desc: "Bahay is a comprehensive resource platform supporting individuals facing homelessness in New Jersey. It connects users with essential services, including shelters, food banks, and veterans' programs, and features an informational quiz on shelters and volunteering opportunities.",
    subdesc:
      "The website is currently programmed in vanilla Javascript and CSS, but a version using ReactJS will be released in the future. When the new version is complete, I will update the links below, if necessary.",
    href: "https://bahay.netlify.app",
    sourceCode: "https://github.com/rachelgapasin/gwc-bahay",
    texture: "/textures/projects/bahay.mp4",
    logo: "/assets/logos/bahay.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/tech/html.png",
      },

      {
        id: 2,
        name: "JavaScript",
        path: "/assets/tech/javascript.png",
      },
      {
        id: 3,
        name: "CSS",
        path: "/assets/tech/css.png",
      },
      {
        id: 4,
        name: "Bootstrap",
        path: "/assets/tech/bootstrap.png",
      },
    ],
  },
  {
    title: "Wordist - Dictionary with Pictures",
    desc: "An intuitive dictionary app that provides word meanings, accurate pronunciations in various accents, example sentences, and visual context through related photos, enhancing the learning experience and making it easier to grasp the full meaning and usage of words.",
    subdesc:
      "Developed using ReactJS and Bootstrap, Wordist pulls definitions and pronunciations from dictionaryapi.dev and retrieves related images via the SheCodes Images API. The app offers a clean, responsive design for easy navigation and efficient word lookups.",
    href: "https://wordist.netlify.app",
    sourceCode: "https://github.com/rachelgapasin/dictionary",
    texture: "/textures/projects/wordist.mp4",
    logo: "/assets/logos/wordist.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "ReactJS",
        path: "/assets/tech/reactjs.png",
      },

      {
        id: 2,
        name: "JavaScript",
        path: "/assets/tech/javascript.png",
      },
      {
        id: 3,
        name: "CSS",
        path: "/assets/tech/css.png",
      },
      {
        id: 4,
        name: "Bootstrap",
        path: "/assets/tech/bootstrap.png",
      },
    ],
  },
  {
    title: "Weather or Not - Weather App",
    desc: "A dynamic weather app that delivers real-time weather information for your current location or any city you search. It provides key weather insights, temperature conversions, local time, and detailed forecasts to help you plan your day effectively.",
    subdesc:
      "Built with ReactJS and the OpenWeatherMap API, Weather or Not offers real-time data and remembers users' theme preferences with local storage. It features Axios for efficient data fetching and a responsive design for a seamless experience across devices.",
    href: "https://weather-or-not.netlify.app",
    sourceCode: "https://github.com/rachelgapasin/weather-app-react",
    texture: "/textures/projects/weather-or-not.mp4",
    logo: "/assets/logos/weather-or-not.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/tech/reactjs.png",
      },

      {
        id: 2,
        name: "JavaScript",
        path: "/assets/tech/javascript.png",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/tech/tailwindcss.png",
      },
      {
        id: 4,
        name: "OpenWeatherMap API",
        path: "/assets/tech/openweathermap-api.png",
      },
    ],
  },
];

export const technologies = [
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

export const experiences = [
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

export const socialMedia = [
  {
    id: 1,
    icon: "faEnvelope",
    href: "mailto:rachelgapasinn@gmail.com",
  },
  {
    id: 2,
    icon: "faLinkedin",
    href: "https://www.linkedin.com/in/rachelgapasin",
  },
  {
    id: 3,
    icon: "faGithub",
    href: "https://github.com/rachelgapasin",
  },
  {
    id: 4,
    icon: "faInstagram",
    href: "https://www.instagram.com/rachelgapasinn",
  },
];
