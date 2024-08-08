import { Metadata } from 'next';
import React from 'react';

import dynamic from 'next/dynamic';

// Dynamically imports the Form and DefaultDetails components for code-splitting
const Form = dynamic(() => import('./Form'));
const DefaultDetails = dynamic(() => import('./DefaultDetails'));

export const metadata: Metadata = {
  // Sets the metadata for the page, including the title
  title: 'Profile',
};

const ProfilePage = async () => {
  return (
    <div className='flex flex-row flex-wrap'>
      <Form />
      <DefaultDetails />
    </div>
  );
};

export default ProfilePage;
