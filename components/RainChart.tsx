"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
];

const dataByPeriod = [
  {
    label: "2011 - 2012",
    data: [84.95, 128.7, 202.45, 294.1, 324.3, 311.4, 294.45, 143.9],
  },
  {
    label: "2012 - 2013",
    data: [82.25, 115.65, 219.05, 244.4, 337.9, 299.85, 236.6, 117.05],
  },
  {
    label: "2013 - 2014",
    data: [68.15, 136.35, 209.5, 291.1, 331.9, 268.4, 239.5, 91.85],
  },
  {
    label: "2014 - 2015",
    data: [70.95, 181.25, 199.85, 278.85, 353.4, 292.9, 323.65, 186.8],
  },
  {
    label: "2015 - 2016",
    data: [115.1, 160.55, 238.15, 283.65, 375.6, 312.45, 256, 146.5],
  },
  {
    label: "2016 - 2017",
    data: [115.1, 160.55, 238.15, 283.65, 375.6, 312.45, 256, 146.5],
  },
  {
    label: "2017 - 2018",
    data: [55.7, 101.45, 211.4, 331.05, 356, 281, 225.4, 148.7],
  },
  {
    label: "2018 - 2019",
    data: [83.55, 134.15, 262.05, 279.25, 319.6, 308.8, 235.05, 129.95],
  },
  {
    label: "2019 - 2020",
    data: [55.55, 149.75, 253.3, 318.35, 352.15, 298.15, 285.25, 174.8],
  },
  {
    label: "2020 - 2021",
    data: [72.5, 148, 209.85, 270.35, 306.6, 252.95, 259.1, 153.4],
  },
  {
    label: "2021 - 2022",
    data: [66.25, 157.65, 224.4, 304.7, 316.05, 275.8, 227.45, 111.5],
  },
  {
    label: "2022 - 2023",
    data: [44.9, 138.95, 265, 360.8, 345.05, 324.25, 316.55, 180.5],
  },
  {
    label: "2023 - 2024",
    data: [101.75, 142.2, 178.8, 255.65, 311.6, 316.45, 271.4, 152.5],
  },
];

const backgroundColors = [
  "#3B82F6",
  "#F59E0B",
  "#6B7280",
  "#FACC15",
  "#60A5FA",
  "#4ADE80",
  "#1E40AF",
  "#D97706",
  "#6B7280",
  "#FBBF24",
  "#93C5FD",
  "#22C55E",
  "#A5B4FC",
];

export const RainChart = () => {
  const datasets = dataByPeriod.map((period, index) => ({
    label: period.label,
    data: period.data,
    backgroundColor: backgroundColors[index % backgroundColors.length],
  }));

  return (
    <div className="w-full overflow-x-auto">
      <Bar
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "right",
              labels: {
                color: "#fff",
              },
            },
          },
          scales: {
            x: {
              ticks: { color: "#fff" },
              grid: { color: "rgba(255,255,255,0.1)" },
            },
            y: {
              ticks: { color: "#fff" },
              grid: { color: "rgba(255,255,255,0.1)" },
            },
          },
        }}
        data={{
          labels,
          datasets,
        }}
      />
    </div>
  );
};
