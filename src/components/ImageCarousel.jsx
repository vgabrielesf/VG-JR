import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const imagesPerView = 3;
    const total = images.length;

    const nextImage = () => {
        setCurrent((prev) => (prev + imagesPerView) % total);
    };
    const prevImage = () => {
        setCurrent((prev) => (prev - imagesPerView + total) % total);
    };

    // Seleciona as imagens para exibir
    const visibleImages = images.slice(current, current + imagesPerView);
    // Se estiver no final, mostra as primeiras para completar 3
    const fillImages = imagesPerView - visibleImages.length;
    const displayImages = fillImages > 0 ? visibleImages.concat(images.slice(0, fillImages)) : visibleImages;

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="relative flex items-center justify-center w-full" style={{minHeight: '320px'}}>
                <button onClick={prevImage} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-blue-500 hover:text-white transition-all duration-200 border border-gray-300 dark:border-gray-600 z-10 flex items-center justify-center" style={{transform: 'translateY(-50%)'}}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.08"/>
                        <path d="M14.5 7l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div className="flex flex-row justify-center items-center w-full" style={{gap: '10px'}}>
                    {displayImages.map((img, idx) => (
                        <div key={img.src + idx} className="p-0" style={{ background: 'none', borderRadius: 0, boxShadow: 'none' }}>
                            <img
                                src={img.src}
                                alt={img.alt}
                                style={{ width: '320px', height: '320px', objectFit: 'contain', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.32), 0 2px 8px 0 rgba(0,0,0,0.45)', border: 'none', background: 'none', borderRadius: 0 }}
                            />
                            <div className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300" style={{fontFamily: 'Poppins, sans-serif'}}>
                                {img.alt}
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={nextImage} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-blue-500 hover:text-white transition-all duration-200 border border-gray-300 dark:border-gray-600 z-10 flex items-center justify-center" style={{transform: 'translateY(-50%)'}}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.08"/>
                        <path d="M9.5 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ImageCarousel;
