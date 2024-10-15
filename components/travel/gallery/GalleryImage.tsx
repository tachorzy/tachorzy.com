"use client";

import Image from 'next/image'
import { useState } from 'react';

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


const GalleryImage = (props: {index: number, imageSrc: string}) => {
    const { index, imageSrc } = props;

    const [isLoading, setLoading] = useState(true)

    return (
            <Image 
                src={imageSrc} 
                height={150} 
                width={350} 
                alt={`travel pic ${index}`} 
                className={cn('rounded-md saturate-[120%] transition-all duration-700 contrast-[120%] ', isLoading ? 'opacity-50 animate-pulse' : 'opacity-100')}
                onLoadingComplete={() => {setLoading(false)}}
                loading="lazy"
            />
    );
}

export default GalleryImage;