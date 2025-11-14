import Section from '@/components/layout/section';
import { servicesData } from '@/constant/services-data';
import React from 'react';

type ServiceCardsProps = {
  children: React.ReactNode;
};

type ServiceCardProps = {
  index: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Services = () => {
  return (
    <Section className='py-20 md:py-30' id='services'>
      <Section.Title
        mainTitle='SERVICE'
        subTitle='MY SERVICE EXPERTISE'
        tagline='Creating modern, intuitive, and visually consistent web experiences that align with industry trends and user expectations.'
        columns={2}
      />

      <Section.Content className=''>
        <ServiceCards>
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ServiceCards>
      </Section.Content>
    </Section>
  );
};

export default Services;

const ServiceCards = ({ children }: ServiceCardsProps) => {
  return <div className='flex flex-wrap gap-6 md:gap-10'>{children}</div>;
};

const ServiceCard = ({ index, icon, title, description }: ServiceCardProps) => {
  const numString = String(index + 1).padStart(2, '0');
  return (
    <div className='bg-base-background flex-1 basis-80'>
      {/* service card */}
      <p className='text-md text-neutral-400 md:text-xl'>{numString}</p>
      <hr className='via-primary-300/80 to-primary-200 my-3 h-px w-full animate-pulse border-0 bg-linear-to-r from-neutral-800 md:my-6' />
      <div className=''>{icon}</div>
      <h3 className='text-neutral-25 md:text-display-md mt-3 text-xl font-semibold md:mt-6'>
        {title}
      </h3>
      <p className='text-md mt-3 text-neutral-400 md:mt-6 md:text-xl'>
        {description}
      </p>
    </div>
  );
};
