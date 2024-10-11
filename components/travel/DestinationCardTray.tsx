import Image from 'next/image'
import Link from 'next/link'
import { JakartaMedium } from '../../lib/localNextFonts'
import { PLACES_TRAVELLED } from 'lib/travel';
import DestinationCard from './DestinationCard';

const DestinationCardTray = (countryName: string) => {

    const countryDetails = PLACES_TRAVELLED.get(countryName);

    if (!countryDetails)
        return <div>No details available for {countryName}</div>;

    return(
        <div className={JakartaMedium.className + " z-0 relative flex md:flex-row flex-wrap mt-1 lg:-ml-7 xl:ml-0 xl:mt-7 lg:gap-y-0 lg:gap-x-0 gap-y-8 xl:gap-y-4 xl:gap-x-4 lg:-mb-48 mb-14 2xl:mb-0 2xl:w-11/12"}>
          {countryDetails.destinations.map((details, index) => {
              return(
                <DestinationCard key={index} name={details[index]} country={countryName} coverImageURL={`//${details[index]}//cover_image.jpg`}/>
              )
            }
          )}
        </div>
    );
}

export default DestinationCardTray;