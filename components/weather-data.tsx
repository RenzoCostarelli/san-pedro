"use client";

import { useEffect, useState } from "react";

type WeatherData = {
  velocidadViento: string;
  radiacion: string;
  humedad: string;
  precipitacion: string;
  temperaturaMinima: string;
  temperaturaMedia: string;
  temperaturaMaxima: string;
};

export default function WeatherData() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://52.168.160.35:8080/api/v1/datos/ultimo?idEstacion=22", {
      headers: {
        "API-KEY": process.env.API_KEY || "",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-white">Loading weather data...</p>;
  }

  if (!data) {
    return <p className="text-red-500">Failed to load weather data.</p>;
  }

  return (
    <div className="w-max font-alegreya-sans font-light">
      <p className="bg-gold-light w-max text-gold py-1 pl-5 pr-7">
        WHEATHER STATION
      </p>
      <div className="columns-2 bg-gold py-3 px-5 text-gray-dark">
        <ul>
          <li>
            WIND SPEED:{" "}
            <span className="font-bold">{data.velocidadViento}</span>
          </li>
          <li>
            RADIACION: <span className="font-bold">{data.radiacion}</span>
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
            MIN: <span className="font-bold">{data.temperaturaMinima}</span>
          </li>
          <li>
            MED: <span className="font-bold">{data.temperaturaMedia}</span>
          </li>
          <li>
            MAX: <span className="font-bold">{data.temperaturaMaxima}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
