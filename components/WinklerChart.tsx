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
  1784, 1653, 1637, 1888, 1639, 1888, 1711, 1752, 1887, 1637, 1684, 1976, 1751,
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
          color: "#ffffff",
          font: { family: "Alegreya Sans", size: 16 },
          stepSize: 500,
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
      x: {
        ticks: {
          color: "#ffffff",
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
      datalabels: {
        color: "#C7B38C",
        font: {
          family: "Alegreya Sans",
          size: 12,
          weight: "bold" as const,
        },
        align: "top" as const,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatter: (_value: any, context: any) => {
          return context.dataset.data[context.dataIndex].y;
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="p-4 rounded-xl w-full max-w-4xl h-[400px]">
      <Line data={data} options={options} />
    </div>
  );
}
