import Image from "next/image";
import BorderedParagraph from "@/components/bordered-paragraph";
import Hero from "@/components/hero";
import DashedTitle from "@/components/title-decorated";
import TitleSection from "@/components/title-section";
import livingSoilsImg from "@/public/images/sustainability/living_soils.jpg";
import coverCropsImg from "@/public/images/sustainability/cover_crop.jpg";
import irrigationImg from "@/public/images/sustainability/irrigation.jpg";
import energieImg from "@/public/images/sustainability/renewable_energies.jpg";

import sustainabilityImg from "@/public/images/sustainability-header.jpg";

const items = [
  {
    title: "Living Soils",
    description:
      "We have conducted a detailed study of our soils to understand the characteristics of each plot. This allows us to better determine the vineyard's needs in terms of resource optimization and their best utilization. Today, we aim to improve soil conditions through the application of compost, reduced use of herbicides, and cover crops.",
    image: livingSoilsImg,
  },
  {
    title: "Cover Crops",
    description:
      "We have conducted a detailed study of our soils to understand the characteristics of each plot. This allows us to better determine the vineyard's needs in terms of resource optimization and their best utilization. Today, we aim to improve soil conditions through the application of compost, reduced use of herbicides, and cover crops.",
    image: coverCropsImg,
  },
  {
    title: "Irrigation",
    description:
      "We have conducted a detailed study of our soils to understand the characteristics of each plot. This allows us to better determine the vineyard's needs in terms of resource optimization and their best utilization. Today, we aim to improve soil conditions through the application of compost, reduced use of herbicides, and cover crops.",
    image: irrigationImg,
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <Hero image={sustainabilityImg}>
        <div className="flex">
          <div className="container max-w-[1100px] mx-auto relative z-50">
            <h1 className="font-alegreya md:text-6xl xl:text-8xl font-medium text-gold-light">
              Sustainability
            </h1>
            <div className="h-2 w-8 bg-white"></div>
          </div>
        </div>
      </Hero>
      <section className="bg-blue-dark py-15 md:px-0 px-5">
        <div className="container max-w-[1100px] mx-auto">
          <BorderedParagraph>
            Viña San Pedro is committed to sustainable development from a
            holistic perspective, developing strategies that consider every
            aspect of our wine production. To grow in harmony with our soils,
            with a deep consideration for our environment, we have undertaken a
            plan that addresses diverse fundamental issues
          </BorderedParagraph>
        </div>
      </section>
      <section className="bg-blue py-15 md:px-0 px-5 space-y-10">
        <div className="container max-w-[1100px] mx-auto ">
          <TitleSection>
            Vineyard <span className="text-white">Management</span>
          </TitleSection>
        </div>
        <div>
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 group"
            >
              <div className="group-even:order-2 grid md:grid-cols-6">
                <div className="group-even:col-end-6 col-start-2 group-even:col-start-1 col-span-6 grid items-center">
                  <div>
                    <DashedTitle>{item.title}</DashedTitle>
                    <p className="leading-8 font-alegreya mt-10 text-white">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="group-even:order-1">
                <Image
                  src={item.image}
                  alt=""
                  className={`${index % 2 === 0 ? "clip-reverse" : "clip"}`}
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-blue-dark py-15 md:px-0 px-5">
        <div className="container max-w-[1100px] mx-auto">
          <BorderedParagraph variant="dark">
            THIS, TOGETHER WITH OUR CULTURAL WORK ON THE LAND, HAS ALLOWED THE
            VINE TO MAINTAIN A GREAT CIRCULAR BALANCE, NATURALLY ACQUIRING
            RESOURCES FROM THE SOIL, INTEGRATING INTO OUR ECOSYSTEM, AND BETTER
            REPRESENTING IT IN OUR GRAPES.
          </BorderedParagraph>
        </div>
      </section>
      <section className="bg-blue py-15 md:px-0 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 group">
          <div className="group-even:order-2 grid md:grid-cols-6">
            <div className="group-even:col-end-6 col-start-2 group-even:col-start-1 col-span-6 grid items-center">
              <div>
                <DashedTitle>
                  Renewable <span className="text-white">Energies</span>
                </DashedTitle>
                <p className="leading-8 font-alegreya mt-10 text-white">
                  Our plant operates 100% on renewable energies, and on average,
                  96% of the electrical requirements for both the winery and our
                  irrigation equipment are self-generated by our three solar
                  installations in the field. Additionally, all technologies
                  incorporated in the winery have lower energy requirements (LED
                  lighting and concrete tanks).
                </p>
              </div>
            </div>
          </div>
          <div className="group-even:order-1 relative">
            <Image
              src={energieImg}
              alt=""
              className="clip-reverse z-5 relative"
              unoptimized
            />
            <div className="absolute clip-reverse bg-gold w-full h-full -top-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
