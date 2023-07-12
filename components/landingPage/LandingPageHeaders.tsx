import { ManropeExtraBold } from '../../lib/localNextFonts'

const LandingPageHeaders = () => {
    return(
        <div className={ManropeExtraBold.className}>
            <h1 className=" text-dusty md:text-landingPageTitle text-5xl font-bold md:mt-28 mt-32">Tariq<br/>Achor Zyad</h1>
            <h2 className="text-sandstone lg:text-2xl md:text-2xl text-landingPageBioMobile font-bold pt-2 lg:mt-5 mt-4 leading-relaxed w-4/5 ">Hey, I'm Tariq, a senior Computer Science student at the University of Houston, <div className="text-dusty">Exploring the vast world of tech.</div></h2>
        </div>
    );
}

export default LandingPageHeaders;