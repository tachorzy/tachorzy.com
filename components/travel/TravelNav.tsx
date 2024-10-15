import { JakartaBold } from '../../lib/localNextFonts';
import Link from 'next/link';

const TravelNav = (props: { country: string, city: string | null }) => {
    const { country, city } = props;

    return (
        <div className={JakartaBold.className + " flex flex-row gap-x-1.5 uppercase text-xs leading-relaxed text-mudbrick mt-20 lg:mt-28 absolute select-none"}>
            <Link href={`/`}>
                <h1 className="hover:scale-[102.5%] duration-700 hover:text-sandstone select-all">Home</h1>
            </Link>
            ›
            <Link href={`/#travel`}>
                <h1 className="hover:scale-[102.5%] duration-700 hover:text-sandstone select-all">Travel</h1>
            </Link>
            ›
            {city != null ? 
                (<>
                    <Link href={`/travel/${country}`}>
                        <h1 className="hover:scale-[102.5%] duration-700 hover:text-sandstone select-all">{country}</h1>
                    </Link>
                    ›
                </>)
                : (<></>)
            }
        </div>
    );
};

export default TravelNav;