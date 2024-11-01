'use client';

import { useState, useEffect } from 'react';

const images = [
    'banners/1.png',
    'banners/2.png',
    'banners/3.png',
    'banners/4.png',
    'banners/5.png'
];

const imagesMobile = [
    'banners/mobile/1.png',
    'banners/mobile/2.png',
    'banners/mobile/3.png',
    'banners/mobile/4.png',
    'banners/mobile/5.png'
];


export default function Banners() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(goToNextImage, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <img className='desktop' src={images[currentIndex]} alt={`Banner ${currentIndex + 1}`}  />
            <img className='mobile' src={imagesMobile[currentIndex]} alt={`Banner ${currentIndex + 1}`}  />
        </div>
    )
}