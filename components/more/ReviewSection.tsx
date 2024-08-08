import Image from 'next/image';

const ReviewSection = () => {
  const customerReviews = [
    {
      name: 'Emily Johnson',
      review:
        'Absolutely love the quality and design of this product! It exceeded my expectations and was delivered promptly.',
      item: 'Cinderella Style High Heels',
    },
    {
      name: 'David Smith',
      review:
        'Great value for money. The customer service was also very responsive and helpful. Highly recommend!',
      item: 'Smart Leather Wallet',
    },
    {
      name: 'Sophia Brown',
      review:
        'The product is exactly as described, and the shopping experience was smooth. I will definitely be coming back!',
      item: 'Vintage Sunglasses',
    },
  ];

  return (
    <section className=''>
      <div className='container mx-auto px-6 py-10'>
        <div className='mt-6 md:flex md:items-center md:justify-between'>
          <div>
            <h1 className='text-2xl font-semibold capitalize lg:text-3xl'>
              What our clients are saying
            </h1>

            <div className='mx-auto mt-6 flex'>
              <span className='inline-block h-1 w-40 rounded-full bg-blue-500'></span>
              <span className='mx-1 inline-block h-1 w-3 rounded-full bg-blue-500'></span>
              <span className='inline-block h-1 w-1 rounded-full bg-blue-500'></span>
            </div>
          </div>

          <div className='mt-8 flex justify-between md:mt-0'>
            <button
              title='left arrow'
              className='mx-3 rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 rtl:-scale-x-100'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>

            <button
              title='right arrow'
              className='rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 rtl:-scale-x-100'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>

        <section className='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:mt-12 xl:grid-cols-3'>
          {customerReviews.map((d: any) => {
            return (
              <div
                key={d.name}
                className='rounded-lg border border-transparent bg-blue-500 p-8 dark:bg-blue-600'
              >
                <p className='leading-loose text-white'>“{d.review}”.</p>

                <div className='-mx-2 mt-8 flex items-center'>
                  <img
                    className='mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-blue-200'
                    src='https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                    alt=''
                  />

                  <div className='mx-2'>
                    <h1 className='font-semibold text-white'>{d.name}</h1>
                    <span className='text-sm text-blue-200'>{d.item}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};
export default ReviewSection;
