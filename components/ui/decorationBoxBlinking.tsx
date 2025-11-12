'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

export type DecorationBlinkingBoxProps = {
  // arah grid: "horizontal" = 3x2, "vertical" = 2x3
  orientation?: 'horizontal' | 'vertical';
  // warna kotak (tailwind class)
  colorClass?: string;
  // jeda antar kotak (detik)
  delayStep?: number;
  // durasi tiap animasi
  duration?: number;
  // class tambahan untuk parent/container nya
  className?: string;
  // class tambahan untuk child/kotak nya (bisa dipakai juga untuk size/responsive control)
  classNameBoxChild?: string;
};

const DecorationBlinkingBox = ({
  orientation = 'horizontal',
  colorClass = 'bg-primary-300',
  delayStep = 0.5,
  duration = 5,
  className,
  classNameBoxChild = 'size-9 md:size-11',
}: DecorationBlinkingBoxProps) => {
  const gridClass =
    orientation === 'horizontal'
      ? 'grid-cols-3 grid-rows-2'
      : 'grid-cols-2 grid-rows-3';

  const boxes = Array.from({ length: 6 });

  return (
    <div className={clsx('absolute grid', gridClass, className)}>
      {boxes.map((_, i) => (
        <motion.div
          key={i}
          className={clsx(colorClass, 'aspect-square', classNameBoxChild)}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration,
            delay: i * delayStep,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default DecorationBlinkingBox;
