import { JakartaRegular, JakartaMedium } from '../../../lib/localNextFonts'
import Experience from './Experience'

const MapExperience = new Map<string, {date: string, title: string, description: string}>([
    ["TA", {date: "August 2022 - Present", title: "Undergraduate Teaching Assistant @ UH", description: "Instructed over 1000 students across in topics ranging from OOP to Algorithms & Data Structures in four different courses. And made plenty of friends along the way!"}],
    ["CougarCS", {date: "August 2023 - May 2024", title: "Director of Tutoring @ CougarCS", description: "Revitalized the tutoring program for UH's largest computer science (CS) organization, increased member retention by 50%, and created the first ever exam review workshops in UH CS."}],
]);

const ExperienceTray = () => {
    return(
        <div className={JakartaRegular.className + " text-sandstone 2xl:text-xl lg:text-lg md:text-base text-xs font-medium rounded-r-md pt-6 w-10/12 md:w-1/2 flex flex-col lg:mt-2 mt-1.5"}>
            {Array.from(MapExperience.entries()).map(([experienceKey, experienceDetails]) => {
                return(
                    <Experience key={experienceKey} date={experienceDetails.date} title={experienceDetails.title} description={experienceDetails.description}/>
                )
            })}
        </div>
    );
}

export default ExperienceTray;