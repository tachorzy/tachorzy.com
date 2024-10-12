import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { JakartaMedium } from '../../lib/localNextFonts';

interface GalleryProps {
    countryName: string;
    cityName: string;
    imagePaths: string[];
}

const Gallery: React.FC<GalleryProps> = ({ countryName, cityName, imagePaths = [] }) => {

    const imagesDirectory = path.join(process.cwd(), `public/travel/${countryName}/${cityName}`);

    if (fs.existsSync(imagesDirectory)) {
        const filenames = fs.readdirSync(imagesDirectory);
        imagePaths = filenames
            .filter((filename) => /\.(jpg|jpeg|png)$/.test(filename))
            .map((filename) => `/travel/${countryName}/${cityName}/${filename}`);
    }

    return (
        <div className={JakartaMedium.className + " z-0 relative flex md:flex-row flex-wrap mt-1 lg:-ml-7 xl:ml-0 xl:mt-7 lg:gap-y-0 lg:gap-x-0 gap-y-8 xl:gap-y-4 xl:gap-x-4 lg:-mb-48 mb-14 2xl:mb-0 2xl:w-11/12"}>
            {imagePaths.map((src, index) => (
                <div key={index} className="relative mt-0.5 w-56 md:max-2xl:w-80 md:max-2xl:h-[19.25rem] bg-metal rounded-md shadow-2xl duration-500 border-[2.5px] border-opacity-75 border-[#1C2B2D] transition-all duration-500">
                    <Image src={src} height={150} width={350} alt={`travel pic from ${index}`} className="rounded-md saturate-[120%] transition-all duration-700 contrast-[120%]"></Image>
                </div>
            ))}
        </div>
    );
};

export default Gallery;