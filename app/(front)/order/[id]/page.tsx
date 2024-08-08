import dynamic from 'next/dynamic';

// Dynamically imports the OrderDetails component to enable code-splitting
const OrderDetails = dynamic(() => import('./OrderDetails'));

export const generateMetadata = ({ params }: { params: { id: string } }) => {
  return {
    // Sets the page title dynamically based on the order ID
    title: `Order ${params.id}`,
  };
};

const OrderDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <OrderDetails
      // Passes the PayPal client ID and order ID to the OrderDetails component
      paypalClientId={process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}
      orderId={params.id}
    />
  );
};

export default OrderDetailsPage;
