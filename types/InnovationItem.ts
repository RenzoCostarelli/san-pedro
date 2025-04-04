import { StaticImageData } from "next/image";

interface ItemProps {
  label: string;
  value: string;
}

export interface InnovationItemsProps {
  title: string;
  image: StaticImageData;
  items: ItemProps[];
}
