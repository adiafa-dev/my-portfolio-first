'use client';
import Section from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { workingWithAnother, workingWithMe } from '@/constant/whyme-data';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type WhyMeProps = {
  children: React.ReactNode;
  title?: string;
  avatar?: string;
};

type WhyMeDetails = {
  icon?: string;
  description?: string;
};

const MotionImage = motion.create(Image);

const WhyChooseMe = () => {
  return (
    <Section id='whyMe' className='py-10 md:py-20'>
      <Section.Title
        mainTitle='WORKING'
        subTitle='WHY CHOOSE ME?'
        columns={1}
        align='center'
      />

      <Section.Content className='flex flex-1 flex-col gap-12 md:flex-row md:gap-20'>
        {/* Left Section */}
        <WhyMeCard
          title='WORKING WITH ME'
          avatar='/assets/images/profil-foto.png'
        >
          {workingWithMe.map((data, i) => (
            <div
              key={i}
              className='flex items-center gap-3 border border-b-neutral-800 py-6 last:border-0 md:py-8'
            >
              <MotionImage
                src={data.src}
                alt='Starbust Icon'
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <p className='text-md text-neutral-25 font-bold md:text-xl'>
                {data.description}
              </p>
            </div>
          ))}
        </WhyMeCard>

        {/* Right Section */}
        <WhyMeCard title='ANOTHER TALENT'>
          {workingWithAnother.map((data, i) => (
            <div
              key={i}
              className='flex items-center gap-3 border border-b-neutral-800 py-6 last:border-0 md:py-8'
            >
              <Image
                src={data.src}
                alt='Starbust Icon'
                className='opacity-40'
              />
              <p className='text-md text-neutral-25 font-normal md:text-xl'>
                {data.description}
              </p>
            </div>
          ))}
        </WhyMeCard>
      </Section.Content>

      <div className='flex justify-center'>
        <Button className='w-full px-22 md:w-fit'>
          <Link href='#contact'>HIRE ME</Link>
        </Button>
      </div>
    </Section>
  );
};

export default WhyChooseMe;

const WhyMeCard = ({
  children,
  title = 'Another Talent',
  avatar = '/assets/icons/blank_avatar.png',
}: WhyMeProps) => {
  return (
    <div className='flex w-full flex-col items-center justify-center md:w-1/2'>
      <h3 className='text-neutral-25 md:text-display-md mb-6 text-center text-xl font-semibold md:mb-8'>
        {title}
      </h3>
      <div className='flex w-full justify-center'>
        <Image
          src={avatar}
          alt={title}
          className='size-15 -rotate-[1.45deg] rounded-full object-cover md:size-20'
          width={80}
          height={80}
        />
      </div>
      <div className='w-full'>{children}</div>
    </div>
  );
};
