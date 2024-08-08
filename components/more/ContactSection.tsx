'use client';
import { useEffect, useState } from 'react';
import useLayoutService from '@/lib/hooks/useLayout';
import GetInTouch from './GetInTouch';
import useSWRMutation from 'swr/mutation';
import toast from 'react-hot-toast';
import { DirectMsg } from '@/lib/models/DirectMsgModel';
import { useForm } from 'react-hook-form';

export default () => {
  const { theme, toggleTheme } = useLayoutService();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const { trigger: updateMsg, isMutating: isUpdating } = useSWRMutation(
    `/api/directmsg`,
    async (url, { arg }) => {
      const res = await fetch(`${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(arg),
      });
      const data = await res.json();
      if (!res.ok) {
        return toast.error(data.message);
      }

      toast.success('Your Message was successfully sent to seller. ');
    },
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<DirectMsg>();

  const formSubmit = async (formData: any) => {
    await updateMsg(formData);
  };

  return (
    <main
      className={
        'relative rounded-[80px] py-28 ' +
        (theme === 'light' || theme === 'system'
          ? 'bg-gray-200'
          : 'bg-gray-900')
      }
    >
      <div className='relative z-10 mx-auto max-w-screen-xl text-gray-600 sm:px-4 md:px-8'>
        <div className='max-w-lg space-y-3 px-4 sm:mx-auto sm:px-0 sm:text-center'>
          <h3 className='text-4xl font-bold text-cyan-400'>Direct Message</h3>
          <p>Message us directly for quick assistance.</p>
        </div>
        <div className='mx-auto mt-12 bg-white p-8 px-4 sm:max-w-lg sm:rounded-xl sm:px-8'>
          <form onSubmit={handleSubmit(formSubmit)} className='space-y-5'>
            <div>
              <label className='font-medium'>Full name</label>
              <input
                type='text'
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setValue('name', e.target.value);
                }}
                required
                className='mt-2 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none transition duration-150 ease-in-out focus:border-gray-800 focus:ring-2 focus:ring-gray-800'
              />
            </div>
            <div>
              <label className='font-medium'>Email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setValue('email', e.target.value);
                }}
                required
                className='mt-2 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none transition duration-150 ease-in-out focus:border-gray-800 focus:ring-2 focus:ring-gray-800'
              />
            </div>
            <div>
              <label className='font-medium'>Phone number</label>
              <div className='relative mt-2'>
                <div className='absolute inset-y-0 left-3 my-auto flex h-6 items-center border-r border-gray-300 pr-2'>
                  <select
                    className='h-full rounded-lg bg-transparent text-sm outline-none transition duration-150 ease-in-out focus:border-gray-800 focus:ring-2 focus:ring-gray-800'
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      setValue('phone', e.target.value);
                    }}
                  >
                    <option value=''>Select country</option>
                    <option value='US'>US</option>
                    <option value='ES'>ES</option>
                    <option value='MR'>MR</option>
                  </select>
                </div>
                <input
                  type='text'
                  placeholder='+1 (555) 000-000'
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    setValue('phone', e.target.value);
                  }}
                  required
                  className='w-full appearance-none rounded-lg border border-gray-300 bg-transparent py-2 pl-[4.5rem] pr-3 text-gray-500 shadow-sm outline-none transition duration-150 ease-in-out focus:border-gray-800 focus:ring-2 focus:ring-gray-800'
                />
              </div>
            </div>
            <div>
              <label className='font-medium'>Message</label>
              <textarea
                value={message}
                onChange={(e) => {
                  setValue('msg', e.target.value);
                  setMessage(e.target.value);
                }}
                required
                className='mt-2 h-36 w-full resize-none appearance-none rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none transition duration-150 ease-in-out focus:border-gray-800 focus:ring-2 focus:ring-gray-800'
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full rounded-lg bg-gray-800 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 active:bg-gray-900'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div
        className='absolute inset-0 mx-auto h-[800px] max-w-lg blur-[118px] sm:h-[400px] sm:max-w-3xl'
        style={{
          background:
            'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
        }}
      ></div>
      <GetInTouch />
    </main>
  );
};
