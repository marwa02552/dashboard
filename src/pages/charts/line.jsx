import React, { useState, useEffect } from 'react';

import Sidebar from '../../componnets/sidebar/sidebar';
import Navbar from '../../componnets/navbar/navbar';

 // eslint-disable-next-line
import { Chart } from 'primereact/chart';
        
export default function Line() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        const data = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                      ],
                      borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
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
      <div className="ml-[270px] mt-[60px]">
        <div className="bg-white border border-solid p-4">
          <p className="text-[15px] text-gray-400">Chart</p>
          <h1 className="text-gray-700 font-bold text-[18px]">Dynamic Updating Chart</h1>
          <Chart type="bar" data={chartData} options={chartOptions}  />
        </div>
      </div>
    </div>
  );
}

// Helper function to generate initial data

