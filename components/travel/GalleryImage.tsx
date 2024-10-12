"use client";

import Image from 'next/image'
import Link from 'next/link'
import { JakartaBold } from '../../lib/localNextFonts'
import { useState } from 'react'
const DestinationCard = (props: {index: number, imageSrc: string}) => {
    const [loadingStyle, setLoadingStyle] = useState("opacity-50 animate-pulse duration-700");

    return(
            <div key={props.index} className="relative mt-0.5 w-56 md:max-2xl:w-80 md:max-2xl:h-[19.25rem] bg-metal rounded-md shadow-2xl duration-500 border-[2.5px] border-opacity-75 border-[#1C2B2D] transition-all duration-500">
                <Image 
                    src={props.imageSrc} 
                    height={150} 
                    width={350} 
                    alt={`travel pic ${props.index}`} 
                    className={`rounded-md saturate-[120%] transition-all duration-700 contrast-[120%] ${loadingStyle}`}
                    onLoad={() => {setLoadingStyle("opacity-50 animate-pulse duration-700")}}
                    onLoadingComplete={() => {setLoadingStyle("")}}    
                />
            </div>
    );
}

export default DestinationCard;