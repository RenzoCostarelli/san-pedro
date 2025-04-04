"use client";

import Image from "next/image";
import NavItem from "./nav-item";

export default function Navigation() {
  return (
    <div className="w-full bg-[#000000b3] z-50 relative">
      <div className="container mx-auto py-5">
        <nav>
          <div className="flex md:flex-row flex-col items-center justify-between">
            <NavItem href="/climate" label="CLIMATE" />
            <NavItem href="/soils" label="SOILS" />
            <NavItem href="/blocks" label="BLOCKS" />
            <Image
              src={"/images/logo.png"}
              alt="San Pedro logo"
              width={200}
              height={40}
              className="mx-7"
            />
            <NavItem href="/winemaking" label="WINEMAKING" />
            <NavItem href="/wines" label="WINES" />
            <NavItem href="/sustainability" label="SUSTAINABILITY" />
          </div>
        </nav>
      </div>
    </div>
  );
}
