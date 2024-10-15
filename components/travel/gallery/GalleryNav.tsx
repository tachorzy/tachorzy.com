import { JakartaBold } from '../../../lib/localNextFonts';
import Link from 'next/link';

const GalleryNav = (props: { country: string, city: string }) => {
    const { country, city } = props;

    return (
        <div className={JakartaBold.className + " flex flex-row gap-x-1.5 uppercase text-xs leading-relaxed text-mudbrick mt-20 lg:mt-24 absolute "}>
            <Link href={`/`}>
                <h1 className="hover:scale-[105%] duration-700 hover:text-sandstone">Home</h1>
            </Link>
            ›
            <Link href={`/#travel`}>
                <h1 className="hover:scale-[105%] duration-700 hover:text-sandstone">Travel</h1>
            </Link>
            ›
            <Link href={`/travel/${country}`}>
                <h1 className="hover:scale-[105%] duration-700 hover:text-sandstone">{country}</h1>
            </Link>
            ›
        </div>
    );
};

export default GalleryNav;