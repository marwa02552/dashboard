import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import Sidebar from "../../componnets/sidebar/sidebar";
import Navbar from "../../componnets/navbar/navbar";

export default function Pie() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["A", "B", "C"],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            documentStyle.getPropertyValue("--orange-400"),
            documentStyle.getPropertyValue("--purple-400"),
            documentStyle.getPropertyValue("--blue-400"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--orange-400"),
            documentStyle.getPropertyValue("--purple-400"),
            documentStyle.getPropertyValue("--blue-400"),
          ],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
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
            <Chart
              type="pie"
              data={chartData}
              options={chartOptions}
              className="w-[500px] md:w-30rem "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
