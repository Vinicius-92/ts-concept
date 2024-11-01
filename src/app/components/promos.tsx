'use client';

import { useState, useEffect } from 'react';

const images = [
    'promos/1.png',
    'promos/2.png',
    'promos/3.png',
    'promos/4.png',
    'promos/5.png'
  ];

export default function Promos() {
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
        <div id='promos' className="h-[460px] flex flex-col lg:flex-row linear-mobile lg:linear-desktop">
            <div className="text-2xl lg:text-4xl lg:mx-36 lg:mt-36 flex flex-col lg:w-2/5 w-full text-center mt-3">
                <strong className="bold">EXCLUSIVIDADE DA TS:</strong>
                <p>OPORTUNIDADES</p>
                <p>IMPERDÍVEIS</p>
                <a href="" type="button" className="custom-buttom mx-auto">
                    CONSULTE OUTRAS MEDIDAS
                </a>
            </div>
            <div className='lg:w-4/5 w-full 2xl:w-1/2 2xl:mt-1 mr-36 mt-8'>
                <div className="flex flex-col lg:flex-row">
                    <button onClick={goToPreviousImage}className="w-12 h-9 l-0 2xl:mt-52 mt-36 hidden md:block">
                        <img src='./double-chevron-left.webp' />
                    </button>

                    <img src={images[currentIndex]} alt={`Banner ${currentIndex + 1}`} className="w-4/5 mx-auto" />

                    <div className='md:hidden flex justify-center gap-10'>
                        <button onClick={goToPreviousImage}className="w-8">
                            <img src='./double-chevron-left.webp' />
                        </button>
                        <button onClick={goToNextImage} className="w-8">
                        <img src='./double-chevron-right.webp' />
                    </button>
                    </div>

                    <button onClick={goToNextImage} className="w-12 h-9 mt-36 2xl:mt-52 ml-3 hidden md:block">
                        <img src='./double-chevron-right.webp' />
                    </button>
                    </div>
                </div>
        </div>
    )
}