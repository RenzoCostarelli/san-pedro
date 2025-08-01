import BorderedParagraph from "@/components/bordered-paragraph";
import Hero from "@/components/hero";
import InnovationIitemsList from "@/components/innovation-items-list";

import TitleSection from "@/components/title-section";
import heroImg from "@/public/images/winemaking-header.jpg";

import { InnovationItemsProps } from "@/types/InnovationItem";
import graniteImg from "@/public/images/winemaking/granite_egg.png";
import rotatinGalileoImg from "@/public/images/winemaking/rotating_galileo.png";
import staticGalileoImg from "@/public/images/winemaking/static_galileo.png";
import ceramicEggoImg from "@/public/images/winemaking/ceramic_egg.png";
import italianClayImg from "@/public/images/winemaking/amphorae.png";
import cocciopestoImg from "@/public/images/winemaking/cocciopesto.png";
import doliumImg from "@/public/images/winemaking/dolium.png";
import nicoveloImg from "@/public/images/winemaking/nicovelo_tulip.png";

const InnovationItems: InnovationItemsProps[] = [
  {
    title: "GRANITE EGG",
    image: graniteImg,
    items: [
      {
        label: "Quantity in the cellar:",
        value: "1",
      },
      {
        label: "Capacity:",
        value: "1700 liters",
      },
      {
        label: "Highlight:",
        value:
          "it features a unique reductive capacity, maintaining tension and long tannins on the palate.",
      },
      {
        label: "Varieties used for aging: ",
        value: "Cabernet Franc",
      },
    ],
  },
  {
    title: "ROTATING GALILEO",
    image: rotatinGalileoImg,
    items: [
      {
        label: "Quantity in the cellar:",
        value: "1",
      },
      {
        label: "Capacity:",
        value: "1500 liters",
      },
      {
        label: "Highlight:",
        value:
          "winemaking is possible without the intervention of electrical energy; instead, solid parts (pomace) or lees can be kept in contact through the movement of the Galileo by the gear and crank system it has, which aids in aging to round out tannins, impart fatness, and add weight on the palate.",
      },
      {
        label: "Varieties used for aging: ",
        value: "Cabernet Sauvignon and Cabernet Franc",
      },
    ],
  },
  {
    title: "STATIC GALILEO",
    image: staticGalileoImg,
    items: [
      {
        label: "Quantity in the cellar:",
        value: "1",
      },
      {
        label: "Capacity:",
        value: "3000 liters",
      },
      {
        label: "Highlight:",
        value:
          "it is one of the recipients with the highest thermal inertia we have in our cellar (less energy exchange with the environment); furthermore, it has a very low oxidative level, ideal for keeping the wine fresh and alive.",
      },
      {
        label: "Varieties used for aging: ",
        value: "Cabernet Sauvignon",
      },
    ],
  },
  {
    title: "CERAMIC EGG",
    image: ceramicEggoImg,
    items: [
      {
        label: "Quantity in the cellar:",
        value: "6",
      },
      {
        label: "Capacity:",
        value: "300 liters",
      },
      {
        label: "Highlight:",
        value:
          "this recipient is more oxidative, which is ideal for the evolution and polymerization of tannins.",
      },
      {
        label: "Varieties used for aging: ",
        value: "Carmenere",
      },
    ],
  },
  {
    title: "ITALIAN CLAY",
    image: italianClayImg,
    items: [
      {
        label: "Quantity in the cellar:",
        value: "6",
      },
      {
        label: "Capacity:",
        value: "300 to 1600 liters",
      },
      {
        label: "Highlight:",
        value: "more oxidative container, shorter aging, around 12 months.",
      },
      {
        label: "Varieties used for aging: ",
        value: "Cabernet Sauvignon",
      },
    ],
  },
  {
    title: "COCCIOPESTO",
    image: cocciopestoImg,
    text: "Clay with lime a quartz",
    subtext: "(material used to build aqueducts in the Roman Empire)",
    items: [
      {
        label: "Quantity in the cellar:",
        value: "3",
      },
      {
        label: "Capacity:",
        value: "1800 liters",
      },
      {
        label: "Highlight:",
        value:
          "brings tension, freshness, and length on the palate to the wines. Varieties used for aging: cabernet Sauvignon",
      },
      {
        label: "Varieties used for aging: ",
        value: "Cabernet Sauvignon",
      },
    ],
  },
  {
    title: "DOLIUM",
    image: doliumImg,
    items: [
      {
        label: "Quantity in the cellar:",
        value: "3",
      },
      {
        label: "Capacity:",
        value: "1300 liters",
      },
      {
        label: "Highlight:",
        value:
          "Inverted egg, ideal for aging Syrah, preserving the fruit in the wine and its characteristic",
      },
      {
        label: "Varieties used for aging: ",
        value: "Syrah",
      },
    ],
  },
  {
    title: "NICOVELO TULIP",
    image: nicoveloImg,
    items: [
      {
        label: "Quantity in the cellar:",
        value: "24",
      },
      {
        label: "Capacity:",
        value: "4000 and 6000 liters",
      },
      {
        label: "Highlight:",
        value:
          "The material, concrete, and the wall-heating design of these tanks help ensure that fermentations are highly controlled and natural. The temperature gradually increases and remains stable, around 24 degrees throughout the entire fermentation, which facilitates optimal extraction during this process and makes it more sustainable (less thermal energy is used during fermentation)",
      },
      {
        label: "Varieties used for aging: ",
        value: "Cabernet Sauvignon",
      },
    ],
  },
];

