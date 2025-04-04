import type { Metadata } from "next";
import { Alegreya_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const alegrayaSans = Alegreya_Sans({
  variable: "--font-alegreya-sans",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export const metadata: Metadata = {
  title: "San Pedro.  Cahapoal Andes",
  description:
    "An exceptional terroir, at the foothills of the Andes, shaped by millions of years of earthquakes and volcanic activity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alegrayaSans.variable}} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
