'use client'

import { useState } from "react";
import PneusModal from "./pneus-modal";
import Modal from "../components/modal";

let key = "";

export default function Concept() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModalOpen2] = useState(false);

  const openModal = (value: string) => { setIsModalOpen(true), key = value };
  const openModal2 = () => { setIsModalOpen2(true) }
  const closeModal = () => setIsModalOpen(false);
  const closeModal2 = () => setIsModalOpen2(false);

  return (
    <div className="w-screen h-screen bg-black flex flex-col">
      <div className="bg-concept-gray w-screen h-56 flex justify-center items-center flex-col lg:flex-row">
        <img className="w-[366px] h-[63px] invisible lg:visible" src="concept/inovacao.webp" alt="" />
        <img className="w-[176px] h-[178px] p-2" src="concept/logo-concept.png" alt="Logo Ts Concept" />
        <div className="flex items-center mb-16 place-content-center gap-2 bg-[#191919] w-screen pt-2 pb-2 lg:bg-concept-gray lg:w-fit lg:mb-0">
          <button onClick={openModal2}>
            <img className="w-[31px] h-[31px]" src="concept/whatsapp.png" alt="Whatsapp logo" />
          </button>
          <a href="tel:5508000177777">
            <img className="w-[31px] h-[31px]" src="concept/phone.png" alt="Logo Telefone" />
          </a>
          <img className="w-[227px] h-[19px]" src="concept/phone-number.png" alt="Número de telefone 0800 017 7777" />
        </div>
      </div>
      <div className="h-[200px] max-w-vw w-screen bg-cover bg-marcas-concept-mob lg:bg-marcas-concept bg-center bg-no-repeat flex-col pt-3 pb-3">
        <h1 className="uppercase text-center text-[20px] lg:text-[35px] md:w-1/2 lg:w-2/5 m-auto">selecione AQUI a marca do seu veículo</h1>
        <img className="h-[20px] w-[28px] m-auto" src="concept/down.png" alt="" />
        <div className="flex justify-center flex-wrap md:w-3/5 md:m-auto lg:w-screen">
          <button onClick={() => {openModal('volkswagen')}}>
            <img className="h-16 md:h-20 lg:h-auto" src="concept/vw.webp" alt="Logo Wolksvagen" />
          </button>
          <button onClick={() => {openModal('honda')}}>
            <img className="h-16 md:h-20 lg:h-auto" src="concept/honda.webp" alt="Logo Honda" />
          </button>
          <button onClick={() => {openModal('toyota')}}>
            <img className="h-16 md:h-20 lg:h-auto" src="concept/toyota.webp" alt="Logo Toyota" />
          </button>
          <button onClick={() => {openModal('chevrolet')}}>
            <img className="h-16 md:h-20 lg:h-auto" src="concept/chevro.webp" alt="Logo Chevrolet" />
          </button>
          <button onClick={() => {openModal('peugeot')}}>
            <img className="h-16 md:h-20 lg:h-auto" src="concept/peugeot.webp" alt="Logo Peugeot" />
          </button>
          <button onClick={() => {openModal('jeep')}}>
            <img className="h-16 md:h-20 lg:h-auto" src="concept/jeep.webp" alt="Logo Jeep" />
          </button>
          <button onClick={() => {openModal('bmw')}}>
            <img className="h-16 md:h-20 lg:h-auto" src="concept/bmw.webp" alt="Logo BMW" />
          </button>
          <button onClick={() => {openModal('porsche')}}>
            <img className="h-16 md:h-20 lg:h-auto" src="concept/porsche.webp" alt="Logo Porsche" />
          </button>
        </div>
      </div>
      <div className="h-[630px] w-screen bg-cover bg-no-repeat bg-center bg-tire-brands-bg flex flex-col content-center pt-3 pb-3">
        <h2 className="uppercase leading-6 sm:leading-10	semibold w-screen lg:w-3/6 text-[20px] sm:text-[30px] md:text-[35px] m-auto text-center">temos a maior variedade em medidas e modelos de pneus do interior paulista</h2>
        <div className="flex flex-wrap gap-1 sm:gap-2 lg:w-1/2 m-auto justify-center">
          <img className="w-24 sm:w-48 lg:w-56" src="concept/yokohama-logo.png" alt="Logo Yokohama" />
          <img className="w-24 sm:w-48 lg:w-56" src="concept/speedmax-logo.png" alt="Logo speedmax" />
          <img className="w-24 sm:w-48 lg:w-56" src="concept/delinte-logo.png" alt="Logo Delinte" />
          <img className="w-24 sm:w-48 lg:w-56 ml-1 sm:ml-4" src="concept/continental-logo.png" alt="Logo continental" />
          <img className="w-24 sm:w-48 lg:w-56" src="concept/logo-firestone.png" alt="Logo firestone" />
          <img className="w-24 sm:w-48 lg:w-56" src="concept/logo-goodyear.png" alt="Logo goodyear" />
          <img className="w-24 sm:w-48 lg:w-56 ml-2 sm:ml-8" src="concept/pirelli-logo.png" alt="Logo pirelli" />
          <img className="w-24 sm:w-48 lg:w-56" src="concept/michelin-logo.png" alt="Logo michelin" />
          <img className="w-24 sm:w-48 lg:w-56" src="concept/bridgestone-logo.png" alt="Logo bridgestone" />
        </div>
        <div className="flex justify-center">
          <button onClick={openModal2} className="custom-buttom text-[20px]">ENTRE EM CONTATO</button>
        </div>
      </div>
      <div className="flex flex-col h-fit bg-white pt-10 pb-10">
        <div className="flex justify-center">
          <h2 className="text-[25px] leading-6 sm:leading-8 lg:leading-10 sm:w-9/12 lg:w-2/5 semibold text-center sm:text-[35px] text-black">UMA LINHA DE SERVIÇOS COMPLETA PARA ATENDER VOCÊ E SEU VEÍCULO</h2>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col lg:gap-10 justify-center">
            <img className="w-[160px] h-[160px] sm:w-[220px] sm:h-[220px]" src="concept/alinhamento.webp" alt="" />
            <img className="w-[160px] h-[160px] sm:w-[220px] sm:h-[220px]" src="concept/balanceamento.webp" alt="" />
            <img className="w-[160px] h-[160px] sm:w-[220px] sm:h-[220px]" src="concept/injecao.webp" alt="" />
            <img className="w-[160px] h-[160px] sm:w-[220px] sm:h-[220px]" src="concept/suspensao.webp" alt="" />
          </div>
          <img className="hidden h-[950px] lg:inline-flex" src="concept/car-middle.webp" alt="" />
          <div className="inline-flex lg:hidden m-1">
          </div>
          <div className="flex flex-col lg:gap-10 justify-center">
            <img className="w-[160px] h-[150px] sm:w-[220px] sm:h-[205px]" src="concept/oleo.webp" alt="" />
            <img className="w-[160px] h-[150px] sm:w-[220px] sm:h-[205px]" src="concept/pneus.webp" alt="" />
            <img className="w-[160px] h-[150px] sm:w-[220px] sm:h-[205px]" src="concept/scanner.webp" alt="" />
            <img className="w-[160px] h-[150px] sm:w-[220px] sm:h-[205px]" src="concept/mecanica.webp" alt="" />
          </div>
        </div>
        <div className="flex justify-center">
          <h2 className="text-[25px] lg:w-1/2 leading-6 lg:leading-10 semibold text-center lg:text-[35px] text-black">Tudo isso combinado com uma equipe motivada em prestar o melhor serviço, garantindo a experiência de bom negócio.</h2>
        </div>
      </div>
      <div className="h-[410px] w-vw bg-black flex-col">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <h2 className="text-[30px] sm:text-[50px] semibold uppercase">parceiros</h2>
          </div>
        </div>
        <div className="flex justify-center pl-4 pb-4">
          <div className="w-screen sm:w-3/5  gap-5 flex flex-wrap justify-center place-items-center">
            <img className="w-[40%] lg:w-auto" src="concept/motul.webp" alt="Logo motul" />
            <img className="w-[40%] lg:w-auto" src="concept/yokohama.webp" alt="Logo yokohama" />
            <img className="w-[40%] lg:w-auto" src="concept/advan.webp" alt="Logo advan" />
            <img className="w-[40%] lg:w-auto" src="concept/delinte.webp" alt="Logo delinte" />
            <img className="w-[40%] lg:w-auto" src="concept/disemp.webp" alt="Logo disemp" />
          </div>
        </div>
      </div>
      <div className="bg-concept-gray h-fit p-4 flex flex-col align-middle justify-center bottom-0">
            <div className="flex flex-col justify-center place-items-center m-6">
                <img className="sm:w-72" src="concept/logo-concept.png" />
                <div className="flex items-center gap-3">
                <a href="tel:5508000177777">
                  <img className="w-[31px] h-[31px]" src="concept/phone.png" alt="Logo Telefone" />
                </a>
                <img className="w-[227px] h-[19px]" src="concept/phone-number.png" alt="Número de telefone 0800 017 7777" />
              </div>
            </div>
            <hr className="w-full" />
            <div className="flex flex-col w-10/12 mx-auto text-center m-3 text-lg lg:flex-row lg:place-content-between">
                <p>TS PNEUS LTDA.© 2024 | Todos os direitos reservados </p>
                <div className="flex justify-center mt-3 lg:mt-0 lg:justify-end">
                    <p>Desenvolvido por:</p>
                    <img className="h-8 ml-3" src="logo-ouro-preto-min.png" />
                </div>
            </div>
        </div>
        <PneusModal isOpen={isModalOpen} onClose={closeModal} dataKey={key} whatsappModal={{  openModal: openModal2 }}></PneusModal>
        <Modal key="whatsappModal" isOpen={isModal2Open} onClose={closeModal2}></Modal>
        </div>
  );
}