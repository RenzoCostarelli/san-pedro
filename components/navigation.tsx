"use client";

import Image from "next/image";
import NavItem from "./nav-item";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Navigation() {
  const mobileNavRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className="md:hidden block fixed bottom-5 right-5 z-50"
        onClick={() => setIsMenuOpen(true)}
      >
        <div className="bg-black/80 rounded-md h-10 w-10 flex items-center justify-center">
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
            <path d="M3 12h18" />
            <path d="M3 18h18" />
            <path d="M3 6h18" />
          </svg>
        </div>
      </div>
      <div className="md:block hidden w-full bg-[#000000b3] z-90 fixed -top-[1px] backdrop-blur-sm">
        <div className="container max-w-[1100px] mx-auto py-5">
          <nav>
            <div className="flex md:flex-row flex-col items-center justify-between">
              <NavItem href="/climate" label="CLIMATE" />
              <NavItem href="/soils" label="SOILS" />
              <NavItem href="/blocks" label="BLOCKS" />
              <Link href={"/"}>
                <Image
                  src={"/images/logo-home.png"}
                  alt="San Pedro logo"
                  width={200}
                  height={40}
                  className="mx-7"
                  unoptimized
                />
              </Link>
              <NavItem href="/winemaking" label="WINEMAKING" />
              <NavItem href="/wines" label="WINES" />
              <NavItem href="/sustainability" label="SUSTAINABILITY" />
            </div>
          </nav>
        </div>
      </div>
      {/* MENU MOBILE */}
      <div
        className={`md:hidden fixed h-full w-full bg-[#000000b3] z-90 block  transition-transform backdrop-blur-sm ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        ref={mobileNavRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="container max-w-[1100px] mx-auto py-5">
          <nav>
            <div className="flex md:flex-row flex-col items-center justify-between">
              <Link href={"/"}>
                <Image
                  src={"/images/logo-home.png"}
                  alt="San Pedro logo"
                  width={200}
                  height={40}
                  className="mx-7"
                  unoptimized
                />
              </Link>
              <NavItem href="/climate" label="CLIMATE" />
              <NavItem href="/soils" label="SOILS" />
              <NavItem href="/blocks" label="BLOCKS" />
              <NavItem href="/winemaking" label="WINEMAKING" />
              <NavItem href="/wines" label="WINES" />
              <NavItem href="/sustainability" label="SUSTAINABILITY" />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
