import { StaticImageData } from 'next/image';

import starbust from '../public/assets/icons/starbust.png';

type WhyMeDetail = {
  src: StaticImageData;
  description: string;
};

export const workingWithMe: WhyMeDetail[] = [
  {
    src: starbust,
    description: 'React Expert',
  },
  {
    src: starbust,
    description: 'Precise Website Implementation',
  },
  {
    src: starbust,
    description: 'TypeScript Proficiency',
  },
  {
    src: starbust,
    description: 'Clean, Maintainable Code',
  },
  {
    src: starbust,
    description: 'Responsive Website Development',
  },
  {
    src: starbust,
    description: 'UI Design Proficiency (Figma)',
  },
];

export const workingWithAnother: WhyMeDetail[] = [
  {
    src: starbust,
    description: 'Basic React Knowledge',
  },
  {
    src: starbust,
    description: 'Inconsistent Design Translation',
  },
  {
    src: starbust,
    description: 'Little to No TypeScript Knowledge',
  },
  {
    src: starbust,
    description: 'Unstructured Code',
  },
  {
    src: starbust,
    description: 'Inconsistent Responsiveness',
  },
  {
    src: starbust,
    description: 'No Design Skills',
  },
];
