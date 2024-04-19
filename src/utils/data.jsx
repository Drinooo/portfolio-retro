import {
  AIIcon,
  BootstrapIcon,
  CSSIcon,
  CanvaIcon,
  ClickFunnels,
  FigmaIcon,
  GithubIcon,
  GoHighLevel,
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
    title: "Shop",
    path: "/shop",
  },
  {
    title: "Pricing",
    path: "/pricing",
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
    id: "todo-list-app",
    value: "WEBDEV",
    img: [
      "/images/Todo List App/Todo List App - Thumbnail.jpg",
      "/images/Todo List App/Todo List App - Mockup.jpg",
    ],
    title: "Todo List Web App",
    urlWebsite: "https://todolistapp-creative-drin.vercel.app/",
    urlCaseStudy: "#",
    tools: ["ReactJS & Material UI", "Website application"],
    path: "projects/todo-list-app",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "scalbl",
    value: "WEBDEV",
    img: [
      "/images/Scalbl.io/Scalbl.io - Thumbnail.png",
      "/images/Scalbl.io/Scalbl.io - Mockup.png",
      "/images/Scalbl.io/Scalbl.io - 1.png",
      "/images/Scalbl.io/Scalbl.io - 2.png",
      "/images/Scalbl.io/Scalbl.io - 3.png",
      "/images/Scalbl.io/Design System.png",
    ],
    title: "Scalbl.io",
    urlWebsite: "https://scalbl.io/",
    urlCaseStudy: "#",
    tools: ["Landing page design", "GoHighLevel", "Consulting Company"],
    path: "projects/scalbl",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "recozy",
    value: "WEBDEV",
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
    urlCaseStudy: "#",
    tools: [
      "Landing page design",
      "ReactJS & TailwindCSS",
      "From relume design league",
    ],
    path: "projects/recozy",
    position: "left",
    website: "yes",
    caseStudy: "yes",
  },
  {
    id: "hypeburger",
    value: "WEBDEV",
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
    urlWebsite: "https://hypeburger.drinooo.vercel.app/",
    urlCaseStudy: "#",
    tools: [
      "Landing page design",
      "ReactJS & TailwindCSS",
      "From relume design league",
    ],
    path: "projects/hypeburger",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "numa",
    value: "WEBDEV",
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
    urlCaseStudy: "#",
    tools: ["Landing page design", "Collaborated project"],
    path: "projects/numa",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "gretta",
    value: "WEBDEV",
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
    urlCaseStudy: "#",
    tools: [
      "Landing page design",
      "From relume design league",
      "Webflow",
      "Relume library kit",
    ],
    path: "projects/gretta",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "radiant",
    value: "WEBDEV",
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
    urlWebsite: "https://radiant-472f93.webflow.io/",
    urlCaseStudy: "#",
    tools: [
      "Landing page design",
      "From relume design league",
      "Webflow",
      "Relume library kit",
    ],
    path: "projects/radiant",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "portfolio-v1",
    value: "WEBDEV",
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
    urlCaseStudy: "#",
    tools: ["Custom portfolio website", "ReactJS & Material UI"],
    path: "projects/v1",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "portfolio-v2",
    value: "WEBDEV",
    img: [
      "/images/Portfolio V2 Website/Portfolio V2 - Thumbnail.jpg",
      "/images/Portfolio V2 Website/Portfolio V2 - Mockup.jpg",
    ],
    title: "Portfolio V2",
    urlWebsite: "https://villalobosaldrin.vercel.app/",
    urlCaseStudy: "#",
    tools: ["Custom portfolio website", "ReactJS & TailwindCSS"],
    path: "projects/v2",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "learntxt",
    value: "WEBDEV",
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
    urlCaseStudy: "#",
    tools: ["Website design", "WordPress (Oxygen Builder)"],
    path: "projects/learntxt",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "remagine",
    value: "WEBDEV",
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
    urlCaseStudy: "#",
    tools: [
      "Landing page design",
      "ReactJS & TailwindCSS",
      "From relume design league",
    ],
    path: "projects/remagine",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "go-find-me-app",
    value: "WEBDEV",
    img: [
      "/images/Go Find Me Mobile App/Go Find Me App - Thumbnail.jpg",
      "/images/Go Find Me Mobile App/Go Find Me App - 1.jpg",
      "/images/Go Find Me Mobile App/Go Find Me App - 2.jpg",
      "/images/Go Find Me Mobile App/Go Find Me App - 3.jpg",
      "/images/Go Find Me Mobile App/Go Find Me App - 4.jpg",
      "/images/Go Find Me Mobile App/Go Find Me App - 5.jpg",
      "/images/Go Find Me Mobile App/Design System.jpg",
    ],
    title: "Go Find Me App",
    urlWebsite: "#",
    urlCaseStudy: "#",
    tools: ["Mobile app design", "Mobile app development", "Ionic"],
    path: "projects/go-find-me",
    position: "left",
    website: "no",
    caseStudy: "no",
  },
  {
    id: "superare",
    value: "WEBDES",
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
    urlCaseStudy: "#",
    tools: ["Landing page design", "From relume design league"],
    path: "projects/superare",
    position: "left",
    website: "no",
    caseStudy: "no",
  },
  {
    id: "MSAR",
    value: "WEBDES",
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
    urlCaseStudy: "#",
    tools: ["Website design", "Collaborated project"],
    path: "projects/msar",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "rebank",
    value: "WEBDES",
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
    urlCaseStudy: "#",
    tools: ["Landing page design", "From relume design league"],
    path: "projects/rebank",
    position: "left",
    website: "no",
    caseStudy: "no",
  },
  {
    id: "travel-agency",
    value: "WEBDES",
    img: [
      "/images/Travel Agency Prototype/Travel Agency - Thumbnail.jpg",
      "/images/Travel Agency Prototype/Travel Agency - Mockup.jpg",
    ],
    title: "Travel Agency",
    urlWebsite:
      "https://www.figma.com/proto/qolgK9l7dxZEt3i33IDcQa/Travel-Agency-Landing-Page?node-id=1-2&starting-point-node-id=1%3A2&mode=design&t=A6Ao9WjQU67F3v4l-1",
    urlCaseStudy: "#",
    tools: ["Website design", "Prototype"],
    path: "projects/travel-agency",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "plant-shop",
    value: "WEBDES",
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
    urlCaseStudy: "#",
    tools: ["Landing page design"],
    path: "projects/plant-shop",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "nft",
    value: "WEBDES",
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
    urlCaseStudy: "#",
    tools: ["Landing page design"],
    path: "projects/nft-marketplace",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "food",
    value: "WEBDES",
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
    urlCaseStudy: "#",
    tools: ["Landing page design"],
    path: "projects/food",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "coffee",
    value: "WEBDES",
    img: [
      "/images/Coffee Prototype/Coffee - Thumbnail.jpg",
      "/images/Coffee Prototype/Coffee - Mockup.jpg",
    ],
    title: "Coffee Shop",
    urlWebsite:
      "https://www.figma.com/proto/Pkgx9gX8vCRhoorT7iGTyj/Coffee-Shop-Landing-Page?type=design&node-id=6-8&t=Q9zhG0lQrRbsFpiQ-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=6%3A8&mode=design",
    urlCaseStudy: "#",
    tools: ["Landing page design", "Prototype"],
    path: "projects/coffee-shop",
    position: "right",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "juice-labs",
    value: "WEBDES",
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
    urlCaseStudy: "#",
    tools: ["Landing page design", "From relume design league"],
    path: "projects/juice-labs",
    position: "left",
    website: "yes",
    caseStudy: "no",
  },
  {
    id: "MAHA",
    value: "ud",
    img: [
      "/images/My Allied Health Academy Web Application/MAHA - Thumbnail.jpg",
      "/images/My Allied Health Academy Web Application/MAHA - Mockup.jpg",
    ],
    title: "My Allied Health Academy",
    urlWebsite: "#",
    urlCaseStudy: "http://design.nmscreative.com/my-allied-health-academy/",
    tools: ["UI/UX design", "Web application", "Collaborated project"],
    path: "projects/my-allied-health-academy",
    position: "left",
    website: "no",
    caseStudy: "yes",
  },
  {
    id: "SMC",
    value: "ud",
    img: [
      "/images/Share My Circle Web Application/SMC - Thumbnail.jpg",
      "/images/Share My Circle Web Application/SMC - Mockup.jpg",
    ],
    title: "Share My Circle",
    urlWebsite: "#",
    urlCaseStudy: "http://design.nmscreative.com/share-my-circle-2/",
    tools: ["UI/UX design", "Web application", "Collaborated project"],
    path: "projects/share-my-circle",
    position: "right",
    website: "no",
    caseStudy: "yes",
  },
  {
    id: "HES",
    value: "ud",
    img: [
      "/images/Her Erotic Story Web Application/HES - Thumbnail.jpg",
      "/images/Her Erotic Story Web Application/HES - Mockup.jpg",
    ],
    title: "Her Erotic Story",
    urlWebsite: "#",
    urlCaseStudy: "http://design.nmscreative.com/her-erotic-story/",
    tools: ["UI/UX design", "Web application", "Collaborated project"],
    path: "projects/her-erotic-story",
    position: "left",
    website: "no",
    caseStudy: "yes",
  },
  {
    id: "tribetxt-rooms",
    value: "ud",
    img: [
      "/images/TribeTXT Rooms Web Application/TribeTXT - Thumbnail.jpg",
      "/images/TribeTXT Rooms Web Application/TribeTXT - Mockup.jpg",
    ],
    title: "TribeTXT (Rooms)",
    urlWebsite: "#",
    urlCaseStudy: "http://design.nmscreative.com/tribetxt/",
    tools: ["UI/UX design", "Web application", "Collaborated project"],
    path: "projects/tribetxt-rooms",
    position: "right",
    website: "no",
    caseStudy: "yes",
  },
  {
    id: "leadgen-crew",
    value: "ud",
    img: [
      "/images/LeadGen Crew Web Application/LeadGen Crew - Thumbnail.jpg",
      "/images/LeadGen Crew Web Application/LeadGen Crew - Mockup.jpg",
    ],
    title: "LeadGen Crew",
    urlWebsite: "#",
    urlCaseStudy: "#",
    tools: ["UI/UX design", "Web application", "Collaborated project"],
    path: "projects/leadgen-crew",
    position: "left",
    website: "no",
    caseStudy: "no",
  },
  {
    id: 26,
    value: "ld",
    img: "/images/Logo/HRG White.png",
    title: "Home Renovation Guy",
    position: "left",
  },
  {
    id: 27,
    value: "ld",
    img: "/images/Logo/GR White.png",
    title: "Giving Recovery",
    position: "right",
  },
  {
    id: 28,
    value: "ld",
    img: "/images/Logo/VS WHite.png",
    title: "VS Gravel and Sand Trading",
    position: "left",
  },
  {
    id: 29,
    value: "ld",
    img: "/images/Logo/LGC 2 White.png",
    title: "LeadGen Crew V1",
    position: "right",
  },
  {
    id: 30,
    value: "ld",
    img: "/images/Logo/LGC White.png",
    title: "LeadGen Crew V2",
    position: "left",
  },
  {
    id: 31,
    value: "ld",
    img: [
      "/images/Stranger Lust Logo/Stranger Lust Banner.png",
      "/images/Stranger Lust Logo/Stranger Lust White.png",
      "/images/Stranger Lust Logo/Stranger Lust Dark.png",
    ],
    title: "Stranger Lust",
    position: "right",
  },
  {
    id: 32,
    value: "GRAPDES",
    img: "/images/Business Card/One Way Leisure Business Card.jpg",
    title: "One Way Leisure",
    tools: ["Business Card"],
    position: "left",
  },
  {
    id: 33,
    value: "GRAPDES",
    img: "/images/Business Card/Los santos Customs Auto Repair Business Card.jpg",
    title: "Los Santos Auto Repairs",
    tools: ["Business Card"],
    position: "right",
  },
  {
    id: 34,
    value: "GRAPDES",
    img: "/images/Facebook Post/Villalobos-Santiago Facebook Post.png",
    title: "Villalobos-Santiago Land Surveying",
    tools: ["Facebook Post"],
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
    icon: <GoHighLevel />,
    label: "GoHighLevel",
  },
  {
    icon: <ClickFunnels />,
    label: "ClickFunnels",
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
    desc: "I create captivating websites and apps with Figma and Adobe XD, turning your ideas into visually stunning digital experiences.",
  },
  {
    icon: <WebIcon />,
    title: "Front End Development",
    desc: "I create visually appealing and responsive websites using HTML, CSS, and JavaScript, with expertise in React JS, Vite, WordPress, and Webflow for dynamic and engaging web experiences.",
  },
  {
    icon: <GraphicIcon />,
    title: "Graphic Design",
    desc: "I craft eye-catching graphics with Adobe Photoshop, Adobe Illustrator, and Canva. Let me turn your concepts into visually striking designs that captivate and leave a lasting impression.",
  },
  {
    icon: <LogoIcon />,
    title: "Logo Design",
    desc: "I design distinctive logos for your business using Adobe Photoshop, Adobe Illustrator, Canva, and Figma. Bring your vision to life with a professional and eye-catching touch.",
  },
];

