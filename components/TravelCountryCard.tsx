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
        <div className={ManropeExtraBold.className}>
            <div>
                <Link href={`/${props.isoCode}/page.tsx`} target="_blank" className="">
                    <Image src={props.coverImageURL} height={70} width={70} alt={`travel pic from ${props.name}`} className=""></Image>
                </Link>
            </div>
        </div>
    );
}

export default TravelCountryCard;