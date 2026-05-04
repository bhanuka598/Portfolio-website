import PortfolioImage from '../assets/images/Portfolio-website.png';
// You can import icons here if you want to show tech stacks with icons
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';

export const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive portfolio built with React and Tailwind CSS featuring dynamic content loading.",
    image: PortfolioImage,
    tags: ["React", "Tailwind", "Framer Motion"],
    techIcons: [SiReact, SiTailwindcss],
    githubLink: "https://github.com/bhanuka598/Portfolio-website.git",
    liveLink: "https://portfolio-website-delta-eight-k2nv7tu1p8.vercel.app/",
    category: "Design"
  },
];
