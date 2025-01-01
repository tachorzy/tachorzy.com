import ExperienceTray from './experience/ExperienceTray';
import AboutMeBio from './AboutMeBio';
import SkillsTray from './SkillsTray';

const AboutMe = () => {
    return(
        <div className=" relative pt-6 flex flex-col md:flex-row md:gap-x-16 2xl:gap-x-20 lg:mt-2 mt-1.5 w-10/12 ">
            <div className="flex flex-col gap-y-5 2xl:w-1/2 md:w-3/5 w-5/6">
                <AboutMeBio/>
                <SkillsTray/>
            </div>
            <ExperienceTray/>
        </div>
    );
}

export default AboutMe;