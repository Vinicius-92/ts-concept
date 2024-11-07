'use client'

import React, { FC, useState } from 'react';
import Pneu from '../models/pneu';
import Data from '../data/data';
import Modal from '../components/modal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  dataKey: string;
  whatsappModal: {openModal: any}
}

export default function PneusModal({ isOpen, onClose, dataKey, whatsappModal }: ModalProps) {
  if (!isOpen) return null;
  let models: Pneu[] = Data.getModelsByBrand(dataKey);

  function replaceItemsWithWhatsApp() {
        whatsappModal.openModal()
  }

  let listModelDivs = models.map(model => {
    return <div className='m-2 ml-5 sm:ml-0 sm:p-2 tracking-tight items-start' key={Math.random().toString()}>
        <p className='semibold max-w-[120px] sm:max-w-[180px]'>{model.modelo}</p>
        <p>Dianteiros: {model.dianteiros}</p>
        <p>Traseiros: {model.traseiros}</p>
        {model.anoA != null && model.anoA !== model.anoDe ? (
                <p>Anos: {model.anoDe} à {model.anoA}</p>
            ) : model.anoA != null && model.anoA === model.anoDe ? (
                <p>Ano: {model.anoDe}</p>
            ) : null}
        <button onClick={replaceItemsWithWhatsApp} className='custom-buttom-concept flex hover:invert bg-white'>
            <img className='h-[15px] w-[15px] sm:h-[20px] sm:w-[20px] cursor-pointer invert mt-1 mr-1' src="concept/whatsapp.png" alt="whatsapp logo" />
            <p className='text-1xl cursor-pointer'>Entre em contato</p>
        </button>
    </div>
  })

  function fillClass() {
    return (
        <div id='models' className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className='flex sm:relative justify-center items-center h-fit'>
            <div className='bg-gray-50 text-sm w-screen sm:w-[700px] sm:h-1/2 rounded-lg text-black uppercase flex flex-wrap sm:text-xl justify-start sm:justify-center sm:p-4'>
                { listModelDivs }
                <button onClick={onClose} className="text-black text-1xl semibold absolute right-6">FECHAR</button>
            </div>
        </div>
    </div>
    )
  }

  return (
    <div id='content-pneus-modal'>
        { fillClass() }
    </div>
  );
};
