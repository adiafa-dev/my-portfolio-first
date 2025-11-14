import { StaticImageData } from 'next/image';

import upworkLogo from '../public/assets/icons/upworkLogo.png';
import trelloLogo from '../public/assets/icons/trelloLogo.png';
import zoomLogo from '../public/assets/icons/zoomLogo.png';
import zapierLogo from '../public/assets/icons/zapierLogo.png';

export type Testimonial = {
  rating: number;
  description: string;
  clientSrc: StaticImageData;
  clientName: string;
  clientOccupation: string;
};

export const testimonialsData: Testimonial[] = [
  {
    rating: 5,
    description:
      '“Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!”',
    clientSrc: upworkLogo,
    clientName: 'Thom Haye',
    clientOccupation: 'Project Manager',
  },
  {
    rating: 5,
    description:
      '“An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!”',
    clientSrc: zapierLogo,
    clientName: 'Sarah Thompson',
    clientOccupation: 'Engineering Manager',
  },
  {
    rating: 4,
    description:
      '"An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!"',
    clientSrc: trelloLogo,
    clientName: 'Emily Carter',
    clientOccupation: 'CTO of MedTech Innovations',
  },
  {
    rating: 5,
    description:
      'A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!',
    clientSrc: zoomLogo,
    clientName: 'Michael Brown',
    clientOccupation: 'Lead Developer',
  },
  {
    rating: 4,
    description:
      'The UI/UX design provided by Syntax completely transformed our platform. Our users love the new interface, and engagement rates have significantly increased',
    clientSrc: zapierLogo,
    clientName: 'Sarah Thompson',
    clientOccupation: 'Head of Product at E-Hub',
  },
  {
    rating: 5,
    description:
      'Cybersecurity was a major concern for us, but Syntax delivered a secure and scalable solution that gave us peace of mind. Their team is truly professional and reliable.',
    clientSrc: zoomLogo,
    clientName: 'David Collins',
    clientOccupation: 'CTO of MedTech Innovations',
  },
  {
    rating: 4,
    description:
      'Working with Syntax has been a game-changer for our business. Their IT solutions streamlined our operations and helped us scale faster than we expected. Highly recommended!',
    clientSrc: upworkLogo,
    clientName: 'Michael Anderson',
    clientOccupation: 'CEO of FinTech Solutions',
  },
  {
    rating: 5,
    description:
      'The UI/UX design provided by Syntax completely transformed our platform. Our users love the new interface, and engagement rates have significantly increased',
    clientSrc: zapierLogo,
    clientName: 'Sarah Thompson',
    clientOccupation: 'Head of Product at E-Hub',
  },
  {
    rating: 4,
    description:
      'Cybersecurity was a major concern for us, but Syntax delivered a secure and scalable solution that gave us peace of mind. Their team is truly professional and reliable.',
    clientSrc: zoomLogo,
    clientName: 'David Collins',
    clientOccupation: 'CTO of MedTech Innovations',
  },
];
