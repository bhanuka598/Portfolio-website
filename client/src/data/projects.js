import PortfolioImage from '../assets/images/Portfolio-website.png';
import VitaFlowImage from '../assets/images/Daily-habit-tracker.png';
import NeoWeatherImage from '../assets/images/NeoWeather.png';
import PeriodPalImage from '../assets/images/PeriodPal.png';
// You can import icons here if you want to show tech stacks with icons
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiKotlin, SiAndroid, SiFlutter, SiExpress } from 'react-icons/si';

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
  {
    id: 2,
    title: "VitaFlow - Daily Habit Tracker",
    description: "A full-featured habit tracking app built with Kotlin, home screen widget, and a modern UI and seamless user experience.",
    image: VitaFlowImage,
    tags: ["Kotlin", "Android", "Shared Preferences"],
    techIcons: [SiKotlin, SiAndroid],
    githubLink: "https://github.com/bhanuka598/VitaFlow-Daily-Habit-Tracker.git",
    liveLink: "",
    category: "Mobile"
  },
  {
    id: 3,
    title: "NeoWeather - Weather Forecast App",
    description: "A weather forecast app built with Flutter, OpenMeteo weather API, featuring weather helper recommendations.",
    image: NeoWeatherImage,
    tags: ["Flutter", "Android", "OpenMeteo API"],
    techIcons: [SiFlutter, SiAndroid],
    githubLink: "https://github.com/bhanuka598/Flutter-weather-app.git",
    liveLink: "",
    category: "Mobile"
  },
  {
    id: 4,
    title: "PeriodPal - Support for Gender Equity",
    description: "A system designed to provide support and resources for gender equity initiatives.",
    image: PeriodPalImage,
    tags: ["Node.js", "Express.js", "React", "Tailwind CSS", "MongoDB"],
    techIcons: [SiNodedotjs, SiExpress, SiReact, SiTailwindcss, SiMongodb],
    githubLink: "https://github.com/bhanuka598/PeriodPal.git",
    liveLink: "https://period-pal-six.vercel.app/",
    category: "Full Stack"
  }
];
