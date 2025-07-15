import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "../styles/globals.css";
import {NextFontWithVariable} from "next/dist/compiled/@next/font";

const sora: NextFontWithVariable = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const manrope: NextFontWithVariable = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notease",
  description: "Note taking app that just fit all your needs and secure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
