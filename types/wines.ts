import { StaticImageData } from "next/image";

export interface WineShowcaseProps {
  wineName: string; // e.g., "Altair"
  region: string; // e.g., "Cachapoal Andes"
  tagline: string; // e.g., "The brighter star of the andes"
  description: string; // main paragraph text
  disclaimer?: string; // optional smaller text at the bottom
  wineBottleImage: StaticImageData; // URL or static import path
  wineLogoImage: StaticImageData; // URL or static import path
  sliderImages: StaticImageData[]; // array of 3 image URLs for the slider
  sliderTabs: {
    label: string;
    value: string;
  }[]; // e.g., [{ label: 'Alluvial', value: 'alluvial' }, { label: 'Colluvial', value: 'colluvial' }]
  defaultTab: string; // e.g., 'alluvial'
}
