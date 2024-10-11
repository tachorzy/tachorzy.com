import Image from 'next/image'
import Link from 'next/link'
import { ManropeExtraBold, ManropeMedium, ManropeRegular } from '../../lib/localNextFonts'

interface country{
    name: string;
    isoCode: string;
    coverImageURL: string;
}

const CountryCard = (props: country) => {
    return(
        <div className={ManropeRegular.className + " mt-0.5 w-56 md:max-2xl:w-80 md:max-2xl:h-[19.25rem] bg-metal rounded-md shadow-2xl hover:scale-105 duration-500 border-2 border-opacity-75 border-[#1C2B2D]"}>
            <Link href={`\\travel\\${props.name}\\country_cover.jpg`} target="_blank" className="">
                <Image src={props.coverImageURL} height={150} width={350} alt={`travel pic from ${props.name}`} className="rounded-md sepia-[35%] saturate-[120%] hover:sepia-0 transition-all duration-700 contrast-[120%] hover:contrast-100"></Image>
            </Link>
        </div>
    );
}

export default CountryCard;