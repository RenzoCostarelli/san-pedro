"use client";
import { ReactNode } from "react";

export default function TitleSection({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-gold font-alegreya font-medium text-3xl md:text-4xl lg:text-6xl">
      {children}
    </h2>
  );
}
