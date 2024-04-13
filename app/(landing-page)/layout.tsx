import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/share/menubar";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO",
  description: "Generated by create next app",
};

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${font.className} 2xl:px-[400px] px-[200px]`}>
      <NavbarComponent />
      {children}
    </div>
  );
}