export default function WineMakingPage() {
  return (
    <>
      <Hero image={heroImg}>
        <div className="flex">
          <div className="container max-w-[1100px] mx-auto relative z-50">
            <h1 className="font-alegreya-sans text-5xl md:text-6xl xl:text-8xl text-gold-light">
              Winemaking
            </h1>
            <div className="h-2 w-8 bg-white"></div>
          </div>
        </div>
      </Hero>
      <section className="bg-blue-dark py-15 md:px-0 px-5">
        <div className="container max-w-[1100px] mx-auto">
          <BorderedParagraph variant="dark">
            We employ state-of-the-art technologies to enhance the quality of
            our wine production, while also showing our origins honestly and as
            purely as possible.
          </BorderedParagraph>
        </div>
      </section>
      <section className="bg-blue py-15 md:px-0 px-5 relative">
        <div className="container max-w-[1100px] mx-auto">
          <TitleSection>
            <span className="text-white">Cutting-edge </span>
            fermentation vessels
          </TitleSection>
          <div className="py-10">
            <InnovationIitemsList innovationItem={InnovationItems[7]} />
          </div>
        </div>
      </section>
      <section className="bg-blue-dark py-15 md:px-0 px-5 relative">
        <div className="container max-w-[1100px] mx-auto">
          <TitleSection>
            Cutting-edge
            <span className="text-white"> ageing vessels</span>
          </TitleSection>

          <div className="py-10">
            <InnovationIitemsList innovationItem={InnovationItems[0]} />
          </div>
        </div>
      </section>
      <section className="bg-blue py-15 md:px-0 px-5 relative">
        <div className="container max-w-[1100px] mx-auto">
          <div className="py-10">
            <InnovationIitemsList
              innovationItem={InnovationItems[1]}
              direction="ltr"
            />
          </div>
        </div>
      </section>
      <section className="bg-blue-dark py-15 md:px-0 px-5 relative">
        <div className="container max-w-[1100px] mx-auto">
          <div className="py-10">
            <InnovationIitemsList innovationItem={InnovationItems[2]} />
          </div>
        </div>
      </section>
      <section className="bg-blue py-15 md:px-0 px-5 relative">
        <div className="container max-w-[1100px] mx-auto">
          <div className="py-10">
            <InnovationIitemsList
              innovationItem={InnovationItems[3]}
              direction="ltr"
            />
          </div>
        </div>
      </section>
      <section className="bg-blue-dark py-15 md:px-0 px-5 relative">
        <div className="container max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-3">
              <InnovationIitemsList
                sectionTitle="AMPHORAE"
                innovationItem={InnovationItems[4]}
                direction="ltr"
                titleWhite
              />
            </div>
            <div className="md:col-span-3 md:col-start-2 md:row-start-2">
              <InnovationIitemsList
                innovationItem={InnovationItems[5]}
                direction="ltr"
                titleWhite
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue py-15 md:px-0 px-5 relative">
        <div className="container max-w-[1100px] mx-auto">
          <div className="py-10">
            <InnovationIitemsList
              innovationItem={InnovationItems[6]}
              direction="ltr"
            />
          </div>
        </div>
      </section>
    </>
  );
}
