'use client';

import { useState } from 'react';
import Modal from './modal';

export default function Marcas() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="bg-marcas h-[720px] lg:h-[470px] bg-fill items-center content-center ">
            <div className="flex flex-col items-center gap-10">
                <p className="bold uppercase text-4xl text-center lg:w-3/5">o maior estoque de modelos e medidas a 
                pronta entrega do interior paulista! </p>
                <div className="flex flex-col gap-2">
                        <div className="flex lg:flex-row flex-col gap-3 lg:gap-0">
                            <img src="yokohama-logo.png" alt="Logo da marca Yokohama" />
                            <img src="continental-logo.png" alt="Logo da marca Continental" />
                            <img src="bridgestone-logo.png" alt="Logo da marca Bridgestone" />
                        </div>
                        <div className="flex lg:flex-row flex-col lg:ml-3 gap-3 lg:gap-0">
                            <img src="pirelli-logo.png" alt="Logo da marca Pirelli" />
                            <img src="michelin-logo.png" alt="Logo da marca Michelin" />
                            <img src="delinte-logo.png" alt="Logo da marca Delinte" />
                        </div>
                    </div>
                    <button onClick={openModal} className="custom-buttom text-4xl">
                        CONSULTE
                    </button>
                    <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
            </div>
        </div>
    )
}