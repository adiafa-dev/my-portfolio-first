'use client';

import { navigationData } from '@/constant/navigation-data';
import Link from 'next/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import React from 'react';
import { X } from 'lucide-react';
import { motion, useTransform, useScroll } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header
      className='bg-base-background fixed top-0 z-99 h-20 w-full border border-b-neutral-800 py-4'
      style={{ background, backdropFilter: backdropBlur }}
    >
      <div className='custom-container flex-between h-12 items-center'>
        {/* Image Logo */}
        <Link href='/'>
          <div className='flex-center items-center'>
            <hr className='mr-4 w-6 text-white md:w-10' />
            &nbsp;
            <h3 className='text-primary-200 text-md font-bold md:text-xl'>
              Adi or Afa.
            </h3>
          </div>
        </Link>

        {/* Navigation  */}
        <nav className='hidden md:block'>
          <ul className='flex-start gap-10'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  className='hover:text-primary-200 text-md inline-block transform font-normal text-white transition-all duration-200 hover:scale-105'
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Nav Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <motion.button
              className='cursor-pointer border-0 text-white ring-0 outline-none focus:outline-none focus-visible:ring-0 md:hidden'
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                key={open ? 'x' : 'menu'}
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {open ? (
                  <X className='h-6 w-6 cursor-pointer text-white transition-all duration-300' />
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-menu-icon lucide-menu border-none text-white'
                  >
                    <path d='M4 5h18' />
                    <path d='M4 12h18' />
                    <path d='M10 19h12' />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </SheetTrigger>

          <SheetContent>
            <nav className='border border-t-neutral-800 p-4'>
              <ul className='mt-px flex flex-col gap-4'>
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <Link
                      href={data.href}
                      onClick={() => setOpen(false)}
                      className='hover:text-primary-200 text-md inline-block transform font-normal text-white transition-all duration-200 hover:scale-105'
                    >
                      {data.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
