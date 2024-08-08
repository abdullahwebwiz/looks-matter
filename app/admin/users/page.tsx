import AdminLayout from '@/components/admin/AdminLayout';
import Users from './Users';

export const metadata = {
  // Sets the metadata for the page, including the title
  title: 'Admin Users',
};

const AdminUsersPage = () => {
  return (
    // Renders the Users component within the AdminLayout with the 'users' item active
    <AdminLayout activeItem='users'>
      <Users />
    </AdminLayout>
  );
};

export default AdminUsersPage;
