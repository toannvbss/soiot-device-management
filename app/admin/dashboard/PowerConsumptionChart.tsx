'use client';
import { useEffect, useState, useContext } from 'react';
import { DashboardContext, IDevice } from '@/app/Context/DashboardContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const colors = [
  { bg: 'rgba(255, 99, 132, 0.2)', border: 'rgba(255, 99, 132, 1)' },
  { bg: 'rgba(54, 162, 235, 0.2)', border: 'rgba(54, 162, 235, 1)' },
  { bg: 'rgba(255, 206, 86, 0.2)', border: 'rgba(255, 206, 86, 1)' },
  { bg: 'rgba(75, 192, 192, 0.2)', border: 'rgba(75, 192, 192, 1)' },
  { bg: 'rgba(153, 102, 255, 0.2)', border: 'rgba(153, 102, 255, 1)' },
  { bg: 'rgba(255, 159, 64, 0.2)', border: 'rgba(255, 159, 64, 1)' },
];

export default function PowerConsumptionChart() {
  const dashboardContext = useContext(DashboardContext);
  const [powerData, setPowerData] = useState<any>(null)

  useEffect(() => {
    if (dashboardContext) {
      setPowerData(
        {
          labels: dashboardContext.devices.map((device: IDevice) => device.name),
          datasets: [
            {
              label: 'Power Consumption',
              data: dashboardContext.devices.map((device: IDevice) => device.powerConsumption),
              backgroundColor: colors.map(color => color.bg),
              borderColor: colors.map(color => color.border),
              borderWidth: 1,
            },
          ],
        }
      )
    }
  }, [dashboardContext]);

  return (
    powerData && <Doughnut data={powerData} />
  )
}
