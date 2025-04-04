"use client";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler
);

const years = [
  "2011/2012",
  "2012/2013",
  "2013/2014",
  "2014/2015",
  "2015/2016",
  "2016/2017",
  "2017/2018",
  "2018/2019",
  "2019/2020",
  "2020/2021",
  "2021/2022",
  "2022/2023",
  "2023/2024",
];

const values = [
  1800, 1650, 1700, 2000, 1600, 1950, 1750, 1800, 1900, 1600, 1550, 2000, 1750,
];

export default function WinklerChart() {
  const data = {
    labels: years,
    datasets: [
      {
        label: "Winkler",
        data: values,
        borderColor: "#C7B38C",
        backgroundColor: "#C7B38C",
        pointBorderColor: "#C7B38C",
        pointBackgroundColor: "#C7B38C",
        tension: 0.3,
        fill: false,
        pointRadius: 5,
        pointHoverRadius: 6,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 2500,
        ticks: {
          color: "#C7B38C",
          font: { family: "Alegreya Sans", size: 16 },
          stepSize: 500,
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
      x: {
        ticks: {
          color: "#C7B38C",
          font: { family: "Alegreya Sans", size: 16 },
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
          drawTicks: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className=" p-4 rounded-xl w-full max-w-4xl h-[400px]">
      <Line data={data} options={options} />
    </div>
  );
}
