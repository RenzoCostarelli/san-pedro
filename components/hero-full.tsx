"use client";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
interface HeroProps {
  title?: string;
  image: StaticImageData;
  children: ReactNode;
  paragraph: {
    variant?: "light" | "dark";
    text: string;
    secondaryText?: string;
    image?: StaticImageData;
  };
}

export default function Hero({ title, image }: HeroProps) {
  return (
    <div className="h-svh w-full bg-gold relative grid items-center md:-mt-25">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover w-full h-full inset-0"
        unoptimized
      />
      {title && (
        <div className="container max-w-[1100px] mx-auto relative z-50">
          <h1 className="font-alegreya-sans text-8xl">{title}</h1>
          <div className="h-2 w-8 bg-white"></div>
        </div>
      )}
    </div>
  );
}
