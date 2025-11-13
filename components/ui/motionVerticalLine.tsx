'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

type MotionVerticalLineProps = {
  // posisi horizontal (ex: "1/4", "50%")
  position?: string;
  // warna tailwind class
  colorClass?: string;
  // tinggi garis (default h-full)
  heightClass?: string;
  // lebar garis
  widthClass?: string;
  // delay animasi
  delay?: number;
  // durasi animasi
  duration?: number;
  // efek glow aktif/tidak
  glow?: boolean;
  // zIndex
  zIndex?: string;
  // className tambahan
  className?: string;
};

const MotionVerticalLine = ({
  position = '1/2',
  colorClass = 'bg-neutral-800',
  heightClass = 'h-full',
  widthClass = 'w-px',
  delay = 0,
  duration = 1,
  glow = false,
  zIndex = 'z-10',
  className,
}: MotionVerticalLineProps) => {
  // handle posisi fraction/tailwind vs pixel/percentage
  const positionStyle = position.includes('%')
    ? { left: position }
    : { left: `calc(${position} * 100%)` };

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{
        opacity: [0.3, 1, 0.3], // naik-turun opacity
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity, // loop terus
        ease: 'easeInOut',
      }}
      style={positionStyle}
      className={clsx(
        'absolute top-0',
        colorClass,
        heightClass,
        widthClass,
        zIndex,
        glow &&
          'shadow-[0_0_25px_rgba(180,255,100,0.4)] transition-shadow duration-500',
        className
      )}
    />
  );
};

export default MotionVerticalLine;
