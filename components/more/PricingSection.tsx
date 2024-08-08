'use client';
import useLayoutService from '@/lib/hooks/useLayout';
import { CheckIcon } from '@heroicons/react/20/solid';

const includedFeatures = [
  'Priority Support & Care',
  'Elite Special Discounts',
  'Swift Response',
  'Buy now pay later',
];

export default function Pricing() {
  const { theme, toggleTheme } = useLayoutService();
  return (
    <div className='sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-3xl font-bold tracking-tight  sm:text-4xl'>
            Elite Pass 💎
          </h2>
          <p className='mt-6 text-lg leading-8 '>
            Join our Elite Customer Membership to enjoy exclusive discounts and
            receive priority support service. Experience the benefits of being a
            top customer with our special perks and savings!{' '}
          </p>
        </div>
        <div
          className={
            'mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none ' +
            (theme == 'dark' ? 'bg-gray-100' : 'bg-white')
          }
        >
          <div className='p-8 sm:p-10 lg:flex-auto'>
            <h3 className='text-2xl font-bold tracking-tight '>
              Lifetime membership
            </h3>
            <p className='mt-6 text-base leading-7 '>
              Become an Elite Customer and enjoy exclusive discounts and
              priority support. Elevate your shopping experience with our
              premium membership perks!
            </p>
            <div className='mt-10 flex items-center gap-x-4'>
              <h4 className='flex-none text-sm font-semibold leading-6 text-indigo-600'>
                What’s included
              </h4>
              <div className='h-px flex-auto bg-gray-100' />
            </div>
            <ul
              role='list'
              className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6  sm:grid-cols-2 sm:gap-6'
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className='flex gap-x-3'>
                  <CheckIcon
                    aria-hidden='true'
                    className='h-6 w-5 flex-none text-indigo-600'
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
            <div className='rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
              <div className='mx-auto max-w-xs px-8'>
                <p className='text-base font-semibold '>
                  Pay once, own it forever
                </p>
                <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                  <span className='text-5xl font-bold tracking-tight '>
                    $349
                  </span>
                  <span className='text-sm font-semibold leading-6 tracking-wide '>
                    USD
                  </span>
                </p>
                <a
                  href='#'
                  className='mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Get access
                </a>
                <p className='mt-6 text-xs leading-5 '>
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
