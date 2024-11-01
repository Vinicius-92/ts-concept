'use client';

import { useState } from 'react';
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header"
import Footer from "./components/footer";
import MainHeader from "./components/main-header";
import Promos from "./components/promos";
import Vans from "./components/vans";
import About from "./components/about";
import Marcas from "./components/marcas";
import Lojas from "./components/lojas";
import Scripts from "./components/scripts";
import Banners from "./components/banners";
import Modal from './components/modal';

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

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <html lang="en" className="bg-ts-gray overflow-x-hidden">
      <body className={`${sairaRegular.variable} ${sairaBold.variable} antialiased`}>
      <header>
        <Scripts></Scripts>
      </header>
      <Header></Header>
      <MainHeader></MainHeader>
      <Promos></Promos>
      <Banners></Banners>
      <Vans></Vans>
      <About></About>
      <Marcas></Marcas>
      <Lojas></Lojas>
      <div className="relative">
        <button onClick={openModal}>
          <img className="fixed h-[70px] w-[70px] right-2 bottom-2" src="./whatsapp.png" alt="" />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
        {children}
      <Footer></Footer>
      </body>
    </html>
  );
}
