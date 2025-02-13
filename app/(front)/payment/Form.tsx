'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useCartService from '@/lib/hooks/useCartStore';
import dynamic from 'next/dynamic';

// Dynamically imports the CheckoutSteps component for code-splitting
const CheckoutSteps = dynamic(() => import('@/components/checkout/CheckoutSteps'));

const Form = () => {
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const { savePaymentMethod, paymentMethod, shippingAddress } =
    useCartService();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Saves the selected payment method and navigates to the place-order page
    savePaymentMethod(selectedPaymentMethod);
    router.push('/place-order');
  };

  useEffect(() => {
    // Redirects to shipping page if shipping address is not provided
    if (!shippingAddress) {
      return router.push('/shipping');
    }
    setSelectedPaymentMethod(paymentMethod || 'PayPal');
  }, [paymentMethod, router, shippingAddress]);


  return (
    <div>
      <CheckoutSteps current={2} />
      <div className='card mx-auto my-4 max-w-sm bg-base-300'>
        <div className='card-body'>
          <h1 className='card-title'>Payment Method</h1>
          <form onSubmit={handleSubmit}>
            {['PayPal', 'Stripe', 'CashOnDelivery'].map((payment) => (
              <div key={payment}>
                <label className='label cursor-pointer'>
                  <span className='label-text'>{payment}</span>
                  <input
                    type='radio'
                    name='paymentMethod'
                    className='radio'
                    value={payment}
                    checked={selectedPaymentMethod === payment}
                    onChange={() => setSelectedPaymentMethod(payment)}
                  />
                </label>
              </div>
            ))}
            <div className='my-2'>
              <button type='submit' className='btn btn-primary w-full'>
                Next
              </button>
            </div>
            <div className='my-2'>
              <button
                type='button'
                className='btn my-2 w-full'
                onClick={() => router.back()}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
