import Section from '@/components/layout/section';
import { faqsData } from '@/constant/faq-data';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type FaqCardsProps = {
  children: React.ReactNode;
};

type FaqCardProps = {
  faqIcon: StaticImageData;
  faqTitle: string;
  faqDesc: string;
};

const Faq = () => {
  return (
    <Section className='py-10 md:py-20' id='faq'>
      <Section.Title
        mainTitle='FAQ'
        subTitle='FREQUENTLY ASKED QUESTIONS'
        align='center'
        className='px-8.5 md:px-0'
      />

      <Section.Content>
        <FaqCards>
          {faqsData.map((data, index) => (
            <FaqCard
              key={index}
              faqIcon={data.faqIcon}
              faqTitle={data.faqTitle}
              faqDesc={data.faqDesc}
            />
          ))}
        </FaqCards>
      </Section.Content>
    </Section>
  );
};

export default Faq;

const FaqCards = ({ children }: FaqCardsProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:[&>*:nth-child(even)]:pl-10 md:[&>*:nth-child(n+3)]:border-t md:[&>*:nth-child(n+3)]:border-neutral-800 md:[&>*:nth-child(n+3)]:pt-10 md:[&>*:nth-child(odd)]:border-r md:[&>*:nth-child(odd)]:border-neutral-800 md:[&>*:nth-child(odd)]:pr-10'>
      {children}
    </div>
  );
};

const FaqCard = ({ faqIcon, faqTitle, faqDesc }: FaqCardProps) => {
  return (
    <div className='mb-4 border border-b-neutral-800 pb-4 last:border-0 md:mb-0 md:min-h-50 md:border-0 md:pb-10'>
      <div className='flex items-start gap-3'>
        <div className='size-6 md:size-8'>
          <Image src={faqIcon} alt={faqTitle} className='w-full' />
        </div>

        <h3 className='text-neutral-25 text-md font-bold md:text-2xl'>
          {faqTitle}
        </h3>
      </div>

      <p className='md:text-md mt-2 text-sm text-neutral-400 md:mt-6'>
        {faqDesc}
      </p>
    </div>
  );
};
