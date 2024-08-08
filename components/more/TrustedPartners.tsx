'use client';
import useLayoutService from '@/lib/hooks/useLayout';
import Image from 'next/image';
import React from 'react';
export default function TrustedPartners() {
  const { theme, toggleTheme } = useLayoutService();
  console.log(theme);
  return (
    <div className='my-10 2xl:container md:px-10 2xl:mx-auto 2xl:px-20'>
      <div className='px-4 py-8 md:py-12'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-2xl font-bold leading-10 md:text-4xl lg:text-5xl'>
            Our Partners
          </h1>
          <p className='mt-4 w-10/12 text-center text-base leading-normal xl:w-1/2'>
            Exciting News! We've partnered with some of the top brands in the
            industry to bring you an exclusive selection of high-quality
            products. Shop now to experience the best in style, innovation, and
            craftsmanship.
          </p>
        </div>
        <div className='mt-10 flex items-center justify-center'>
          <div className='m-3'>
            <Image
              src={'/brands/1.png'}
              width={150}
              height={150}
              alt='brand1'
            />
          </div>
          <div className='m-3'>
            {' '}
            <Image
              src={'/brands/2.png'}
              width={150}
              height={150}
              alt='brand1'
            />
          </div>
          <div className='m-3'>
            {' '}
            <Image
              src={'/brands/3.png'}
              width={150}
              height={150}
              alt='brand1'
            />
          </div>
          <div className='m-3'>
            {' '}
            <Image
              src={'/brands/4.png'}
              width={150}
              height={150}
              alt='brand1'
            />
          </div>
          <div className='m-3'>
            {' '}
            <Image
              src={'/brands/5.png'}
              width={150}
              height={150}
              alt='brand1'
            />
          </div>
        </div>
      </div>
      <div className='mt-16 w-full items-start justify-between lg:mt-32 lg:flex'>
        <p className='xl:3/5 text-base font-normal md:text-lg lg:text-xl lg:leading-9 xl:pr-8'>
          "With us, you can get original and top-quality products delivered
          anywhere in the country. Shop with confidence, knowing you're getting
          the best, no matter where you are."
        </p>
        <div className='l w-full justify-center pt-10 sm:flex lg:pt-0 xl:justify-end'>
          <img
            src='https://cdn.tuk.dev/assets/components/111220/lc-4/map.png'
            alt='country'
          />
        </div>
      </div>
    </div>
  );
}
