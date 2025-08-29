"use client";

import { useState, useRef, useEffect } from "react";
import mappingImg from "@/public/images/electrical-conductivity-mapping.jpg";
import Image from "next/image";

export default function SoilsImageDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) return;

    if (isDialogOpen) {
      dialogElement.showModal();
    } else {
      dialogElement.close();
    }
  }, [isDialogOpen]);

  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) return;

    const handleClose = () => {
      setIsDialogOpen(false);
    };

    dialogElement.addEventListener("close", handleClose);

    return () => {
      dialogElement.removeEventListener("close", handleClose);
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === dialogRef.current) {
      setIsDialogOpen(false);
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-15 relative z-10">
        <div className="md:col-span-1">
          <p className="font-light tracking-wider font-sans leading-8 pr-10 text-white">
            The detailed geological investigation of 23 points, primarily soil
            pits ranging from 1.5 to 2 meters deep strategically located among
            the rows of currently productive blocks and some in areas with
            potential for future projects, along with cuts across roads and
            other observations beneath the surface, combined with the study of
            relevant literature and analysis of digital resources such as
            satellite imagery, digital elevation models and electromagnetic
            conductivity maps allows us to define 7 in general soil units
            present in Cachapoal Andes State.
          </p>
          <div className="h-[1px] mt-20 bg-gold-light w-full opacity-50"></div>
        </div>

        <div>
          <div className="bg-gold text-white text-center uppercase py-2">
            Electrical conductivity mapping (150cm)
          </div>
          <Image
            onClick={() => setIsDialogOpen(true)}
            src={mappingImg}
            width={800}
            height={800}
            className="w-full cursor-pointer"
            alt="Electrical Conductivity Mapping Image"
            unoptimized
          />
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="rounded-lg p-0 shadow-lg backdrop:bg-black/50 m-auto inset-0 fixed"
        onClick={handleBackdropClick}
      >
        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={() => setIsDialogOpen(false)}
            className="absolute top-2 right-2 bg-white rounded-full p-1 text-gray-800 focus:outline-none z-10 cursor-pointer shadow-md"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="p-2 rounded-lg">
            <div>
              <div className="text-center uppercase py-2 w-max mx-auto px-5 font-bold">
                Electrical conductivity mapping (150cm)
              </div>
              <Image
                src={mappingImg}
                width={1200}
                height={1200}
                alt="Electrical Conductivity Mapping Image"
                unoptimized
              />
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
