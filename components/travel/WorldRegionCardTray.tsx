import { JakartaMedium } from '../../lib/localNextFonts'
import { regionsTravelled } from 'lib/travel';
import WorldRegionCard from './WorldRegionCard';

const WorldRegionCardTray = () => {
    return(
        <div className={JakartaMedium.className + " z-0 relative flex md:flex-row flex-wrap mt-1 lg:-ml-7 xl:ml-0 xl:mt-7 lg:gap-y-0 lg:gap-x-0 gap-y-8 xl:gap-y-2 xl:gap-x-2 2xl:gap-y-4 2xl:gap-x-4 lg:-mb-48 mb-14 2xl:mb-0 2xl:w-11/12"}>
          {Array.from(regionsTravelled.entries()).map(([regionName, regionDetails], index) => {
              return(
                <WorldRegionCard key={index} name={regionName} coverImageURL={regionDetails.coverImageURL}/>
              )
            }
          )}
        </div>
    );
}

export default WorldRegionCardTray;