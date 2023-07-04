'use client';

import { DashboardContext, IDevice } from '@/app/Context/DashboardContext';
import { useContext, useState } from 'react';

export default function DeviceForm() {
  const [name, setName] = useState<string>('');
  const [ip, setIp] = useState<string>('');
  const dashboardContext = useContext(DashboardContext);

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    fetch('/api/devices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, ip }),
    }).then(response => response.json())
      .then(res => {
        if (dashboardContext && dashboardContext.addDevice) {
          dashboardContext.addDevice(res.newDevice as IDevice);
        }
      })
      .catch((error: Error) => {
        console.error('Error:', error);
      });

      setName('');
      setIp('');
  };

  return (
    <form className='w-full p-5 bg-white' onSubmit={handleSubmit}>
      <p className="block h-4 text-xs mb-3 text-red-500"></p>
      <div className='mb-5 text-xs'>
          <input 
          id="username"
          required={true}
          minLength={1}
          maxLength={100}
          placeholder="Name"
          value={name}
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
          className="w-full px-3 py-3 bg-orange-150 rounded-sm text-base text-gray-150"
          />
      </div >
      <div className='mb-5 text-xs'>
          <input 
          id="password"
          required={true}
          minLength={1}
          maxLength={20}
          placeholder="Ip"
          value={ip}
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => setIp(event.target.value)}
          className="w-full px-3 py-3 bg-orange-150 rounded-sm text-base text-gray-150"
          />
      </div>
      <div className='flex items-center justify-center mt-8'>
          <button className='px-5 py-2 mr-3 rounded bg-orange-350 hover:bg-orange-450 text-base font-bold text-white drop-shadow-md'>Add Device</button>
      </div>
  </form>
  );
}
