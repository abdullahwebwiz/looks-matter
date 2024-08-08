// Importing the layout component for the admin section of the application
import AdminLayout from '@/components/admin/AdminLayout';

// Importing the Products component, which likely displays a list or management interface for products
import Products from './Products';

const AdminProductsPge = () => {
  return (
    // Wrapping the Products component inside the AdminLayout to provide consistent layout and styling
    // `activeItem='products'` likely highlights or indicates the current section in a navigation menu
    <AdminLayout activeItem='products'>
      <Products />
    </AdminLayout>
  );
};

// Exporting the component as the default export of the module
export default AdminProductsPge;
