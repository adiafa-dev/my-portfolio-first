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
    <section className='relative flex items-stretch border-b-neutral-800'>
      {/* Left section */}
      <div
        className='custom-container relative flex h-screen'
        style={{ height: 'clamp(35.81rem, 100.00vw, 54.50rem)' }}
      >
        <div className='z-50 max-w-2/3 pt-55'>
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
      <div className='absolute top-0 right-0 w-[42%] overflow-hidden'>
        {/* Card kecil rating */}
        <div className='bg-base-background absolute bottom-0 left-1/2 z-70 w-79 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-neutral-800 p-5 backdrop-blur-md'>
          <p className='text-neutral-25 pb-2 text-4xl font-bold'>5.0</p>
          <div className='mb-1 flex gap-1.5 pb-2 text-xl'>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className='h-5 w-5 fill-[#F3993F] stroke-[#F3993F]'
              />
            ))}
          </div>
          <p className='text-neutral-25 text-xl font-semibold'>
            Many Client Trust with me
          </p>
        </div>

        {/* Gradient Primary-200 Color */}
        <motion.div
          className='from-primary-200/40 pointer-events-none absolute top-0 right-0 z-50 h-full w-[50%] bg-linear-to-b to-transparent'
          animate={{
            y: ['-100%', '0%'], // dari atas turun ke bawah
          }}
          transition={{
            duration: 5, // waktu animasi
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
        className='bottom-0 left-0'
        classNameBoxChild='size-10 md:size-14'
      />
    </section>
  );
};

export default Hero;
