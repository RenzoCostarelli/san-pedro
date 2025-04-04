import BorderedParagraph from "@/components/bordered-paragraph";
import Hero from "@/components/hero";
import RainfallScatter from "@/components/ranfallScatter";
import TitleSection from "@/components/title-section";
import WinklerChart from "@/components/WinklerChart";
import { getWeatherData } from "@/lib/actions/wheater";
import heroImg from "@/public/images/climate-header.jpg";
// import Image from "next/image";

export default async function ClimatePage() {
  const data = await getWeatherData("22");

  return (
    <>
      <Hero image={heroImg}>
        <div className="flex">
          <div className="container mx-auto relative z-50">
            <h1 className="font-alegreya-sans text-8xl">Climate</h1>
            <div className="h-2 w-8 bg-white"></div>
            <div className="mt-10">
              <div className="w-max font-alegreya-sans font-light">
                <p className="bg-gold-light w-max text-gold py-1 pl-5 pr-7">
                  WHEATHER STATION
                </p>
                <div className="columns-2 bg-gold py-3 px-5">
                  <ul>
                    <li>
                      WIND SPEED:{" "}
                      <span className="font-bold">{data.velocidadViento}</span>
                    </li>
                    <li>
                      RADIACION:{" "}
                      <span className="font-bold">{data.radiacion}</span>
                    </li>
                    <li>
                      HUMEDAD: <span className="font-bold">{data.humedad}</span>
                    </li>
                    <li>
                      PRECIPITACION:{" "}
                      <span className="font-bold">{data.precipitacion}</span>
                    </li>
                  </ul>
                  <ul>
                    <li>TEMP: </li>
                    <li>
                      MIN:{" "}
                      <span className="font-bold">
                        {data.temperaturaMinima}
                      </span>
                    </li>
                    <li>
                      MED:{" "}
                      <span className="font-bold">{data.temperaturaMedia}</span>
                    </li>
                    <li>
                      MAX:{" "}
                      <span className="font-bold">
                        {data.temperaturaMaxima}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>
      <section className="bg-blue-dark py-15 md:px-0 px-5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 gap-5 ">
            <div className="md:col-span-8 col-span-12 ">
              <BorderedParagraph>
                The template Meditarranean climate, influenced by the Pacific
                Ocean and the Andes, is reflected in the freshness, acidity, and
                excellent ripeness we achieve to craft our wines
              </BorderedParagraph>
            </div>
            <div className="md:col-span-4 col-span-12 flex items-center justify-center">
              <ul className="text-2xl text-gold font-light font-alegreya-sans">
                <li>450 - 300 MM RAINFALL PER YEAR</li>
                <li>23,5° - 5,5° AVERAGE TEMPERATURE</li>
                <li>25° - 23° THERMAL OSCILLATION</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue py-15 md:px-0 px-5">
        <div className="container mx-auto">
          <span className="text-gold text-4xl font-light font-alegreya-sans">
            Winkler Classification and Cachapoal Andes:
          </span>
          <TitleSection>
            Unlocking the Potential for{" "}
            <span className="text-white">Balanced Wines</span>
          </TitleSection>
          <div className="grid md:grid-cols-2 mt-15 gap-5">
            <div className="space-y-5">
              <p className="font-light tracking-wider font-sans leading-8">
                The Winkler Index, is a method used to classify wine-growing
                regions based on their climate, specifically the amount of heat
                they accumulate during the growing season. It calculates the
                total degree-days above 10°C (50°F) from April 1 to October 31,
                as this is the temperature threshold for vine growth.
              </p>
            </div>
            <div className="space-y-5">
              <p className="font-light tracking-wider leading-8 font-sans">
                The index divides regions into five climate categories, ranging
                from Region I (coolest) to Region V (hottest), helping vintners
                determine which grape varieties are best suited to a particular
                area.
                <br />
                This tool is widely used in viticulture to understand the
                relationship between climate and grape ripening, influencing
                wine style and quality.
              </p>
            </div>
          </div>
          <div className="h-96 mt-15 grid md:grid-cols-12 grid-cols-1 gap-5">
            <div className="md:col-span-8 col-span-12">
              <WinklerChart />
            </div>
            <div className="md:col-span-3 col-end-10 col-span-12 ">
              <div className="border border-gold h-max">
                <div className="grid md:grid-cols-12 grid-cols-1">
                  <div className="bg-gold text-white col-span-7 text-center py-2">
                    HARVEST SEASON
                  </div>
                  <div className="bg-black col-span-5 col-end-13 col-start-8 text-center py-2">
                    °C
                  </div>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1">
                  <div className="text-white col-span-7 text-center py-2">
                    <ul className="text-gold font-alegreya-sans">
                      <li>2011/2012</li>
                      <li>2012/2013</li>
                      <li>2013/2014</li>
                      <li>2014/2015</li>
                      <li>2015/2016</li>
                      <li>2016/2017</li>
                      <li>2017/2018</li>
                      <li>2018/2019</li>
                      <li>2019/2020</li>
                      <li>2020/2021</li>
                      <li>2021/2022</li>
                      <li>2022/2023</li>
                    </ul>
                  </div>
                  <div className="col-span-5 col-end-13 col-start-8 text-center py-2">
                    <ul>
                      <li>1653</li>
                      <li>1637</li>
                      <li>1888</li>
                      <li>1639</li>
                      <li>1888</li>
                      <li>1711</li>
                      <li>1639</li>
                      <li>1888</li>
                      <li>1711</li>
                      <li>1637</li>
                      <li>1711</li>
                      <li>1639</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center text-gold mt-3">
                <p>(VALORES AL 30 DE ABRIL)</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 mt-15 gap-5">
            <div className="space-y-5">
              <p className="font-light tracking-wider font-sans leading-8">
                The Winkler Index, is a method used to classify wine-growing
                regions based on their climate, specifically the amount of heat
                they accumulate during the growing season. It calculates the
                total degree-days above 10°C (50°F) from April 1 to October 31,
                as this is the temperature threshold for vine growth.
              </p>
            </div>
            <div className="space-y-5">
              <p className="font-light tracking-wider leading-8 font-sans">
                The index divides regions into five climate categories, ranging
                from Region I (coolest) to Region V (hottest), helping vintners
                determine which grape varieties are best suited to a particular
                area.
                <br />
                This tool is widely used in viticulture to understand the
                relationship between climate and grape ripening, influencing
                wine style and quality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-dark py-15 md:px-0 px-5">
        <div className="container mx-auto">
          <TitleSection>
            <span className="text-white">Cachapoal Andes</span> vs other D.O.
          </TitleSection>
          <div className="h-96 bg-gray-400 mt-15"></div>
        </div>
      </section>
      <section className="bg-blue py-15 md:px-0 px-5">
        <div className="container mx-auto">
          <TitleSection>
            Annual <span className="text-white">Rainfall</span>
          </TitleSection>
          <div className="grid md:grid-cols-2 mt-15 gap-5">
            <div className="space-y-5">
              <p className="font-light tracking-wider font-sans leading-8">
                The Winkler Index, is a method used to classify wine-growing
                regions based on their climate, specifically the amount of heat
              </p>
            </div>
            <div className="space-y-5">
              <p className="font-light tracking-wider leading-8 font-sans">
                The index divides regions into five climate categories, ranging
                from Region I (coolest) to Region V (hottest), helping vintners
              </p>
            </div>
          </div>
          <RainfallScatter />
        </div>
      </section>
    </>
  );
}
