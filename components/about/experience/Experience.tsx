import { JakartaRegular, JakartaMedium } from '../../../lib/localNextFonts'

interface ExperienceData {
    date: string;
    title: string;
    description: string;
}


const Experience = (props: ExperienceData) => {
    const { date, title, description } = props;

    return(
        <div className={JakartaRegular.className + "  text-sandstone w-full bg-metal hover:bg-[#1C2B2D] border-l-4 duration-500 border-opacity-75 border-sandstone border-[#1C2B2D]"}>
            <div className="flex flex-col gap-y-1.5 px-5 py-3.5 ">
                <p className={JakartaMedium.className + " text-xs text-dusty"}>{date}</p>
                <p className={JakartaMedium.className + " text-sm font-bold text-sandstone"}>{title}</p>
                <p className={JakartaRegular.className + " text-xs text-mudbrick leading-relaxed"}>{description}</p>
            </div>
        </div>
    );
}

export default Experience;