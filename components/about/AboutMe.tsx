import { JakartaRegular, JakartaMedium } from '../../lib/localNextFonts'
import ExperienceTray from './experience/ExperienceTray';
import AboutMeBio from './AboutMeBio';

const AboutMe = () => {
    return(
        <div className=" pt-6 flex flex-row gap-y-4 gap-x-16 lg:mt-2 mt-1.5 w-10/12">
            <AboutMeBio/>
            <ExperienceTray/>
        </div>
    );
}

export default AboutMe;