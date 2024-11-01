'use client'
 
import { useState } from 'react'
import Modal from './modal';

export default function Vans() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="bg-vans h-fit lg:h-[470px] bg-no-repeat	bg-cover bg-center flex-col lg:flex-row flex justify-center text-3xl lg:text-4xl lg:gap-10">
            <img src="apollo-logo.png" className="w-[214px] h-[83px] my-auto lg:mx-0 mx-auto" />
            <img src="apollo-pneus.png" className="lg:w-[475px] lg:h-[412px] w-11/12 mx-auto lg:mx-0 my-auto" />
            <div className="lg:my-auto lg:mx-0 mx-auto lg:text-start text-center">
                <p className="bold">ELEITO O MELHOR PNEU</p>
                <p className="lg:mb-5">DE VAN DO MUNDO!</p>
                <button onClick={openModal} type="button" className="custom-buttom lg:text-3xl">CONSULTE</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
        </div>
    )
}