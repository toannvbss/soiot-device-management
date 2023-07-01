'use client';
import { useContext } from 'react';
import { LogContext, ILog } from '@/app/Context/LogContext';

export default function LogTable() {
  const logContext = useContext(LogContext);

  return (
    <table className='w-full mt-5 mb-10 bg-white text-right text-sm font-light'>
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" className="px-6 py-4 text-left">Device Id #</th>
          <th scope="col" className="px-6 py-4">Name</th>
          <th scope="col" className="px-6 py-4">Action</th>
          <th scope="col" className="px-6 py-4">IP</th>
          <th scope="col" className="px-6 py-4">Date</th>
        </tr>
      </thead>
      <tbody>
        {logContext && logContext.logs.map((log: ILog) => (
          <tr 
            key={log.id}
            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-6 py-4 text-left">{log.id}</td>
            <td className="whitespace-nowrap px-6 py-4">{log.name}</td>
            <td className="whitespace-nowrap px-6 py-4">{log.action}</td>
            <td className="whitespace-nowrap px-6 py-4">{log.ip}</td>
            <td className="whitespace-nowrap px-6 py-4">{new Date(log.date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

