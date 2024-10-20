import { JakartaRegular, JakartaMedium } from '../../../lib/localNextFonts'
import Experience from './Experience'

const ExperienceTray = () => {
    return(
        <div className={JakartaRegular.className + " text-sandstone 2xl:text-xl lg:text-lg md:text-base text-xs font-medium pt-6 w-10/12 md:w-1/2 flex flex-col lg:mt-2 mt-1.5"}>
            <Experience/>
        </div>
    );
}

export default ExperienceTray;