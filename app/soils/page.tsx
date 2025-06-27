import BorderedParagraph from "@/components/bordered-paragraph";
import Hero from "@/components/hero";
import TitleSection from "@/components/title-section";
import heroImg from "@/public/images/soils-header.jpg";

import SoilsMap from "@/components/soils-map";
import SoilsImageDialog from "@/components/soils-image-dialog";

export default function SoilsPage() {
  return (
    <>
      <Hero image={heroImg}>
        <div className="flex">
          <div className="container max-w-[1100px] mx-auto relative z-50">
            <h1 className="font-alegreya-sans text-5xl md:text-6xl xl:text-8xl text-gold-light">
              Soils
            </h1>
            <div className="h-2 w-8 bg-white"></div>
          </div>
        </div>
      </Hero>
      <section className="bg-blue-dark py-15 md:px-0 px-5">
        <div className="container max-w-[1100px] mx-auto">
          <BorderedParagraph>
            The ideal combination of alluvial and colluvial soils and the
            diversity of basal rocks and cood drainage soils creates perfect
            conditions for the finest wines of Viña San Pedro.
          </BorderedParagraph>
        </div>
      </section>
      <section className="bg-blue py-15 md:px-0 px-5 relative">
        <div className="container max-w-[1100px] mx-auto">
          <h2 className="text-4xl text-gold font-alegreya-sans font-medium">
            An in-depth understanding of our soils has been a constant concern
            for our team, leading us to conduct several studies over the years.
          </h2>
          <SoilsImageDialog />
        </div>
        <div className="bg-blue-dark w-full bottom-0 py-10 absolute"></div>
      </section>
      <section className="bg-blue-dark pt-15 md:px-0 px-5 ">
        <div className="container max-w-[1100px] mx-auto">
          <span className="font-alegreya-sans tracking-widest text-gold text-2xl font-light">
            DIVERSITY OF SOILS IN CACHAPOAL ANDES:
          </span>
          <h2 className="text-gold font-alegreya font-medium text-3xl md:text-[2.05rem]">
            <span className="text-white">7 Main types,</span> 3 Uniques Wine
            Profiles
          </h2>
        </div>
        <div className="w-full">
          <SoilsMap />
        </div>
      </section>
      <section className="bg-blue pt-15 md:px-0 px-5">
        <div className="container max-w-[1100px] mx-auto">
          <TitleSection>
            <span className="text-white">360º</span> Views
          </TitleSection>
        </div>
        <div className="w-full md:h-[700px] mt-15">
          <iframe
            src="https://www.ciudadesferica.com/demo/sanpedrocachapoal/"
            style={{ width: "100%", height: "100%", border: 0 }}
          ></iframe>
        </div>
      </section>
    </>
  );
}
