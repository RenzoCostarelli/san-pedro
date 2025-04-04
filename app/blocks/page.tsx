import BorderedParagraph from "@/components/bordered-paragraph";
import Hero from "@/components/hero";
import heroImg from "@/public/images/blocks-header.jpg";

export default function BlocksPage() {
  return (
    <>
      <Hero image={heroImg}>
        <div className="flex">
          <div className="container mx-auto relative z-50">
            <h1 className="font-alegreya-sans text-8xl">Blocks</h1>
            <div className="h-2 w-8 bg-white"></div>
          </div>
        </div>
      </Hero>
      <section className="bg-blue-dark py-15 md:px-0 px-5">
        <div className="container mx-auto">
          <BorderedParagraph>
            3 UNIQUE WINES, 5 VARIETIES, 1 VINEYARD Each variety tells a
            different story, shaped by its soils and location. Thats why we work
            meticolously, honoring the unique Characteristics of each plot to
            bring out the best in every wine.
          </BorderedParagraph>
        </div>
      </section>

      <section className="bg-blue py-15 md:px-0 px-5 h-screen"></section>
    </>
  );
}
