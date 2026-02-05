import type { Metadata } from "next";
import { Inter, Sacramento } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sacramento = Sacramento({
  weight: "400",
  variable: "--font-sacramento",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luis Canedo | Systems & Infrastructure Engineer",
  description: "Portafolio profesional de Luis Canedo - Ingeniero de Sistemas especializado en Soporte TI, Infraestructura Cloud y Ciberseguridad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${sacramento.variable} antialiased bg-white text-slate-900`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
