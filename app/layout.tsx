import type { Metadata } from "next";
import { Fira_Sans, Fira_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const firaSans = Fira_Sans({
  weight: "400",
  subsets: ["latin"],
});

const firaMono = Fira_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baker House Website",
  description: "Baker House, Baker Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaSans.className}>
      <Header />
      {children}
      <Footer />
    </html>


    // <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    //   <div className="w-full flex-none md:w-64">
    //     <SideNav />
    //   </div>
    //   <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    // </div>
  );
}
