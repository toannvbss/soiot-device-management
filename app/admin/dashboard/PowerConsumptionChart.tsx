'use client';
import { useEffect, useState, useContext } from 'react';
import { DashboardContext, IDevice } from '@/app/Context/DashboardContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function getRandomColorPair(): {bgColor: string, borderColor: string} {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const bgColor = `rgba(${red}, ${green}, ${blue}, 0.3)`;
  const borderColor = `rgba(${red}, ${green}, ${blue}, 1)`;

  return { bgColor, borderColor };
}

export default function PowerConsumptionChart() {
  const dashboardContext = useContext(DashboardContext);
  const [powerData, setPowerData] = useState<any>(null)

  useEffect(() => {
    if (dashboardContext) {
      const labels: string[] = [];
      const powerConsumptionData: number[] = [];
      const backgroundColor: string[] = [];
      const borderColor: string[] = [];

      dashboardContext.devices.forEach((device: IDevice) => {
        labels.push(device.name);
        powerConsumptionData.push(device.powerConsumption);
        const colorPairs = getRandomColorPair();
        backgroundColor.push(colorPairs.bgColor);
        borderColor.push(colorPairs.borderColor);
      })

      setPowerData(
        {
          labels,
          datasets: [
            {
              label: 'Power Consumption',
              data: powerConsumptionData,
              backgroundColor,
              borderColor,
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
