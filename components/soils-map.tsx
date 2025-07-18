"use client";

import { soilTypes } from "@/data/soilTypes";
import { useState } from "react";
import SoilDetailsDialog from "./soilDetailsDialog";
import Image from "next/image";
// import Image from "next/image";
// import SoilsMapImage from "@/public/images/soils/mapa_tipos_suelos.png";

export default function SoilsMap() {
  const [activeSoilId, setActiveSoilId] = useState<string | null>(null);

  const activeSoil = soilTypes.find((soil) => soil.id === activeSoilId);
  const [hoveredSoilId, setHoveredSoilId] = useState<string | null>(null);

  const showDetailsDialog = (id: string) => {
    setActiveSoilId(id);
    setHoveredSoilId(id);
  };

  const closeDialog = () => {
    setActiveSoilId(null);
    setHoveredSoilId(null);
  };

  return (
    <div className="grid md:grid-cols-12 gap-4 ">
      <div className="md:col-span-3 md:col-start-2 grid items-end ">
        <div className="pb-10">
          <ul>
            {soilTypes.map((soil) => (
              <li
                key={soil.id}
                className="flex items-center gap-2 mb-4 cursor-pointer"
                onClick={() => {
                  showDetailsDialog(soil.id);
                }}
                onMouseEnter={() => setHoveredSoilId(soil.id)}
                onMouseLeave={() => {
                  if (!activeSoilId) setHoveredSoilId(null);
                }}
              >
                <div className="rounded-full">
                  <Image src={soil.icon} alt="" width={32} height={32} />
                </div>
                <span className="text-gold-light font-alegreya-sans font-light uppercase tracking-widest">
                  {soil.title}
                </span>
              </li>
            ))}
            <li className="flex items-center gap-2 mb-4 cursor-pointer">
              <div className="rounded-full overflow-hidden">
                {/* <Image src={soil.icon} alt="" width={32} height={32} /> */}
                <div className="h-8 w-8 bg-white"></div>
              </div>
              <span className="text-gold-light font-alegreya-sans font-light uppercase tracking-widest">
                Andes Mountain Range
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:col-span-8 md:col-start-5 md:col-end-13 relative flex justify-end items-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1474.7 1172.2"
        >
          <image
            width="1475"
            height="1172"
            transform="translate(-.3 .2)"
            xlinkHref="./images/soils/mapa_tipos_suelos.png"
          />
          <g
            id="Layer_2"
            data-name="Layer 2"
            onClick={() => showDetailsDialog("fine-colluvial")}
            className={`relative transition-all cursor-pointer hover:opacity-100 ${
              hoveredSoilId === "fine-colluvial" ? "opacity-100" : "opacity-0"
            }`}
          >
            <path
              className="cls-1"
              fill="#844532"
              d="M529.3,579.1l-34.1,49.6s26.7,36.1,46.3,44.3c19.6,8.2,33.2,12.9,62.1,20.8,28.8,7.8,48.4,14.5,71.2,30.2,6.3,4.7-9-42.7-34.5-55.7-25.5-12.9-32-26.3-32-26.3l-78.9-62.9h0Z"
            />
            <path
              className="cls-1"
              fill="#844532"
              d="M451.3,689.1l-26.7,37.2s34.5,12.9,54.9,23.9,39.2,36.8,44.3,47.4c5.1,10.6,9.4,7.8,9.8,20.4.4,12.5-3.1,67.4-3.1,67.4l47.4,24.7,3.9-2.7s-5.5-16.5,9.8-15.3c15.3,1.2,25.9,14.5,27,18s8.6,45.5,8.6,45.5c0,0,63.1,23.1,74.5,23.1s5.9-5.1,12.2-5.1,27,9,34.1,11.8,22.7,6.3,26.7,5.1c3.9-1.2,2-8.6-2-12.5-3.9-3.9-31.7-35.7-43.9-50.6l-12.2-14.9s-9-22.3-11.4-36.5c-2.4-14.1-5.5-37.1-8.2-43.4-2.7-6.3-26.7-38.1-32.1-41.6-5.5-3.5-20.8-18.8-23.9-19.2-3.1-.4-52.9.8-52.9.8l-12.5-7.4s-5.4-14.5-25.1-29.4c-20.8-15.7-40.8-14.9-49.8-17.6-9-2.7-49.4-29-49.4-29h0Z"
            />
            <path
              className="cls-1"
              fill="#844532"
              d="M848.3,821.2s-18,4.3-27.4,12.9c-9.4,8.6-18,39.6,0,43.9,18,4.3,11.6,6.7,11.6,6.7l19.3,32.5s-2.4,30.4-1.2,37.3c1.2,6.9,14.5,16.7,19.2,13.6,4.7-3.1,15.3-19.6,12.2-26.7s-7.4-13.3-12.9-22.3c-5.5-9-29.2-36.1-29.2-36.1,0,0-17.2-24.1-11.2-29.4,7.4-6.6,33.7-8.2,33.7-8.2,0,0-.9-6.2-4.3-12.9-3.5-6.7-9.8-11.4-9.8-11.4h0Z"
            />
            <path
              className="cls-1"
              fill="#844532"
              d="M826,606.4h-3.9s.8,6.3,0,12.9c-.8,6.7,1.2,18.8-2.7,21.6-3.9,2.7-5,8.7-9,10.8s-1.2,9.2,7.8,9.6c9,.4,21.9,2,24.7,0,2.7-2-2.9-3-5-9.6-2.1-6.5-3.2-9.9-2.8-17.4.4-7.5-2.7-17.6-4.3-20.4s-4.7-7.5-4.7-7.5h0Z"
            />
            <path
              className="cls-1"
              fill="#844532"
              d="M796.2,666.7c-5.1,2-6.9,1.7-7.1,9.4-.2,7.7,5.5,48.1,5.5,48.1l28.6,33.8,29.4,19.6,23.5,13.3s-2.4,14.9,3.9,22.7c6.3,7.8,12.5,18.1,14.9,18.9,2.4.7,5.9,10.1,7.4,17.2s21.6,44.7,24.3,48.6c2.7,3.9,14.5,8.1,17.2,7.6s16.5,29.3,22.3,32c5.9,2.7,31,24.7,32.1,28.2,1.2,3.5,3.5,6.7,7.8,10.2s21.9,15.4,24.7,14.3c2.7-1,7.1-.6,8.6-2.2s4.3-5.1,0-7.8c-4.3-2.7-12.2-7.4-13.3-11.9-1.2-4.5-5.1-16.3-3.9-27.3s.4-15.7-2-23.1c-2.3-7.4-5.5-14.9-2.4-23.9,3.1-9,7.4-20.8,7.4-29s-1.2-34.1-2-40.8l-.8-6.7s.8-7.8-1.6-14.1c-2.4-6.3-7.1-14.1-7.1-19.2s3.1-8.6,0-11.8-12.2-12.5-15.7-14.1-16.5-3.1-27.8,0c-4.9,1.4-10.3,3.6-21.2,2.4-14.3-1.6-33.9-7.1-33.9-7.1l-81.5-54.9-37.8-32.5h0Z"
            />
            <path
              className="cls-1"
              fill="#844532"
              d="M773.7,600.5s-.7,15.8-3.5,29.5c5.3,5.3,9.5,20.1,14.5,21.8,5,1.7,11.9-12.5,13.7-20.2,1.8-7.6,7.6-31.9,12-45,4.5-13.2,3.5-24.3,15.7-37.3l12.3-12.9s-.2-9.9,8.1-19c8.3-9.2,14.8-11.2,19.5-15.5,4.7-4.3,23.5-20.1,22.9-29.6-.6-9.4-.8-11.1-6.3-15.5-5.5-4.5-9-8.6-6.6-13.9s4.8-7.6,10.3-15.9,12.6-7.1,17.3-21.2c4.7-14.1,7.4-14.1,11.9-41.2,4.5-27-.2-30.6,6.3-41.2,6.5-10.6,9.4-16.5,10.6-28.2s-1.2-20,11.2-30.6c12.3-10.6,17-17,27-32.9,11.2-6.5,12.9-10.2,14.7-33,3.7-26.7,14.2-76.9,14.2-76.9,0,0-8.9-2-30,9.3-21.2,11.3-30,8.9-31.2,14.2s-4.1,15.3-2.9,19.4,7.6,8.9,6.5,16.5c-1.2,7.6-8.2,17.2-13.5,20.7-5.3,3.5-20,6.4-26.5,8.1s-10,11.2-15.3,10.6-16.5,4.1-19.4,3.5-9.4,0-8.8,5.3c.6,5.3,0,7.6,8.8,9.4,8.8,1.8,13.2,6.5,15.4,11.2,2.2,4.7,1.6,17-2.5,17.6s-23.1,2.5-29.6.1-18.6-1.3-18,6.3c.6,7.6,0,16.5,8.2,17,8.2.6,18.8,3.5,32.9,7.1,14.1,3.5,22.3,8.8,24.1,13.5,1.8,4.7,1.8,8.8,1.8,18.2s-3.5,21.8-1.2,25.9,8.8,10,8.2,17c-.6,7.1,1.8,16.7-4.7,21.8-6.5,5.2-7.6,8.1-7.6,8.1h-22.3s-8.8,6.5-12.3,10c-3.5,3.5-6.5,8.2-10,8.8s-17-2.9-15.9,3.5,4.1,9.4,8.2,10,10.8,1.5,13.9,2.8,7.3,1.3,6,5.5-1.8,6.8-7.3,11c-5.5,4.2-15.9,11.8-20.4,18.6s-10.7,8.4-14.4,13.8c-3.7,5.5-4.7,7.8-9.9,8.9-5.2,1-11.2,2.1-13.8,6-2.6,3.9-6.3,18.6-5.5,27.4.8,8.9.3,44.1.3,44.1,0,0-4.7,12.1-8.4,18.6-3.7,6.5-8.7,8.5-8.7,8.5h0Z"
            />
            <path
              className="cls-1"
              fill="#844532"
              d="M130.1,209.3l13.3,13.9,15.7,9.4s9.7,5.4,15.9,6.9,12.5,1.6,14.4,6.3c1.8,4.7.3,21.2,1.8,25.9s7.3,9.3,12,12.2,17.6,5.9,24.1,7.4,8.9,2,15.4,6.3c4.8,3.2,13.6,18,13.6,18,0,0,9.3,13.6,20.3,18.6,11,5,21.5,7.5,32.7,9.1s17,1.6,22.2,1,19.1-18.9,13.8-26.4c-5.2-7.6-19.6-17.5-28.5-21.6-8.9-4.2-23-8.1-31.4-8.6-8.4-.5-25.1-8.9-29.3-11.2s-12.8-14.7-12.8-14.7c0,0-13.3-23.8-15.4-25.3s-93.5-30.6-93.5-30.6l-4.5,3.5h0Z"
            />
            <path
              className="cls-1"
              fill="#844532"
              d="M95.7,234.2l-16.5,32.1,22.7,7.7s17.8,8.9,25.1,13.6,20.4,10.5,25.6,15.2,13.8,14.9,19.9,13.3,13.8-6.5,11.5-11l-2.4-4.4s-14.4-18-15.9-21.7l-1.6-3.7s-9.9-7.8-11.8-9.7-2.6-5.7-4.4-8.9-6.5-9.9-10.2-11.5-25.6-6-29.3-7.1-12.8-4.1-12.8-4.1h0Z"
            />
            <path
              className="cls-1"
              fill="#844532"
              d="M70.1,280.9l-18.8,38.9s48.9,31.7,55.7,38.8c6.8,7.1,16.9,13.3,23.7,13.8s21.2.3,31.1,4.7,8.6,12.3,21.4,15.7c12.8,3.4,24.3,8.1,35.3,10.2,11,2.1,15.2,3.9,26.1,8.6,11,4.7,15.4,8.9,20.1,13.6,4.7,4.7,10.5,9.9,13.8,13.6s8.4,8.6,12.3,11.2c3.9,2.6,14.6,8.4,18.3,8.9,3.7.5,23,0,29.5,1.8,6.5,1.8,7.6,1,11.2,7.1s11.5,18.3,20.6,23c9.1,4.7,34,13.3,41.8,14.6,7.8,1.3,12.5-.3,17-4.2s13.1-19.1,11.5-22.7-14.1-17.2-25.1-24.8c-9.4-6.5-30-20.4-35.3-22.5s-36.8-17.3-40.7-18.3c-3.9-1-47.1-21.1-47.1-21.1,0,0-6.8-4.3-21.7-9.1-18.1-5.9-45.3-14.3-51.2-17.9-5.7-3.5-14-15.3-16.5-20s-5.7-11.2-19.6-15.2c-9.3-2.6-25.6-1.4-32.8-5.8-10.5-6.5-22.9-24-39.9-30.2-6.9-2.5-41-12.7-41-12.7h0Z"
            />
            <path
              className="cls-1"
              fill="#844532"
              d="M42.5,338.4l-25.6,49.6,40.1,51.1,12.9,11s-6.3,10-7.1,11.8c-2.9,6.2,1.2,14.9,1.2,14.9l10.2,5.5s5.4-.3,12.9,3.9,8.8,7.2,10.6,12.2,5.9,6.7,3.5,11.4-1.7,13.2,1.2,17.9,33.3,51.9,33.3,51.9l16.3-23.3s6.3-7.3,9.9,1.6c3.7,8.9,12.2,38.2,30.8,57,2.2,7.5-21.4,13.7-21.2,21.9.2,8.3,16.6,24.5,28.4,32.4s71.2,47.8,71.2,47.8l97.3-129.9-27.8-33.2-29.5-29.5s-29.3,47.1-37.1,49c-7.8,2-12.1-3.5-18.6-6.5-6.5-3-40.6-18.2-43.9-25.6-3.3-7.4-3.7-35.2-3.7-35.2l11.3-1.2,14.6-24.1s-51.4-21.2-61-26.9-46.1-37.6-46.1-37.6c0,0-21.9-36.6-39.2-50.7-17.2-14.1-44.9-27-44.9-27h0Z"
            />
            <path
              className="cls-1"
              fill="#844532"
              d="M848.3,821.2s-18,4.3-27.4,12.9c-9.4,8.6-18,39.6,0,43.9,18,4.3,11.6,6.7,11.6,6.7l19.3,32.5s-2.4,30.4-1.2,37.3c1.2,6.9,14.5,16.7,19.2,13.6,4.7-3.1,15.3-19.6,12.2-26.7s-7.4-13.3-12.9-22.3c-5.5-9-29.2-36.1-29.2-36.1,0,0-17.2-24.1-11.2-29.4,7.4-6.6,33.7-8.2,33.7-8.2,0,0-.9-6.2-4.3-12.9-3.5-6.7-9.8-11.4-9.8-11.4h0Z"
            />
            <path
              className="cls-1"
              fill="#844532"
              d="M1082.3,640.1c-1.2-5.5-5.9-14.5-8.2-19.6-2.4-5.1,0-17.2,0-22.7s-7.8-18.6-7.8-18.6c0,0-29.2-4.1-47.9-5.4.9,1.6.6,4.3.7,6.2.2,3.1-3.7,4.9-5.7,5.9-2,1-4.5,1.4-12.5,6.5-8,5.2-12.9,5.8-12.9,5.8h-11s-10.8-2.6-15.3-4c-1.3,3.2-2.7,5.6-2.7,5.6,0,0,11.7,31.1,15.2,34.6-7,10.4-27,32.4-54.9,43-12.9,3-25.5,1.5-30.4,3.5-12,5-14.1,12.9-14.1,12.9,0,0-6.8-4.6-20.5-15.6-21.6-7.8-34.5-6.7-32.9-5.1,1.6,1.6,9.4,8.2,12.5,8.2s23.1,11.8,24.3,16.1c1.2,4.3,29,20,34.5,21.9,5.5,2,13.3,15.3,17.2,17.2,3.9,2,18.4,6.3,25.9,7.8,7.4,1.6,16.5-8.2,20-9.8,3.5-1.6,12.2-2,13.3-2s20.4,4.7,27.4,4.7,20.4-5.1,20.4-5.1c0,0,31.7-29.8,35.7-33.7,3.9-3.9,16.1-16.5,19.2-19.6,3.1-3.1,9.4-15.7,14.1-20,4.7-4.3-2.4-13.3-3.5-18.8h0Z"
            />
          </g>
          <g
            id="Layer_3"
            data-name="Layer 3"
            className={`relative transition-all cursor-pointer hover:opacity-100 ${
              hoveredSoilId === "balanced-colluvial"
                ? "opacity-100"
                : "opacity-0"
            }`}
            onClick={() => showDetailsDialog("balanced-colluvial")}
          >
            <g>
              <path
                fill="#ab7562"
                d="M319,261.9h-.8c0,0-86.2-26.1-86.2-26.1,0,.7-1.2,3.2-1.7,3.6,4.4,6.6,13.3,22.5,13.3,22.5,0,0,8.6,12.3,12.8,14.7s20.9,10.7,29.3,11.2c8.4.5,22.5,4.4,31.4,8.6,5.8,2.7,14.6,7.4,21,12.7-.4-.7-.7-1.4-.9-2.2-2.2-3,6.5-1.4,9.3-.7s27,12.4,37.7,18.1c10.7,5.6,19.2,7.1,24.8,11.3,5.6,4.2,27.7,24.3,29.4,25.7,1.7,1.4,13.3,16.7,19.8,25.4,6.5,8.8,17.8,23.7,17.8,23.7,0,0,6.5,13,1.4,17.5-5.1,4.5-16.4,8.2-23.7,4.5-7.3-3.7-18.1-8.5-22.9-13.6s-9.1-8.3-9.1-8.3h-2.6l-25.4-26.2s-3.6-4.7-10-10.5-12.8-11.5-17.7-14.9-26.8-17.9-28.2-18.7c-2.2,2.9-5,3.7-5.9,4.1-4.8,2-11,.5-22.2-1s-21.7-4.2-32.7-9.1c-11-5-20.3-18.6-20.3-18.6,0,0-8.7-14.8-13.6-18-6.5-4.3-8.9-4.7-15.4-6.3s-19.4-4.6-24.1-7.4-10.4-7.5-12-12.2c-1.6-4.7,0-21.2-1.8-25.9-1.8-4.7-8.1-4.7-14.4-6.3-6.3-1.6-15.9-6.9-15.9-6.9l-15.7-9.4-13.3-13.9,4.4-3.4-23.9-7.3-17,34.7c.7,0,11.2,3.8,14.9,4.8s25.6,5.5,29.3,7.1c3.7,1.6,8.4,8.4,10.2,11.5,1.8,3.1,2.6,7.1,4.4,8.9s11.8,9.7,11.8,9.7l1.6,3.7c1.6,3.7,15.9,21.7,15.9,21.7l2.4,4.4c2.4,4.4-5.5,9.4-11.5,11-6,1.6-14.6-8.6-19.9-13.3-5.3-4.7-18.3-10.5-25.6-15.2-7.3-4.7-25.1-13.6-25.1-13.6,0,0-23.7-8-24.1-8.2l-7.4,15.2c3.5,1,34.2,10.2,40.7,12.6,17,6.3,29.4,23.7,39.9,30.2,7.1,4.5,23.4,3.2,32.8,5.8,13.9,3.9,17.1,10.5,19.6,15.2s10.8,16.6,16.5,20c5.9,3.6,33.1,11.9,51.2,17.9,14.9,4.9,21.7,9.1,21.7,9.1,0,0,43.2,20.1,47.1,21.1,3.9,1,35.4,16.2,40.7,18.3,5.2,2.1,25.8,16,35.3,22.5,11,7.6,23.5,21.2,25.1,24.8.7,1.7-.7,5.8-2.9,10.1l104.9-150.3-224.4-76.5Z"
              />
              <path
                fill="#ab7562"
                d="M412.9,505.5c-7.8-1.3-32.7-9.9-41.8-14.6s-17-17-20.6-23c-3.7-6-4.7-5.2-11.2-7.1-6.5-1.8-25.9-1.3-29.5-1.8-3.6-.5-14.4-6.3-18.3-8.9-3.9-2.6-8.9-7.6-12.3-11.2-3.4-3.6-9.1-8.9-13.8-13.6-4.7-4.7-9.1-8.9-20.1-13.6s-15.2-6.5-26.1-8.6c-10.9-2.1-22.5-6.8-35.3-10.2-12.8-3.4-11.5-11.2-21.4-15.7-9.9-4.5-24.3-4.2-31.1-4.7-6.8-.5-16.9-6.8-23.7-13.8-6.6-6.8-52.6-36.8-55.5-38.7l-9.8,20.2.9-1.7s27.7,12.9,44.9,27c17.2,14.1,39.2,50.7,39.2,50.7,0,0,36.6,31.9,46.1,37.6,9.6,5.7,61,26.9,61,26.9l23.3-29.2s12.5,10.5,26.8,15.9c4.6,1.7,26.6,6.9,39.6,11.8,9.6,3.6,11.8,7.4,11.8,7.4l-24.1,37.7,29.5,29.5,27.8,33.2-15.6,20.8,1.2.8,74.6-106.9c-4.3,3.6-8.9,5-16.5,3.8Z"
              />
              <path
                fill="#ab7562"
                d="M429.4,501.7c.2-.1.3-.3.5-.4,2.4-2.1,6-7.5,8.6-12.6l-9.1,13Z"
              />
            </g>
            <path
              fill="#ab7562"
              d="M584.1,502.9l-47.8,70.4s11.4,4.9,29.4,9.2,36.1,11.9,38.3,5.5c2.1-6.3-.2-42.4-4.7-58-3.7-20.6-15.1-27.2-15.1-27.2h-.1Z"
            />
            <path
              fill="#ab7562"
              d="M533.6,818.2c-.4-12.5-4.7-9.8-9.8-20.4-5.1-10.6-23.9-36.5-44.3-47.4-20.4-11-55.9-24.7-56.3-25.2l-38,51.1,13.3,9.8s-4.7,6.3-3.5,10.6,77.2,53.3,77.2,53.3l58.5,31.4c.8-13.1,3.2-52.8,2.9-63.2h0Z"
            />
            <path
              fill="#ab7562"
              d="M851.9,917.3l-19.3-32.5s6.4-2.4-11.6-6.7-9.4-35.3,0-43.9c6.3-5.8,16.5-9.6,22.5-11.5-.6-1.4-1.6-3.1-3.2-5-5-5.8-16.3-8.9-23-8.9s-16.1,2-23.9,1.2c-7.8-.8-6.9,2.7-24.6-.4-17.7-3.1-25.6-3.9-28.9-9.8-3.3-5.9-6.8-15.3-10-23.9-3.1-8.6-9-18.4-18.4-18.4s-14.5,2-21.2.4-15.7-5.5-23.9-12.2-8.9-11.8-16.4-16.5-5.2-6.2-16.1-8.4c-11-2.2-28.1-2.2-39.3-5.3s-16.7-5.5-25.7-6.7-20-2.7-30.2-10.2c-10.2-7.4-28.2-11.4-35.7-20.8s-11-13.6-14.9-19.1l-3.9-5.6-3.5-5-30.2,40.6c.3.2,41.4,26.6,50.4,29.4,9,2.7,29,2,49.8,17.6,19.7,14.9,25.1,29.4,25.1,29.4l12.5,7.4s49.8-1.2,52.9-.8c3.1.4,18.4,15.7,23.9,19.2s29.4,35.3,32.1,41.6c2.7,6.3,5.9,29.3,8.2,43.4,2.4,14.1,11.4,36.5,11.4,36.5l12.2,14.9c12.2,14.9,40,46.6,43.9,50.6s4.1,6.2,4.1,9l1.1.6c-.3-4.1.8-9,1-12.2,0,0,5.1-6.3,6.3-11.8s2.4-25.1,2-35.3-7.1-26.5-7.1-26.5c0,0-8.2-20.6-3.3-26.1s13.1,2.4,23.7,9c10.6,6.7,19.2,21.2,27.4,34.9s14.5,27.4,18.1,34.9c.7,1.5,2.2,3,4.1,4.4l1.7-1.4c-.6-1-1-2-1.1-3-1.2-6.9,1.2-37.3,1.2-37.3h0l-.2.2Z"
            />
            <path
              fill="#ab7562"
              d="M637,369.2s-5.3,50.2,0,60.2,19,29,31.6,41.5c12.5,12.5,28.8,28.2,33.3,29.4,4.5,1.2,10.4-.9,11-11.2s-5.5-38.4-10-51.4c-4.5-12.9-7.8-15.7-8.8-23.3-1-7.6-2.2-27.5-2.2-27.5l-54.9-17.7h0Z"
            />
            <path
              fill="#ab7562"
              d="M773.7,600.5s5-2,8.7-8.5,8.4-18.6,8.4-18.6c0,0,.5-35.2-.3-44.1-.8-8.9,2.9-23.5,5.5-27.4s8.6-5,13.8-6l-28-7.5s-.5-8-.2-12.2c.3-4.1,10.2-42.7,10.8-46.4.6-3.7-.6-8.6-.6-8.6l-27.6-10.6s7.1,15.1,8.2,21c1.2,5.9,1.2,26.7-.2,36.1s-11.6,41.6-12.9,49.8c-1.4,8.2-9.8,56-8.6,67s7.4,31.5,12.7,34.7c2.1,1.3,5.3,1.7,8.3,1.8,1.5-10.7,1.9-20.3,1.9-20.3h0v-.2Z"
            />
            <path
              fill="#ab7562"
              d="M942.9,73.4v-9.8l-41.9,2-3.9,9.4-8.6,125.9-127-32.7,39.5,244.6,33.5,9.7c2.9-2.5,12.2-.3,15.1-.8,3.5-.6,6.5-5.3,10-8.8s12.3-10,12.3-10h22.3s1.2-2.9,7.6-8.1c6.5-5.2,4.1-14.8,4.7-21.8.6-7.1-5.9-12.9-8.2-17-2.4-4.1,1.2-16.5,1.2-25.9s0-13.5-1.8-18.2-10-10-24.1-13.5-24.7-6.5-32.9-7.1-7.6-9.4-8.2-17c-.6-7.6,11.6-8.7,18-6.3,6.5,2.4,25.5.5,29.6-.1s4.7-12.9,2.5-17.6c-2.2-4.7-6.6-9.4-15.4-11.2s-8.2-4.1-8.8-9.4c-.6-5.3,5.9-5.9,8.8-5.3s14.1-4.1,19.4-3.5,8.8-8.8,15.3-10.6,21.2-4.6,26.5-8.1,12.3-13.1,13.5-20.7c1.2-7.6-5.3-12.4-6.5-16.5s1.8-14.1,2.9-19.4c1.2-5.3,10-2.9,31.2-14.2s30-9.3,30-9.3h0c0,0,3-4.6,3-4.6l4.3-47.4-63.9,3.5h0v-.2Z"
            />
          </g>
          <g
            id="Layer_5"
            data-name="Layer 5"
            className={`relative transition-all cursor-pointer hover:opacity-100 ${
              hoveredSoilId === "fluvial-matrix" ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => showDetailsDialog("fluvial-matrix")}
          >
            <path
              className="cls-3"
              fill="#e3ca9e"
              d="M763.6,619.1c-5.3-3.1-11.6-23.7-12.7-34.7-1.2-11,7.3-58.8,8.6-67,1.4-8.2,11.6-40.4,12.9-49.8,1.4-9.4,1.4-30.2.2-36.1-1-5-6.3-16.7-7.8-20.1l-72.7-24.3c.1,2,1.2,20.1,2.1,27.4,1,7.6,4.3,10.4,8.8,23.3,4.5,12.9,10.6,41.2,10,51.4-.6,10.2-6.5,12.3-11,11.2-2.4-.6-8.1-5.3-14.8-11.5,1.9,7.9,4.8,19.9,6.7,28.5,3.1,13.7,8.9,26.8,9.7,39.3.8,12.5,23.8,30.8,29.8,38.3,6,7.5,36.7,35,36.7,35v-9.2c-2.5-.2-4.9-.7-6.6-1.7h0Z"
            />
            <path
              className="cls-3"
              fill="#e3ca9e"
              d="M612.9,649.1v-5.7s5.5-5.2,9.4-3.4,18.5,8.6,25.8,13.8c7.3,5.2,20.9,14.9,24.3,22.5,3.4,7.6,9.9,16.5,12,22.5,2.1,6,4.7,19.3,7.8,22.2,3.1,2.9,12.8,7.3,15.4,8.4,2.6,1,8.9,3.7,8.9,7.1s3.1,6-1.3,7.3c-3.8,1.1-4,10.4-3.9,13,8.7.8,14.2,10.1,17.2,18.4,3.1,8.6,6.7,18,10,23.9,3.3,5.9,11.2,6.7,28.9,9.8,17.7,3.1,16.8-.4,24.6.4,7.8.8,17.2-1.2,23.9-1.2s7.2.7,11.3,2c2.4-3.4,2.8-7.9-6-11.7-16.8-7.3-43.8-30-51-37.1-7.1-7.1-19.7-27.9-25.2-37l-5.5-9s-5.3-12.3-2.7-15.9c2.7-3.7,11.6-4.5,12.6-10.2,1-5.7,5.3-30.5,1.1-42.3-4.2-11.8-9.9-29-17.5-38-7.6-9-35.5-38.5-42.1-44.8s-13.5-18.3-17.2-26.1c-3.7-7.8-18.6-24.6-26.4-33.5-7.8-8.9-30-22.2-35.5-25.1-5.5-2.9-7.9-1.7-7.9-1.7l-18.4,26.6c3.6,3.3,9.9,10.8,12.4,25.1,4.5,15.7,6.8,51.7,4.7,58-2.1,6.3-20.2-1.2-38.3-5.5-13.2-3.2-22.8-6.6-27-8.3l-5.5,7.9,75,59.9s1.5,3.1,6,7.8h0Z"
            />
            <path
              fill="#e3ca9e"
              d="M346.5,306.2s27,12.4,37.7,18.1,19.2,7.1,24.8,11.3,27.7,24.3,29.4,25.7,13.3,16.7,19.8,25.4,17.8,23.7,17.8,23.7c0,0,6.5,13,1.4,17.5s-16.4,8.2-23.7,4.5-18.1-8.5-22.9-13.6-9.1-8.3-9.1-8.3h-2.6l-25.4-26.2s-3.6-4.7-10-10.5-12.8-11.5-17.7-14.9-27.7-19.2-27.7-19.2c0,0,3.8-5,5.7-9.9s3.4-5.4,2.2-10.2-7.2-7-9-12.8c-5.3-2.6,9.3-.7,9.3-.7Z"
            />
          </g>
          <g
            id="Layer_4"
            data-name="Layer 4"
            className={`relative transition-all cursor-pointer hover:opacity-100 ${
              hoveredSoilId === "rocky-colluvial" ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => showDetailsDialog("rocky-colluvial")}
          >
            <path
              className="cls-6"
              fill="#82261b"
              d="M778.9,975.3c-.4,6.3-4.3,18.8,5.9,19.6,10.2.8,17.2,2.7,21.6,0,4.3-2.7,10.6-6,7.9-9.1s-6.2-8.9-10-12.9-14.3-10.5-13.6-17.2,4-23.9,13.6-23.2,16.2,1.6,20.9,9.4c4.7,7.8,13.7,22.5,16.9,26.7,3.1,4.2,6.3,7,13.7,6.6,7.4-.4,14.2-7.2,14.2-7.2,0,0-20.3-6.2-23.9-13.6-3.6-7.4-9.9-21.2-18.1-34.9-8.2-13.7-16.9-28.2-27.4-34.9-10.6-6.7-18.7-14.5-23.7-9-4.9,5.5,3.3,26.1,3.3,26.1,0,0,6.7,16.3,7.1,26.5.4,10.2-.8,29.8-2,35.3s-6.3,11.8-6.3,11.8h0Z"
            />
          </g>
          <g
            id="Layer_6"
            data-name="Layer 6"
            className={`relative transition-all cursor-pointer hover:opacity-100 ${
              hoveredSoilId === "balanced-fluvial" ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => showDetailsDialog("balanced-fluvial")}
          >
            <path
              className="cls-1"
              fill="#edc271"
              d="M711.3,756.7c0-2,0-8,1.9-11.1-2.1-1.3-4.8-2.6-7.8-3.2-7.3-1.4-17.3.4-20.8-7.1-1.4-3-5-7.4-8.7-11.5-.2.5-.6.5-1.2,0-22.7-15.7-42.3-22.3-71.2-30.2-28.8-7.8-42.5-12.5-62.1-20.8-18.3-7.7-42.9-39.8-45.9-43.9l-14.6,19.6,3.2,4.4,3.9,5.6c3.9,5.6,7.4,9.7,14.9,19.1,7.4,9.4,25.5,13.3,35.7,20.8,10.2,7.4,21.2,9,30.2,10.2,9,1.2,14.5,3.6,25.7,6.7,11.2,3.1,28.4,3.1,39.3,5.3,11,2.2,8.6,3.7,16.1,8.4,7.5,4.7,8.2,9.8,16.4,16.5,8.2,6.7,17.2,10.6,23.9,12.2,6.7,1.6,11.8-.4,21.2-.4s3.1.3,4.4.8c0,0,0-.1,0-.2-1.4-.7-2.9-1.1-4.5-1.3h0Z"
            />
          </g>
          <g
            id="Layer_7"
            data-name="Layer 7"
            className={`relative transition-all cursor-pointer hover:opacity-100 ${
              hoveredSoilId === "intrusive-granodiorite"
                ? "opacity-100"
                : "opacity-0"
            }`}
            onClick={() => showDetailsDialog("intrusive-granodiorite")}
          >
            <path
              className="cls-4"
              fill="#d88335"
              d="M711.1,1004.9s.5,5.9,4.2,9.4c3.8,3.5,10.9,4.6,13.6,6.8,5.2,4.4,5,12.1,9.7,14.1,4.7,2.1,13.3,10.4,19.6,12s10.2,5.5,14.9,4.7,9.3-1.8,16.1-3.1c6.9-1.3,30-4.7,30.3-7.6s-12-10.7-19.6-13.2-31.4-7.1-36.2-8.8-16.3-4.6-22-7c-5.7-2.4-7.6-6.3-14.9-7.3s-15.7,0-15.7,0h0Z"
            />
          </g>
          <g
            id="Layer_8"
            data-name="Layer 8"
            className={`relative transition-all cursor-pointer hover:opacity-100 ${
              hoveredSoilId === "intrusive-andesitic-porphyry"
                ? "opacity-100"
                : "opacity-0"
            }`}
            onClick={() => showDetailsDialog("intrusive-andesitic-porphyry")}
          >
            <path
              className="cls-2"
              fill="#cb512a"
              d="M976.9,598.1h11s4.9-.6,12.9-5.8c8-5.2,10.6-5.6,12.5-6.5,2-1,5.9-2.7,5.7-5.9s.8-8.4-4.5-7.4c-5.3.9-32.5-.8-42.9,2.7-10.4,3.5-16.7,6.1-19.2,7.8s-1.2,3.3,2.7,4.9c3.9,1.6,4.3,4.6,4.5,5.3s17.2,4.8,17.2,4.8h0Z"
            />
          </g>
        </svg>
      </div>

      <SoilDetailsDialog
        open={!!activeSoil}
        onClose={closeDialog}
        title={activeSoil?.title ?? ""}
        description={activeSoil?.description ?? ""}
        image={activeSoil?.image ?? ""}
      />
    </div>
  );
}

{
}
