'use client'

import { LogProvider } from "@/app/Context/LogContext";
import LogTable from "./LogTable";
import Pagination from "./Pagination";
import Search from "./Search";
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';


export default function LogsPage() {
  const { data: session, status } = useSession({
    required: true,
  });
  
  if(status === "loading" && !session) {
    if (typeof window !== "undefined") {
      sessionStorage.setItem('redirectAfterLogin', usePathname());
    }
    return <></>
  }

  return (
    <LogProvider>
      <div className='min-h-screen pt-10 pb-10 ml-60 flex justify-center'>
        <div className='w-4/5 mt-10 bg-gray-50'>
            <Search />
            <LogTable />
            <Pagination />
        </div>
      </div>
    </LogProvider>
  );
}
