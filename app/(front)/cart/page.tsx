import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Dynamic import of CartDetails component to enable code splitting
const CartDetails = dynamic(() => import('./CartDetails'));

// Metadata for the page, setting the title for SEO purposes
export const metadata: Metadata = {
  title: 'Shopping Cart',
};

const CartPage = () => {
  return (
    <div>
      <CartDetails />
    </div>
  );
};

export default CartPage;
