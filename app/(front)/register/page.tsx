import { Metadata } from 'next';

import dynamic from 'next/dynamic';

// Dynamically imports the Form component to enable code-splitting
const Form = dynamic(() => import('./Form'));

export const metadata: Metadata = {
  // Sets the metadata for the page, including the title
  title: 'Register',
};

const RegisterPage = async () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default RegisterPage;
