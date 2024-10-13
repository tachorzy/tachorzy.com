"use client";

import { useEffect, useState } from 'react';
import { JakartaMedium } from '../../lib/localNextFonts';
import dynamic from 'next/dynamic'
import { supabase } from '../../supabaseClient';

const GalleryImage = dynamic(() => import('components/travel/GalleryImage'), {
    loading: () => <p className="text-white font-bold text-9xl">Loading...</p>,
})


const Gallery = (props: { countryName: string, cityName: string }) => {
    const { countryName, cityName } = props;

    useEffect(() => {
        getAllImagesFromBucket()
      }, [])

    const [photoUrls, setPhotoUrls] = useState<Object>([]);
    async function getAllImagesFromBucket() {
        const data = await supabase.storage
          .from("travel-photos")
          .list(`${countryName}/${cityName}/`);
        setPhotoUrls(data);        
      }
    

    console.log(`photoUrls: ${photoUrls}`);

    const photoMap = new Map(Object.entries(photoUrls));
    return (
        <div className={JakartaMedium.className + " z-0 relative flex md:flex-row flex-wrap mt-1 lg:-ml-7 xl:ml-0 xl:mt-7 lg:gap-y-0 lg:gap-x-0 gap-y-8 xl:gap-y-4 xl:gap-x-4 lg:-mb-48 mb-14 2xl:mb-0 2xl:w-11/12"}>
            {Array.from(photoMap).map((src, index) => (
                <div key={index}>
                    <GalleryImage index={index} imageSrc={src[index]} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;