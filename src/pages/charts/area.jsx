
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import Sidebar from "../../componnets/sidebar/sidebar";
import Navbar from "../../componnets/navbar/navbar";

export default function  Area() {
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
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: true,
                    tension: 0.4,
                    borderColor: documentStyle.getPropertyValue('--blue-500')
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: true,
                    borderDash: [5, 5],
                    tension: 0.4,
                    borderColor: documentStyle.getPropertyValue('--teal-500')
                },
                {
                    label: 'Third Dataset',
                    data: [12, 51, 62, 33, 21, 62, 45],
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--orange-500'),
                    tension: 0.4,
                    backgroundColor: 'rgba(255,167,38,0.2)'
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
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
            <Chart type="line" data={chartData} options={chartOptions}  className='w-[800px]'/>

            </div>
          </div>
        </div>
      </div>
       
    )
}
        