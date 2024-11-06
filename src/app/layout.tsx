import localFont from "next/font/local";
import "./globals.css";
import Scripts from "./components/scripts";
import { Metadata } from 'next';


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
  title: "TS Pneus",
  description: "TS Pneus",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className="bg-ts-gray overflow-x-hidden">
      <body className={`${sairaRegular.variable} ${sairaBold.variable} antialiased`}>
      <header>
        <Scripts></Scripts>
      </header>
        {children}
      </body>
    </html>
  );
}
