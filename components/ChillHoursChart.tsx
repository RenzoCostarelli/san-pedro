"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const regions = [
  "Maipo",
  "Apalta",
  "Lujan",
  "Gualtallary",
  "SanCarlos",
  "Napa",
  "WallaWalla",
  "Rioja",
  "Jerez",
  "Barolo",
  "Chianti",
  "Barossa",
  "Coonawara",
  "Yarra",
  "Marlborough",
  "Otago",
  "Cachapoal",
];

const chillHours = [
  183, 131, 8, 1, 137, 0, 0, 0, 0, 0, 0, 1, 51, 0, 213, 901, 224,
];

export default function ChillHoursChart() {
  const data = {
    labels: regions,
    datasets: [
      {
        label: "Chill Hours to Ripeness",
        data: chillHours,
        backgroundColor: "#C7B38C",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "x" as const,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#ffffff",
          font: {
            family: "Alegreya Sans",
            size: 14,
          },
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
      x: {
        ticks: {
          color: "#ffffff",
          font: {
            family: "Alegreya Sans",
            size: 14,
          },
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: false, // 👈 esto desactiva las etiquetas
      },
    },
  };

  return (
    <div className="p-4 rounded-xl w-full max-w-6xl h-[400px]">
      <Bar data={data} options={options} />
    </div>
  );
}
