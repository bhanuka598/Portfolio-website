// You can import icons here if you want to show tech stacks with icons
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A full-stack admin panel to manage products, orders, and customer data with real-time analytics.",
    image: "/assets/project-dashboard.png", // Path to your image in public/assets
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    techIcons: [SiReact, SiNodedotjs, SiMongodb, SiTailwindcss],
    githubLink: "https://github.com",
    liveLink: "https://project-demo.com",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Weather Tracking App",
    description: "Real-time weather updates using OpenWeather API with a dynamic background based on weather conditions.",
    image: "/assets/project-weather.png",
    tags: ["JavaScript", "Tailwind", "API"],
    techIcons: [SiTailwindcss],
    githubLink: "https://github.com",
    liveLink: "https://weather-app-live.com",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio built with React and Tailwind CSS featuring dynamic content loading.",
    image: "/assets/project-portfolio.png",
    tags: ["React", "Tailwind", "Framer Motion"],
    techIcons: [SiReact, SiTailwindcss],
    githubLink: "https://github.com",
    liveLink: "https://yourportfolio.com",
    category: "Design"
  }
];
