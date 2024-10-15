import React from 'react'


const HeroSection = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset z-10"></div>
            <div className="bg-[url('/hero-bg.png')] bg-no-repeat bg-cover bg-center h-[80vh] md:h-[90vh] flex items-center justify-center">
                <div className="px-4 md:px-32 py-24 md:py-32 text-center md:text-left z-20">
                    <h1 className="text-white font-fira text-4xl md:text-6xl font-semibold mb-6 md:w-1/2">
                        Hero Section
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
