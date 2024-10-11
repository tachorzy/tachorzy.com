import DestinationCardTray from 'components/travel/DestinationCardTray';

export default function Page({ params } : {
    params: { destination: string }
}){ 
    const decodedDestination = decodeURIComponent(params.destination);

    return (
        <main className="bg-shark flex flex-col h-screen overflow-hidden 2xl:gap-y-24">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl text-bold text-dune">{decodedDestination}</h1>
                <DestinationCardTray countryName={decodedDestination}/>
            </div>
        </main>
    )

};