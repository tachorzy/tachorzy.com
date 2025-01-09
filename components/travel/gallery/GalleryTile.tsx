import { FileObject } from '@supabase/storage-js'
import GalleryImage from './GalleryImage';
import { supabase } from '../../../supabaseClient';
import { use } from 'react'

async function getPublicUrl(imageSrc: string){
    const { data } = await supabase.storage.from("travel-photos").getPublicUrl(imageSrc);
    return data;
}

const GalleryTile = (props: {index: number, imageSrc: string}) => {
    const { index, imageSrc } = props;
    const data = use(getPublicUrl(imageSrc));

    return (
        <div key={index} className="relative mt-0.5 w-56 md:max-2xl:w-80 md:max-2xl:h-[19.25rem] xl:w-56 xl:h-[14.54] bg-metal rounded-md shadow-2xl duration-500 border-[2.5px] border-opacity-75 border-[#1C2B2D] transition-all duration-500">
            <GalleryImage index={index} imageSrc={data.publicUrl} />
        </div>
    );
};

export default GalleryTile;