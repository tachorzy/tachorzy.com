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
        <div className={ManropeRegular.className + " mt-0.5 w-[17rem] h-[25rem] md:max-2xl:w-80 md:max-2xl:h-[19.25rem] bg-metal rounded-md shadow-2xl hover:scale-105 duration-500"}>
            <Link href={`\\travel\\${props.name}\\country_cover.jpg`} target="_blank" className="w-full h-2/3 z-0">
                <Image src={props.coverImageURL} height={150} width={350} alt={`travel pic from ${props.name}`} className="rounded-t-md"></Image>
            </Link>
            <div className="bg-metal rounded-md h-1/3 justify-center content-center pt-4 px-6 pb-1 z-50">
                <p className="text-dusty text-2xl">Name</p>
                <p className="text-mudbrick text-lg">Description</p>
            </div>
        </div>
    );
}

export default CountryCard;