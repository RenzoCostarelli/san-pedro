import BorderedParagraph from "@/components/bordered-paragraph";
import ChillHoursChart from "@/components/ChillHoursChart";
import HelioSlider from "@/components/helio-slider";
import Hero from "@/components/hero";
import { RainChart } from "@/components/rainChart2";
import RainfallScatter from "@/components/ranfallScatter";
import TitleSection from "@/components/title-section";
// import WeatherData from "@/components/weather-data";
import WinklerChart from "@/components/WinklerChart";
import WinklerPrecipitationChart from "@/components/WinklerPrecipitationChart";
import WinklerRainDashboard from "@/components/WinlkerRainDashboard";
import { getWeatherData } from "@/lib/actions/wheater";
import heroImg from "@/public/images/climate-header.jpg";
import Image from "next/image";
// import Image from "next/image";

export default async function ClimatePage() {
  const data = await getWeatherData("22");
  console.log("Weather Data:", data);
  return (
    <>
      <Hero image={heroImg}>
        <div className="flex">
          <div className="container max-w-[1100px] md:px-0 px-15 mx-auto relative z-50">
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
                    <div className="italic tracking-wider text-white">LIVE</div>
                  </div>
                </div>
                <div className="columns-2 bg-gold py-3 px-5">
                  <ul className="text-white">
                    <li>
                      WIND SPEED:{" "}
                      <span className="font-bold">
                        {data.velocidadViento} km/h
                      </span>
                    </li>
                    <li>
                      RADIATION:{" "}
                      <span className="font-bold">
                        {data.radiacion} MJ/m&sup2;
                      </span>
                    </li>
                    <li>
                      HUMIDITY:{" "}
                      <span className="font-bold">{data.humedad} %</span>
                    </li>
                    <li>
                      PRECIPITATION:{" "}
                      <span className="font-bold">{data.precipitacion} mm</span>
                    </li>
                  </ul>
                  <ul className="text-white">
                    <li className="font-bold">TEMPERATURE</li>
                    <li>
                      MIN:{" "}
                      <span className="font-bold">
                        {data.temperaturaMinima} °C
                      </span>
                    </li>
                    <li>
                      MED:{" "}
                      <span className="font-bold">
                        {data.temperaturaMedia} °C
                      </span>
                    </li>
                    <li>
                      MAX:{" "}
                      <span className="font-bold">
                        {data.temperaturaMaxima} °C
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
        <div className="container max-w-[1100px] md:px-0 px-15 mx-auto">
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
                {/* <li>23,5° - 5,5° AVERAGE TEMPERATURE</li> */}
                <li>25° - 23° THERMAL OSCILLATION</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue py-15 md:px-0 px-5">
        <div className="container px-0 max-w-[1100px] mx-auto">
          <span className="text-gold text-xl md:text-4xl font-light font-alegreya-sans">
            Winkler Classification and Cachapoal Andes:
          </span>
          <TitleSection>
            Unlocking the Potential for{" "}
            <span className="text-white">Balanced Wines</span>
          </TitleSection>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-15 gap-5">
            <div className="space-y-5">
              <p className="font-light tracking-wider font-sans leading-8 text-white text-justify">
                The Winkler Index, is a method used to classify wine-growing
                regions based on their climate, specifically the amount of heat
                they accumulate during the growing season. It calculates the
                total degree-days above 10°C (50°F) from October 1 to April 31,
                as this is the temperature threshold for vine growth.
              </p>
            </div>
            <div className="space-y-5">
              <p className="font-light tracking-wider leading-8 font-sans text-white text-justify">
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
          <div className="md:h-96 mt-25 grid md:grid-cols-12 grid-cols-1 gap-5 relative">
            <div className="md:col-span-8 col-span-12 pl-10 relative">
              <div className="absolute h-full w-[20px] left-0 grid place-content-center">
                <div className="bg-gold-medium text-white py-1 px-5 font-alegreya-sans -rotate-90">
                  WINKLER
                </div>
              </div>
              <div className="flex items-center gap-4 font-alegreya italic">
                <div className="grid grid-cols-2">
                  <div className="relative scale-150">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      data-name="Layer 1"
                      version="1.1"
                      viewBox="0 0 1200 1200"
                    >
                      <path
                        fill="#fff"
                        strokeWidth="0px"
                        d="M75.3,466.9c0,2.3,5.5,436.2,5.5,436.2l97.7,4.7,28.9,27.4,125.9,19.6,28.9,33.6,318.2,7.8,14.9-14.1,9.4-13.3,39.9-37.5,10.2-10.2,28.9-55.5,3.1-24.2,9.4-14.1,8.6-8.6,36.7-125.9,3.9-10.2,9.4-11.7,25.8-68,5.5-43.8,205.6-10.9,7-10.9-1.6-8.6,10.2-11,1.6-83.7-3.9-4.7-9.4-10.9-447.2-39.9-11-36,7.8-14.1,13.3-15.6,1.6-109.5s-59.4,3.1-64.1.8c-4.7-2.4-39.1,10.9-39.1,10.9l-12.5,13.3-30.5,37.5-19.5,12.5s-68.8,32.1-71.9,31.3c-3.1-.8-13.3,7.8-13.3,7.8l-14.1,13.3-84.4,34.4-19.5,18.8-80.5,29.7-18.8,18.8s-101.6,21.1-103.2,18c-1.6-3.1-13.3,16.4-13.3,16.4Z"
                      />
                      <g>
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="449.5"
                          y="375.1"
                          width="650.7"
                          height="48.6"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="649.3"
                          y="525.2"
                          width="450.2"
                          height="50.2"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="649.3"
                          y="674.6"
                          width="201.1"
                          height="50.4"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="598.4"
                          y="824.7"
                          width="201.1"
                          height="50.4"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="349.8"
                          y="975.6"
                          width="351.2"
                          height="50.4"
                        />
                        <polygon
                          fill="#000"
                          strokeWidth="0px"
                          points="850.4 823.3 800.9 823.4 800.7 678.5 850.2 678.4 850.4 823.3"
                        />
                        <polygon
                          fill="#000"
                          strokeWidth="0px"
                          points="799.7 925.7 750.2 925.7 750 825.4 799.5 825.4 799.7 925.7"
                        />
                        <polygon
                          fill="#000"
                          strokeWidth="0px"
                          points="900.4 674.8 850.2 674.8 850 533 900.2 532.9 900.4 674.8"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="1100.8"
                          y="425"
                          width="49.2"
                          height="100.1"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="700.5"
                          y="926.1"
                          width="49.3"
                          height="48.5"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="199.3"
                          y="924.6"
                          width="150.9"
                          height="50"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="199.3"
                          y="374.2"
                          width="100.1"
                          height="50"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="300.2"
                          y="324.1"
                          width="100.1"
                          height="50"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="400.2"
                          y="274.1"
                          width="100.1"
                          height="50"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="500.3"
                          y="224.1"
                          width="50.8"
                          height="50"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="598.8"
                          y="324.1"
                          width="50.8"
                          height="50"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="550.4"
                          y="174"
                          width="149.3"
                          height="50"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="50"
                          y="876.1"
                          width="149.3"
                          height="48.5"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="50"
                          y="425.8"
                          width="149.3"
                          height="48.5"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="50"
                          y="425.8"
                          width="48.5"
                          height="498.8"
                        />
                        <rect
                          fill="#000"
                          strokeWidth="0px"
                          x="650.4"
                          y="196.7"
                          width="50"
                          height="127.4"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="w-4 h-4 bg-gold rounded-xl"></div>
                </div>
                <div className="opacity-80">
                  <span className="text-xl ">CLICK</span> to see more details
                </div>
              </div>
              <WinklerRainDashboard />
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

          <div className="grid md:grid-cols-2 mt-25 gap-5">
            <div className="space-y-5">
              <p className="font-light tracking-wider font-sans leading-8 text-white text-justify">
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
              <p className="font-light tracking-wider leading-8 font-sans text-white text-justify">
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
        </div>
      </section>
      <section className="bg-blue-dark py-15 md:px-0 px-5">
        <div className="container max-w-[1100px] md:px-0 px-15 mx-auto">
          <TitleSection>
            <span className="text-white">Cachapoal Andes</span> vs other D.O.
          </TitleSection>
          {/* <div className="h-96 bg-gray-400 mt-15"></div> */}
          <h3 className="text-center mt-15 mb-3 text-2xl font-alegreya-sans text-white">
            CHILL HOURS TO RIPENESS
          </h3>
          <ChillHoursChart />
          <div className="text-gold text-xs mt-6">
            <p className="font-bold">
              ** Graphics created by: Fernando Santibáñez Agricultural Engineer,
              Ph.D. in Bioclimatology.{" "}
              <span className="font-bold">Paula Santibáñez</span>, Civil
              Engineer in Geography, Ph.D. in Silvoagricultural Sciences
            </p>
          </div>
          <div className="grid md:grid-cols-2 mt-5 gap-5">
            <div className="space-y-5">
              <p className="font-light tracking-wider font-sans leading-8 text-white text-justify">
                Zones that experience 100 to 300 chilling hours generally
                develop a more balanced and complex phenolic maturity, allowing
                for the creation of wines with excellent cellaring potential. In
                comparison to other regions recognized for their aptitude in
                producing quality red varietals, Cachapoal Andes is
                distinguished by a higher accumulation of cooling hours (below
                10°C).
              </p>
            </div>
            <div className="space-y-5">
              <p className="font-light tracking-wider leading-8 font-sans text-white text-justify">
                Consequently, it boasts a significant diurnal temperature
                variation between day and night. This suggests that the terroir
                itself enables a superior retention of natural acidity.
              </p>
            </div>
          </div>
          <h3 className="text-center mt-20 mb-3 text-2xl font-alegreya-sans text-white">
            WINKLER / PRECIPITATIONS
          </h3>
          <WinklerPrecipitationChart />
          <div className="text-gold text-xs mt-6">
            <p className="font-bold">
              ** Graphics created by: Fernando Santibáñez Agricultural Engineer,
              Ph.D. in Bioclimatology.{" "}
              <span className="font-bold">Paula Santibáñez</span>, Civil
              Engineer in Geography, Ph.D. in Silvoagricultural Sciences
            </p>
          </div>
          <div className="grid md:grid-cols-2 mt-5 gap-5">
            <div className="space-y-5">
              <p className="font-light tracking-wider font-sans leading-8 text-white text-justify">
                The zones exhibiting the optimal balance between average annual
                precipitation and the Winkler index form a central cluster on
                the graph.
              </p>
            </div>
            <div className="space-y-5">
              <p className="font-light tracking-wider leading-8 font-sans text-white text-justify">
                These areas represent the broadest viticultural potential, with
                Cachapoal-Andes positioned almost directly at this cluster`s
                core.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue py-15 md:px-0 px-5">
        <div className="container max-w-[1100px] md:px-0 px-15 mx-auto">
          <TitleSection>
            Annual <span className="text-white">Rainfall</span>
          </TitleSection>
          <div className="grid mt-15 gap-5 text-white">
            <div>
              <p className="font-light tracking-wider font-sans leading-8">
                Certain terroirs are uniquely defined by minimal rainfall,
                shaping the character and quality of their agricultural output.
              </p>

              <p className="font-light tracking-wider leading-8 font-sans">
                Limited water availability forces plants to develop deep root
                systems, intensifying the concentration of flavors in grapes.
              </p>
            </div>
          </div>
          <RainfallScatter />
        </div>
      </section>
      <section className="py-15 md:px-0 px-5 bg-blue-dark">
        <div className="container max-w-[1100px] md:px-0 px-15 mx-auto">
          <TitleSection>Heliophany</TitleSection>
          <div className="grid grid-cols-1 mt-15 gap-5">
            <div className="space-y-5">
              <p className="font-light tracking-wider font-sans leading-8 text-white text-justify">
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
