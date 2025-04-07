import BorderedParagraph from "@/components/bordered-paragraph";
import TitleSection from "@/components/title-section";
import UniqueArea from "@/components/unique-area";
import heroImg from "@/public/images/hero-home.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full relative">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
          style={{ zIndex: -1 }}
        >
          <source
            src="https://res.cloudinary.com/dkgnaegp9/video/upload/v1744055828/Cachapoal_Andes_V10_cortado_wlylbe.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 font-alegreya">
          <Image
            src="/images/logo-home.png"
            alt=""
            width={300}
            height={100}
            unoptimized
            className="z-10"
          />
          <p className="text-xl mt-8 text-gold-light">
            An exceptional terroir, at the foothills of the Andes,
            <br />
            shaped by millions of years of earthquakes and volcanic activity.
          </p>
        </div>
      </div>

      <section className="bg-blue-dark py-15 md:px-0 px-5">
        <div className="container max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 place-items-center gap-5">
            <BorderedParagraph>
              CACHAPOAL ANDES ESTATE IS LOCATED 110KM SOUTH OF SANTIAGO IN
              PRIVILEGED SOILS AT THE FOOTHILLS OF THE ANDES MOUNTAIN RANGE, 500
              METERS ABOVE SEA LEVEL.
            </BorderedParagraph>
            <Image src={heroImg} alt="" unoptimized />
          </div>
        </div>
      </section>
      <section className="bg-blue py-15 md:px-0 px-5">
        <div className="container max-w-[1100px] mx-auto">
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
          unoptimized
        />
      </section>
    </>
  );
}
