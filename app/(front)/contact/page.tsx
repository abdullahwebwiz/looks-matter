import { BlogsSkeleton } from '@/components/AllBlogs';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

// Dynamic imports with suspense support
const ContactSection = dynamic(() => import('@/components/more/ContactSection'));
const NewsLetter = dynamic(() => import('@/components/more/NewLetter'));
const SpaceBlock = dynamic(() => import('@/components/more/SpaceBlock'));

// Fallback component
const fallbackComponent = <BlogsSkeleton qty={4} name='Top Rated' />;

const Page = () => {
  return (
    <>
      <Suspense fallback={fallbackComponent}>
        <SpaceBlock />
      </Suspense>
      <Suspense fallback={fallbackComponent}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={fallbackComponent}>
        <SpaceBlock />
      </Suspense>
      <Suspense fallback={fallbackComponent}>
        <NewsLetter />
      </Suspense>
      <Suspense fallback={fallbackComponent}>
        <SpaceBlock />
      </Suspense>
    </>
  );
};

export default Page;
