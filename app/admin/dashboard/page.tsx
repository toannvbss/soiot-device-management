'use client'

import DeviceTable from "./DeviceTable";
import DeviceForm from "./DeviceForm";
import PowerConsumptionChart from "./PowerConsumptionChart";
import { DashboardProvider } from "@/app/Context/DashboardContext";
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
      if (window.outerWidth <= 414) {
          setIsMobile(true);
      }
  }, []);
  
  const { data: session, status } = useSession({
    required: true,
  });
  
  if(status === "loading" && !session) {
    if (typeof window !== "undefined") {
      sessionStorage.setItem('redirectAfterLogin', usePathname());
    }
    return <></>
  }

  if (isMobile) {
    return (
      <DashboardProvider>
        <div className='mt-8 p-2'>
          <div className="w-full">  
            <div className="m-5 p-3 bg-white">
              <PowerConsumptionChart />
            </div>
            <div className="m-5 p-3 bg-white flex items-center">
              <DeviceForm />
            </div>
          </div>
        </div>
      </DashboardProvider>
    )
  }

  return (
    <DashboardProvider>
      <div className='min-h-screen pt-10 pb-10 ml-60 flex items-center justify-center'>
        <div className='bg-gray-50'>
          <DeviceTable />
          <div className="flex justify-between items-stretch">  
            <div className="p-5 flex-shrink-0 bg-white mr-5">
              <PowerConsumptionChart />
            </div>
            <div className="flex-grow bg-white flex items-center">
              <DeviceForm />
            </div>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
