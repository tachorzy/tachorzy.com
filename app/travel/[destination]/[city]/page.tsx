
import { PLACES_TRAVELLED } from 'lib/travel';
import SectionTitle from 'components/section/SectionTitle';
import dynamic from 'next/dynamic'

const Gallery = dynamic(() => import('components/travel/Gallery'), {
    loading: () => <p>Loading...</p>,
})

export default function Page({ params } : {
    params: { destination: string, city: string }
}){ 
    const decodedDestination = decodeURIComponent(params.destination);
    const decodedCity = decodeURIComponent(params.city);

    const countryDetails = PLACES_TRAVELLED.get(decodedDestination);

    const cityDetails = countryDetails?.destinations.find((place) => place === decodedCity);

    return (
        <main className="bg-shark flex flex-col min-h-screen overflow-y-hidden 2xl:gap-y-24 ">
            <div className="lg:ml-24 ml-10">
                {cityDetails ? (
                        <div>
                            <SectionTitle title={decodedCity}/>
                            <Gallery countryName={decodedDestination} cityName={decodedCity} imagePaths={[]}/>
                        </div>
                        
                    ) : (<h1 className="text-4xl text-bold text-dune">Whoops, looks like {decodedCity} is still on my bucketlist...</h1>)
                }    
            </div>    
        </main>
    )

};