'use client';
import Image from 'next/image';
import Section from '@/components/layout/section';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

import {
  testimonialsData,
  type Testimonial,
} from '@/constant/testimonials-data';

import { useMediaQuery } from '@/hooks/use-media-query';
import { Star } from 'lucide-react';

type TestimonialCarouselProps = {
  data: Testimonial[];
};

type TestimonialCardProps = {
  data: Testimonial;
};

// fungsi untuk menggabungkan 2 testimonial untuk desktop
const groupByTwo = (arr: Testimonial[]): Testimonial[][] => {
  const grouped: Testimonial[][] = [];
  for (let i = 0; i < arr.length; i += 2) {
    grouped.push(arr.slice(i, i + 2));
  }
  return grouped;
};

const TestimonialSection = () => {
  return (
    <Section className='py-10 md:py-20' id='testimonial'>
      <Section.Title
        mainTitle='TESTIMONIALS'
        subTitle='PEOPLE SAYS ABOUT ME'
        align='center'
        className='px-8.5 md:px-0'
      />

      <Section.Content>
        <TestimonialCarousel data={testimonialsData} />
      </Section.Content>
    </Section>
  );
};

export default TestimonialSection;

const TestimonialCarousel = ({ data }: TestimonialCarouselProps) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const grouped = groupByTwo(data); // Testimonial[][]

  return (
    <Carousel
      opts={{
        align: 'start',
        slidesToScroll: 1,
      }}
      className='w-full'
    >
      <CarouselContent>
        {isDesktop
          ? grouped.map((group, i) => (
              <CarouselItem key={i} className='basis-1/2'>
                <div className='grid flex-1 grid-cols-1 items-stretch gap-4'>
                  <TestimonialCard data={group[0]} />
                  {group[1] && <TestimonialCard data={group[1]} />}
                </div>
              </CarouselItem>
            ))
          : data.map((item, i) => (
              <CarouselItem key={i} className='basis-full'>
                <TestimonialCard data={item} />
              </CarouselItem>
            ))}
      </CarouselContent>

      <div className='relative flex justify-center gap-4 p-6 md:p-10'>
        <CarouselPrevious className='bg-base-background text-primary-200 hover:bg-base-background hover:text-primary-100 translate-0 border border-neutral-800' />
        <CarouselNext className='bg-base-background text-primary-200 hover:bg-base-background hover:text-primary-100 translate-0 border border-neutral-800' />
      </div>
    </Carousel>
  );
};

const TestimonialCard = ({ data }: TestimonialCardProps) => {
  return (
    <div className='bg-base-background flex h-full min-h-auto w-full flex-1 flex-col rounded-2xl border border-neutral-800 p-4 transition-all duration-300 hover:shadow-lg md:min-h-48 md:rounded-3xl md:p-6'>
      {/* Header */}
      <div className='flex items-start justify-between'>
        <div>
          <h3 className='text-neutral-25 text-lg font-bold md:mb-2 md:text-xl'>
            {data.clientName}
          </h3>
          <p className='text-md mb-3 font-normal text-neutral-400 md:text-lg md:font-medium'>
            {data.clientOccupation}
          </p>
          <div>
            {/* Stars (optional) */}
            {typeof data.rating === 'number' && (
              <div className='mb-3 flex items-center gap-1'>
                {Array.from({ length: data.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className='size-5 fill-[#F3993F] stroke-[#F3993F] md:size-8'
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <Image
            src={data.clientSrc}
            alt={data.clientName}
            width={114}
            height={48}
            className='scale-50 md:scale-100'
          />
        </div>
      </div>

      {/* Review */}
      <p className='text-md text-neutral-25 font-normal md:text-lg md:font-medium'>
        {data.description}
      </p>
    </div>
  );
};
