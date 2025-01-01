import { JakartaMedium, JakartaExtraBold } from '../../lib/localNextFonts'

const LandingPageHeaders = () => {
    return(
        <div>
            <h1 className={JakartaExtraBold.className + " text-dusty md:text-7xl xl:text-landingPageTitle text-5xl font-bold md:mt-20 lg:mt-28 mt-32"}>Tariq<br/>Achor Zyad</h1>
            <h2 className={JakartaMedium.className + " text-sandstone md:text-xl xl:text-2xl text-landingPageBioMobile text-pretty font-bold pt-2 lg:mt-5 mt-4 leading-relaxed w-11/12 md:w-4/5"}>{"Hey, I'm Tariq, a software developer @ American Airlines and intrepid traveller—"} <div className="text-dusty">{"exploring the vast world of tech."}</div></h2>
        </div>
    );
}

export default LandingPageHeaders;