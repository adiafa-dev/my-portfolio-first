import clsx from 'clsx';
import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

type SectionTitleProps = {
  mainTitle?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  tagline?: string | React.ReactNode;
  align?: 'left' | 'center';
  columns?: 1 | 2;
  className?: string;
};

type SectionContentProps = {
  children: React.ReactNode;
  className?: string;
};

// Root Component
const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={clsx('custom-container', className)} id={id}>
      {children}
    </section>
  );
};

// Section Title Component
const SectionTitle = ({
  mainTitle,
  subTitle,
  tagline,
  align = 'left',
  columns = 1,
  className,
}: SectionTitleProps) => {
  const isTwoCol = columns === 2;

  return (
    <div
      className={clsx(
        isTwoCol && 'mb-6 md:mb-16',
        !isTwoCol && align === 'center' && 'text-center',
        className
      )}
    >
      {/* Mode 1 Column */}
      {!isTwoCol && (
        <>
          {mainTitle && (
            <h4 className='text-md text-primary-200 mb-2 font-medium uppercase md:text-lg'>
              {mainTitle}
            </h4>
          )}

          {subTitle && (
            <h2 className='text-neutral-25 mb-4 text-3xl leading-11.5 font-extrabold uppercase md:mb-16 md:text-5xl md:leading-15'>
              {subTitle}
            </h2>
          )}

          {tagline && (
            <p className='text-md mb-6 font-medium text-neutral-400 md:text-xl'>
              {tagline}
            </p>
          )}
        </>
      )}

      {/* Mode 2 Column */}
      {isTwoCol && (
        <div className='grid grid-cols-1 items-center md:grid-cols-2 md:gap-47'>
          {/* LEFT SIDE: main + sub */}
          <div>
            {mainTitle && (
              <h4 className='text-md text-primary-200 mb-2 font-medium uppercase md:text-lg'>
                {mainTitle}
              </h4>
            )}

            {subTitle && (
              <h2 className='text-neutral-25 mb-4 text-3xl leading-11.5 font-extrabold uppercase md:mb-0 md:text-5xl md:leading-15'>
                {subTitle}
              </h2>
            )}
          </div>

          {/* RIGHT SIDE: tagline */}
          <div className='md:text-right'>
            {tagline && (
              <p className='text-md mb-6 font-medium text-neutral-400 md:mb-0 md:text-xl'>
                {tagline}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Section Content Component
const SectionContent = ({ children, className }: SectionContentProps) => {
  return <div className={clsx(className)}>{children}</div>;
};

Section.Title = SectionTitle;
Section.Content = SectionContent;

export default Section;
