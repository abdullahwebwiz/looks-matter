'use client';
import Link from 'next/link';
import useSWR from 'swr';
import { formatId } from '@/lib/utils';
import { Download } from 'lucide-react';
import { downloadCSV } from '@/lib/csvDownload';
import Swal from 'sweetalert2';

export default function DirectMsg() {
  const { data: products, error } = useSWR(`/api/directmsg`);

  if (error) return 'An error has occurred.';
  if (!products) return 'Loading...';

  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>EMAIL</td>
              <td>PHONE</td>
              <td>MSG</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product: any) => (
              <tr key={product._id}>
                <td>{formatId(product._id!)}</td>
                <td>{product.name}</td>
                <td>${product.email}</td>
                <td>{product.phone}</td>
                <td
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    Swal.fire({
                      icon: 'info',
                      title: 'Message from ' + product.name,
                      text: product.msg,
                    });
                  }}
                >
                  {'View Message'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className='w-half btn btn-primary mx-2'
          type='button'
          onClick={() => {
            const currentDate = new Date();
            const options: any = {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            };
            const formattedDate = currentDate.toLocaleDateString(
              'en-US',
              options,
            );
            downloadCSV(products, 'messages_' + formattedDate + '.csv');
          }}
        >
          <Download />
          Download CSV
        </button>
      </div>
    </div>
  );
}
