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
import { CONTENT } from "./CaseStudies";

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
    id: 1,
    value: "wd",
    img: [
      "/images/Recozy Landing Page/Recozy - Thumbnail.jpg",
      "/images/Recozy Landing Page/Recozy - Mockup.jpg",
      "/images/Recozy Landing Page/Recozy - 1.jpg",
      "/images/Recozy Landing Page/Recozy - 2.jpg",
      "/images/Recozy Landing Page/Recozy - 3.jpg",
      "/images/Recozy Landing Page/Recozy - 4.jpg",
      "/images/Recozy Landing Page/Design System.jpg",
    ],
    title: "Recozy",
    urlWebsite: "https://recozy.vercel.app/",
    // urlCaseStudy: '/case-study/recozy',
    desc: "",
    tools: ["Landing page design", "Front end web development"],
    path: "/portfolio-recozy",
    position: "left",
    website: "yes",
    caseStudy: "yes",
  },
  {
    id: 2,
    value: "wd",
    img: [
      "/images/Superare Landing Page/Superare - Thumbnail.jpg",
      "/images/Superare Landing Page/Superare - Mockup.jpg",
      "/images/Superare Landing Page/Superare - 1.jpg",
      "/images/Superare Landing Page/Superare - 2.jpg",
      "/images/Superare Landing Page/Superare - 3.jpg",
      "/images/Superare Landing Page/Superare - 4.jpg",
      "/images/Superare Landing Page/Design System.jpg",
    ],
    title: "Superare",
    urlWebsite: "https://superare-landing-page.vercel.app/",
    // urlCaseStudy: "#",
    desc: "",
    tools: ["Landing page design", "Front end web development"],
    path: "/portfolio-superare",
    position: "right",
    website: "no",
    caseStudy: "no",
  },
  {
    id: 3,
    value: "wd",
    img: [
      "/images/Hypeburger Landing Page/Hypeburger - Thumbnail.jpg",
      "/images/Hypeburger Landing Page/Hypeburger - Mockup.jpg",
      "/images/Hypeburger Landing Page/Hypeburger - 1.jpg",
      "/images/Hypeburger Landing Page/Hypeburger - 2.jpg",
      "/images/Hypeburger Landing Page/Hypeburger - 3.jpg",
      "/images/Hypeburger Landing Page/Hypeburger - 4.jpg",
      "/images/Hypeburger Landing Page/Design System.jpg",
    ],
    title: "Hypeburger",
    urlWebsite: "https://hypeburger.vercel.app/",
    // urlCaseStudy: "#",
    desc: "",
    tools: ["Landing page design", "Front end web development"],
    path: "/portfolio-hypeburger",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: 4,
    value: "wd",
    img: [
      "/images/Numa Recovery Center Website/Numa - Thumbnail.jpg",
      "/images/Numa Recovery Center Website/Numa - Mockup.jpg",
      "/images/Numa Recovery Center Website/Numa - 1.jpg",
      "/images/Numa Recovery Center Website/Numa - 2.jpg",
      "/images/Numa Recovery Center Website/Numa - 3.jpg",
      "/images/Numa Recovery Center Website/Numa - 4.jpg",
      "/images/Numa Recovery Center Website/Numa - 5.jpg",
      "/images/Numa Recovery Center Website/Numa - 6.jpg",
      "/images/Numa Recovery Center Website/Numa - 7.jpg",
      "/images/Numa Recovery Center Website/Numa - 8.jpg",
      "/images/Numa Recovery Center Website/Design System.jpg",
    ],
    title: "Numa Recovery Centers",
    urlWebsite: "https://numarecoverycenters.com/",
    // urlCaseStudy: "#",
    desc: "",
    tools: [
      "Landing page design",
      "Front end web development",
      "Collaborated project",
    ],
    path: "/portfolio-numa",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: 5,
    value: "wd",
    img: [
      "/images/MSAR Website/MSAR - Thumbnail.jpg",
      "/images/MSAR Website/MSAR - Mockup.jpg",
      "/images/MSAR Website/MSAR - 1.jpg",
      "/images/MSAR Website/MSAR - 2.jpg",
      "/images/MSAR Website/MSAR - 3.jpg",
      "/images/MSAR Website/MSAR - 4.jpg",
      "/images/MSAR Website/Design System.jpg",
    ],
    title: "Montrose Search and Rescue",
    urlWebsite: "https://montrosesar.org/",
    // urlCaseStudy: "#",
    desc: "",
    tools: [
      "Website design",
      "Front end web development",
      "Collaborated project",
    ],
    path: "/portfolio-msar",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: 6,
    value: "wd",
    img: [
      "/images/Gretta Landing Page/Gretta - Thumbnail.jpg",
      "/images/Gretta Landing Page/Gretta - Mockup.jpg",
      "/images/Gretta Landing Page/Gretta - 1.jpg",
      "/images/Gretta Landing Page/Gretta - 2.jpg",
      "/images/Gretta Landing Page/Gretta - 3.jpg",
      "/images/Gretta Landing Page/Gretta - 4.jpg",
      "/images/Gretta Landing Page/Design System.jpg",
    ],
    title: "Gretta",
    urlWebsite: "https://gretta-988d98.webflow.io/",
    // urlCaseStudy: "#",
    desc: "",
    tools: ["Landing page design", "Front end web development"],
    path: "/portfolio-gretta",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: 7,
    value: "wd",
    img: [
      "/images/Rebank Landing Page/Rebank - Thumbnail.jpg",
      "/images/Rebank Landing Page/Rebank - Mockup.jpg",
      "/images/Rebank Landing Page/Rebank - 1.jpg",
      "/images/Rebank Landing Page/Rebank - 2.jpg",
      "/images/Rebank Landing Page/Rebank - 3.jpg",
      "/images/Rebank Landing Page/Rebank - 4.jpg",
      "/images/Rebank Landing Page/Design System.jpg",
    ],
    title: "Rebank",
    urlWebsite: "#",
    // urlCaseStudy: "#",
    desc: "",
    tools: ["Landing page design"],
    path: "/portfolio-rebank",
    position: "left",
    website: "no",
    caseStudy: "no",
  },
  {
    id: 8,
    value: "wd",
    img: [
      "/images/Radiant Landing Page/Radiant - Thumbnail.jpg",
      "/images/Radiant Landing Page/Radiant - Mockup.jpg",
      "/images/Radiant Landing Page/Radiant - 1.jpg",
      "/images/Radiant Landing Page/Radiant - 2.jpg",
      "/images/Radiant Landing Page/Radiant - 3.jpg",
      "/images/Radiant Landing Page/Radiant - 4.jpg",
      "/images/Radiant Landing Page/Design System.jpg",
    ],
    title: "Radiant",
    urlWebsite: "#",
    // urlCaseStudy: "#",
    desc: "",
    tools: ["Landing page design"],
    path: "/portfolio-radiant",
    position: "right",
    website: "no",
    caseStudy: "no",
  },
  {
    id: 9,
    value: "wd",
    img: [
      "/images/Portfolio V1 Website/Portfolio V1 - Thumbnail.jpg",
      "/images/Portfolio V1 Website/Portfolio V1 - Mockup.jpg",
      "/images/Portfolio V1 Website/Portfolio V1 - 1.jpg",
      "/images/Portfolio V1 Website/Portfolio V1 - 2.jpg",
      "/images/Portfolio V1 Website/Portfolio V1 - 3.jpg",
      "/images/Portfolio V1 Website/Portfolio V1 - 4.jpg",
      "/images/Portfolio V1 Website/Portfolio V1 - 5.jpg",
      "/images/Portfolio V1 Website/Design System.jpg",
    ],
    title: "Portfolio V1",
    urlWebsite: "https://aldrin-villalobos.vercel.app/",
    // urlCaseStudy: "#",
    desc: "",
    tools: ["Custom portfolio website", "Front end web development"],
    path: "/portfolio-v1",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: 10,
    value: "wd",
    img: [
      "/images/Portfolio V2 Website/Portfolio V2 - Thumbnail.jpg",
      "/images/Portfolio V2 Website/Portfolio V2 - Mockup.jpg",
    ],
    title: "Portfolio V2",
    urlWebsite: "https://villalobosaldrin.vercel.app/",
    // urlCaseStudy: "#",
    desc: "",
    tools: ["Custom portfolio website", "Front end web development"],
    path: "/portfolio-v2",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: 11,
    value: "wd",
    img: [
      "/images/Travel Agency Prototype/Travel Agency - Thumbnail.jpg",
      "/images/Travel Agency Prototype/Travel Agency - Mockup.jpg",
    ],
    title: "Travel Agency",
    urlWebsite:
      "https://www.figma.com/proto/qolgK9l7dxZEt3i33IDcQa/Travel-Agency-Landing-Page?node-id=1-2&starting-point-node-id=1%3A2&mode=design&t=A6Ao9WjQU67F3v4l-1",
    // urlCaseStudy: "#",
    desc: "",
    tools: ["Website design", "Prototype"],
    path: "/portfolio-travel-agency",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: 12,
    value: "wd",
    img: [
      "/images/Plant Shop Landing Page/Plant Shop - Thumbnail.jpg",
      "/images/Plant Shop Landing Page/Plant Shop - Mockup.jpg",
      "/images/Plant Shop Landing Page/Plant Shop - 1.jpg",
      "/images/Plant Shop Landing Page/Plant Shop - 2.jpg",
      "/images/Plant Shop Landing Page/Plant Shop - 3.jpg",
      "/images/Plant Shop Landing Page/Plant Shop - 4.jpg",
      "/images/Plant Shop Landing Page/Design System.jpg",
    ],
    title: "Plant Shop",
    urlWebsite:
      "https://www.figma.com/proto/paOiHR81p3FfPcErZ27SxP/Plant-Shop-Landing-Page?page-id=0%3A1&type=design&node-id=8-84&viewport=526%2C126%2C0.16&t=aUAcJwTX6YnjzyHX-1&scaling=min-zoom&starting-point-node-id=8%3A84&mode=design",
    // urlCaseStudy: "#",
    desc: "",
    tools: ["Landing page design"],
    path: "/portfolio-plant-shop",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: 13,
    value: "wd",
    img: [
      "/images/NFT Landing Page/NFT - Thumbnail.jpg",
      "/images/NFT Landing Page/NFT - Mockup.jpg",
      "/images/NFT Landing Page/NFT - 1.jpg",
      "/images/NFT Landing Page/NFT - 2.jpg",
      "/images/NFT Landing Page/NFT - 3.jpg",
      "/images/NFT Landing Page/Design System.jpg",
    ],
    title: "NFT Marketplace",
    urlWebsite:
      "https://www.figma.com/proto/mN6nxFdvKOirzQjlfensSM/NFT-Marketplace-Landing-Page?page-id=0%3A1&type=design&node-id=2-2&viewport=577%2C84%2C0.17&t=x2nPVXGK19mG51Bx-1&scaling=min-zoom&mode=design",
    // urlCaseStudy: "#",
    desc: "",
    tools: ["Landing page design"],
    path: "/portfolio-nft-marketplace",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: 14,
    value: "wd",
    img: [
      "/images/Food Landing Page/Food - Thumbnail.jpg",
      "/images/Food Landing Page/Food - Mockup.jpg",
      "/images/Food Landing Page/Food - 1.jpg",
      "/images/Food Landing Page/Food - 2.jpg",
      "/images/Food Landing Page/Food - 3.jpg",
      "/images/Food Landing Page/Design System.jpg",
    ],
    title: "Food",
    urlWebsite:
      "https://www.figma.com/proto/H315mWNisX8u7MIJ1hSlND/Food-Website-Landing-Page?page-id=0%3A1&type=design&node-id=5-8&viewport=578%2C25%2C0.15&t=iBn5vSWGry2FkHKb-1&scaling=min-zoom&mode=design",
    // urlCaseStudy: "#",
    desc: "",
    tools: ["Landing page design"],
    path: "/portfolio-food",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: 15,
    value: "wd",
    img: [
      "/images/Coffee Prototype/Coffee - Thumbnail.jpg",
      "/images/Coffee Prototype/Coffee - Mockup.jpg",
    ],
    title: "Coffee Shop",
    urlWebsite:
      "https://www.figma.com/proto/Pkgx9gX8vCRhoorT7iGTyj/Coffee-Shop-Landing-Page?type=design&node-id=6-8&t=Q9zhG0lQrRbsFpiQ-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=6%3A8&mode=design",
    // urlCaseStudy: "#",
    desc: "",
    tools: ["Landing page design", "Prototype"],
    path: "/portfolio-coffee-shop",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: 16,
    value: "wd",
    img: [
      "/images/Juice Labs Landing Page/Juice Labs - Thumbnail.jpg",
      "/images/Juice Labs Landing Page/Juice Labs - Mockup.jpg",
      "/images/Juice Labs Landing Page/Juice Labs - 1.jpg",
      "/images/Juice Labs Landing Page/Juice Labs - 2.jpg",
      "/images/Juice Labs Landing Page/Juice Labs - 3.jpg",
      "/images/Juice Labs Landing Page/Juice Labs - 4.jpg",
      "/images/Juice Labs Landing Page/Design System.jpg",
    ],
    title: "Juice Labs",
    urlWebsite: "#",
    // urlCaseStudy: "#",
    desc: "",
    tools: ["Landing page design"],
    path: "/portfolio-juice-labs",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: 17,
    value: "wd",
    img: [
      "/images/LearnTXT Website/LearnTXT - Thumbnail.jpg",
      "/images/LearnTXT Website/LearnTXT - Mockup.jpg",
      "/images/LearnTXT Website/LearnTXT - 1.jpg",
      "/images/LearnTXT Website/LearnTXT - 2.jpg",
      "/images/LearnTXT Website/LearnTXT - 3.jpg",
      "/images/LearnTXT Website/LearnTXT - 4.jpg",
      "/images/LearnTXT Website/LearnTXT - 5.jpg",
      "/images/LearnTXT Website/Design System.jpg",
    ],
    title: "LearnTXT",
    urlWebsite: "https://learntxt.com/",
    // urlCaseStudy: "#",
    desc: "",
    tools: ["Website design", "Front end web development"],
    path: "/portfolio-learntxt",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: 18,
    value: "wd",
    img: [
      "/images/Remagine Landing Page/Remagine - Thumbnail.jpg",
      "/images/Remagine Landing Page/Remagine - Mockup.jpg",
      "/images/Remagine Landing Page/Remagine - 1.jpg",
      "/images/Remagine Landing Page/Remagine - 2.jpg",
      "/images/Remagine Landing Page/Remagine - 3.jpg",
      "/images/Remagine Landing Page/Design System.jpg",
    ],
    title: "Remagine",
    urlWebsite: "https://remagine.vercel.app/",
    // urlCaseStudy: "#",
    desc: "",
    tools: ["Landing page design", "Front end web development"],
    path: "/portfolio-remagine",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: 19,
    value: "ud",
    img: [
      "/images/My Allied Health Academy Web Application/MAHA - Thumbnail.jpg",
      "/images/My Allied Health Academy Web Application/MAHA - Mockup.jpg",
    ],
    title: "My Allied Health Academy",
    urlWebsite: "#",
    urlCaseStudy: "http://design.nmscreative.com/my-allied-health-academy/",
    desc: "",
    tools: ["UI/UX design", "Web application", "Collaborated project"],
    path: "/portfolio-my-allied-health-academy",
    position: "left",
    website: "no",
    caseStudy: "yes",
  },
  {
    id: 20,
    value: "ud",
    img: [
      "/images/Share My Circle Web Application/SMC - Thumbnail.jpg",
      "/images/Share My Circle Web Application/SMC - Mockup.jpg",
    ],
    title: "Share My Circle",
    urlWebsite: "#",
    urlCaseStudy: "http://design.nmscreative.com/share-my-circle-2/",
    desc: "",
    tools: ["UI/UX design", "Web application", "Collaborated project"],
    path: "/portfolio-share-my-circle",
    position: "right",
    website: "no",
    caseStudy: "yes",
  },
  {
    id: 21,
    value: "ud",
    img: [
      "/images/Her Erotic Story Web Application/HES - Thumbnail.jpg",
      "/images/Her Erotic Story Web Application/HES - Mockup.jpg",
    ],
    title: "Her Erotic Story",
    urlWebsite: "#",
    urlCaseStudy: "http://design.nmscreative.com/her-erotic-story/",
    desc: "",
    tools: ["UI/UX design", "Web application", "Collaborated project"],
    path: "/portfolio-her-erotic-story",
    position: "left",
    website: "no",
    caseStudy: "yes",
  },
  {
    id: 22,
    value: "ud",
    img: [
      "/images/TribeTXT Rooms Web Application/TribeTXT - Thumbnail.jpg",
      "/images/TribeTXT Rooms Web Application/TribeTXT - Mockup.jpg",
    ],
    title: "TribeTXT (Rooms)",
    urlWebsite: "#",
    urlCaseStudy: "http://design.nmscreative.com/tribetxt/",
    desc: "",
    tools: ["UI/UX design", "Web application", "Collaborated project"],
    path: "/portfolio-tribetxt-rooms",
    position: "right",
    website: "no",
    caseStudy: "yes",
  },
  {
    id: 23,
    value: "ud",
    img: [
      "/images/LeadGen Crew Web Application/LeadGen Crew - Thumbnail.jpg",
      "/images/LeadGen Crew Web Application/LeadGen Crew - Mockup.jpg",
    ],
    title: "LeadGen Crew",
    urlWebsite: "#",
    urlCaseStudy: "#",
    desc: "",
    tools: ["UI/UX design", "Web application", "Collaborated project"],
    path: "/portfolio-leadgen-crew",
    position: "left",
    website: "no",
    caseStudy: "no",
  },
  {
    id: 24,
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
    id: 25,
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
