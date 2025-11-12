import React from 'react';
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

const VerticalLine: React.FC<VerticalLineProps> = ({
  position = '1/2',
  colorClass = 'bg-neutral-800',
  heightClass = 'h-full',
  widthClass = 'w-px',
  zIndex = 'z-10',
  className,
}) => {
  // support posisi persentase & tailwind fraction
  const positionClass = position.includes('%')
    ? { left: position }
    : { left: `calc(${position} * 100%)` };

  return (
    <div
      className={clsx(
        'absolute top-0',
        colorClass,
        heightClass,
        widthClass,
        zIndex,
        className
      )}
      style={positionClass}
    />
  );
};

export default VerticalLine;
