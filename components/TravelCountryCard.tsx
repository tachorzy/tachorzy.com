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
                <Link href={`/${props.isoCode}/page.tsx`} target="_blank" className="w-full h-2/3">
                    <Image src={props.coverImageURL} height="0" width={350} alt="travel pic" className="rounded-t-md h-[56%]"></Image>
                </Link>
            </div>
        </div>
    );
}

export default TravelCountryCard;