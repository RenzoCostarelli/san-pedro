"use client";

import { useState } from "react";
import Image from "next/image";

const TOTAL_STEPS = 13;

export default function HelioSlider() {
  const [currentStep, setCurrentStep] = useState(12);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentStep(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-full aspect-video relative">
        <Image
          src={`/images/helio/heliofania_${TOTAL_STEPS - currentStep}.jpg`}
          alt=""
          fill
          objectFit="cover"
          className="rounded-lg"
          unoptimized
          priority={currentStep === 12}
        />
      </div>

      <input
        type="range"
        min={0}
        max={TOTAL_STEPS - 1}
        value={currentStep}
        onChange={handleChange}
        className="w-full custom-slider"
      />
      <div className="flex justify-between mt-2 px-1 text-lg font-semibold text-white italic w-full">
        <span>PM</span>
        <span className="font-light font-alegreya flex items-center gap-4 opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>{" "}
          Click & Drag to view
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
        <span>AM</span>
      </div>
    </div>
  );
}
