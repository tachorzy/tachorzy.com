import { JakartaRegular, JakartaMedium } from '../../../lib/localNextFonts'

interface ExperienceData {
    date: string;
    title: string;
    description: string;
}


const Experience = (props: ExperienceData) => {
    const { date, title, description } = props;

    return(
        <div className={JakartaRegular.className + " text-sandstone 2xl:text-xl lg:text-lg md:text-base text-xs w-full lg:h-44 bg-metal hover:bg-[#1C2B2D] border-l-4 duration-500 border-opacity-75 border-sandstone border-[#1C2B2D]"}>
            <div className="flex flex-col gap-y-2 p-4">
                <p className={JakartaMedium.className + " text-xs text-dusty"}>{date}</p>
                <p className={JakartaMedium.className + " text-base font-bold text-sandstone"}>{title}</p>
                <p className={JakartaRegular.className + " text-sm text-mudbrick leading-relaxed"}>{description}</p>
            </div>
        </div>
    );
}

export default Experience;