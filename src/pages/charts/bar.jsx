

import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart'
import Sidebar from "../../componnets/sidebar/sidebar";
import Navbar from "../../componnets/navbar/navbar";

export default function Bar() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="ml-[300px] py-[80px] pr-[30px]">
        <div className="bg-white border border-solid p-[20px] rounded-[20px]">
          <p className="text-[15px] text-gray-400 ">Chart</p>
          <h1 className="text-gray-700 font-bold text-[18px]">
            Dynamic Updating Chart
          </h1>
          <div className="flex justify-center">
          <Chart type="bar" data={chartData} options={chartOptions} className='w-[800px]' />
          </div>
        </div>
      </div>
    </div>
  )
}
