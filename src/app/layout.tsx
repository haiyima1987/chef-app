import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/assets/css/globals.css";
import Image from 'next/image';
import Header from '@/assets/img/restaurant_header.jpg';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chef",
  description: "A platform for chefs to add or remove ingredients",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="pb-10 lg:ml-[15%] lg:max-w-[70%]">
          <Image src={Header} alt="header" width="100%"/>
          <h1 className="py-4 text-3xl">Welcome to the portal!</h1>
          <hr className="mb-6"/>
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
