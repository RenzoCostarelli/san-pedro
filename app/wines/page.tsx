import BorderedParagraph from "@/components/bordered-paragraph";
import Hero from "@/components/hero";
import WinesSlider from "@/components/wines-slider";

import heroImg from "@/public/images/wines/hero_vinos.jpg";
import { winesList } from "./wines-list";

export default function WineMakingPage() {
  const wines = winesList;
  return (
    <>
      <Hero image={heroImg}>
        <div className="flex">
          <div className="container max-w-[1100px] mx-auto relative z-50">
            <h1 className="font-alegreya-sans text-5xl md:text-6xl xl:text-8xl text-gold-light">
              Wines
            </h1>
            <div className="h-2 w-8 bg-white"></div>
          </div>
        </div>
      </Hero>
      <section className="bg-blue-dark py-15 md:px-0 px-5">
        <div className="container max-w-[1100px] mx-auto">
          <BorderedParagraph>
            Unique and elegant wines with a full sense of place.
          </BorderedParagraph>
        </div>
      </section>
      {wines.map((wine, index) => (
        <section
          className="bg-blue-dark py-15 md:px-0 px-5 even:bg-blue"
          key={index}
        >
          <WinesSlider wineData={wine} />
        </section>
      ))}
    </>
  );
}
