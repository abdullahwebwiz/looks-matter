import { Metadata } from 'next';
import { Suspense } from 'react';

import dynamic from 'next/dynamic';
const Cookies = dynamic(() => import('@/components/more/cookies'));
const TrustedPartners = dynamic(
  () => import('@/components/more/TrustedPartners'),
);
// Dynamically imported components with suspense support
const SpaceBlock = dynamic(() => import('@/components/more/SpaceBlock'));
const TopBrands = dynamic(() => import('@/components/more/topBrands'));
const FeaturedProduct = dynamic(
  () => import('@/components/more/featuredProduct'),
);
const CategorySection = dynamic(
  () => import('@/components/more/CategorySection'),
);
const ReviewSection = dynamic(() => import('@/components/more/ReviewSection'));
const FeatureSection = dynamic(
  () => import('@/components/more/featureSection'),
);
const StatSection = dynamic(() => import('@/components/more/StatSection'));
const CTA = dynamic(() => import('@/components/more/CTA'));
const DownloadApp = dynamic(() => import('@/components/more/DownloadApp'));
const Pricing = dynamic(() => import('@/components/more/PricingSection'));
const FaqSection = dynamic(() => import('@/components/more/FaqSection'));
const TeamSection = dynamic(() => import('@/components/more/Team'));
const NewsLetter = dynamic(() => import('@/components/more/NewLetter'));

const Carousel = dynamic(() => import('@/components/carousel/carousel'));
const CarouselSkeleton = dynamic(() =>
  import('@/components/carousel/carousel').then((mod) => mod.CarouselSkeleton),
);
const Categories = dynamic(() => import('@/components/categories/Categories'));
const Icons = dynamic(() => import('@/components/icons/Icons'));
const ProductItems = dynamic(
  () => import('@/components/products/ProductItems'),
);
const ProductItemsSkeleton = dynamic(() =>
  import('@/components/products/ProductItems').then(
    (mod) => mod.ProductItemsSkeleton,
  ),
);
const Slider = dynamic(() => import('@/components/slider/Slider'));
const AllBlogs = dynamic(() => import('@/components/AllBlogs'));
const BlogsSkeleton = dynamic(() =>
  import('@/components/AllBlogs').then((mod) => mod.BlogsSkeleton),
);

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Fullstack Next.js Store',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Fullstack Next.js Store - Server Components, MongoDB, Next Auth, Tailwind, Zustand',
};
// HomePage component with multiple dynamic imports and suspense fallbacks
const HomePage = () => {
  return (
    <div className='my-8 flex flex-col gap-4 md:gap-16'>
      <div>
        <Suspense fallback={<CarouselSkeleton />}>
          <Carousel />
        </Suspense>
      </div>
      <div className='flex flex-col gap-8 md:flex-row'>
        <div className='flex-1'>
          <p className='text-1xl text-nowrap font-semibold md:text-2xl'>
            {process.env.NEXT_PUBLIC_APP_NAME}{' '}
          </p>
        </div>
        <div className='flex flex-1 items-center'>
          <div>{process.env.NEXT_PUBLIC_APP_DESC}</div>
        </div>
      </div>
      <Categories />
      <Icons />
      <Suspense
        fallback={<ProductItemsSkeleton qty={8} name='Latest Products' />}
      >
        <ProductItems />
      </Suspense>
      <Suspense fallback={<ProductItemsSkeleton qty={4} name='Top Rated' />}>
        <Slider />
      </Suspense>
      <Suspense fallback={<BlogsSkeleton qty={8} name='All Blog Posts' />}>
        <AllBlogs />
      </Suspense>
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <TrustedPartners />
      </Suspense>
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <TopBrands />
      </Suspense>
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <FeaturedProduct />{' '}
      </Suspense>
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <CategorySection />
      </Suspense>
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <ReviewSection />
      </Suspense>
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <FeatureSection />
      </Suspense>
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <SpaceBlock />
      </Suspense>
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <CTA />
      </Suspense>
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <SpaceBlock />
      </Suspense>{' '}
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <DownloadApp />
      </Suspense>{' '}
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <SpaceBlock />
      </Suspense>{' '}
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <Pricing />
      </Suspense>{' '}
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <FaqSection />
      </Suspense>{' '}
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <TeamSection />
      </Suspense>{' '}
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <NewsLetter />
      </Suspense>
      <Suspense fallback={<BlogsSkeleton qty={4} name='Top Rated' />}>
        <StatSection />
      </Suspense>
      <Cookies />
    </div>
  );
};

export default HomePage;
