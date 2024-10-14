"use client";

import Image from 'next/image'
import { useState } from 'react';
const GalleryImage = (props: {index: number, imageSrc: string}) => {
    const { index, imageSrc } = props;

    const [loadingStyle, setLoadingStyle] = useState("opacity-50 animate-pulse duration-700");

    return (
            <Image 
                src={imageSrc} 
                height={150} 
                width={350} 
                alt={`travel pic ${index}`} 
                className={`rounded-md saturate-[120%] transition-all duration-700 contrast-[120%] ${loadingStyle}`}
                onLoad={() => {setLoadingStyle("opacity-50 animate-pulse duration-300")}}
                onLoadingComplete={() => {setLoadingStyle("")}}
                loading="lazy"  
            />
    );
}

export default GalleryImage;