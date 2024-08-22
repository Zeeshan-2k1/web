import { IconNames } from './constant';

export const ProfileInfo = {
  name: 'Zeeshan Ashraf',
  firstname: 'Zeeshan',
  lastname: 'Ashraf',
  designation: { full: 'Software Developer Engineer', short: 'SDE' },
  city: { full: 'Bengaluru', short: 'BLR' },
  state: { full: 'Karnataka', short: 'KA' },
  country: { full: 'India', short: 'IN' },
  title: {
    line1: `I'm Zeeshan Ashraf`,
    line2: 'Software Engineer and Freelancer',
  },
  bio: { para1: '', para2: '' },
  phone: '+91 70048 58548',
  email: 'ashraf2k1zeeshan@gmail.com',
  resumeLink:
    'https://drive.google.com/file/d/10VvT7yTrpNFVrZrkss4W76mhdceenf_e/view?usp=sharing',
  education: [
    {
      year: '2019-2023',
      title: 'B.Tech in ECE',
      subtitle: 'BIT Sindri',
      description:
        'B.Tech in Electronics and Communication Engineering with a CGPA of 8.65, recognized for academic excellence, and led the Hackathon and Coding Club.',
    },
    {
      year: '2017-2012',
      title: 'HSE (PCM + CS)',
      subtitle: 'Oxford Public School Ranchi, India',
      description:
        'I completed my Higher Secondary Education (HSE) with a specialization in Computer Science, achieving 90% marks.',
    },
  ],
  workExperience: [
    {
      year: "Aug'2023 - current",
      title: 'Software Developer Engineer',
      subtitle: 'DrinkPrime Pvt. Ltd.',
      description:
        'Developed and deployed tools and systems enhancing operational efficiency, improving error reduction, resolution rates, and resource tracking.',
    },
    {
      year: "Dec'2022 - Mar'2023",
      title: 'Javascript Developer (Intern)',
      subtitle: 'Wingify Pvt. Ltd.',
      description:
        'Developed tools and extensions that streamlined performance analysis and profile migration, reducing manual efforts.',
    },
    {
      year: "Jun'2022 - Mar'2023",
      title: 'Frontend Developer (Freelance)',
      subtitle: 'OxPragma',
      description:
        'Developed a user dashboard and optimized smart contracts, increasing engagement, transactions, session duration, and reducing gas.',
    },
  ],
  language: [
    IconNames.JAVASCRIPT,
    IconNames.TYPESCRIPT,
    IconNames.JAVA,
    IconNames.CPP,
    IconNames.PYTHON,
    IconNames.SOLIDITY,
    IconNames.RUST,
    IconNames.LUA,
  ],
  library: [
    IconNames.REACT,
    IconNames.NEXT,
    IconNames.SPRINGBOOT,
    IconNames.EXPRESS,
    IconNames.NODE,
    IconNames.DJANGO,
    IconNames.REDUX,
    IconNames.JQUERY,
    IconNames.TAILWINDCSS,
    IconNames.WEBPACK,
    IconNames.BOOTSTRAP,
    IconNames.D3,
    IconNames.NEST,
  ],
  db: [IconNames.MYSQL, IconNames.POSTGRES, IconNames.MONGO, IconNames.REDIS],
  tools: [
    IconNames.AWS,
    IconNames.FIREBASE,
    IconNames.ARCH,
    IconNames.GITHUB,
    IconNames.DOCKER,
    IconNames.K8S,
    IconNames.FIGMA,
    IconNames.JIRA,
  ],
};

export const ProjectInfo = [
  {
    title: 'Battleship',
    year: '',
    description: '',
    github: '',
    external: '',
    languages: '',
  },
];
