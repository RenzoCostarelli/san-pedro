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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");

  const handleTabClick = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  const openModal = (url: string) => {
    setIframeUrl(url);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // prevent scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIframeUrl("");
    document.body.style.overflow = ""; // restore scroll
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
          <p className="text-white/90 text-xs mb-4 max-w-xl">
            {wine.description}
          </p>
          <p className="flex gap-1  text-xs mb-2">
            <span className="font-bold">Ageing:</span> {wine.ageing}
          </p>
          <p className="flex flex-col gap-1 text-xs text-light mb-2">
            {wine.items?.map((item, index) => (
              <span key={index}>- {item}</span>
            ))}
          </p>
          <p className="text-xs flex items-center gap-1 mb-1">
            <span className="font-bold">Yield per Hectare:</span>
            {wine.yields}
          </p>
          {wine.lastTagline && (
            <h4 className="mb-4 text-xs">{wine.lastTagline}</h4>
          )}
          <p className="text-gray-400 text-xs ">{wine.disclaimer}</p>
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
              className={`px-2 py-1.5 cursor-pointer flex-1 whitespace-nowrap rounded transition-colors duration-300 ${
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
              <button
                onClick={() => openModal(wine.soilUrl[index])}
                className="relative w-full"
              >
                <div className="absolute flex items-center gap-1 cursor-grab bg-blue px-4 py-1.5 top-1 right-1 text-xs font-alegreya-sans font-light">
                  REAL VIEW{" "}
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
                    className="scale-80"
                  >
                    <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>
                <Image
                  src={src}
                  alt={`${wine.sliderTabs[index]?.label} image`}
                  width={534}
                  height={400}
                  className="w-[534px] h-[400px] object-contain bg-yellow-50"
                  unoptimized
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center p-4">
          <div className="relative w-full max-w-[80vw] h-[90vh] bg-black rounded shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 -right-10 text-black bg-white rounded-full p-2 leading-0 aspect-square text-xl cursor-pointer z-10"
            >
              ✕
            </button>
            <iframe
              src={iframeUrl}
              className="w-full h-full rounded"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
