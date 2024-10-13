import { JakartaMedium } from '../../lib/localNextFonts';
import dynamic from 'next/dynamic'
import { FileObject } from '@supabase/storage-js'
import { supabase } from '../../supabaseClient';
import GalleryImage from './GalleryImage';
// const GalleryImage = dynamic(() => import('components/travel/GalleryImage'), {
//     loading: () => <p className="text-white font-bold text-9xl">Loading...</p>,
// })

const Gallery = async (props: { files: FileObject[], country: string, city: string }) => {
    const { files, country, city } = props;

    return (
        <div className={JakartaMedium.className + " z-0 relative flex md:flex-row flex-wrap mt-1 lg:-ml-7 xl:ml-0 xl:mt-7 lg:gap-y-0 lg:gap-x-0 gap-y-8 xl:gap-y-4 xl:gap-x-4 lg:-mb-48 mb-14 2xl:mb-0 2xl:w-11/12"}>
            {files.map((src, index) => (
                <div key={index}>
                    <GalleryImage index={index} imageSrc={`${country}/${city}/${src.name}`} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;