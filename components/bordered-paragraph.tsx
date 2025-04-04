"use client";

import { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface BorderedParagraphProps {
  children: ReactNode;
  variant?: "light" | "dark";
  secondaryText?: string;
  image?: StaticImageData;
}

export default function BorderedParagraph({
  children,
  variant = "light",
  secondaryText,
  image,
}: BorderedParagraphProps) {
  return (
    <div
      className={`border-l-4 p-5 text-gold-light text-2xl font-alegreya-sans ${
        variant === "light" ? "border-gold" : "border-blue"
      } ${secondaryText || image ? "md:grid-cols-2" : "grid-cols-1"}`}
    >
      <p className="uppercase font-light italic">{children}</p>
    </div>
  );
}
