import blogService from '@/lib/services/blogService';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports with suspense support for blog-related components
const AllBlogs = dynamic(() => import('@/components/AllBlogs'));
const BlogsSkeleton = dynamic(() =>
  import('@/components/AllBlogs').then((mod) => mod.BlogsSkeleton),
);
const NewsLetter = dynamic(() => import('@/components/more/NewLetter'));

// Function to generate metadata for the page
export const generateMetadata = async () => {
  return {
    title: 'BLogs',
  };
};

const BlogDetailsPage = async ({ params }: { params: { slug: string } }) => {
  // Fetching all blogs from the blog service
  const blogs: any = await blogService.getAllBlogs();
  console.log(blogs);

  return (
    <>
      <Suspense fallback={<BlogsSkeleton qty={8} name='All Blog Posts' />}>
        <AllBlogs />
      </Suspense>
      <Suspense fallback={<BlogsSkeleton qty={8} name='All Blog Posts' />}>
        <NewsLetter />
      </Suspense>
    </>
  );
};

export default BlogDetailsPage;
