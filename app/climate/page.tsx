import BorderedParagraph from "@/components/bordered-paragraph";
import HelioSlider from "@/components/helio-slider";
import Hero from "@/components/hero";
import { RainChart } from "@/components/rainChart2";
import RainfallScatter from "@/components/ranfallScatter";
import TitleSection from "@/components/title-section";
// import WeatherData from "@/components/weather-data";
import WinklerChart from "@/components/WinklerChart";
import { getWeatherData } from "@/lib/actions/wheater";
import heroImg from "@/public/images/climate-header.jpg";
import Image from "next/image";
// import Image from "next/image";

export default async function ClimatePage() {
  const data = await getWeatherData("22");
  return (
    <>
      <Hero image={heroImg}>
        <div className="flex">
          <div className="container max-w-[1100px] mx-auto relative z-50">
            <h1 className="font-alegreya-sans text-5xl md:text-6xl xl:text-8xl text-gold-light">
              Climate
            </h1>
            <div className="h-2 w-8 bg-white"></div>
            <div className="mt-10">
              <div className="w-max font-alegreya-sans font-light">
                <div className="flex items-center gap-2">
                  <p className="bg-gold-light w-max text-gold py-1 pl-5 pr-7">
                    WHEATHER STATION
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="border border-white p-1 rounded-full animate-pulse">
                      <div className="border bg-white rounded-full h-2 w-2"></div>
                    </span>
                    <div className="italic tracking-wider">LIVE</div>
                  </div>
                </div>
                <div className="columns-2 bg-gold py-3 px-5">
                  <ul className="text-white">
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
              {/* <WeatherData /> */}
            </div>
          </div>
        </div>
      </Hero>
      <section className="bg-blue-dark py-15 md:px-0 px-5">
        <div className="container max-w-[1100px] mx-auto">
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
        <div className="container max-w-[1100px] mx-auto">
          <span className="text-gold text-xl md:text-4xl font-light font-alegreya-sans">
            Winkler Classification and Cachapoal Andes:
          </span>
          <TitleSection>
            Unlocking the Potential for{" "}
            <span className="text-white">Balanced Wines</span>
          </TitleSection>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-15 gap-5">
            <div className="space-y-5">
              <p className="font-light tracking-wider font-sans leading-8 text-white">
                The Winkler Index, is a method used to classify wine-growing
                regions based on their climate, specifically the amount of heat
                they accumulate during the growing season. It calculates the
                total degree-days above 10°C (50°F) from April 1 to October 31,
                as this is the temperature threshold for vine growth.
              </p>
            </div>
            <div className="space-y-5">
              <p className="font-light tracking-wider leading-8 font-sans text-white">
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
          <div className="md:h-96 mt-15 grid md:grid-cols-12 grid-cols-1 gap-5 relative">
            <div className="md:col-span-8 col-span-12 pl-10 relative">
              <div className="absolute h-full w-[20px] left-0 grid place-content-center">
                <div className="bg-gold-medium text-white py-1 px-5 font-alegreya-sans -rotate-90">
                  WINKLER
                </div>
              </div>
              <WinklerChart />
            </div>
            <div className="md:col-span-4 col-end-12 col-span-12 px-5">
              <div className="border border-gold h-max">
                <div className="grid grid-cols-12">
                  <div className="bg-gold text-white md:col-span-7 col-span-8 text-center py-2">
                    HARVEST SEASON
                  </div>
                  <div className="bg-black col-span-4 md:col-span-5 col-end-13 col-start-9 text-center py-2">
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
                      <li>2023/2024</li>
                    </ul>
                  </div>
                  <div className="col-span-5 col-end-13 col-start-8 text-center py-2 text-white">
                    <ul>
                      <li>1784</li>
                      <li>1653</li>
                      <li>1637</li>
                      <li>1888</li>
                      <li>1639</li>
                      <li>1888</li>
                      <li>1711</li>
                      <li>1752</li>
                      <li>1887</li>
                      <li>1673</li>
                      <li>1684</li>
                      <li>1976</li>
                      <li>1751</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center text-gold mt-3">
                <p>(VALUES AS OF APRIL 30)</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 mt-15 gap-5">
            <div className="space-y-5">
              <p className="font-light tracking-wider font-sans leading-8 text-white">
                According to the Winkler region classification, the climate of
                Cachapoal Andes is warm enough to fully ripen a wide variety of
                grape varieties. Wines from a mildly warm region tend to have a
                balanced profile, often featuring good fruit concentration,
                moderate acidity, and well-developed tannins. The warmth allows
                for full ripening, enhancing the fruit flavors and complexity.
                Common grape varieties that thrive in mildly warm climates
                include Cabernet Sauvignon, Syrah, and Carménère, among others.
              </p>
            </div>
            <div className="space-y-5">
              <p className="font-light tracking-wider leading-8 font-sans text-white">
                Cachapoal Andes predominantly falls under the Winkler III region
                classification, with the potential to occasionally reach Winkler
                II in cooler years (upper limit). Being situated in the lower
                part of Winkler III places us in an ideal zone, combining
                attributes characteristic of both Winkler classifications. This
                positioning contributes to the freshness, acidity, and excellent
                ripeness that define our wines.
              </p>
            </div>
          </div>
          {/* <div className="mt-8">
            <RainChart />
          </div> */}
        </div>
      </section>
      <section className="bg-blue-dark py-15 md:px-0 px-5">
        <div className="container max-w-[1100px] mx-auto">
          <TitleSection>
            <span className="text-white">Cachapoal Andes</span> vs other D.O.
          </TitleSection>
          <div className="h-96 bg-gray-400 mt-15"></div>
        </div>
      </section>
      <section className="bg-blue py-15 md:px-0 px-5">
        <div className="container max-w-[1100px] mx-auto">
          <TitleSection>
            Annual <span className="text-white">Rainfall</span>
          </TitleSection>
          <div className="grid md:grid-cols-2 mt-15 gap-5 text-white">
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
      <section className="py-15 md:px-0 px-5 bg-blue-dark">
        <div className="container max-w-[1100px] mx-auto">
          <TitleSection>Heliophany</TitleSection>
          <div className="grid grid-cols-1 mt-15 gap-5">
            <div className="space-y-5">
              <p className="font-light tracking-wider font-sans leading-8 text-white">
                Heliophany refers to the duration and trajectory of sunlight
                received over the course of the day. This visual representation
                allows us to understand how solar exposure evolves from sunrise
                to sunset in Cahapoal Andes vineyards. The path of the sun,
                combined with the surrounding topography, plays a critical role
                in vine development—affecting photosynthesis, ripening speed,
                and ultimately the character of the grapes.
              </p>
            </div>
          </div>

          <div className="mt-15 px-10 md:px-0">
            <HelioSlider />
          </div>
        </div>
      </section>
    </>
  );
}
