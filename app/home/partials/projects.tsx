import Section from '@/components/layout/section';
import React from 'react';
import Image from 'next/image';
import { projectsData } from '@/constant/projects-data';

type ProjectCardsProps = {
  children: React.ReactNode;
};

type ProjectCardProps = {
  projImage: string;
  projTitle: string;
  projDesc: string;
};

const Projects = () => {
  return (
    <Section className='py-10 md:py-20' id='projects'>
      <Section.Title
        mainTitle='PORTFOLIO'
        subTitle='SELECTED WORK'
        align='center'
      />

      <Section.Content>
        <ProjectCards>
          {projectsData.map((data, index) => (
            <ProjectCard
              key={index}
              projImage={data.projImage}
              projTitle={data.projTitle}
              projDesc={data.projDescription}
            />
          ))}
        </ProjectCards>
      </Section.Content>
    </Section>
  );
};

export default Projects;

const ProjectCards = ({ children }: ProjectCardsProps) => {
  return <div className='flex flex-wrap gap-6 md:gap-10'>{children}</div>;
};

const ProjectCard = ({ projImage, projTitle, projDesc }: ProjectCardProps) => {
  return (
    <div className='bg-base-background group mt-4 flex-1 basis-80 md:mt-0'>
      {/* project card */}
      <div className='overflow-hidden rounded-2xl md:rounded-3xl'>
        <Image
          src={projImage}
          alt={projTitle}
          width={381}
          height={284}
          className='w-full transition-transform duration-500 ease-out group-hover:scale-125 group-hover:rotate-6'
        />
      </div>
      <h3 className='text-neutral-25 mt-3 text-xl font-semibold md:mt-6 md:text-2xl'>
        {projTitle}
      </h3>
      <p className='md:text-md mt-3 text-sm text-neutral-400 md:mt-6'>
        {projDesc}
      </p>
    </div>
  );
};
