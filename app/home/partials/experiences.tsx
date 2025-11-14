'use client';

import Section from '@/components/layout/section';
import DecorationBlinkingBox from '@/components/ui/decorationBoxBlinking';
import VerticalLine from '@/components/ui/verticalLine';
import { experienceData, rowStartMap } from '@/constant/experiences-data';
import Image from 'next/image';
import React from 'react';

const Experiences = () => {
  let classNameNumberPos: string = '';
  return (
    <section className='relative w-full' id='experiences'>
      <Section className='py-10 md:py-20'>
        <Section.Title
          mainTitle='EXPERIENCE'
          subTitle='PROFESIONAL WORK'
          columns={1}
          align='center'
        />
        <Section.Content className='relative'>
          <VerticalLine
            heightClass='h-3/4'
            className='top-1/4 -translate-y-1/6'
            position='left-[20px] md:left-1/2'
          />

          <div className='grid grid-cols-[40px_1fr] gap-4 md:grid-cols-[1fr_48px_1fr] md:gap-x-16 md:gap-y-0'>
            {/* <!-- step experiences --> */}
            {experienceData.map((exp, index) => {
              classNameNumberPos = `self-center border border-neutral-800 bg-base-background rounded-full w-auto aspect-square flex justify-center items-center text-base text-primary-200 font-bold col-start-1 ${rowStartMap[index + 1]} md:col-start-2`;
              return (
                <React.Fragment key={index}>
                  {(index + 1) % 2 === 1 ? (
                    <>
                      <div className='hidden md:block'></div>
                      <div className={classNameNumberPos}>{index + 1}</div>
                      <div className='col-start-2 rounded-2xl border border-neutral-800 p-4 text-white md:col-start-3 md:rounded-3xl md:p-6'>
                        <div className='flex flex-col justify-between md:flex-row'>
                          <div>
                            <p className='mb-1 text-sm font-medium text-neutral-400 md:text-lg'>
                              {exp.year}
                            </p>
                            <h3 className='text-neutral-25 text-base font-bold md:text-2xl'>
                              {exp.title}
                            </h3>
                          </div>
                          <div className=''>
                            <Image
                              src={exp.srcLogo}
                              alt={exp.altSrcLogo}
                              width={114}
                              height={48}
                              className='scale-75 md:scale-100'
                            />
                          </div>
                        </div>
                        <div>
                          <p className='leading-3xl md:leading-4xl mt-4 text-sm text-neutral-400 md:text-base'>
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='col-start-2 rounded-2xl border border-neutral-800 p-4 md:col-start-1 md:rounded-3xl md:p-6'>
                        <div className='flex flex-col justify-between md:flex-row'>
                          <div>
                            <p className='mb-1 text-sm font-medium text-neutral-400 md:text-lg'>
                              {exp.year}
                            </p>
                            <h3 className='text-neutral-25 text-base font-bold md:text-2xl'>
                              {exp.title}
                            </h3>
                          </div>
                          <div className=''>
                            <Image
                              src={exp.srcLogo}
                              alt={exp.altSrcLogo}
                              width={114}
                              height={48}
                              className='scale-75 md:scale-100'
                            />
                          </div>
                        </div>
                        <div>
                          <p className='leading-3xl md:leading-4xl mt-4 text-sm text-neutral-400 md:text-base'>
                            {exp.description}
                          </p>
                        </div>
                      </div>
                      <div className={classNameNumberPos}>{index + 1}</div>
                      <div className='hidden md:block'></div>
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </Section.Content>
      </Section>

      <DecorationBlinkingBox
        orientation='vertical'
        rotation='ccw'
        colorClass='bg-primary-300'
        className='right-0 bottom-1/7 z-10 translate-x-1/6 md:bottom-0'
        classNameBoxChild='size-10 md:size-14'
      />
    </section>
  );
};

export default Experiences;
