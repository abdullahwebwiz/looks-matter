import Image from 'next/image';

export default () => {
  const stats = [
    {
      data: '35K+',
      title: 'Customers',
    },
    {
      data: '10K+',
      title: 'Downloads',
    },
    {
      data: '4000+',
      title: 'Montlhy Sales',
    },
    {
      data: '95%',
      title: 'Customer Satisfaction Rate',
    },
  ];

  return (
    <section className='py-14'>
      <div className='mx-auto max-w-screen-xl items-start justify-between gap-x-12 px-4 md:px-8 lg:flex'>
        <div className='sm:hidden lg:block lg:max-w-xl'>
          <Image
            src='https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            className='rounded-lg'
            alt='sample'
            width={500}
            height={500}
          />
        </div>
        <div className='mt-6 gap-12 sm:mt-0 md:flex lg:block'>
          <div className='max-w-2xl'>
            <h3 className='text-3xl font-semibold sm:text-4xl'>
              See some numbers..
            </h3>
            <p className='mt-3 max-w-xl'>
              Trust the Results: Proven by Our Numbers
            </p>
          </div>
          <div className='mt-6 flex-none md:mt-0 lg:mt-6'>
            <ul className='inline-grid grid-cols-2 gap-x-14 gap-y-8'>
              {stats.map((item, idx) => (
                <li key={idx} className=''>
                  <h4 className='text-4xl font-semibold text-indigo-600'>
                    {item.data}
                  </h4>
                  <p className='mt-3 font-medium'>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
