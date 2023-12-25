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
    img: [
      "/images/Project Thumbnail/Recozy.png",
      "/images/Recozy/Recozy-2.png",
      "/images/Recozy/Recozy-3.png",
      "/images/Recozy/Recozy.png",
    ],
    title: "Recozy",
    urlWebsite: "https://recozy-landing-page.vercel.app/",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Landing Page" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Web Development" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
      <Chip className="bg-black rounded-none italic" value="React JS" />,
      <Chip className="bg-black rounded-none italic" value="Tailwind CSS" />,
    ],
    path: "/portfolio-recozy",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/Superare.png",
      "/images/Superare/Superare-2.png",
      "/images/Superare/Superare-3.png",
      "/images/Superare/Superare.png",
    ],
    title: "Superare",
    urlWebsite: "https://superare-landing-page.vercel.app/",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Landing Page" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Web Development" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
      <Chip className="bg-black rounded-none italic" value="React JS" />,
      <Chip className="bg-black rounded-none italic" value="Tailwind CSS" />,
    ],
    path: "/portfolio-superare",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/Hypeburger.png",
      "/images/Hypeburger/Hypeburger-2.png",
      "/images/Hypeburger/Hypeburger-3.png",
      "/images/Hypeburger/Hypeburger.png",
    ],
    title: "Hypeburger",
    urlWebsite: "https://hypeburger-landing-page.vercel.app/",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Landing Page" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Web Development" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
      <Chip className="bg-black rounded-none italic" value="React JS" />,
      <Chip className="bg-black rounded-none italic" value="Tailwind CSS" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/Numa.png",
      "/images/NUMA/Numa-2.png",
      "/images/NUMA/Numa-3.png",
      "/images/NUMA/Numa.png",
    ],
    title: "Numa",
    urlWebsite: "https://numarecoverycenters.com/",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Landing Page" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Web Development" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
      <Chip className="bg-black rounded-none italic" value="Collaborated" />,
      <Chip className="bg-black rounded-none italic" value="Wordpress" />,
    ],
    path: "/portfolio-numa",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/MSAR.png",
      "/images/MSAR/MSAR-2.png",
      "/images/MSAR/MSAR-3.png",
      "/images/MSAR/MSAR.png",
    ],
    title: "Montrose Search and Rescue",
    urlWebsite: "https://montrosesar.org/",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="UI/UX Design" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Web Development" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
      <Chip className="bg-black rounded-none italic" value="Collaborated" />,
      <Chip className="bg-black rounded-none italic" value="Wordpress" />,
    ],
    path: "/portfolio-msar",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/Gretta.png",
      "/images/Gretta/Gretta-2.png",
      "/images/Gretta/Gretta-3.png",
      "/images/Gretta/Gretta.png",
    ],
    title: "Gretta",
    urlWebsite: "https://gretta-988d98.webflow.io/",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Landing Page" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Web Development" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
      <Chip className="bg-black rounded-none italic" value="Webflow" />,
    ],
    path: "/portfolio-hypeburger",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/Rebank.png",
      "/images/Rebank/Rebank-2.png",
      "/images/Rebank/Rebank-3.png",
      "/images/Rebank/Rebank.png",
    ],
    title: "Rebank",
    urlWebsite: "#",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Landing Page" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/Radiant.png",
      "/images/Radiant/Radiant-2.png",
      "/images/Radiant/Radiant-3.png",
      "/images/Radiant/Radiant.png",
    ],
    title: "Radiant",
    urlWebsite: "#",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Landing Page" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
    ],
    path: "/portfolio-hypeburger",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/Portfolio V1.png",
      "/images/Portfolio V1/Portfolio V1-2.png",
      "/images/Portfolio V1/Portfolio V1-3.png",
      "/images/Portfolio V1/Portfolio V1.png",
    ],
    title: "Portfolio V1",
    urlWebsite: "https://aldrinvillalobos.vercel.app/",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Portfolio" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
      <Chip className="bg-black rounded-none italic" value="Web Development" />,
      <Chip className="bg-black rounded-none italic" value="React JS" />,
      <Chip className="bg-black rounded-none italic" value="Material UI" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/Portfolio V2.png",
      "/images/Portfolio V2/Portfolio V2.png",
    ],
    title: "Portfolio V2",
    urlWebsite: "https://villalobosaldrin.vercel.app/",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Portfolio" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
      <Chip className="bg-black rounded-none italic" value="Web Development" />,
      <Chip className="bg-black rounded-none italic" value="React JS" />,
      <Chip className="bg-black rounded-none italic" value="Tailwind CSS" />,
    ],
    path: "/portfolio-hypeburger",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/Travel Agency.png",
      "/images/Travel Agency/Travel Agency.png",
    ],
    title: "Travel Agency",
    urlWebsite: "https://www.figma.com/proto/qolgK9l7dxZEt3i33IDcQa/Travel-Agency-Landing-Page?node-id=1-2&starting-point-node-id=1%3A2&mode=design&t=A6Ao9WjQU67F3v4l-1",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Landing Page" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Prototype" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/Plant Shop.png",
      "/images/Plant Shop/Plant Shop-2.png",
      "/images/Plant Shop/Plant Shop-3.png",
      "/images/Plant Shop/Plant Shop.png",
    ],
    title: "Plant Shop",
    urlWebsite: "https://www.figma.com/file/paOiHR81p3FfPcErZ27SxP/Plant-Shop-Landing-Page?type=design&node-id=0%3A1&mode=design&t=aA9iLThMU8B0F9Zv-1",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Landing Page" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
    ],
    path: "/portfolio-hypeburger",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/NFT.png",
      "/images/NFT/NFT-2.png",
      "/images/NFT/NFT-3.png",
      "/images/NFT/NFT.png",
    ],
    title: "NFT Marketplace",
    urlWebsite: "https://www.figma.com/file/mN6nxFdvKOirzQjlfensSM/NFT-Marketplace-Landing-Page?type=design&node-id=0%3A1&mode=design&t=CnYACF4bvWvkOedB-1",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Landing Page" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/Food.png",
      "/images/Food/Food-2.png",
      "/images/Food/Food-3.png",
      "/images/Food/Food.png",
    ],
    title: "Food",
    urlWebsite: "https://www.figma.com/file/H315mWNisX8u7MIJ1hSlND/Food-Website-Landing-Page?type=design&node-id=0%3A1&mode=design&t=OTABiAO73Yo0w96b-1",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Landing Page" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
    ],
    path: "/portfolio-hypeburger",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: ["/images/Project Thumbnail/Coffee.png", "/images/Coffee/Coffee.png"],
    title: "Coffee Shop",
    urlWebsite: "https://www.figma.com/proto/Pkgx9gX8vCRhoorT7iGTyj/Coffee-Shop-Landing-Page?type=design&node-id=6-8&t=Q9zhG0lQrRbsFpiQ-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=6%3A8&mode=design",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Landing Page" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Prototype" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/Juice Labs.png",
      "/images/Juice Labs/Juice Labs-2.png",
      "/images/Juice Labs/Juice Labs-3.png",
      "/images/Juice Labs/Juice Labs.png",
    ],
    title: "Juice Labs",
    urlWebsite: "#",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Landing Page" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
    ],
    path: "/portfolio-hypeburger",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/LearnTXT.png",
      "/images/LearnTXT/LearnTXT-2.png",
      "/images/LearnTXT/LearnTXT-3.png",
      "/images/LearnTXT/LearnTXT.png",
    ],
    title: "LearnTXT",
    urlWebsite: "https://learntxt.com/",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Landing Page" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="WordPress" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "wd",
    img: [
      "/images/Project Thumbnail/Remagine.png",
      "/images/Remagine/Remagine-2.png",
      "/images/Remagine/Remagine-3.png",
      "/images/Remagine/Remagine.png"
    ],
    title: "Remagine",
    urlWebsite: "https://remagine-landing-page.vercel.app/",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="Landing Page" />,
      <Chip className="bg-black rounded-none italic" value="Web Design" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
      <Chip className="bg-black rounded-none italic" value="React JS" />,
      <Chip className="bg-black rounded-none italic" value="Tailwind CSS" />,
      <Chip
        className="bg-black rounded-none italic"
        value="Material Tailwind"
      />,
    ],
    path: "/portfolio-hypeburger",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    value: "ud",
    img: "/images/Project Thumbnail/MAHA.png",
    title: "My Allied Health Academy",
    urlWebsite: "#",
    urlCaseStudy: "http://design.nmscreative.com/my-allied-health-academy/",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="UI/UX Design" />,
      <Chip className="bg-black rounded-none italic" value="Web Application" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
      <Chip className="bg-black rounded-none italic" value="Collaborated" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
    website: "no",
    caseStudy: "yes",
  },
  {
    value: "ud",
    img: "/images/Project Thumbnail/SMC.png",
    title: "Share My Circle",
    urlWebsite: "#",
    urlCaseStudy: "http://design.nmscreative.com/share-my-circle-2/",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="UI/UX Design" />,
      <Chip className="bg-black rounded-none italic" value="Web Application" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
      <Chip className="bg-black rounded-none italic" value="Collaborated" />,
    ],
    path: "/portfolio-hypeburger",
    position: "right",
    website: "no",
    caseStudy: "yes",
  },
  {
    value: "ud",
    img: "/images/Project Thumbnail/HES.png",
    title: "Her Erotic Story",
    urlWebsite: "#",
    urlCaseStudy: "http://design.nmscreative.com/her-erotic-story/",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="UI/UX Design" />,
      <Chip className="bg-black rounded-none italic" value="Web Application" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
      <Chip className="bg-black rounded-none italic" value="Collaborated" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
    website: "no",
    caseStudy: "yes",
  },
  {
    value: "ud",
    img: "/images/Project Thumbnail/TribeTXT.png",
    title: "TribeTXT (Rooms)",
    urlWebsite: "#",
    urlCaseStudy: "http://design.nmscreative.com/tribetxt/",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="UI/UX Design" />,
      <Chip className="bg-black rounded-none italic" value="Web Application" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
      <Chip className="bg-black rounded-none italic" value="Collaborated" />,
    ],
    path: "/portfolio-hypeburger",
    position: "right",
    website: "no",
    caseStudy: "yes",
  },
  {
    value: "ud",
    img: "/images/Project Thumbnail/LeadGen Crew.png",
    title: "LeadGen Crew",
    urlWebsite: "#",
    urlCaseStudy: "#",
    desc: "",
    tools: [
      <Chip className="bg-black rounded-none italic" value="UI/UX Design" />,
      <Chip className="bg-black rounded-none italic" value="Web Application" />,
      <Chip className="bg-black rounded-none italic" value="Figma" />,
      <Chip className="bg-black rounded-none italic" value="Collaborated" />,
    ],
    path: "/portfolio-hypeburger",
    position: "left",
    website: "no",
    caseStudy: "no",
  },
  {
    value: "ld",
    img: "/images/Logo/HRG White.png",
    title: "Home Renovation Guy",
    url: "",
    desc: "",
    tools: "",
    path: "",
    position: "left",
  },
  {
    value: "ld",
    img: "/images/Logo/GR White.png",
    title: "Giving Recovery",
    url: "",
    desc: "",
    tools: "",
    path: "",
    position: "right",
  },
  {
    value: "ld",
    img: "/images/Logo/VS WHite.png",
    title: "VS Gravel and Sand Trading",
    url: "",
    desc: "",
    tools: "",
    path: "",
    position: "left",
  },
  {
    value: "ld",
    img: "/images/Logo/LGC 2 White.png",
    title: "LeadGen Crew V1",
    url: "",
    desc: "",
    tools: "",
    path: "",
    position: "right",
  },
  {
    value: "ld",
    img: "/images/Logo/LGC White.png",
    title: "LeadGen Crew V2",
    url: "",
    desc: "",
    tools: "",
    path: "",
    position: "left",
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
