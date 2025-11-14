import Section from '@/components/layout/section';
import { Progress } from '@/components/ui/progress';
import { skillsIConData, skillsBarData } from '@/constant/skills-data';
import Image from 'next/image';

const Skills = () => {
  return (
    <Section
      className='flex flex-col items-center py-10 md:flex-row md:py-20'
      id='skill'
    >
      <div className='w-full md:w-1/2'>
        <Section.Title
          mainTitle='SKILLS'
          subTitle='SKILLS THAT BRING IDEAS TO LIFE'
          columns={1}
        />

        <Section.Content className=''>
          <SkillIcon />
        </Section.Content>
      </div>

      <div className='mt-10 w-full md:mt-0 md:w-1/2'>
        <SkillBar />
      </div>
    </Section>
  );
};

export default Skills;

const SkillIcon = () => {
  return (
    <div className='grid w-fit max-w-2/3 grid-cols-4 grid-rows-2 gap-6'>
      {skillsIConData.map((data) => (
        <div
          key={data.alt}
          className='flex-center aspect-square size-12 rounded-full border border-neutral-800 md:size-16'
        >
          <Image
            src={data.src}
            alt={data.alt}
            className='h-7 w-7 object-contain'
          />
        </div>
      ))}
    </div>
  );
};

const SkillBar = () => {
  return (
    <>
      {skillsBarData.map((data) => (
        <div
          key={data.skill}
          className='mb-3.5 grid w-full grid-cols-[8.5fr_1.5fr] items-center gap-0 last:mb-0 md:mb-6 md:grid-cols-[9fr_1fr] md:gap-6'
        >
          <div className='relative w-full'>
            <Progress value={data.value} className='w-full' />
            <p className='absolute top-1/2 left-5 -translate-y-1/2 text-sm font-semibold text-white md:text-xl'>
              {data.skill}
            </p>
          </div>

          <div>
            <p className='text-right text-sm font-semibold text-white md:text-left md:text-xl'>
              {data.value} %
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
