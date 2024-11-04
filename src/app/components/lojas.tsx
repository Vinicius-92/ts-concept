'use client';

import { useState, useEffect } from 'react';

const images = [
    {img: 'lojas/limeira.jpg', end: "R. André Scarpa, 08, Jd. São Pedro - Limeira-SP", nome: "TS PNEUS LIMEIRA", whatsappLink: "https://api.whatsapp.com/send/?phone=5501934415051&text=Ol%C3%A1,%20vim%20do%20Site%20da%20TS%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es&type=phone_number&app_absent=0"},
    {img: 'lojas/campinas.jpg', end: "R. Salto Grande, 55 - Jd. do Trevo", nome: "TS PNEUS CAMPINAS 1", whatsappLink: "https://api.whatsapp.com/send/?phone=5501921214067&text=Ol%C3%A1,%20vim%20do%20Site%20da%20TS%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es&type=phone_number&app_absent=0"},
    {img: 'lojas/campinas-2.jpg', end: "R. Quatá, 78 - Jd. do Trevo", nome: "TS PNEUS CAMPINAS 2", whatsappLink: "https://api.whatsapp.com/send/?phone=5501921214067&text=Ol%C3%A1,%20vim%20do%20Site%20da%20TS%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es&type=phone_number&app_absent=0"},
    {img: 'lojas/pocos.jpg', end: "Av. Monsenhor Alderige, 44 - Jd. Country Club", nome: "TS PNEUS POÇOS DE CALDAS", whatsappLink: "https://api.whatsapp.com/send/?phone=5501908008782399&text=Ol%C3%A1,%20vim%20do%20Site%20da%20TS%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es&type=phone_number&app_absent=0"},
    {img: 'lojas/paulinia.jpg', end: "EM BREVE", nome: "TS PNEUS SMART PAULÍNIA", whatsappLink: ""}
  ];

export default function Lojas() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPreviousImage = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(goToNextImage, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div id='lojas' className="h-fit flex flex-col lg:flex-row linear-mobile lg:linear-desktop">
            <div className="text-2xl sm:text-4xl lg:mx-36 lg:mt-36 flex flex-col lg:w-2/5 w-full text-center mt-3">
                <strong className="bold">LOJAS TS:</strong>
                <p>FÁCIL LOCALIZAÇAO</p>
                <p>E ESTACIONAMENTO</p>
            </div>
            <div className='lg:w-4/5 w-full 2xl:w-1/2 2xl:mt-1 mr-36 lg:mt-8'>
                <div className="flex flex-col lg:flex-row">
                    <button onClick={goToPreviousImage}className="w-12 h-9 l-0 2xl:mt-52 mt-48 mr-3 hidden lg:block">
                        <img src='./double-chevron-left.webp' />
                    </button>

                    <div className='mt-12'>
                        <a href={images[currentIndex].whatsappLink} target='_blanck'>
                            <img src={images[currentIndex].img} className="w-11/12 mx-auto lg:w-full" />
                        </a>
                        <p className="w-11/12 lg:w-full mx-auto text-lg">
                            <span className='bold'>{images[currentIndex].nome}</span> 
                            <br className='md:hidden'/> 
                            {images[currentIndex].end}
                        </p>
                    </div>

                    <div className='lg:hidden flex justify-center gap-10 mt-3'>
                        <button onClick={goToPreviousImage}className="w-8">
                            <img src='./double-chevron-left.webp' />
                        </button>
                        <button onClick={goToNextImage} className="w-8">
                        <img src='./double-chevron-right.webp' />
                    </button>
                    </div>

                    <button onClick={goToNextImage} className="w-12 h-9 mt-48 2xl:mt-52 ml-3 hidden lg:block">
                        <img src='./double-chevron-right.webp' />
                    </button>
                    </div>
                </div>
        </div>
    )
}