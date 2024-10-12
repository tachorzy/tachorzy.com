import DestinationCardTray from 'components/travel/DestinationCardTray';
import { PLACES_TRAVELLED } from 'lib/travel';
import SectionTitle from 'components/section/SectionTitle';

export default function Page({ params } : {
    params: { destination: string }
}){ 
    const decodedDestination = decodeURIComponent(params.destination);

    const countryDetails = PLACES_TRAVELLED.get(decodedDestination);

    return (
        <main className="bg-shark flex flex-col overflow-y-yscroll 2xl:gap-y-24 ">
            <div className="lg:ml-24 ml-10  mb-24 ">
                {countryDetails ? (
                        <div>
                            <SectionTitle title={decodedDestination}/>
                            <DestinationCardTray countryName={decodedDestination} countryDetails={countryDetails}/>
                        </div>
                        
                    ) : (<h1 className="text-4xl text-bold text-dune">Whoops, looks like {decodedDestination} is still on my bucketlist...</h1>)
                }    
            </div>    
 
        </main>
    )

};