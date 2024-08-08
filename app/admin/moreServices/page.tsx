// Importing the AdminLayout component for consistent layout in the admin section
import AdminLayout from '@/components/admin/AdminLayout';

// Importing icons from the lucide-react library
import { Download, Send } from 'lucide-react';

// Importing Next.js components for image optimization and routing
import Image from 'next/image';
import Link from 'next/link';

// Exporting metadata for the page, including the title used in the browser tab and search engine results
export const metadata = {
  title: 'Admin Dashboard',
};

const DashbaordPage = () => {
  return (
    // Wrapping the page content in AdminLayout, setting 'contactSupport' as the active item in the layout's navigation
    <AdminLayout activeItem='contactSupport'>
      <div className='flex flex-col items-center justify-center'>
        
        {/* Displaying an image using Next.js's Image component for optimized loading and performance */}
        <Image
          src={'/moreServices.svg'}
          width={500}
          height={500}
          alt='more-services'
        />
        
        {/* Creating a link that opens WhatsApp with a pre-filled message to contact support */}
        <Link
          href={
            'https://api.whatsapp.com/send/?phone=923199443575&text&type=phone_number&app_absent=0'
          }
          target='_blank'
        >
          {/* Button to trigger the WhatsApp link, styled with utility classes and including an icon */}
          <button className='w-half btn btn-primary mx-2' type='button'>
            Contact Now <Send />
          </button>
        </Link>
      </div>
    </AdminLayout>
  );
};

// Exporting the component as the default export of the module
export default DashbaordPage;
