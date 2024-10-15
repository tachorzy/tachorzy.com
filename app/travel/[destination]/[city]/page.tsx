import { placesTravelled } from 'lib/travel';
import SectionTitle from 'components/section/SectionTitle';
import Logo from 'components/Logo';
import Gallery from 'components/travel/gallery/Gallery';
import { supabase } from '../../../../supabaseClient';
import TravelNav from 'components/travel/TravelNav';

export default async function Page({ params } : {
    params: { destination: string, city: string }
}){ 
    const decodedDestination = decodeURIComponent(params.destination);
    const decodedCity = decodeURIComponent(params.city);

    const countryDetails = placesTravelled.get(decodedDestination);

    const cityDetails = countryDetails?.destinations.find((place) => place === decodedCity);

    const {data, error} = await supabase.storage.from("travel-photos").list(`${decodedDestination}/${decodedCity}`);

    return (
        <main className="bg-shark flex flex-col min-h-screen overflow-y-scroll 2xl:gap-y-24">
            <div className="lg:ml-24 ml-10 mb-24">
                {cityDetails ? (
                        <div className="flex flex-col">
                            <TravelNav country={decodedDestination} city={decodedCity}/>
                            <SectionTitle title={decodedCity}/>
                            <Gallery files={data} country={decodedDestination} city={decodedCity}></Gallery>
                        </div>
                        
                    ) : (<h1 className="text-4xl text-bold text-dune">Whoops, looks like {decodedCity} is still on my bucketlist...</h1>)
                }    
            </div>
            <div className="hidden md:block">
                <Logo/>    
            </div>
        </main>
    )
};