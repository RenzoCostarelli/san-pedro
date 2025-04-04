// app/api/weather/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const idEstacion = searchParams.get("idEstacion") || "22";
  console.log("hihi");
  try {
    // ⚠️ Usa HTTP si podés evitar el certificado inválido
    const response = await fetch(
      `http://52.168.160.35:8080/api/v1/datos/ultimo?idEstacion=${idEstacion}`,
      {
        method: "GET",
        headers: {
          "API-KEY": "a4f67494c32938d2abb70621dc8b9b9e",
        },
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("[API WEATHER ERROR]", error);
    return NextResponse.json(
      { error: "Could not fetch data" },
      { status: 500 }
    );
  }
}
