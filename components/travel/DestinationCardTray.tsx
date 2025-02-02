'use client'
 
import { JakartaMedium } from '../../lib/localNextFonts'
import DestinationCard from './DestinationCard';

interface CountryDetailsInterface {
  endonym: string | null;
  coverImageURL: string;
  yearVisited: string;
  isoCode: string;
  destinations: string[];
}

const DestinationCardTray = (params: { countryName: string, countryDetails: CountryDetailsInterface}) => {
    const { countryName, countryDetails } = params

    return(
        <div className={JakartaMedium.className + " z-0 relative flex md:flex-row flex-wrap mt-1 lg:-ml-7 xl:ml-0 xl:mt-7 lg:gap-y-0 lg:gap-x-0 gap-y-8 xl:gap-y-48 xl:gap-x-4 lg:-mb-48 mb-14 2xl:mb-0 2xl:w-11/12"}>
          {countryDetails.destinations.map((details, index) => {
              return(
                <DestinationCard key={index} name={details} country={countryName}/>
              )
            }
          )}
        </div>
    );
}

export default DestinationCardTray;