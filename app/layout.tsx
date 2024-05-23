export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import { Inter, Kufam, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const kufam = Kufam({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-kufam'
});
const source = Source_Sans_3({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-source-sans-3'
  
});

export const metadata: Metadata = {
  title: "Proper Land",
  description: "Real estate App",
  icons:{
    icon: '/images/Icon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${kufam.variable} ${source.variable}`}>{children}</body>
    </html>
  );
}
