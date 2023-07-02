import { LogProvider } from "@/app/Context/LogContext";
import LogTable from "./LogTable";
import Pagination from "./Pagination";

export default function Login() {
  return (
    <LogProvider>
      <div className='min-h-screen pt-10 pb-10 ml-80 flex justify-center'>
        <div className='w-4/5 bg-gray-50'>
            <LogTable />
            <Pagination />
        </div>
      </div>
    </LogProvider>
  );
}
