// "use client";

import Image from 'next/image'
// import { useEffect, useState } from 'react'
import { supabase } from '../../supabaseClient';

async function getPublicUrl(imageSrc: string){
    const { data } = await supabase.storage.from("travel-photos").getPublicUrl(imageSrc);
    return data;
}


const GalleryImage = async (props: {index: number, imageSrc: string}) => {
    // const [loadingStyle, setLoadingStyle] = useState("opacity-50 animate-pulse duration-700");

    const { index, imageSrc } = props;

    console.log(`imageSrc: ${imageSrc}`);
    const { data } = await supabase.storage.from("travel-photos").getPublicUrl(imageSrc);

    console.log(`publicUrl: ${data.publicUrl}`);


    return (
            <div key={index} className="relative mt-0.5 w-56 md:max-2xl:w-80 md:max-2xl:h-[19.25rem] bg-metal rounded-md shadow-2xl duration-500 border-[2.5px] border-opacity-75 border-[#1C2B2D] transition-all duration-500">
                <Image 
                    src={`${data.publicUrl}`} 
                    height={150} 
                    width={350} 
                    alt={`travel pic ${index}`} 
                    className={`rounded-md saturate-[120%] transition-all duration-700 contrast-[120%]`}
                    // onLoad={() => {setLoadingStyle("opacity-50 animate-pulse duration-700")}}
                    // onLoadingComplete    ={() => {setLoadingStyle("")}}
                    loading="lazy"  
                />
            </div>
    );
}

export default GalleryImage;