import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./Components/ClientLayout";
import Navbar from "./Components/layout/Navbar";
import Providers from './Providers'; 

// Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Metadata
export const metadata: Metadata = {
  title: "AI Girl Image Generator",
  description: "Free AI image generator",
  icons: {
    icon: "/img/logo.png",
    shortcut: "/img/logo.png",
    apple: "/img/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/img/logo.png" sizes="32x32" />
        <link rel="shortcut icon" href="/img/logo.png" />
        <link rel="apple-touch-icon" href="/img/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f172a] text-white text-base`}
      >
        <Providers>
          <Navbar />
          <main className="min-h-screen px-6 py-2 text-[20px]">
            <ClientLayout>{children}</ClientLayout>
          </main>
        </Providers>
      </body>
    </html>
  );
}
