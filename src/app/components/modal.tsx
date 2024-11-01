import React, { FC } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <button onClick={onClose} className="text-gray-500 absolute top-4 right-4">&times;</button>
      <div className="bg-black p-6 rounded-lg shadow-lg max-w-md w-[400px] h-[400px] flex flex-col" onClick={(e) => e.stopPropagation()}>
		<button onClick={onClose} className='z-50 text-[1.5rem] ml-64'>
			<p>FECHAR</p>
		</button>
		  <h1 className='bold text-white text-5xl text-center pt-2'>QUERO FALAR COM A LOJA DE:</h1>
		  <div className='flex flex-col justify-center mx-auto gap-5 pt-12'>
			<a href="https://api.whatsapp.com/send/?phone=5519987227675&text=Ol%C3%A1%21%21%0A%0AVim+do+Site+da+TS+Pneus%2C+e+gostaria+de+saber+sobre+as+ofertas%21&type=phone_number&app_absent=0" target='_blank' className='mx-auto'>
				<img src="limeira.webp" alt="" />
			</a>
			<a href="https://api.whatsapp.com/send/?phone=551921214067&text=Ol%C3%A1%21%21%0A%0AVim+do+Site+da+TS+Pneus%2C+e+gostaria+de+saber+sobre+as+ofertas%21&type=phone_number&app_absent=0" target='_blank' className='mx-auto'>
				<img src="campinas.webp" alt="" />
			</a>
		  </div>
      </div>
    </div>
  );
};

export default Modal;