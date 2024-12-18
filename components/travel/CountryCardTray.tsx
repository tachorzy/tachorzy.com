import { JakartaMedium } from '../../lib/localNextFonts'
import { placesTravelled } from 'lib/travel';
import CountryCard from './CountryCard';

const CountryCardTray = () => {
    return(
        <div className={JakartaMedium.className + " z-0 relative flex md:flex-row flex-wrap mt-1 lg:-ml-7 xl:ml-0 xl:mt-7 lg:gap-y-0 lg:gap-x-0 gap-y-8 xl:gap-y-2 xl:gap-x-2 2xl:gap-y-4 2xl:gap-x-4 lg:-mb-48 mb-14 2xl:mb-0 2xl:w-11/12"}>
          {Array.from(placesTravelled.entries()).map(([countryName, countryDetails], index) => {
              return(
                <CountryCard key={index} name={countryName} yearVisited={countryDetails.yearVisited} isoCode={countryDetails.isoCode} coverImageURL={countryDetails.coverImageURL}/>
              )
            }
          )}
        </div>
    );
}

export default CountryCardTray;