'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot='progress'
      className={cn(
        'relative h-10 w-full overflow-hidden rounded-xl md:h-16 md:rounded-3xl',
        className
      )}
      {...props}
    >
      {/* garis tengah */}
      <hr className='absolute top-1/2 left-0 w-full -translate-y-1/2 border border-neutral-800' />

      <ProgressPrimitive.Indicator
        data-slot='progress-indicator'
        className='bg-primary-300 h-full w-full flex-1 rounded-xl transition-all md:rounded-3xl'
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      >
        <div className='pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(45deg,white_0px,white_1px,transparent_2px,transparent_10px)] opacity-10' />
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  );
}

export { Progress };
