'use client';
import useLayoutService from '@/lib/hooks/useLayout';
import Image from 'next/image';
import React from 'react';
export default function TopBrands() {
  const { theme, toggleTheme } = useLayoutService();
  return (
    <div className='2xl:container md:px-10 2xl:mx-auto 2xl:px-20'>
      <div className='px-4 py-8 md:py-12'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-2xl font-bold leading-10 md:text-4xl lg:text-5xl'>
            Search By Brands
          </h1>
          <p className='mt-4 w-10/12 text-center text-base leading-normal xl:w-1/2'>
            Buy genuine products from top brands at reasonable prices. Shop with
            us for quality you can trust.
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
    </div>
  );
}
