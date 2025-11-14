import { Monitor } from 'lucide-react';
import React from 'react';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const servicesData: Service[] = [
  {
    icon: <Monitor color='#91ff02' />,
    title: 'Custom Website Development',
    description:
      'Building responsive, fast, and scalable websites tailored to your needs.',
  },
  {
    icon: <Monitor color='#91ff02' />,
    title: 'Web Performance Optimization',
    description:
      'Enhancing website speed, SEO, and performance for better experience.',
  },
  {
    icon: <Monitor color='#91ff02' />,
    title: 'Website Maintenance & Debugging',
    description:
      'Fixing bugs, improving UI, and ensuring smooth performance over time.',
  },
];
