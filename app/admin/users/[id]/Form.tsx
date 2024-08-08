'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ValidationRule, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { User } from '@/lib/models/UserModel';
import { formatId } from '@/lib/utils';

export default function UserEditForm({ userId }: { userId: string }) {
  // Fetches the user data by ID using SWR for editing
  const { data: user, error } = useSWR(`/api/admin/users/${userId}`);
  const router = useRouter();
  const { trigger: updateUser, isMutating: isUpdating } = useSWRMutation(
    `/api/admin/users/${userId}`,
    async (url, { arg }) => {
      const res = await fetch(`${url}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(arg),
      });
      const data = await res.json();
      if (!res.ok) return toast.error(data.message);

      // Shows a success message and redirects to the users page after updating
      toast.success('User updated successfully');
      router.push('/admin/users');
    },
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<User>();

  useEffect(() => {
    if (!user) return;
    setValue('name', user.name);
    setValue('email', user.email);
    setValue('isAdmin', user.isAdmin);
  }, [user, setValue]);

  const formSubmit = async (formData: any) => {
    await updateUser(formData);
  };

  if (error) return error.message;
  if (!user) return 'Loading...';

  const FormInput = ({
    id,
    name,
    required,
    pattern,
  }: {
    id: keyof User;
    name: string;
    required?: boolean;
    pattern?: ValidationRule<RegExp>;
  }) => (
    <div className='my-3 md:flex'>
      <label className='label md:w-1/5' htmlFor={id}>
        {name}
      </label>
      <div className='md:w-4/5'>
        <input
          type='text'
          id={id}
          {...register(id, {
            required: required && `${name} is required`,
            pattern,
          })}
          className='input input-bordered w-full max-w-md'
        />
        {errors[id]?.message && (
          <div className='text-error'>{errors[id]?.message}</div>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <h1 className='py-4 text-2xl'>Edit User {formatId(userId)}</h1>
      <div>
        <form onSubmit={handleSubmit(formSubmit)}>
          <FormInput name='Name' id='name' required />
          <FormInput name='Email' id='email' required />

          <div className='my-3 md:flex'>
            <label className='label md:w-1/5' htmlFor='isAdmin'>
              Admin
            </label>
            <div className='md:w-4/5'>
              <input
                id='isAdmin'
                type='checkbox'
                className='toggle'
                {...register('isAdmin')}
              />
            </div>
          </div>

          <button
            type='submit'
            disabled={isUpdating}
            className='btn btn-primary'
          >
            {isUpdating && <span className='loading loading-spinner'></span>}
            Update
          </button>
          <Link className='btn ml-4' href='/admin/users'>
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}
