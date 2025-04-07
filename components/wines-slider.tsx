"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";

import { WineShowcaseProps } from "@/types/wines";

export default function WinesSlider({
  wineData,
}: {
  wineData: WineShowcaseProps;
}) {
  const wine = wineData;
  const [activeIndex, setActiveIndex] = useState(
    wine.sliderTabs.findIndex((tab) => tab.value === wine.defaultTab)
  );
  const swiperRef = useRef<SwiperType | null>(null);

  const handleTabClick = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className="container max-w-[1100px] mx-auto grid md:grid-cols-12 gap-8 text-white">
      {/* LEFT: Bottle + Info */}
      <div className="flex items-center gap-4 lg:items-start text-left md:col-span-7">
        <Image
          src={wine.wineBottleImage}
          alt={wine.wineName}
          width={110}
          height={400}
          className="mb-4"
          unoptimized
        />
        <div>
          <Image
            src={wine.wineLogoImage}
            alt={`${wine.wineName} logo`}
            width={135.53}
            height={80}
            className="mb-4"
            unoptimized
          />
          <h3 className="text-gold uppercase mb-2">{wine.tagline}</h3>
          <p className="text-white/90 text-sm mb-4 max-w-xl">
            {wine.description}
          </p>
          <p className="text-gray-400 text-xs">{wine.disclaimer}</p>
        </div>
      </div>

      {/* RIGHT: Tabs + Slider */}
      <div className="md:col-span-5">
        {/* Tabs */}
        <div className="flex gap-2 justify-between mb-4">
          {wine.sliderTabs.map((tab, index) => (
            <button
              key={tab.value}
              onClick={() => handleTabClick(index)}
              className={`px-4 py-2 whitespace-nowrap flex-1 rounded transition-colors duration-300 ${
                activeIndex === index
                  ? "bg-black text-white"
                  : "text-gold hover:text-white hover:bg-blue-dark"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={30}
          slidesPerView={1}
        >
          {wine.sliderImages.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`${wine.sliderTabs[index]?.label} image`}
                width={534}
                height={400}
                className="w-[534px] h-[400px] object-cover"
                unoptimized
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
