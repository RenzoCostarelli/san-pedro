"use server";

export async function getWeatherFromApiRoute(idEstacion: string = "22") {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/weather?idEstacion=${idEstacion}`
  );
  const data = await res.json();
  return data;
}

export async function getWeatherData(idEstacion: string = "22") {
  const res = await fetch(
    `http://52.168.160.35:8080/api/v1/datos/ultimo?idEstacion=${idEstacion}`,
    {
      headers: {
        "API-KEY": process.env.API_KEY || "",
      },
      cache: "no-store",
    }
  );

  return res.json();
}
