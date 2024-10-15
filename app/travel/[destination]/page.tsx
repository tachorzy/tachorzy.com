import DestinationCardTray from 'components/travel/DestinationCardTray';
import { placesTravelled } from 'lib/travel';
import SectionTitle from 'components/section/SectionTitle';
import Logo from 'components/Logo';
import TravelNav from 'components/travel/TravelNav';

export default function Page({ params } : {
    params: { destination: string }
}){ 
    const decodedDestination = decodeURIComponent(params.destination);

    const countryDetails = placesTravelled.get(decodedDestination);

    return (
        <main className="bg-shark flex flex-col min-h-screen overflow-y-yscroll 2xl:gap-y-24 ">
            <div className="lg:ml-24 ml-10 mb-24 ">
                {countryDetails ? (
                        <div className="flex flex-col">
                            <TravelNav country={decodedDestination} city={null}/>
                            <SectionTitle title={decodedDestination}/>
                            <DestinationCardTray countryName={decodedDestination} countryDetails={countryDetails}/>
                        </div>
                        
                    ) : (<h1 className="text-4xl text-bold text-dune">Whoops, looks like {decodedDestination} is still on my bucketlist...</h1>)
                }    
            </div>
            <div className="hidden lg:block">
                <Logo/>
            </div>
        </main>
    )

};