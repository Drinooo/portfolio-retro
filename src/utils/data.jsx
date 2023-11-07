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
  OxygenIcon,
  PSDIcon,
  ReactIcon,
  TailwindIcon,
  UIUXIcon,
  VSCodeIcon,
  ViteIcon,
  WebDesignIcon,
  WebIcon,
  WebflowIcon,
  WordPressIcon,
  XDIcon,
} from "../components/Common/IconComponent";

export const MAIN_NAVIGATION = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
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
    value: "wd",
    img: "/images/Project Thumbnail/Portfolio V1.png",
    title: "Portfolio V1",
    url: "https://aldrinvillalobos.vercel.app/",
    desc: "This design expertly combines Figma to craft an exceptional user experience enriched with visually impressive components and interactive features.",
    tools: [
      <Chip className="bg-black" value="Portfolio" />,
      <Chip className="bg-black" value="Web Design" />,
      <Chip className="bg-black" value="Figma" />,
      <Chip className="bg-black" value="Web Development" />,
      <Chip className="bg-black" value="React JS" />,
      <Chip className="bg-black" value="Material UI" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
  },
  {
    value: "wd",
    img: "/images/Project Thumbnail/Portfolio V2.png",
    title: "Portfolio V2",
    url: "https://villalobosaldrin.vercel.app/",
    desc: "This design expertly combines Figma to craft an exceptional user experience enriched with visually impressive components and interactive features.",
    tools: [
      <Chip className="bg-black" value="Portfolio" />,
      <Chip className="bg-black" value="Web Design" />,
      <Chip className="bg-black" value="Figma" />,
      <Chip className="bg-black" value="Web Development" />,
      <Chip className="bg-black" value="React JS" />,
      <Chip className="bg-black" value="Tailwind CSS" />,
    ],
    path: "/portfolio-hypeburger",
    position: "right",
  },
  {
    value: "wd",
    img: "/images/Project Thumbnail/Travel Agency.png",
    title: "Travel Agency",
    url: "https://www.figma.com/proto/qolgK9l7dxZEt3i33IDcQa/Travel-Agency-Landing-Page?node-id=1-2&starting-point-node-id=1%3A2&mode=design&t=A6Ao9WjQU67F3v4l-1",
    desc: "This design expertly combines Figma to craft an exceptional user experience enriched with visually impressive components and interactive features.",
    tools: [
      <Chip className="bg-black" value="Landing Page" />,
      <Chip className="bg-black" value="Web Design" />,
      <Chip className="bg-black" value="Prototype" />,
      <Chip className="bg-black" value="Figma" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
  },
  {
    value: "wd",
    img: "/images/Project Thumbnail/Plant Shop.png",
    title: "Plant Shop",
    url: "https://www.figma.com/file/paOiHR81p3FfPcErZ27SxP/Plant-Shop-Landing-Page?type=design&node-id=0%3A1&mode=design&t=aA9iLThMU8B0F9Zv-1",
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
    value: "wd",
    img: "/images/Project Thumbnail/NFT.png",
    title: "NFT Marketplace",
    url: "https://www.figma.com/file/mN6nxFdvKOirzQjlfensSM/NFT-Marketplace-Landing-Page?type=design&node-id=0%3A1&mode=design&t=CnYACF4bvWvkOedB-1",
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
    img: "/images/Project Thumbnail/Food.png",
    title: "Food",
    url: "https://www.figma.com/file/H315mWNisX8u7MIJ1hSlND/Food-Website-Landing-Page?type=design&node-id=0%3A1&mode=design&t=OTABiAO73Yo0w96b-1",
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
    value: "wd",
    img: "/images/Project Thumbnail/Coffee.png",
    title: "Coffee Shop",
    url: "https://www.figma.com/proto/Pkgx9gX8vCRhoorT7iGTyj/Coffee-Shop-Landing-Page?type=design&node-id=6-8&t=Q9zhG0lQrRbsFpiQ-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=6%3A8&mode=design",
    desc: "This design expertly combines Figma to craft an exceptional user experience enriched with visually impressive components and interactive features.",
    tools: [
      <Chip className="bg-black" value="Landing Page" />,
      <Chip className="bg-black" value="Web Design" />,
      <Chip className="bg-black" value="Prototype" />,
      <Chip className="bg-black" value="Figma" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
  },
  {
    value: "wd",
    img: "/images/Project Thumbnail/Juice Labs.png",
    title: "Juice Labs",
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
    value: "wd",
    img: "/images/Project Thumbnail/LearnTXT.png",
    title: "LearnTXT",
    url: "https://learntxt.com/",
    desc: "This design expertly combines Figma to craft an exceptional user experience enriched with visually impressive components and interactive features.",
    tools: [
      <Chip className="bg-black" value="Landing Page" />,
      <Chip className="bg-black" value="Web Design" />,
      <Chip className="bg-black" value="WordPress" />,
      <Chip className="bg-black" value="Figma" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
  },
  {
    value: "ud",
    img: "/images/Project Thumbnail/MAHA.png",
    title: "My Allied Health Academy",
    url: "http://design.nmscreative.com/my-allied-health-academy/",
    desc: "This design expertly combines Figma to craft an exceptional user experience enriched with visually impressive components and interactive features.",
    tools: [
      <Chip className="bg-black" value="UI/UX Design" />,
      <Chip className="bg-black" value="Web Application" />,
      <Chip className="bg-black" value="Figma" />,
      <Chip className="bg-black" value="Collaborated" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
  },
  {
    value: "ud",
    img: "/images/Project Thumbnail/SMC.png",
    title: "Share My Circle",
    url: "http://design.nmscreative.com/share-my-circle-2/",
    desc: "This design expertly combines Figma to craft an exceptional user experience enriched with visually impressive components and interactive features.",
    tools: [
      <Chip className="bg-black" value="UI/UX Design" />,
      <Chip className="bg-black" value="Web Application" />,
      <Chip className="bg-black" value="Figma" />,
      <Chip className="bg-black" value="Collaborated" />,
    ],
    path: "/portfolio-hypeburger",
    position: "right",
  },
  {
    value: "ud",
    img: "/images/Project Thumbnail/HES.png",
    title: "Her Erotic Story",
    url: "http://design.nmscreative.com/her-erotic-story/",
    desc: "This design expertly combines Figma to craft an exceptional user experience enriched with visually impressive components and interactive features.",
    tools: [
      <Chip className="bg-black" value="UI/UX Design" />,
      <Chip className="bg-black" value="Web Application" />,
      <Chip className="bg-black" value="Figma" />,
      <Chip className="bg-black" value="Collaborated" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
  },
  {
    value: "ud",
    img: "/images/Project Thumbnail/TribeTXT.png",
    title: "TribeTXT (Rooms)",
    url: "http://design.nmscreative.com/tribetxt/",
    desc: "This design expertly combines Figma to craft an exceptional user experience enriched with visually impressive components and interactive features.",
    tools: [
      <Chip className="bg-black" value="UI/UX Design" />,
      <Chip className="bg-black" value="Web Application" />,
      <Chip className="bg-black" value="Figma" />,
      <Chip className="bg-black" value="Collaborated" />,
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
    img: "/images/Logo/LGC White.png",
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
    icon: <WordPressIcon />,
    label: "WordPress",
  },
  {
    icon: <WebflowIcon />,
    label: "Webflow",
  },
  {
    icon: <OxygenIcon />,
    label: "Oxygen Builder",
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
    desc: "I design attractive and user-friendly websites and apps using Figma and Adobe XD. Let my expertise transform your ideas into visually appealing digital experiences.",
  },
  {
    icon: <UIUXIcon />,
    title: "UI/UX Design",
    desc: "I specialize in creating user-friendly, visually appealing interfaces for websites and apps using Figma and Adobe XD, turning your ideas into engaging digital experiences that enhance your brand.",
  },
  {
    icon: <WebIcon />,
    title: "Front End Web Development",
    desc: "I create visually appealing, smoothly functioning, and responsive websites using HTML, CSS, and JavaScript. My expertise in React JS, Vite, WordPress, and Webflow ensures dynamic and engaging web experiences.",
  },
  // {
  //   icon: <GraphicIcon />,
  //   title: "Graphic Design",
  //   desc: "",
  // },
  {
    icon: <LogoIcon />,
    title: "Logo Design",
    desc: "I create unique and memorable logos for your business or brand. Using design tools like Adobe Photoshop, Adobe Illustrator, Canva, and Figma, I'll bring your vision to life professionally and eye-catchingly.",
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
