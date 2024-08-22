import { IconType } from 'react-icons';
import { IoIosGitBranch } from 'react-icons/io';
import { LuHome, LuMail, LuUser2 } from 'react-icons/lu';
import { PiSquaresFourLight } from 'react-icons/pi';
import { FaDiscord, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';

export type NAV_LINK_TYPE = {
  label: string;
  icon: IconType;
  link: string;
};

export const NAV_LINKS: NAV_LINK_TYPE[] = [
  {
    label: 'Home',
    icon: LuHome,
    link: 'home',
  },
  {
    label: 'About Me',
    icon: LuUser2,
    link: 'about_me',
  },
  {
    label: 'Portfolio',
    icon: PiSquaresFourLight,
    link: 'portfolio',
  },
  {
    label: 'Projects',
    icon: IoIosGitBranch,
    link: 'projects',
  },
  {
    label: 'Contact',
    icon: LuMail,
    link: 'contact',
  },
];

export const SOCIAL_LINKS: NAV_LINK_TYPE[] = [
  {
    icon: FiGithub,
    label: 'Github',
    link: '#',
  },
  {
    icon: FaXTwitter,
    label: 'X',
    link: '#',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    link: '#',
  },
  {
    icon: FaDiscord,
    label: 'Discord',
    link: '#',
  },
];

export type dataItem = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
};

export const IconNames = {
  JAVASCRIPT: 'javascript',
  PYTHON: 'python',
  CPP: 'cpp',
  JAVA: 'java',
  RUST: 'rust',
  LUA: 'lua',
  TYPESCRIPT: 'typescript',
  SOLIDITY: 'solidity',
  REACT: 'react',
  NEXT: 'next',
  SPRINGBOOT: 'springboot',
  EXPRESS: 'express',
  NODE: 'node',
  DJANGO: 'django',
  REDUX: 'redux',
  TAILWINDCSS: 'tailwindcss',
  JQUERY: 'jquery',
  WEBPACK: 'webpack',
  D3: 'd3',
  BOOTSTRAP: 'bootstrap',
  NEST: 'nest',
  THREEJS: 'threejs',
  POSTGRES: 'postgres',
  MYSQL: 'mysql',
  MONGO: 'mongo',
  REDIS: 'redis',
  AWS: 'aws',
  FIREBASE: 'firebase',
  ARCH: 'arch',
  GITHUB: 'github',
  DOCKER: 'docker',
  K8S: 'k8s',
  JIRA: 'jira',
  FIGMA: 'figma',
};
