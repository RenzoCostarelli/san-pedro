"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";

import { WineShowcaseProps } from "@/types/wines";
import Link from "next/link";

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
    <div className="container md:max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 text-white">
      {/* LEFT: Bottle + Info */}
      <div className="flex items-center gap-4 lg:items-start text-left col-span-1 md:col-span-7">
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
          {wine.wineType && (
            <p className="text-gray-400 text-xs">{wine.wineType}</p>
          )}
        </div>
      </div>

      {/* RIGHT: Tabs + Slider */}
      <div className="col-span-1 md:col-span-5">
        {/* Tabs */}
        <div className="flex flex-wrap gap-1 justify-between mb-4">
          {wine.sliderTabs.map((tab, index) => (
            <button
              key={tab.value}
              onClick={() => handleTabClick(index)}
              className={`px-2 py-1.5 cursor-pointer flex-1 whitespace-nowrap  rounded transition-colors duration-300 ${
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
              <Link href={wine.soilUrl[index]} target="_blank">
                <Image
                  src={src}
                  alt={`${wine.sliderTabs[index]?.label} image`}
                  width={534}
                  height={400}
                  className="w-[534px] h-[400px] object-contain bg-yellow-50"
                  unoptimized
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
