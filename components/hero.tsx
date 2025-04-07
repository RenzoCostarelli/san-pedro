"use client";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
interface HeroProps {
  title?: string;
  image: StaticImageData;
  children: ReactNode;
}

export default function Hero({ image, children }: HeroProps) {
  return (
    <div className="h-screen md:h-[95svh] w-full bg-gold relative grid items-center px-5 md:px-0">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover w-full h-full inset-0"
        unoptimized
      />
      <div className="container max-w-[1100px] mx-auto relative z-50">
        {children}
      </div>
      <div className="absolute bg-gradient-to-t from-blue-dark to-transparent to-30% w-full h-full bottom-0 pointer-events-none"></div>
    </div>
  );
}
