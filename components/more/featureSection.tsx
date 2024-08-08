'use client';

import useLayoutService from '@/lib/hooks/useLayout';

const FeatureSection = () => {
  const { theme, toggleTheme } = useLayoutService();
  const keyPoints = [
    {
      title: 'Top-Notch Support',
      description:
        'Receive exceptional customer service with our dedicated support team, ready to assist you with any inquiries or issues.',
    },
    {
      title: 'Original Products',
      description:
        'Shop confidently with our guarantee of genuine, high-quality products sourced directly from trusted brands.',
    },
    {
      title: 'No-Questions-Asked Return',
      description:
        'Enjoy hassle-free returns with our straightforward policy—return any product without any questions or complications.',
    },
  ];

  return (
    <section
      className={
        'rounded-3xl' +
        (theme == 'light' || theme == 'system' ? 'bg-white' : 'bg-black')
      }
    >
      <div className='container mx-auto px-6 py-10'>
        <h1
          className={
            'text-center text-2xl font-semibold capitalize lg:text-3xl ' +
            (theme == 'light' || theme == 'system'
              ? 'text-black'
              : 'text-white')
          }
        >
          We stand by our <br />{' '}
          <span className='text-blue-500'>Promises 🛡️.</span>
        </h1>

        <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16'>
          {keyPoints.map((d: any) => {
            return (
              <div
                key={d.title}
                className={
                  'flex flex-col items-center space-y-3 rounded-xl p-6 text-center ' +
                  (theme == 'light' || theme == 'system'
                    ? ' bg-gray-200'
                    : ' bg-gray-600')
                }
              >
                <span className='inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                    />
                  </svg>
                </span>

                <h1 className='font-semiboldcapitalize text-xl dark:text-white'>
                  {d.title}
                </h1>

                <p className=''>{d.description}</p>

                <a
                  href='#'
                  className='-mx-1 flex transform items-center text-sm capitalize text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500'
                >
                  <span className='mx-1'>read more</span>
                  <svg
                    className='mx-1 h-4 w-4 rtl:-scale-x-100'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
