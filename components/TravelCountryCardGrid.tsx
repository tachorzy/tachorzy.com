import Image from 'next/image'
import Link from 'next/link'
import { ManropeExtraBold, ManropeMedium } from '../lib/localNextFonts'
import { PLACES_TRAVELLED } from 'lib/travel';
import TravelCountryCard from './TravelCountryCard';

const TravelCountryCardGrid = () => {
    return(
        <div className={ManropeExtraBold.className + " w-10/12 h-10/12"}>
            <div className="grid grid-cols-12 grid-rows-3">
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