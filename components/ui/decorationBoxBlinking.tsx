'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useMemo } from 'react';

export type DecorationBlinkingBoxProps = {
  // arah grid: "horizontal" = 3x2, "vertical" = 2x3
  orientation?: 'horizontal' | 'vertical';
  // rotasi clockwise / counterclockwise
  rotation?: 'ccw' | 'cw';
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
  rotation = 'cw',
  colorClass = 'bg-primary-300',
  delayStep = 0.5,
  duration = 5,
  className,
  classNameBoxChild = 'size-9 md:size-11',
}: DecorationBlinkingBoxProps) => {
  const gridClass = 'grid-cols-3 grid-rows-2';

  const rotatePoint =
    rotation === 'cw'
      ? 'rotate-90 origin-left-bottom'
      : '-rotate-90 origin-right-bottom';
  const rotateClass = orientation === 'vertical' ? `${rotatePoint}` : '';

  const boxes = Array.from({ length: 6 });

  const randomDelays = useMemo(
    () => Array.from({ length: 6 }, () => Math.random() * delayStep),
    [delayStep]
  );

  const randomDurations = useMemo(
    () => Array.from({ length: 6 }, () => Math.random() * duration + 0.5),
    [duration]
  );

  return (
    <div className={clsx('absolute grid', gridClass, rotateClass, className)}>
      {boxes.map((_, i) => (
        <motion.div
          key={i}
          className={clsx(
            i % 2 === 0 ? 'bg-base-background' : colorClass,
            'aspect-square',
            classNameBoxChild
          )}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: randomDurations[i],
            delay: randomDelays[i],
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default DecorationBlinkingBox;
