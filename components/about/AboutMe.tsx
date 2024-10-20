import { JakartaRegular, JakartaMedium } from '../../lib/localNextFonts'
import ExperienceTray from './experience/ExperienceTray';

const AboutMe = () => {
    return(
        <div className={JakartaRegular.className + " text-sandstone 2xl:text-xl lg:text-lg md:text-base text-xs font-medium pt-6 flex flex-col gap-y-4 lg:mt-2 mt-1.5 2xl:w-1/2 md:w-3/5 w-10/12"}>
            <p className="leading-relaxed">{"I'm a developer with a tireless passion for software development. With that passion, I continuously drive myself to learn, grow, and create."}</p>
            <p className="leading-relaxed">{"Over the years, I've built scalable applications, instructed hundreds of students in algorithm design and analysis, led the agile development of production-ready software, and enabled convenient user-focused experiences."}</p>
            <ExperienceTray/>
        </div>
    );
}

export default AboutMe;