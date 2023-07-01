'use client';
import { DashboardContext, IDevice } from '@/app/Context/DashboardContext';
import { useEffect, useState, useContext } from 'react';

export default function Table() {
  const dashboardContext = useContext(DashboardContext);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (dashboardContext) {
      const totalPowerConsumption = dashboardContext.devices.reduce((total: number, device: IDevice) => total + device.powerConsumption, 0);
      setTotal(totalPowerConsumption);
    }
  }, [dashboardContext]);

  return (
    <table className='w-full mt-5 mb-10 bg-white text-right text-sm font-light'>
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" className="px-6 py-4 text-left">Devices</th>
          <th scope="col" className="px-6 py-4">MAC Address</th>
          <th scope="col" className="px-6 py-4">IP</th>
          <th scope="col" className="px-6 py-4">Created Date</th>
          <th scope="col" className="px-6 py-4 text-right">Power consumption (KW/H)</th>
        </tr>
      </thead>
      <tbody>
        {dashboardContext && dashboardContext.devices.map((device: IDevice) => (
          <tr 
            key={device.id}
            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-6 py-4 text-left">{device.name}</td>
            <td className="whitespace-nowrap px-6 py-4">{device.macAddress}</td>
            <td className="whitespace-nowrap px-6 py-4">{device.ip}</td>
            <td className="whitespace-nowrap px-6 py-4">{new Date(device.createdDate).toLocaleDateString()}</td>
            <td className="whitespace-nowrap px-6 py-4">{device.powerConsumption}</td>
          </tr>
        ))}
        <tr className="border-b font-medium dark:border-neutral-500">
            <td className="whitespace-nowrap px-6 py-4 text-left" colSpan={4}>Total</td>
            <td className="whitespace-nowrap px-6 py-4">{total}</td>
        </tr>
      </tbody>
    </table>
  );
}

