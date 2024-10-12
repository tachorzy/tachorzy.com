import fs from 'fs';
import path from 'path';
import { JakartaMedium } from '../../lib/localNextFonts';
import GalleryImage from './GalleryImage';
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
                <div key={index}>
                    <GalleryImage index={index} imageSrc={src} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;