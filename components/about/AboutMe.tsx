import { JakartaRegular, JakartaMedium } from '../../lib/localNextFonts'
import ExperienceTray from './experience/ExperienceTray';
import AboutMeBio from './AboutMeBio';
import SkillsTray from './SkillsTray';

const AboutMe = () => {
    return(
        <div className=" pt-6 flex flex-row gap-y-4 gap-x-12 lg:mt-2 mt-1.5 w-10/12">
            <div className="flex flex-col gap-y-4 2xl:w-1/2 md:w-3/5 w-10/12">
                <AboutMeBio/>
                <SkillsTray/>
            </div>
            <ExperienceTray/>
        </div>
    );
}

export default AboutMe;