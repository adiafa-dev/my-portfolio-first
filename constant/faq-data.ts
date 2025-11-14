import { StaticImageData } from 'next/image';
import starbust from '../public/assets/icons/starbust.png';

type Faq = {
  faqIcon: StaticImageData;
  faqTitle: string;
  faqDesc: string;
};

export const faqsData: Faq[] = [
  {
    faqIcon: starbust,
    faqTitle: 'What technologies do you specialize in?',
    faqDesc:
      'I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.',
  },
  {
    faqIcon: starbust,
    faqTitle: 'Do you work on both design and development?',
    faqDesc:
      'I focus primarily on frontend development, translating UI/UX designs into responsive and interactive web experiences. However, I collaborate closely with designers to ensure a seamless user experience.',
  },
  {
    faqIcon: starbust,
    faqTitle: 'Can you optimize an existing website for better performance?',
    faqDesc:
      'Yes! I can analyze, debug, and optimize websites to improve speed, accessibility, and SEO, using best practices like lazy loading, code splitting, and performance monitoring.',
  },
  {
    faqIcon: starbust,
    faqTitle: 'Do you take freelance or contract-based projects?',
    faqDesc:
      'Yes! I am open to freelance, contract, and full-time opportunities, depending on the project scope and requirements. Feel free to reach out!',
  },
  {
    faqIcon: starbust,
    faqTitle: 'How do you approach a new project?',
    faqDesc:
      'I start by understanding the project goals and requirements, followed by wireframing or UI implementation, then development, testing, and deployment—ensuring a smooth and efficient workflow.',
  },
  {
    faqIcon: starbust,
    faqTitle: 'How can we collaborate?',
    faqDesc:
      'You can contact me via email, LinkedIn, or GitHub. I usually begin with a consultation to discuss your needs, then propose a plan to bring your vision to life. Let’s create something awesome together!',
  },
];
