'use client';
import clsx from 'clsx';

type VerticalLineProps = {
  // posisi horizontal (misal: "1/4", "1/2", "75%")
  position?: string;
  // warna tailwind (default: bg-neutral-800)
  colorClass?: string;
  // tinggi: "full", "screen", atau custom tailwind height
  heightClass?: string;
  // lebar garis (default: w-px)
  widthClass?: string;
  // zIndex optional
  zIndex?: string;
  // animasi opsional (bisa dari framer motion nanti)
  className?: string;
};

const VerticalLine = ({
  position = 'left-1/2',
  colorClass = 'bg-neutral-800',
  heightClass = 'h-full',
  widthClass = 'w-px',
  zIndex = '-z-10',
  className,
}: VerticalLineProps) => {
  return (
    <div
      className={clsx(
        'absolute',
        colorClass,
        heightClass,
        widthClass,
        zIndex,
        position,
        className
      )}
    />
  );
};

export default VerticalLine;
