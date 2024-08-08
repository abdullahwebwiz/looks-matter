import { Metadata } from 'next';
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically imports the MyOrders component to enable code-splitting
const MyOrders = dynamic(() => import('./MyOrders'));

export const metadata: Metadata = {
  // Sets the metadata for the page, including the title
  title: 'Order History',
};

const MyOrderPage = () => {
  return (
    <div>
      <h1 className='py-2 text-2xl'>Order History</h1>
      <MyOrders />
    </div>
  );
};

export default MyOrderPage;

