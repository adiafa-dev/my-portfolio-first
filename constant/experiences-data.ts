import { StaticImageData } from 'next/image';

import upworkLogo from '../public/assets/icons/upworkLogo.png';
import trelloLogo from '../public/assets/icons/trelloLogo.png';
import zoomLogo from '../public/assets/icons/zoomLogo.png';
import zapierLogo from '../public/assets/icons/zapierLogo.png';

type Experience = {
  year: string;
  title: string;
  srcLogo: StaticImageData;
  altSrcLogo: string;
  description: string;
};

export const rowStartMap: Record<number, string> = {
  1: 'row-start-1',
  2: 'row-start-2',
  3: 'row-start-3',
  4: 'row-start-4',
};

export const experienceData: Experience[] = [
  {
    year: '2000-2002',
    title: 'Frontend Developer',
    srcLogo: upworkLogo,
    altSrcLogo: 'Upwork Logo',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    year: '2000-2002',
    title: 'Frontend Developer',
    srcLogo: trelloLogo,
    altSrcLogo: 'Upwork Logo',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    year: '2000-2002',
    title: 'Frontend Developer',
    srcLogo: zoomLogo,
    altSrcLogo: 'Upwork Logo',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    year: '2000-2002',
    title: 'Frontend Developer',
    srcLogo: zapierLogo,
    altSrcLogo: 'Upwork Logo',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
];
