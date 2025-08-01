"use client";

import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  Tooltip,
  Filler,
  CategoryScale,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
  ChartDataLabels
);

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
  "Cachapoal Andes",
];

const winkler = [
  1555, 1558, 1868, 2145, 1696, 1716, 1566, 933, 2207, 1719, 1669, 1702, 1365,
  1495, 1060, 775, 1385,
];

const precipitation = [
  371, 563, 247, 293, 319, 678, 440, 588, 557, 630, 966, 523, 637, 572, 866,
  597, 585,
];

const dataPoints = regions.map((region, i) => ({
  x: winkler[i],
  y: precipitation[i],
  label: region,
}));

export default function WinklerPrecipitationChart() {
  const data = {
    datasets: [
      {
        label: "Winkler vs Precipitation",
        data: dataPoints,
        // pointBackgroundColor: "#C7B38C",
        // pointBorderColor: "#C7B38C",
        // pointRadius: 5,
        // pointHoverRadius: 6,
        pointHoverRadius: regions.map((region) =>
          region === "Cachapoal Andes" ? 12 : 8
        ),
        pointRadius: regions.map((region) =>
          region === "Cachapoal Andes" ? 10 : 6
        ),
        pointBackgroundColor: regions.map((region) =>
          region === "Cachapoal Andes" ? "#ede3cf" : "#9f8462"
        ),
        pointBorderColor: regions.map((region) =>
          region === "Cachapoal Andes" ? "#ede3cf" : "#9f8462"
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "WINKLER Index",
          color: "#C7B38C",
          font: { family: "Alegreya Sans", size: 16 },
        },
        ticks: {
          color: "#ffffff",
          font: { family: "Alegreya Sans", size: 16 },
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Annual Precipitations (mm)",
          color: "#C7B38C",
          font: { family: "Alegreya Sans", size: 16 },
        },
        ticks: {
          color: "#ffffff",
          font: { family: "Alegreya Sans", size: 16 },
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
      datalabels: {
        color: "#C7B38C",
        font: {
          family: "Alegreya Sans",
          size: 12,
          weight: "bold" as const,
        },
        align: "top" as const,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatter: (value: any) => value.label,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (context: any) => {
            const point = context.raw;
            return `${point.label}: (${point.x}, ${point.y})`;
          },
        },
      },
    },
  };

  return (
    <div
      className="p-4 rounded-xl w-full max-w-6xl h-[500px]"
      style={{ backgroundColor: "#000a1e" }}
    >
      <Scatter data={data} options={options} />
    </div>
  );
}
