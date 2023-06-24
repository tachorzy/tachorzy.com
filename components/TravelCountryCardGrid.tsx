import Image from 'next/image'
import Link from 'next/link'
import { ManropeExtraBold, ManropeMedium } from '../lib/localNextFonts'
import { PLACES_TRAVELLED } from 'lib/travel';
import TravelCountryCard from './TravelCountryCard';

const TravelCountryCardGrid = () => {
    return(
        <div className={ManropeExtraBold.className}>
            <div className="grid md:max-2xl:grid-cols-3 md:max-2xl:grid-rows-3 gap-0">
              {Array.from(PLACES_TRAVELLED.entries()).map(([countryName, countryDetails]) => {
                  return(
                    <TravelCountryCard name={countryName} isoCode={countryDetails.isoCode} coverImageURL={countryDetails.coverImageURL}/>
                  )
                }
              )}
            </div>
        </div>
    );
}

export default TravelCountryCardGrid;