import BorderedParagraph from "@/components/bordered-paragraph";
import Hero from "@/components/hero";
import TitleSection from "@/components/title-section";
import UniqueArea from "@/components/unique-area";
import heroImg from "@/public/images/hero-home.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero image={heroImg}>
        <div className="flex flex-col items-center z-50 relative">
          <Image src="/images/logo-home.png" alt="" width={300} height={100} />
          <p>
            An exceptional terroir, at the foothills of the Andes,
            <br />
            shaped by millions of years of earthquakes and volcanic activity.
          </p>
        </div>
      </Hero>
      <section className="bg-blue-dark py-15 md:px-0 px-5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 place-items-center gap-5">
            <BorderedParagraph>
              CACHAPOAL ANDES ESTATE IS LOCATED 110KM SOUTH OF SANTIAGO IN
              PRIVILEGED SOILS AT THE FOOTHILLS OF THE ANDES MOUNTAIN RANGE, 500
              METERS ABOVE SEA LEVEL.
            </BorderedParagraph>
            <Image src={heroImg} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-blue py-15 md:px-0 px-5">
        <div className="container mx-auto">
          <TitleSection>
            What makes it <span className="text-white">unique?</span>
          </TitleSection>
          <div className="grid md:grid-cols-2 mt-15 md:gap-10 gap-5">
            <div className="space-y-5">
              <UniqueArea
                title="ANDES INFLUENCE"
                paragraph="Temperature oscillation. Diversity of soils and sun exposure."
              />
              <UniqueArea
                title="LOCATION"
                paragraph="Situated at the foothills of the Andes, it consistently receives a breeze from the Pacific Ocean that ventilate the grapes and contributes positively to grape health and complexity."
              />
            </div>
            <div className="space-y-5">
              <UniqueArea
                title="IDEAL FOR RED VARIETIES"
                paragraph="Cabernet Sauvignon, Syrah, Cabernet Franc, Carmenere & Petit Verdot."
              />
              <UniqueArea
                title="CLIMATE"
                paragraph="Template mediterranean climate."
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-blue-dark relative">
        <div className="absolute h-full w-full inset-0">
          <div className="absolute w-4 h-4 bg-red-600 top-14 right-96 rounded-full"></div>
        </div>
        <Image
          src="/images/home/cachapoal-wineyard.jpg"
          alt=""
          width={1864}
          height={1001}
          className="object-contain w-full h-max"
        />
      </section>
    </>
  );
}
