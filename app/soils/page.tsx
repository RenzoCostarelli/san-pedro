import BorderedParagraph from "@/components/bordered-paragraph";
import Hero from "@/components/hero";
import TitleSection from "@/components/title-section";
import heroImg from "@/public/images/soils-header.jpg";
import mappingImg from "@/public/images/electrical-conductivity-mapping.jpg";
import Image from "next/image";
import SoilsMap from "@/components/soils-map";

export default function SoilsPage() {
  return (
    <>
      <Hero image={heroImg}>
        <div className="flex">
          <div className="container max-w-[1100px] mx-auto relative z-50">
            <h1 className="font-alegreya-sans text-8xl">Soils</h1>
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
          <div className="grid md:grid-cols-3 grid-cols-1 mt-15 relative z-10">
            <div className="md:col-span-2">
              <p className="font-light tracking-wider font-sans leading-8  pr-10">
                The detailed geological investigation of 23 points, primarily
                soil pits ranging from 1.5 to 2 meters deep strategically
                located among the rows of currently productive blocks and some
                in areas with potential for future projects, along with cuts
                across roads and other observations beneath the surface,
                combined with the study of relevant literature and analysis of
                digital resources such as satellite imagery, digital elevation
                models and electromagnetic conductivity maps allows us to define
                7 in general soil units present in Cachapoal Andes State.
              </p>
              <div className="h-[1px] mt-20 bg-gold-light w-full opacity-50"></div>
            </div>

            <div>
              <div className="bg-gold text-white text-center uppercase py-2">
                Electrical conductivity mapping (150cm)
              </div>
              <Image
                src={mappingImg}
                width={800}
                height={800}
                className="w-full"
                alt="Electrical Conductivityyy Mapping Image"
                unoptimized
              />
            </div>
          </div>
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
