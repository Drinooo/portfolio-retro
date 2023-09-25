import { AIIcon, BootstrapIcon, CSSIcon, CanvaIcon, FigmaIcon, GithubIcon, GraphicIcon, HTMLIcon, IonicIcon, JavascriptIcon, LogoIcon, MUIIcon, NodeIcon, PSDIcon, ReactIcon, TailwindIcon, UIUXIcon, VSCodeIcon, ViteIcon, WebDesignIcon, WebIcon, XDIcon } from "../components/Common/IconComponent";

export const MAIN_NAVIGATION = [
  {
    title: "Home",
    path: "/",
    page: "",
  },
  {
    title: "About",
    path: "/about",
    page: "",
  },
  {
    title: "Projects",
    path: "/projects",
    page: "",
  },
  {
    title: "Contact",
    path: "/contact",
    page: "",
  },
];

export const PROJECTS = [
  {
    id: 1,
    value: 'wd',
    img: '/images/Project Thumbnail/Recozy.png',
    title: "Recozy",
    url: "",
    desc: "This design was artfully crafted in Figma, skillfully merging HTML, CSS, React.js, Material-Tailwind, and Tailwind CSS for front-end development. The harmonious integration of these technologies creates an immersive user experience that captivates with its visual allure and interactivity.",
    tools: "",
    path: "/portfolio-recozy",
    position: 'left',
  },
  {
    id: 2,
    value: 'wd',
    img: '/images/Project Thumbnail/Superare.png',
    title: "Superare",
    url: "",
    desc: "This meticulously crafted design in Figma seamlessly combines HTML, CSS, React.js, Material-Tailwind, and Tailwind CSS for front-end development, resulting in a visually stunning and interactive user experience.",
    tools: "",
    path: "/portfolio-superare",
    position: 'right',
  },
  {
    id: 3,
    value: 'wd',
    img: '/images/Project Thumbnail/Hypeburger.png',
    title: "Hypeburger",
    url: "",
    desc: "This design skillfully merges Figma, HTML, CSS, React.js, Material-Tailwind, and Tailwind CSS, creating an extraordinary user experience with visually striking elements and interactivity.",
    tools: "",
    path: "/portfolio-hypeburger",
    position: 'left',
  },
  {
    id: 4,
    value: 'wd',
    img: '/images/Project Thumbnail/Numa.png',
    title: "Numa",
    url: "",
    desc: "This meticulously crafted design, brought to life using Figma, seamlessly integrates with WordPress, enabling a seamless transition from design to development. The result is a dynamic and engaging website with unparalleled functionality and visual appeal.",
    tools: "",
    path: "/portfolio-numa",
    position: 'right',
  },
];

export const TECH_STACK = [
  {
    icon: <HTMLIcon />,
    label: 'HTML',
  },
  {
    icon: <CSSIcon />,
    label: 'CSS3',
  },
  {
    icon: <BootstrapIcon />,
    label: 'Bootstrap',
  },
  {
    icon: <JavascriptIcon />,
    label: 'Javascript',
  },
  {
    icon: <ReactIcon />,
    label: 'React JS',
  },
  {
    icon: <MUIIcon />,
    label: 'Material UI',
  },
  {
    icon: <NodeIcon />,
    label: 'Node JS',
  },
  {
    icon: <IonicIcon />,
    label: 'Ionic',
  },
  {
    icon: <TailwindIcon />,
    label: 'Tailwind CSS',
  },
  {
    icon: <ViteIcon />,
    label: 'Vite',
  },
  {
    icon: <VSCodeIcon />,
    label: 'VS Code',
  },
  {
    icon: <GithubIcon />,
    label: 'Github',
  },
  {
    icon: <FigmaIcon />,
    label: 'Figma',
  },
  {
    icon: <XDIcon />,
    label: 'Adobe XD',
  },
  {
    icon: <PSDIcon />,
    label: 'Adobe Photoshop',
  },
  {
    icon: <AIIcon />,
    label: 'Adobe Illustrator',
  },
  {
    icon: <CanvaIcon />,
    label: 'Canva',
  },
]

export const SERVICES = [
  {
    icon: <WebDesignIcon />,
    title: 'Web/Mobile Design',
    desc: 'Proficient in Figma and Adobe XD for visually appealing and user-friendly website designs, including responsive interfaces for diverse screen sizes and devices.',
  },
  {
    icon: <UIUXIcon />,
    title: 'UI/UX Design',
    desc: 'Proficient in Adobe Photoshop, Illustrator, and Canva for creating visually stunning graphics, translating client requirements and brand guidelines into compelling visual designs.',
  },
  {
    icon: <WebIcon />,
    title: 'Front End Web Development',
    desc: 'Proficient in Figma and Adobe XD for engaging and user-centric UI/UX designs, including prototyping to communicate design concepts. Stay up-to-date with the latest UI/UX design trends and best practices.',
  },
  {
    icon: <GraphicIcon />,
    title: 'Graphic Design',
    desc: 'Proficient in web development languages such as HTML, CSS, and JavaScript. Skilled in building responsive and user-friendly websites that work across different browsers and devices.',
  },
  {
    icon: <LogoIcon />,
    title: 'Logo Design',
    desc: 'Proficient in logo design, with expertise in creating distinctive and memorable logos that resonate with clients and audiences. Passionate about crafting visual identities that leave a lasting impression and effectively communicate brand messages.',
  },
]