import Image from 'next/image';

export default function FeaturedProduct() {
  return (
    <div className='container mx-auto p-6'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold leading-10 md:text-4xl lg:text-5xl'>
          Our Featued Product 🏆
        </h1>
      </div>
      <div className='flex items-center overflow-x-auto whitespace-nowrap py-6'>
        <a href='#' className=''>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
          </svg>
        </a>

        <span className='mx-5 rtl:-scale-x-100'></span>

        <a href='#' className='-px-2 flex items-center  hover:underline '>
          <span className='mx-2'>Categories</span>
        </a>

        <span className='mx-5  rtl:-scale-x-100'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fill-rule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clip-rule='evenodd'
            />
          </svg>
        </span>

        <a href='#' className='-px-2 flex items-center  hover:underline '>
          <span className='mx-2'>Women Fashion</span>
        </a>

        <span className='mx-5 rtl:-scale-x-100'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fill-rule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clip-rule='evenodd'
            />
          </svg>
        </span>

        <a
          href='#'
          className='-px-2 flex items-center text-blue-600 hover:underline dark:text-blue-400'
        >
          <span className='mx-2'>cinderella style heels</span>
        </a>
      </div>

      <div className='flex flex-col lg:flex-row'>
        <div className='mb-6 flex-1 lg:mb-0'>
          <Image
            src='/images/categories/i1.webp'
            width={100}
            height={100}
            alt='Basic Tee'
            className='w-full rounded-lg shadow-md'
          />
        </div>

        <div className='flex-1 lg:pl-12'>
          <h1 className='mb-2 text-2xl font-bold'>cinderella style heels</h1>
          <div className='mb-2 text-lg font-semibold '>$35</div>

          <div className='mb-4 flex items-center'>
            <span className='text-yellow-500'>★★★★☆</span>
            <a href='#' className='ml-2 text-sm text-blue-600'>
              (512 reviews)
            </a>
          </div>

          <div className='mb-4'>
            <label className='text-sm font-semibold '>Color</label>
            <div className='mt-2 flex space-x-2'>
              <button className='h-8 w-8 rounded-full border border-gray-400 bg-black'></button>
              <button className='h-8 w-8 rounded-full border border-gray-400 bg-gray-300'></button>
            </div>
          </div>

          <div className='mb-4'>
            <label className='0 text-sm font-semibold'>Size</label>
            <div className='mt-2 flex space-x-2'>
              <button className='rounded-md border border-gray-400 px-4 py-2 '>
                XS
              </button>
              <button className='rounded-md border border-gray-400 px-4 py-2 '>
                S
              </button>
              <button className='rounded-md border border-gray-400 bg-blue-500 px-4 py-2  text-white'>
                M
              </button>
              <button className='rounded-md border border-gray-400 px-4 py-2 '>
                L
              </button>
              <button className='rounded-md border border-gray-400 px-4 py-2 '>
                XL
              </button>
            </div>
          </div>

          <button className='mb-4 w-full rounded-md bg-blue-600 py-3 text-white transition hover:bg-blue-700'>
            Add to cart
          </button>

          <p className='mb-6 text-sm '>
            Step into a fairytale with our "Cinderella Style High Heels." These
            stunning shoes feature a classic, elegant design with sparkling
            details that add a touch of magic to any outfit. Perfect for special
            occasions or when you simply want to feel like royalty, these high
            heels offer both glamour and comfort. Slip into these heels and let
            your inner princess shine.
          </p>

          <div>
            <h2 className='mb-2 font-semibold '>Fabric & Care</h2>
            <ul className='list-disc pl-5 text-sm '>
              <li>Only the best materials</li>
              <li>Ethically and locally made</li>
              <li>Pre-washed and pre-shrunk</li>
              <li>Machine wash cold with similar colors</li>
            </ul>
          </div>

          <div className='mt-6 flex space-x-4 text-sm'>
            <div className='flex items-center space-x-2'>
              <svg
                className='h-6 w-6 '
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M3 3v18h18V3H3zm18 18H3v-6h18v6z'
                ></path>
              </svg>
              <span>International delivery</span>
            </div>
            <div className='flex items-center space-x-2'>
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 2l9 21H3L12 2z'
                ></path>
              </svg>
              <span>Loyalty rewards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
