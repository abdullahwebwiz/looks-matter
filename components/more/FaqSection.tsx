'use client';
import { useRef, useState } from 'react';
const FaqsCard = (props: any) => {
  const answerElRef: any = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState('0px');
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef?.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className='mt-5 space-y-3 overflow-hidden border-b'
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className='flex cursor-pointer items-center justify-between pb-5 text-lg font-medium '>
        {faqsList.q}
        {state ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='ml-2 h-5 w-5 text-gray-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M20 12H4'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='ml-2 h-5 w-5 text-gray-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 4v16m8-8H4'
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className='duration-300'
        style={state ? { height: answerH } : { height: '0px' }}
      >
        <div>
          <p className='text-gray-500'>{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const faqsList = [
    {
      q: 'What payment methods do you accept?',
      a: "We accept a variety of payment methods including credit/debit cards, PayPal, and other secure payment gateways. Check our payment options page for more details.",
    },
    {
      q: 'How can I track my order?',
      a: "Once your order has shipped, you will receive a tracking number via email. You can use this number to track your shipment on our courier's website.",
    },
    {
      q: 'What is your return policy?',
      a: "We offer a 30-day return policy on most items. For more information on returns and exchanges, please visit our returns policy page or contact our customer service.",
    },
    {
      q: 'Do you offer international shipping?',
      a: "Yes, we ship internationally to most countries. Shipping costs and delivery times will vary based on your location. Check our shipping information page for more details.",
    },
    {
      q: 'How do I apply a discount code?',
      a: "To apply a discount code, enter it at checkout in the 'Promo Code' field. The discount will be applied to your order total before payment.",
    },
];


  return (
    <section className='mx-auto mt-12 max-w-screen-xl px-4 leading-relaxed md:px-8'>
      <div className='space-y-3 text-center'>
        <h1 className='text-3xl font-semibold '>Frequently Asked Questions</h1>
        <p className='mx-auto max-w-lg text-lg text-gray-600'>
          Here are some of the most common questions we receive from our
          customers
        </p>
      </div>
      <div className='mx-auto mt-14 max-w-2xl'>
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};
