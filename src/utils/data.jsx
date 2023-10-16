import { Chip } from "@material-tailwind/react";
import {
  AIIcon,
  BootstrapIcon,
  CSSIcon,
  CanvaIcon,
  FigmaIcon,
  GithubIcon,
  GraphicIcon,
  HTMLIcon,
  IonicIcon,
  JavascriptIcon,
  LogoIcon,
  MUIIcon,
  NodeIcon,
  PSDIcon,
  ReactIcon,
  TailwindIcon,
  UIUXIcon,
  VSCodeIcon,
  ViteIcon,
  WebDesignIcon,
  WebIcon,
  XDIcon,
} from "../components/Common/IconComponent";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

export const MAIN_NAVIGATION = [
  {
    title: "Home",
    path: "/",
    page: "",
  },
  {
    title: "About",
    path: "/about",
    page: <About />,
  },
  {
    title: "Projects",
    path: "/projects",
    page: <Projects />,
  },
  {
    title: "Contact",
    path: "/contact",
    page: <Contact />,
  },
];

export const PROJECTS = [
  {
    value: "wd",
    img: "/images/Project Thumbnail/Recozy.png",
    title: "Recozy",
    url: "https://recozy-landing-page.vercel.app/",
    desc: "This design was artfully crafted in Figma, skillfully merging HTML, CSS, React.js, Material-Tailwind, and Tailwind CSS for front-end development. The harmonious integration of these technologies creates an immersive user experience that captivates with its visual allure and interactivity.",
    tools: [
      <Chip className="bg-black" value="Landing Page" />,
      <Chip className="bg-black" value="Web Design" />,
      <Chip className="bg-black" value="Web Development" />,
      <Chip className="bg-black" value="Figma" />,
      <Chip className="bg-black" value="React JS" />,
      <Chip className="bg-black" value="Tailwind CSS" />,
    ],
    path: "/portfolio-recozy",
    position: "left",
  },
  {
    value: "wd",
    img: "/images/Project Thumbnail/Superare.png",
    title: "Superare",
    url: "https://superare-landing-page.vercel.app/",
    desc: "This meticulously crafted design in Figma seamlessly combines HTML, CSS, React.js, Material-Tailwind, and Tailwind CSS for front-end development, resulting in a visually stunning and interactive user experience.",
    tools: [
      <Chip className="bg-black" value="Landing Page" />,
      <Chip className="bg-black" value="Web Design" />,
      <Chip className="bg-black" value="Web Development" />,
      <Chip className="bg-black" value="Figma" />,
      <Chip className="bg-black" value="React JS" />,
      <Chip className="bg-black" value="Tailwind CSS" />,
    ],
    path: "/portfolio-superare",
    position: "right",
  },
  {
    value: "wd",
    img: "/images/Project Thumbnail/Hypeburger.png",
    title: "Hypeburger",
    url: "https://hypeburger-landing-page.vercel.app/",
    desc: "This design skillfully merges Figma, HTML, CSS, React.js, Material-Tailwind, and Tailwind CSS, creating an extraordinary user experience with visually striking elements and interactivity.",
    tools: [
      <Chip className="bg-black" value="Landing Page" />,
      <Chip className="bg-black" value="Web Design" />,
      <Chip className="bg-black" value="Web Development" />,
      <Chip className="bg-black" value="Figma" />,
      <Chip className="bg-black" value="React JS" />,
      <Chip className="bg-black" value="Tailwind CSS" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
  },
  {
    value: "wd",
    img: "/images/Project Thumbnail/Numa.png",
    title: "Numa",
    url: "https://numarecoverycenters.com/",
    desc: "This meticulously crafted design, brought to life using Figma, seamlessly integrates with WordPress, enabling a seamless transition from design to development. The result is a dynamic and engaging website with unparalleled functionality and visual appeal.",
    tools: [
      <Chip className="bg-black" value="Landing Page" />,
      <Chip className="bg-black" value="Web Design" />,
      <Chip className="bg-black" value="Web Development" />,
      <Chip className="bg-black" value="Figma" />,
      <Chip className="bg-black" value="Collaborated" />,
      <Chip className="bg-black" value="Wordpress" />,
    ],
    path: "/portfolio-numa",
    position: "right",
  },
  {
    value: "wd",
    img: "/images/Project Thumbnail/MSAR.png",
    title: "Montrose Search and Rescue",
    url: "https://montrosesar.org/",
    desc: "The intricately designed layout, meticulously created in Figma, smoothly integrates into WordPress, facilitating a seamless shift from design to development. The outcome is a vibrant and captivating website boasting exceptional functionality and visual allure.",
    tools: [
      <Chip className="bg-black" value="UI/UX Design" />,
      <Chip className="bg-black" value="Web Design" />,
      <Chip className="bg-black" value="Web Development" />,
      <Chip className="bg-black" value="Figma" />,
      <Chip className="bg-black" value="Collaborated" />,
      <Chip className="bg-black" value="Wordpress" />,
    ],
    path: "/portfolio-msar",
    position: "left",
  },
  {
    value: "wd",
    img: "/images/Project Thumbnail/Gretta.png",
    title: "Gretta",
    url: "https://gretta-988d98.webflow.io/",
    desc: "This design expertly combines Figma to deliver an exceptional user experience through visually stunning elements and interactive features.",
    tools: [
      <Chip className="bg-black" value="Landing Page" />,
      <Chip className="bg-black" value="Web Design" />,
      <Chip className="bg-black" value="Web Development" />,
      <Chip className="bg-black" value="Figma" />,
      <Chip className="bg-black" value="Webflow" />,
    ],
    path: "/portfolio-hypeburger",
    position: "right",
  },
  {
    value: "wd",
    img: "/images/Project Thumbnail/Rebank.png",
    title: "Rebank",
    url: "#",
    desc: "This design expertly combines Figma to craft an exceptional user experience enriched with visually impressive components and interactive features.",
    tools: [
      <Chip className="bg-black" value="Landing Page" />,
      <Chip className="bg-black" value="Web Design" />,
      <Chip className="bg-black" value="Figma" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
  },
  {
    value: "wd",
    img: "/images/Project Thumbnail/Radiant.png",
    title: "Radiant",
    url: "#",
    desc: "This design expertly combines Figma to craft an exceptional user experience enriched with visually impressive components and interactive features.",
    tools: [
      <Chip className="bg-black" value="Landing Page" />,
      <Chip className="bg-black" value="Web Design" />,
      <Chip className="bg-black" value="Figma" />,
    ],
    path: "/portfolio-hypeburger",
    position: "right",
  },
  { 
    value: "ld",
    img: "/images/Logo/HRG White.png",
    title: "Home Renovation Guy",
    url: "",
    desc: "", 
    tools: "",
    path: "",
    position: "right",
  },
  {
    value: "ld",
    img: "/images/Logo/GR White.png",
    title: "Giving Recovery",
    url: "",
    desc: "",
    tools: "",
    path: "",
    position: "left",
  },
  {
    value: "ld",
    img: "/images/Logo/VS WHite.png",
    title: "VS Gravel and Sand Trading",
    url: "",
    desc: "",
    tools: "",
    path: "",
    position: "right",
  },
  {
    value: "ld",
    img: "/images/Logo/LGC 2 White.png",
    title: "LeadGen Crew V1",
    url: "",
    desc: "",
    tools: "",
    path: "",
    position: "left",
  },
  {
    value: "ld",
    img: "public/images/Logo/LGC White.png",
    title: "LeadGen Crew V2",
    url: "",
    desc: "",
    tools: "",
    path: "",
    position: "right",
  },
];

export const TECH_STACK = [
  {
    icon: <HTMLIcon />,
    label: "HTML",
  },
  {
    icon: <CSSIcon />,
    label: "CSS3",
  },
  {
    icon: <BootstrapIcon />,
    label: "Bootstrap",
  },
  {
    icon: <JavascriptIcon />,
    label: "Javascript",
  },
  {
    icon: <ReactIcon />,
    label: "React JS",
  },
  {
    icon: <MUIIcon />,
    label: "Material UI",
  },
  {
    icon: <NodeIcon />,
    label: "Node JS",
  },
  {
    icon: <IonicIcon />,
    label: "Ionic",
  },
  {
    icon: <TailwindIcon />,
    label: "Tailwind CSS",
  },
  {
    icon: <ViteIcon />,
    label: "Vite",
  },
  {
    icon: <VSCodeIcon />,
    label: "VS Code",
  },
  {
    icon: <GithubIcon />,
    label: "Github",
  },
  {
    icon: <FigmaIcon />,
    label: "Figma",
  },
  {
    icon: <XDIcon />,
    label: "Adobe XD",
  },
  {
    icon: <PSDIcon />,
    label: "Adobe Photoshop",
  },
  {
    icon: <AIIcon />,
    label: "Adobe Illustrator",
  },
  {
    icon: <CanvaIcon />,
    label: "Canva",
  },
];

export const SERVICES = [
  {
    icon: <WebDesignIcon />,
    title: "Web/Mobile Design",
    desc: "Proficient in Figma and Adobe XD for visually appealing and user-friendly website designs, including responsive interfaces for diverse screen sizes and devices.",
  },
  {
    icon: <UIUXIcon />,
    title: "UI/UX Design",
    desc: "Proficient in Adobe Photoshop, Illustrator, and Canva for creating visually stunning graphics, translating client requirements and brand guidelines into compelling visual designs.",
  },
  {
    icon: <WebIcon />,
    title: "Front End Web Development",
    desc: "Proficient in Figma and Adobe XD for engaging and user-centric UI/UX designs, including prototyping to communicate design concepts. Stay up-to-date with the latest UI/UX design trends and best practices.",
  },
  {
    icon: <GraphicIcon />,
    title: "Graphic Design",
    desc: "Proficient in web development languages such as HTML, CSS, and JavaScript. Skilled in building responsive and user-friendly websites that work across different browsers and devices.",
  },
  {
    icon: <LogoIcon />,
    title: "Logo Design",
    desc: "Proficient in logo design, with expertise in creating distinctive and memorable logos that resonate with clients and audiences. Passionate about crafting visual identities that leave a lasting impression and effectively communicate brand messages.",
  },
];

export const CLIENTS = [
  {
    id: "",
    title: "NMS PH",
  },
  {
    id: "",
    title: "TribeTXT",
  },
  {
    id: "",
    title: "Share My Circle",
  },
  {
    id: "",
    title: "Her Erotic Story",
  },
  {
    id: "",
    title: "My Allied Health Academy",
  },
  {
    id: "",
    title: "Montrose Search and Rescue",
  },
  {
    id: "",
    title: "Home Renovation Guy",
  },
  {
    id: "",
    title: "Numa Recovery Centers",
  },
  {
    id: "",
    title: "LeadGen Crew",
  },
  {
    id: "",
    title: "VS Gravel and Sand Trading",
  },
  {
    id: "",
    title: "Villalobos-Santiago Land Surveying",
  },
  {
    id: "",
    title: "One Way Leisure",
  },
  {
    id: "",
    title: "Los Santos Customs Auto Repair",
  },
];
