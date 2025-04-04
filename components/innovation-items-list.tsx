import { InnovationItemsProps } from "@/types/InnovationItem";
import DashedTitle from "./title-decorated";
import Image from "next/image";

export default function InnovationIitemsList({
  sectionTitle,
  titleWhite = false,
  direction = "rtl",
  innovationItem,
}: {
  sectionTitle?: string;
  titleWhite?: boolean;
  direction?: "ltr" | "rtl";
  innovationItem: InnovationItemsProps;
}) {
  return (
    <>
      <div className="grid md:grid-cols-2">
        <div className={direction === "ltr" ? "order-2" : "order-1"}>
          {sectionTitle && <DashedTitle>{sectionTitle}</DashedTitle>}
          <DashedTitle>
            <span className={`${titleWhite && "text-white text-base"}`}>
              {innovationItem.title}
            </span>
          </DashedTitle>
          {innovationItem.items.map((item, index) => (
            <div key={index}>
              <span className="text-gold">{item.label} </span>
              {item.value}
            </div>
          ))}
        </div>
        <div
          className={direction && direction === "ltr" ? "order-1" : "order-2"}
        >
          <Image
            src={innovationItem.image}
            alt={`${innovationItem.title} image`}
            className="max-h-[400px] object-contain"
          />
        </div>
      </div>
    </>
  );
}
