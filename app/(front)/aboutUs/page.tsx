import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { BlogsSkeleton } from '@/components/AllBlogs';
const CTA = dynamic(() => import('@/components/more/CTA'));
const FaqSection = dynamic(() => import('@/components/more/FaqSection'));
const NewsLetter = dynamic(() => import('@/components/more/NewLetter'));
const StatSection = dynamic(() => import('@/components/more/StatSection'));
const TeamSection = dynamic(() => import('@/components/more/Team'));

const About2 = () => {
  return (
    <div className='px-4 py-9 2xl:container md:px-6 md:py-12 lg:px-20 lg:py-16 2xl:mx-auto'>
      <div className='w-full lg:w-10/12'>
        <p className='cursor-pointer text-sm font-normal leading-3 text-indigo-700 hover:text-indigo-800'>
          About
        </p>
        <h2 className='mt-2 w-full text-3xl font-bold leading-9  lg:w-10/12 lg:text-4xl lg:leading-10 xl:w-8/12'>
          Providing Genuine & 100% Authentic products sense 2020.
        </h2>
        <p className='mt-6 text-base font-normal leading-6 '>
          At Looks Matter, we pride ourselves on offering a diverse range of
          products that cater to various tastes and occasions. Our collections
          are carefully selected to ensure they reflect the latest trends while
          also offering timeless pieces that never go out of style. Whether
          you’re searching for the perfect little black dress, a tailored blazer
          for work, or statement accessories that elevate your outfit, you’ll
          find it here.
        </p>
      </div>

      <div className='mt-12 sm:mt-10 lg:mt-14'>
        <img
          className='hidden w-full lg:block'
          src='https://i.ibb.co/GvwJnvn/Group-736.png'
          alt='Group of people Chilling'
        />
        <img
          className='hidden w-full sm:block lg:hidden'
          src='https://i.ibb.co/5sZTmHq/Rectangle-116.png'
          alt='Group of people Chilling'
        />
        <img
          className='block w-full sm:hidden'
          src='https://i.ibb.co/zSxXJGQ/Rectangle-122.png'
          alt='Group of people Chilling'
        />
      </div>

      <div className='mt-16 flex flex-col justify-between gap-12 sm:mt-12 lg:mt-16 lg:flex-row lg:gap-8'>
        <div className='w-full lg:w-6/12 xl:w-5/12'>
          <h2 className='text-3xl font-bold leading-7 lg:text-4xl lg:leading-9'>
            Our Mission
          </h2>
          <p className='mt-4 text-base font-normal leading-6 '>
            Our mission at Looks Matter is simple: to empower individuals
            through fashion. We understand that what you wear can significantly
            impact your confidence and how you present yourself to the world.
            That’s why we carefully curate our collections to offer something
            for everyone, whether you’re looking for chic everyday wear,
            show-stopping evening attire, or unique accessories to complete your
            look. We aim to provide our customers with high-quality, stylish
            options that are both affordable and on-trend.
          </p>
        </div>
        <div className='w-full lg:w-6/12 xl:w-5/12'>
          <h2 className='text-3xl font-bold leading-7 lg:text-4xl lg:leading-9'>
            What We Offer
          </h2>
          <p className='mt-4 text-base font-normal leading-6 '>
            At Looks Matter, we pride ourselves on offering a diverse range of
            products that cater to various tastes and occasions. Our collections
            are carefully selected to ensure they reflect the latest trends
            while also offering timeless pieces that never go out of style.
            Whether you’re searching for the perfect little black dress, a
            tailored blazer for work, or statement accessories that elevate your
            outfit, you’ll find it here.
          </p>
        </div>
        <div className='w-full items-center lg:flex lg:w-1/2 '>
          <img
            className='hidden w-full lg:block'
            src='https://i.ibb.co/2kxWpNm/Group-740.png'
            alt='people discussing on board'
          />
          <img
            className='hidden h-3/4 w-full sm:block lg:hidden'
            src='https://i.ibb.co/ZLgK3NQ/Group-788.png'
            alt='people discussing on board'
          />
          <img
            className='block w-full sm:hidden'
            src='https://i.ibb.co/9g2R7Xr/Group-803.png'
            alt='people discussing on board'
          />
        </div>
      </div>
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <TeamSection />
      </Suspense>

      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <FaqSection />
      </Suspense>

      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <StatSection />
      </Suspense>

      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <CTA />
      </Suspense>

      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <NewsLetter />
      </Suspense>
    </div>
  );
};

export default About2;
