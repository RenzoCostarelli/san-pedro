import { WineShowcaseProps } from "@/types/wines";
import altairLogo from "@/public/images/wines/altair_logo.png";
import altairBottle from "@/public/images/wines/altair_bottle.png";
import caboLogo from "@/public/images/wines/cabo_logo.png";
import caboBottle from "@/public/images/wines/cabo_bottle.png";
import sideralLogo from "@/public/images/wines/sideral_logo.png";
import sideralBottle from "@/public/images/wines/sideral_bottle.png";
import block1 from "@/public/images/3d/Bloque01.png";
import block3 from "@/public/images/3d/Bloque03.png";
import block5 from "@/public/images/3d/Bloque05.png";
import block09 from "@/public/images/3d/Bloque09.png";
import block10 from "@/public/images/3d/Bloque10.png";
import block11 from "@/public/images/3d/Bloque11.png";

export const winesList: WineShowcaseProps[] = [
  {
    wineName: "Altair",
    region: "Cachapoal Andes",
    tagline: "The brighter star of the andes",
    description:
      "The strength of the Andes Mountain Range is embodied in our iconic wine blend, which stands out for its unparalleled quality and elegance. Altair is the brightest star in our fine wine portfolio, a blend that reflects the finest grapes of the vintage, selected from the varieties and vineyard polygons that really shone in that year.",
    disclaimer:
      "Production is limited and varies according to the year's weather conditions.",
    wineType: "Cabernet Sauvignon Blend",
    wineBottleImage: altairBottle,
    wineLogoImage: altairLogo,
    sliderImages: [block1, block5, block11],
    soilUrl: [
      "https://www.ciudadesferica.com/demo/sanpedrocachapoal/?startscene=3",
      "https://www.ciudadesferica.com/demo/sanpedrocachapoal/?startscene=4",
      "https://www.ciudadesferica.com/demo/sanpedrocachapoal/?startscene=2",
    ],
    sliderTabs: [
      { label: "Balanced Coluvial", value: "balancedcoluvial" },
      { label: "Fine Coluvial", value: "finecoluvial" },
      { label: "Rocky Coluvial", value: "rockycoluvial" },
    ],
    defaultTab: "balancedcoluvial",
  },
  {
    wineName: "Cabo de Hornos",
    region: "The pure expression of Cachapoal Andes",
    tagline: "The pure expression of Cachapoal Andes",
    description:
      "The grapes are planted in the Cachapoal Andes Valley, in the foothills of the Andes Mountain Range, and are affected by winds that come down from the mountains, resulting in cold ripening and a concentrated wine of great character.",
    disclaimer: "Limited production.",
    wineType: "100% Cabernet Sauvignon",
    wineBottleImage: caboBottle,
    wineLogoImage: caboLogo,
    sliderImages: [block1, block5],
    soilUrl: [
      "https://www.ciudadesferica.com/demo/sanpedrocachapoal/?startscene=3",
      "https://www.ciudadesferica.com/demo/sanpedrocachapoal/?startscene=4",
    ],
    sliderTabs: [
      { label: "Balanced Coluvial", value: "balancedcoluvial" },
      { label: "Balanced Fluvial", value: "balancedfluvial" },
    ],
    defaultTab: "balancedcoluvial",
  },
  {
    wineName: "Sideral",
    region: "A constellation of exceptional taste",
    tagline: "A constellation of exceptional taste",
    description:
      "Sideral is a blend in which the five estate varieties come together in harmony to faithfully represent the rich terroir diversity of the Cachapoal Andes Valley. In this wine, the winemaker aims to bring out the natural conditions endowed by the vineyard’s location in the Andean foothills",
    disclaimer:
      "Blend: Cabernet Sauvignon | Cabernet Franc | Carmenère | Syrah | Petit Verdot",
    wineBottleImage: sideralBottle,
    wineLogoImage: sideralLogo,
    sliderImages: [block1, block3, block5, block10, block11, block09],
    soilUrl: [
      "https://www.ciudadesferica.com/demo/sanpedrocachapoal/?startscene=3",
      "https://www.ciudadesferica.com/demo/sanpedrocachapoal/?startscene=6",
      "https://www.ciudadesferica.com/demo/sanpedrocachapoal/?startscene=4",
      "https://www.ciudadesferica.com/demo/sanpedrocachapoal/?startscene=5",
      "https://www.ciudadesferica.com/demo/sanpedrocachapoal/?startscene=2",
      "https://www.ciudadesferica.com/demo/sanpedrocachapoal/?startscene=11",
    ],
    sliderTabs: [
      { label: "Balanced Coluvial", value: "balancedcoluvial" },
      {
        label: "Intrusive Andesitic Porphyry",
        value: "intrusiveandesiticporphyry",
      },
      { label: "Fine Coluvial", value: "finecoluvial" },
      { label: "Balanced Fluvial", value: "balancedfluvial" },
      { label: "Rocky Coluvial", value: "rockycoluvial" },
      {
        label: "Fluvial With Matrix Dominance",
        value: "fluvialwithmatrixdominance",
      },
    ],
    defaultTab: "balancedcoluvial",
  },
];
