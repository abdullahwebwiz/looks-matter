import AdminLayout from '@/components/admin/AdminLayout';
import Form from './Form';

export function generateMetadata() {
  // Sets the metadata for the page, including the title
  return {
    title: `Edit Social Media`,
  };
}

export default function SocialPage() {
  return (
    // Renders the form for editing social media within the admin layout
    <AdminLayout activeItem='socialMedia'>
      <Form/>
    </AdminLayout>
  );
}
