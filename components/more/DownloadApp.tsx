export default () => {
  return (
    <section className='relative overflow-hidden rounded-3xl px-4 py-28 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] md:px-8'>
      <div className='absolute -right-14 -top-12 h-full w-full'></div>
      <div className='relative mx-auto max-w-xl text-center'>
        <div className='py-4'>
          <h3 className={'text-3xl font-semibold text-gray-200 md:text-4xl'}>
            Download Our Apps!
          </h3>
          <p className='mt-3 leading-relaxed  text-gray-200'>
            Download our app from the Play Store and the App Store.
          </p>
        </div>
        <div className='mt-5 items-center justify-center gap-3 sm:flex'>
          <a
            href='#'
            className='mt-2 block w-full rounded-md bg-white px-8 py-2.5 duration-150 hover:bg-gray-100 sm:w-auto'
          >
            Play Store
          </a>
          <a
            href='#'
            className='mt-2 block w-full rounded-md bg-gray-700 px-8 py-2.5 text-gray-200 duration-150 hover:bg-gray-800 sm:w-auto'
          >
            App Store
          </a>
        </div>
      </div>
    </section>
  );
};
