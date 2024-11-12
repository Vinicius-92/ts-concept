'use client'

import React from 'react';
import Pneu from '../models/pneu';
import Data from '../data/data';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  dataKey: string;
}

export default function PneusModal({ isOpen, onClose, dataKey}: ModalProps) {
  if (!isOpen) return null;
  const models: Pneu[] = Data.getModelsByBrand(dataKey);

  const listModelDivs = models.map(model => {
    return <div className='m-2 ml-5 sm:ml-0 sm:p-2 tracking-tight items-start' key={Math.random().toString()}>
              <p className='semibold max-w-[120px] sm:max-w-[180px]'>{model.modelo}</p>
              <p>Dianteiros: {model.dianteiros}</p>
              <p>Traseiros: {model.traseiros}</p>
              {model.anoA != null && model.anoA !== model.anoDe ? (
                      <p>Anos: {model.anoDe} à {model.anoA}</p>
                  ) : model.anoA != null && model.anoA === model.anoDe ? (
                      <p>Ano: {model.anoDe}</p>
                  ) : null}
              <a className="custom-buttom-concept flex hover:invert bg-white mx-auto" href="https://api.whatsapp.com/send/?phone=551921214067&text=Ol%C3%A1%21%21%0A%0AVim+do+Site+da+TS+Pneus%2C+e+gostaria+de+saber+sobre+as+ofertas%21&type=phone_number&app_absent=0" target='_blank'>
                <img className='h-[15px] w-[15px] sm:h-[20px] sm:w-[20px] cursor-pointer invert mt-1 mr-1' src="concept/whatsapp.png" alt="whatsapp logo" />
                <p className='text-1xl cursor-pointer'>Entre em contato</p>
              </a>
        </div>
      }
  )

  return (
    <>
      <div id='models' className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10  overflow-hidden h-screen">
          <div className='flex inset-1 sm:relative bg-gray-50 justify-center items-start h-screen sm:h-fit overflow-y-scroll'>
              <div className='text-sm w-screen sm:w-[700px] rounded-lg text-black uppercase flex flex-wrap sm:text-xl justify-start sm:justify-center p-2'>
                  { listModelDivs }
              </div>
              <button onClick={onClose} className="text-black text-1xl semibold absolute top-2 sm:top-6 right-6 z-50">FECHAR</button>
          </div>
        </div>
      </>
    );
};
