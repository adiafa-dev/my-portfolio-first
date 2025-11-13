import Section from '@/components/layout/section';
import DecorationBlinkingBox from '@/components/ui/decorationBoxBlinking';
import servicesData from '@/constant/services-data';
import Image from 'next/image';
import React from 'react';

const AboutMe = () => {
  return (
    <section className='relative w-full'>
      <Section className='relative z-90 py-10 md:px-32 md:py-30' id='about'>
        <Section.Title
          mainTitle='ABOUT ME'
          subTitle={
            <>
              Crafting Seamless
              <br />
              <span className='text-primary-200'>
                High-Performance Web
              </span>{' '}
              Experiences
            </>
          }
          tagline='I love turning designs into interactive, high-performance websites. With a keen eye for detail and a deep understanding of frontend technologies, I create smooth and visually appealing user experiences.'
          columns={1}
          align='center'
          className='relative z-30'
        />

        <Section.Content className='relative aspect-square md:static md:aspect-auto'>
          <Image
            src='/assets/images/about-pic-1.png'
            alt='about-pic-1'
            width={238}
            height={178}
            className='absolute -top-[5%] -left-[12%] z-10 scale-70 object-contain md:top-[5%] md:left-[12%] md:scale-100'
          />

          <Image
            src='/assets/images/about-pic-3.png'
            alt='about-pic-1'
            width={250}
            height={187}
            className='absolute top-[5%] -right-[12%] z-10 scale-60 object-contain md:top-[10%] md:right-[5%] md:scale-100'
          />

          <Image
            src='/assets/images/about-pic-2.png'
            alt='about-pic-1'
            width={117}
            height={88}
            className='absolute top-[55%] right-[30%] z-10 scale-110 object-contain md:top-[48%] md:right-[29%] md:scale-100'
          />
        </Section.Content>
      </Section>

      <DecorationBlinkingBox
        orientation='vertical'
        colorClass='bg-primary-300'
        className='bottom-1/7 left-0 z-10 -translate-x-1/6 md:bottom-0'
        classNameBoxChild='size-10 md:size-14'
      />
    </section>
  );
};

export default AboutMe;
