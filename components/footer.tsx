"use client";

import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-blue-dark text-white py-10">
      <div className="container mx-auto flex items-center justify-center gap-5">
        <Image
          src={"/images/logo-home.png"}
          alt="San Pedro logo"
          width={150}
          height={25}
          unoptimized
        />
        <div className="w-[1px] bg-gold h-10"></div>
        <div>Unique and elegant wines with a full sense of place.</div>
      </div>
    </footer>
  );
}
