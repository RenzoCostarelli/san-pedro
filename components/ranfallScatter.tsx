/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip,
  Legend,
  ChartDataLabels
);

const years = [
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
];
const rainfall = [415, 245, 279, 355, 400, 367, 246, 113, 302, 171];

const data = {
  labels: years,
  datasets: [
    {
      label: "Rainfall",
      data: years.map((year, i) => ({ x: year, y: rainfall[i] })),
      backgroundColor: "#C7B38C",
      pointRadius: 8,
    },
  ],
};

const options: ChartOptions<"scatter"> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: "category",
      labels: years,
      ticks: {
        color: "#C7B38C",
        font: {
          family: "Alegreya Sans",
          size: 12,
        },
      },
      grid: {
        color: "#C7B38C33",
        lineWidth: 1,
        // drawBorder: true,
      },
    },
    y: {
      min: 0,
      max: 450,
      ticks: {
        stepSize: 50,
        color: "#C7B38C",
        font: {
          family: "Alegreya Sans",
          size: 12,
        },
      },
      grid: {
        color: "#C7B38C33",
        // borderDash: [4, 4],
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
      formatter: (_value: any, context: any) => {
        return context.dataset.data[context.dataIndex].y;
      },
    },
    tooltip: {
      enabled: true,
    },
  },
};

export default function RainfallScatter() {
  return (
    <div className="text-gold px-6 py-8 rounded-xl  w-full mx-auto">
      <div className="h-[400px]">
        <Scatter data={data} options={options} />
      </div>
      <p className="text-center mt-6 text-sm text-gold font-alegreya">
        This graph shows whether the weather conditions for a particular vintage
        were dry or wet.
      </p>
    </div>
  );
}
