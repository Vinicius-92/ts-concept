import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header"
import Footer from "./components/footer";
import MainHeader from "./components/main-header";

const sairaRegular = localFont({
  src: "./fonts/SairaCondensed-Regular.ttf",
  variable: "--font-saira-regular",
  weight: "100 900",
});
const sairaBold = localFont({
  src: "./fonts/SairaCondensed-Bold.ttf",
  variable: "--font-saira-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TS Concept",
  description: "TS Concept",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-ts-gray">
      <body className={`${sairaRegular.variable} ${sairaBold.variable} antialiased`}>
      <Header></Header>
      <MainHeader></MainHeader>
        {children}
      <Footer></Footer>
      </body>
    </html>
  );
}
