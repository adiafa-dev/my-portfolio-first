'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { clamp, motion, vw } from 'framer-motion';
import { Star } from 'lucide-react';
import MotionVerticalLine from '@/components/ui/motionVerticalLine';
import DecorationBlinkingBox from '@/components/ui/decorationBoxBlinking';

const Hero = () => {
  return (
    <section
      className='relative flex flex-col items-stretch border md:flex-row md:border-b-neutral-800'
      id='hero'
    >
      {/* Left section */}
      <div
        className='custom-container relative flex h-screen'
        style={{ height: 'clamp(35rem, 100.00vw, 54rem)' }}
      >
        <div className='z-50 max-w-full pt-30 md:max-w-2/3 md:pt-55'>
          <div className='mb-4 flex items-center gap-4'>
            <hr className='text-neutral-25 w-6 md:w-28.5' />
            <p className='text-neutral-25 text-md font-medium md:text-xl'>
              Hi, I am Adi or Afa, Frontend Developer
            </p>
          </div>

          <h1 className='text-neutral-25 leading-6xl mb-4 text-4xl font-extrabold md:text-[80px] md:leading-[80px]'>
            BUILDING FAST &{' '}
            <span className='text-primary-200'>INTERACTIVE</span> WEB
            EXPERIENCES.
          </h1>
          <p className='text-md mb-10 font-medium text-neutral-400 md:mb-15 md:text-xl'>
            Bridging creativity and functionality to deliver stunning,
            <br /> user-friendly web applications
          </p>

          <Button className='w-full md:w-fit'>
            <Link href='#contact'>HIRE ME</Link>
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className='relative top-0 right-0 w-full overflow-hidden px-4 md:absolute md:w-[42%] md:px-0'>
        {/* Card kecil rating */}
        <div className='bg-base-background absolute bottom-0 left-1/2 z-70 w-[90%] -translate-x-1/2 rounded-lg border border-neutral-800 p-4 backdrop-blur-md md:w-79 md:-translate-y-1/2 md:p-5'>
          <p className='text-neutral-25 pb-2 text-2xl font-bold md:text-4xl'>
            5.0
          </p>
          <div className='mb-1 flex gap-1.5 pb-2 text-xl'>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className='size-4 fill-[#F3993F] stroke-[#F3993F] md:size-5'
              />
            ))}
          </div>
          <p className='text-neutral-25 text-md font-semibold md:text-xl'>
            Many Client Trust with me
          </p>
        </div>

        {/* Gradient Primary-200 Color */}
        <motion.div
          className='from-primary-200/40 pointer-events-none absolute top-0 right-0 z-50 h-full w-[50%] bg-linear-to-b to-transparent'
          animate={{
            y: ['-100%', '0%'],
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
          }}
        />

        {/* Black Gradient for image */}
        <div className='pointer-events-none absolute inset-x-0 bottom-0 z-40 h-[60%] bg-linear-to-t from-black to-transparent' />

        {/* Hero Image */}
        <Image
          src='/assets/images/profil-foto.png'
          alt='Adi Or Afa Photo'
          width={658}
          height={872}
          className='relative right-[3%] h-full w-full origin-center -rotate-[1.45deg] opacity-40 mix-blend-luminosity'
        />
      </div>

      {/* vertical line */}
      {/* <VerticalLine position='1/4' />
      <VerticalLine position='1/2' /> */}

      {/* Motion vertical line */}
      <MotionVerticalLine
        position='1/4'
        colorClass='bg-neutral-800'
        duration={5}
      />
      <MotionVerticalLine
        position='1/2'
        colorClass='bg-neutral-800'
        duration={8}
      />

      {/* Decoration squares kiri bawah */}
      <DecorationBlinkingBox
        orientation='horizontal'
        colorClass='bg-primary-300'
        className='bottom-1/7 left-0 z-70 md:bottom-0'
        classNameBoxChild='size-10 md:size-14'
      />
    </section>
  );
};

export default Hero;
