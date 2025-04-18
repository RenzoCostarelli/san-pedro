// components/SoilDetailsDialog.tsx
"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
};

export default function SoilDetailsDialog({
  open,
  onClose,
  title,
  description,
  image,
}: Props) {
  console.log(image);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/10 flex items-start justify-start pt-32 pl-32">
      <div className="bg-blue p-6 max-w-md text-white relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white text-xl"
        >
          ✕
        </button>
        <h2 className="text-2xl text-gold tracking-widest font-alegreya-sans mb-2 uppercase">
          {title}
        </h2>
        <p className="mb-4 font-alegreya-sans tracking-wide text-gold-light leading-8 font-light">
          {description}
        </p>
        {/* <img src={image} alt={title} className="w-full h-auto rounded-md" /> */}
      </div>
    </div>
  );
}
