import Image from 'next/image'
import Link from 'next/link'
import { ManropeExtraBold, ManropeMedium } from '../lib/localNextFonts'

interface country{
    name: string;
    isoCode: string;
    coverImageURL: string;
}

const TravelCountryCard = (props: country) => {
    return(
        <Image src={props.coverImageURL} height={150} width={150} alt={`travel pic from ${props.name}`} className=""></Image>
        // <Link href={`/${props.isoCode}/page.tsx`} target="_blank" className="">
        // </Link>
    );
}

export default TravelCountryCard;