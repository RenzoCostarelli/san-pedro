"use client";

import { useState } from "react";
import WinklerChart from "./WinklerChart";
import { RainChart } from "./rainChart2";

const periods = [
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

export default function WinklerRainDashboard() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <WinklerChart onPointClick={setSelectedIndex} />

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="relative bg-[#0C2031] p-6 rounded-xl w-full max-w-5xl shadow-xl">
            <button
              className="absolute top-3 right-4 text-white text-sm hover:underline"
              onClick={() => setSelectedIndex(null)}
            >
              Close
            </button>

            <div className="mb-4">
              <label className="text-white text-sm mr-2">Period:</label>
              <select
                className="bg-[#1f2937] text-white px-3 py-1 rounded"
                value={selectedIndex}
                onChange={(e) => setSelectedIndex(Number(e.target.value))}
              >
                {periods.map((period, i) => (
                  <option key={period} value={i}>
                    {period}
                  </option>
                ))}
              </select>
            </div>

            <RainChart periodIndex={selectedIndex} />
          </div>
        </div>
      )}
    </>
  );
}
