import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { section } from 'framer-motion/client';

const Hero = () => {
  return (
    <section className=''>
      <div className='custom-container relative flex h-screen'>
        {/* Left section */}
        <div className='max-w-2/3 pt-55'>
          <div className='flex items-center gap-4'>
            <hr className='text-neutral-25 w-6 md:w-28.5' />
            <p className='text-neutral-25 text-md font-medium md:text-xl'>
              Hi, I am Adi or Afa, Frontend Developer
            </p>
          </div>

          <h1 className='text-neutral-25 leading-6xl text-4xl font-extrabold md:text-[80px] md:leading-[80px]'>
            BUILDING FAST & INTERACTIVE WEB EXPERIENCES.
          </h1>
          <p className='text-neutral-400'>
            Bridging creativity and functionality to deliver stunning,
            user-friendly web applications
          </p>

          <Button>
            <Link href='#contact'>HIRE ME</Link>
          </Button>
        </div>

        {/* Right Section */}
        <div className='absolute right-0 max-w-[54%]'>
          <Image
            src='/assets/images/profil-foto.png'
            alt='Adi Or Afa Photo'
            width={658}
            height={872}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
