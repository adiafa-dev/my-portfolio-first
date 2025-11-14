import { StaticImageData } from 'next/image';

import JSIcon from '../public/assets/icons/JS.png';
import CSSIcon from '../public/assets/icons/css3.png';
import HTMLIcon from '../public/assets/icons/html5.png';
import ExpressJSIcon from '../public/assets/icons/ExpressJS.png';
import MongoDBIcon from '../public/assets/icons/mongoDB.png';
import ReactIcon from '../public/assets/icons/react.png';
import TSIcon from '../public/assets/icons/typescript.png';
import DockerIcon from '../public/assets/icons/docker.png';

type SkillsIconProps = {
  src: StaticImageData;
  alt: string;
};

type SkillsBarProps = {
  skill: string;
  value: number;
};

export const skillsIConData: SkillsIconProps[] = [
  {
    src: JSIcon,
    alt: 'JavaScript',
  },
  {
    src: CSSIcon,
    alt: 'CSS 3',
  },
  {
    src: HTMLIcon,
    alt: 'HTML 5',
  },
  {
    src: ExpressJSIcon,
    alt: 'Express JS',
  },
  {
    src: MongoDBIcon,
    alt: 'Mongo DB',
  },
  {
    src: ReactIcon,
    alt: 'React',
  },
  {
    src: TSIcon,
    alt: 'TypeScript',
  },
  {
    src: DockerIcon,
    alt: 'Docker',
  },
];

export const skillsBarData: SkillsBarProps[] = [
  {
    skill: 'React',
    value: 50,
  },
  {
    skill: 'Next JS',
    value: 80,
  },
  {
    skill: 'Tailwind CSS',
    value: 90,
  },
  {
    skill: 'HTML',
    value: 100,
  },
  {
    skill: 'Docker',
    value: 70,
  },
  {
    skill: 'Javascript',
    value: 90,
  },
];
