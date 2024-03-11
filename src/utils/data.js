export const SKILLS = [
  {
    title: "Frontend",
    icon: "./assets/images/frontend-icon.png",
    skills: [
      { skill: "HTML5", percentage: "80%" },
      { skill: "CSS3 (Sass/SCSS)", percentage: "90%" },
      { skill: "JavaScript", percentage: "75%" },
      { skill: "React.js", percentage: "80%" },
      { skill: "Vue.js", percentage: "70%" },
      { skill: "Tailwind", percentage: "74%" },
      { skill: "Boostrap", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: "./assets/images/backend-icon.png",
    skills: [
      { skill: "Node.js", percentage: "70%" },
      { skill: "Express.js", percentage: "65%" },
      { skill: "Apache", percentage: "80%" },
      { skill: "Nginx", percentage: "71%" },
    ],
  },
  {
    title: "Tools",
    icon: "./assets/images/tools-icon.png",
    skills: [
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "Figma", percentage: "60%" },
      { skill: "Arduino", percentage: "70%" },
      { skill: "Winbox", percentage: "89%" },
      { skill: "Mikhmon Server", percentage: "80%" },
      { skill: "Android Studio", percentage: "61%" },
      { skill: "Canva", percentage: "79%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "./assets/images/soft-skills-icon.png",
    skills: [
      { skill: "Problem-solving", percentage: "80%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Detail", percentage: "75%" },
      { skill: "Public Speaking", percentage: "80%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Platform Transaction Digital Rag Shop.",
    date: "Web Developer and Security Disgn | February 2021 - May 2022",
    responsibilities: [
      "Build a responsive website with CodeIgniter 4.",
      "Building an api system for host to host (h2h) customers.",
      "Build high-level security and encryption of user data.",
      "Perform data backup and software system maintenance.",
    ],
  },
  {
    title: "Platfrom Transaction Digital Pesaku Digital.",
    date: "Web Developer and SEO Optimization | November 2023 - Now",
    responsibilities: [
      "Build a website with a complex SEO framework to improve search.",
      "Api management provider as a source of banking suppliers.",
      "Security use of only one device.",
      "Customer data encryption system and customer transaction data.",
    ],
  },
];

export const EDUCATION = [
  {
    title: "Vocational High School 4 Banjar.",
    date_major: "2021 - 2024 | Computer & Network Engineering",
    responsibilities: [
      "Study network systems.",
      "Manage and perform hardware or software maintenance.",
      "Network security and blocking of websites and files.",
      "Winbox configuration and basic programming language learning.",
    ],
  },

  {
    title: "Amaroossa Hotels.",
    date_major: "2023 July - 2023 November | IT Support",
    responsibilities: [
      "Hardware assembly.",
      "As IT support, assisting in solving technology problems.",
      "Network management and troubleshooting.",
      "Network monitoring and paying attention to work indicators.",
    ],
  },
];

export const getImageUrl = (path) => {
  return `/assets/${path}`;
};
