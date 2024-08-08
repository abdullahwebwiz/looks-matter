import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Dynamically imports the Form component
const Form = dynamic(() => import('./Form'));

export const metadata: Metadata = {
  // Sets the metadata for the page, including the title
  title: 'Shipping',
};

const ShippingPage = async () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default ShippingPage;
