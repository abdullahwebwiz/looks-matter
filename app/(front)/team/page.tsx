import { BlogsSkeleton } from '@/components/AllBlogs';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

// Dynamic imports with suspense support
const TeamSection = dynamic(() => import('@/components/more/Team'));
const NewsLetter = dynamic(() => import('@/components/more/NewLetter'));

// Fallback component
const fallbackComponent = <BlogsSkeleton qty={4} name='Top Rated' />;

const Page = () => {
  return (
    <div>
      <Suspense fallback={fallbackComponent}>
        <TeamSection />
      </Suspense>
      <Suspense fallback={fallbackComponent}>
        <NewsLetter />
      </Suspense>
    </div>
  );
};

export default Page;
