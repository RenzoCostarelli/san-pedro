"use client";

import { useState } from "react";
import Image from "next/image";

const TOTAL_STEPS = 13;

export default function HelioSlider() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentStep(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-full aspect-video relative">
        <Image
          src={`/images/helio/heliofania_${currentStep + 1}.jpg`}
          alt={`Step ${currentStep + 1}`}
          fill
          objectFit="cover"
          className="rounded-lg"
          unoptimized
          priority={currentStep === 0}
        />
      </div>

      <input
        type="range"
        min={0}
        max={TOTAL_STEPS - 1}
        value={currentStep}
        onChange={handleChange}
        className="w-full bg-red-400"
      />
    </div>
  );
}
