"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BlocksMap from "./blocks-map";
import { blocks } from "@/data/varietyBlocks";
const filtersData = {
  brands: ["Altair", "Cabo de Hornos", "Sideral"],
  varieties: [
    "CS: Cabernet Sauvignon",
    "CF: Cabernet Franc",
    "SY: Syrah",
    "TN: Touriga Nacional",
    "CAR: Carmenere",
    "PV: Petit Verdot",
    "MOUR: Mourvedre",
  ],
};

export default function BlocksArea() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedVariety, setSelectedVariety] = useState<string | null>(null);

  const [activeBlockIds, setActiveBlockIds] = useState<string[]>([]);

  useEffect(() => {
    const filtered = blocks.filter((b) => {
      const brandOk = !selectedBrand || b.brands.includes(selectedBrand);
      const varietyOk =
        !selectedVariety || b.varieties.includes(selectedVariety);
      return brandOk && varietyOk;
    });
    setActiveBlockIds(filtered.map((b) => b.id));
  }, [selectedBrand, selectedVariety]);
  const brandLogos: Record<string, string> = {
    Altair: "/images/wines/altair_logo.png",
    "Cabo de Hornos": "/images/wines/cabo_logo.png",
    Sideral: "/images/wines/sideral_logo.png",
  };

  function selectBrandHandler(item: string | null) {
    if (item !== selectedBrand) {
      setSelectedBrand(item);
    } else {
      setSelectedBrand(null);
    }
  }
  function selectVarietyHandler(item: string | null) {
    if (item !== selectedVariety) {
      setSelectedVariety(item);
    } else {
      setSelectedVariety(null);
    }
  }

  const FilterList = ({
    type,
    items,
    selected,
    setSelected,
  }: {
    type: "V" | "B"; // v: variety | b: brands

    items: string[];
    selected: string | null;
    setSelected: (v: string | null) => void;
  }) => (
    <div className="mb-8">
      <ul className="flex flex-col gap-2">
        {type === "B" && (
          <>
            {items.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setSelected(item)}
                  className={`relative p-4 border border-gold rounded-2xl cursor-pointer text-gold-light uppercase whitespace-nowrap flex items-center gap-2 ${
                    selected !== item ? "border-transparent" : ""
                  }`}
                >
                  <Image
                    src={brandLogos[item]}
                    alt={item}
                    className="h-auto w-30 object-contain"
                    width={280}
                    height={280}
                  />
                </button>
              </li>
            ))}
          </>
        )}
        {type === "V" && (
          <>
            {items.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setSelected(item)}
                  className={`px-3 py-1 border-1 border-gold transition-all rounded-full cursor-pointer text-gold-light uppercase whitespace-nowrap ${
                    selected !== item
                      ? "border-transparent hover:text-white"
                      : ""
                  }`}
                >
                  <span className="font-bold text-gold">
                    {item.split(":")[0]}
                  </span>
                  {":"}
                  <span className="text-gold-light">{item.split(":")[1]}</span>
                </button>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );

  return (
    <div className="grid grid-cols-12">
      <div className="place-content-center col-span-12 md:col-start-2 md:col-span-2 md:row-start-1 p-4 z-10">
        <div className="mb-4">
          <FilterList
            items={filtersData.brands}
            selected={selectedBrand}
            setSelected={selectBrandHandler}
            type={"B"}
          />
        </div>
        <FilterList
          items={filtersData.varieties}
          selected={selectedVariety}
          setSelected={selectVarietyHandler}
          type={"V"}
        />
      </div>
      <div className="relative h-max self-end col-span-12 md:col-span-10 md:col-start-3 md:row-start-1">
        <BlocksMap activeBlockIds={activeBlockIds} />
      </div>
    </div>
  );
}
