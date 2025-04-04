"use client";
import { ReactNode } from "react";

export default function TitleSection({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-gold font-alegreya-sans font-medium text-6xl">
      {children}
    </h2>
  );
}
