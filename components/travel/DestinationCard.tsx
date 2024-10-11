import Image from 'next/image'
import Link from 'next/link'
import { JakartaBold } from '../../lib/localNextFonts'

interface destination{
    name: string;
    country: string
    coverImageURL: string;
}

const DestinationCard = (props: destination) => {
    return(
        <div className={JakartaBold.className + ` relative mt-0.5 w-56 md:max-2xl:w-80 md:max-2xl:h-[19.25rem] bg-metal rounded-md shadow-2xl hover:scale-105 duration-500 border-[2.5px] border-opacity-75 border-[#1C2B2D] transition-all duration-500`}>
            <Link href={`\\travel\\${props.name}\\${props.country}\\country_cover.jpg`} target="_blank" className="relative flex flex-row items-end justify-center text-[invert(0)]">
                <div className="absolute flex flex-col pb-2 w-2/3">
                    <h1 className={"text-xs text-dune font-bold uppercase tracking-wider text-center z-50"}>{props.name}</h1>
                </div>
                <Image src={"/travel/vignette.svg"} height={1300} width={1300} alt="vignette" className="w-full z-30 absolute bottom-0 "/>
                <Image src={props.coverImageURL} height={150} width={350} alt={`travel pic from ${props.name}`} className="rounded-md saturate-[120%] hover:sepia-0 transition-all duration-700 contrast-[120%]"></Image>
            </Link>
        </div>
    );
}

export default DestinationCard;