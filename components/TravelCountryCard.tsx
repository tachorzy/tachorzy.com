import Image from 'next/image'
import Link from 'next/link'
import { ManropeExtraBold, ManropeMedium, ManropeRegular } from '../lib/localNextFonts'

interface country{
    name: string;
    isoCode: string;
    coverImageURL: string;
}

const TravelCountryCard = (props: country) => {
    return(
        <div className={ManropeRegular.className + " relative col-span-3 w-full h-full"}>
            <Link href={`/${props.isoCode}/page.tsx`} target="_blank" className="">
                <div className="content-center">
                    <h1 className="absolute bottom-1/2 left-1/4 right-1/4 text-3xl text-walnut hover:invisible duration-500 z-50">{props.name}</h1>
                </div>
                <Image src={props.coverImageURL} height={500} width={500} alt={`travel pic from ${props.name}`} className="backdrop-blur-xl hover:backdrop-blur-none saturate-150 hover:saturate-100 contrast-[135%] sepia-[75%] hover:sepia-[35%] duration-500 z-0"></Image>
            </Link>

        </div>
    );
}

export default TravelCountryCard;