export const CLIENTS = [
  {
    title: "NMS PH",
  },
  {
    title: "TribeTXT",
  },
  {
    title: "Share My Circle",
  },
  {
    title: "Her Erotic Story",
  },
  {
    title: "My Allied Health Academy",
  },
  {
    title: "Montrose Search and Rescue",
  },
  {
    title: "Home Renovation Guy",
  },
  {
    title: "Numa Recovery Centers",
  },
  {
    title: "LeadGen Crew",
  },
  {
    title: "VS Gravel and Sand Trading",
  },
  {
    title: "Villalobos-Santiago Land Surveying",
  },
  {
    title: "One Way Leisure",
  },
  {
    title: "Los Santos Customs Auto Repair",
  },
  {
    title: "Scalbl.io",
  },
  {
    title: "Side Gig Masterclass",
  },
  {
    title: "Launch Loans",
  },
  {
    title: "Shorin Travel and Tours",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    img: "/images/Developer Portfolio/Developer Portfolio - Thumbnail.jpg",
    category: "Portfolio",
    name: "Developer Portfolio",
    price: "$100.00",
    note: "Coming Soon!",
  },
];

export const PRICING = [
  {
    id: 1,
    title: "Web Design",
    desc: "Figma Design only",
    price: "From $80-$200",
    priceDesc: "per webpage",
    includes: ["Figma design of the webpage", "2 rounds of revisions"],
    revision: "$10-$20",
    note: "",
  },
  {
    id: 2,
    title: "Web Design and Development",
    desc: "Figma Design and CMS or Coded",
    price: "From $200-$500",
    priceDesc: "per webpage",
    includes: [
      "Figma design of the webpage",
      "Development using a Content Management System (CMS) like WordPress or Wix",
      "Basic SEO optimization",
      "2 rounds of revisions",
    ],
    revision: "$20-$40",
    note: "",
  },
  {
    id: 3,
    title: "Web Development",
    desc: "CMS or Coded",
    price: "From $80-$300",
    priceDesc: "per webpage",
    includes: [
      "Development using a Content Management System (CMS) like WordPress or Wix",
      "Basic SEO optimization",
      "1 round of revisions",
    ],
    revision: "$15-$30",
    note: "",
  },
  {
    id: 4,
    title: "Personalized Service",
    price: "Price based on client requirements",
    priceDesc: "",
    includes: [
      "Consultation to discuss client requirements and objectives",
      "Personalized design and development solutions",
      "Ongoing support",
      "Additional services as needed",
    ],
    revision: "",
    note: "Prices and scope of work will be determined based on the complexity and scale of the project. Please contact for a personalized quote.",
  },
];
