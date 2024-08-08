'use client';
import { useState } from 'react';
const Cookies = () => {
  let [x, setX] = useState(true);
  if (x) {
    return (
      <section className='fixed bottom-16 left-12 mx-auto flex max-w-4xl items-center justify-between rounded-2xl border border-gray-200 bg-white p-4  md:gap-x-4'>
        <p className='text-sm text-gray-600'>
          By continuing to use this site you consent to the use of cookies in
          accordance with our cookie policy.
        </p>

        <button
          onClick={() => setX(false)}
          className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-700 transition-colors duration-300 hover:bg-gray-100 focus:outline-none'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='h-5 w-5'
          >
            <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
          </svg>
        </button>
      </section>
    );
  } else {
    return null;
  }
};
export default Cookies;
