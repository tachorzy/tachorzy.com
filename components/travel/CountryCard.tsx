import Image from 'next/image'
import Link from 'next/link'
import { JakartaBold, JakartaExtraBold } from '../../lib/localNextFonts'

interface country{
    name: string;
    yearVisited: string;
    isoCode: string;
    coverImageURL: string;
}

const CountryCard = (props: country) => {
    return(
        <div className={JakartaBold.className + ` relative mt-0.5 w-56 md:max-2xl:w-80 md:max-2xl:h-[19.25rem] bg-metal rounded-md shadow-2xl hover:scale-105 duration-500 border-[2.5px] border-opacity-75 border-[#1C2B2D]`}>
            <Link href={`\\travel\\${props.name}\\country_cover.jpg`} target="_blank" className="relative flex flex-row items-end justify-center text-[invert(0)]">
                <div className="absolute flex flex-col pb-2">
                    <h1 className={"text-xs font-bold uppercase tracking-wider text-center z-50"}>{props.name}</h1>
                    <h2 className={"text-xs font-bold uppercase tracking-wider text-center z-50"}>{props.yearVisited}</h2>
                </div>
                <Image src={props.coverImageURL} height={150} width={350} alt={`travel pic from ${props.name}`} className="rounded-md sepia-[100%] saturate-[120%] hover:sepia-0 transition-all duration-700 contrast-[120%]"></Image>
            </Link>
        </div>
    );
}

export default CountryCard;