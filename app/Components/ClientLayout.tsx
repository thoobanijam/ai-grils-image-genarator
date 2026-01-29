"use client";

import Navbar from "./layout/Navbar";
import Footer from "./Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#0f162a]">{children}</main>
      <Footer />
    </>
  );
}
