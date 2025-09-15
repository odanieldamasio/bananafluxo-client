import type { Metadata } from "next";
import "./globals.css";
import Provider from '../provider';

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Banana Fluxo",
  description: "Controle fácil, resultados reais na ponta do lápis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
