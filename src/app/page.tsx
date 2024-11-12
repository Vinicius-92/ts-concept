'use client';

import { useState } from 'react';
import React from 'react';
import Header from "./components/header"
import Footer from "./components/footer";
import MainHeader from "./components/main-header";
import Promos from "./components/promos";
import Vans from "./components/vans";
import About from "./components/about";
import Marcas from "./components/marcas";
import Lojas from "./components/lojas";
import Banners from "./components/banners";
import Modal from './components/modal';


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
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
      <Footer></Footer>
      <footer></footer>
    </div>
  );
}
