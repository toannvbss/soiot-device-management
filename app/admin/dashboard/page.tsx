import Table from "./Table";
import Form from "./Form";
import PowerConsumptionChart from "./PowerConsumptionChart";
import { DashboardProvider } from "@/app/Context/DashboardContext";

export default function Login() {
  return (
    <DashboardProvider>
      <div className='min-h-screen pt-10 pb-10 ml-80 flex items-center justify-center'>
        <div className='w-4/5 bg-gray-50'>
            <Table />
          <div className="flex justify-between items-stretch">  
            <div className="p-5 flex-shrink-0 bg-white mr-5">
              <PowerConsumptionChart />
            </div>
            <div className="flex-grow bg-white flex items-center">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
