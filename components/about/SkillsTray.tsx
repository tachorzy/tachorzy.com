import Image from 'next/image'
import Link from 'next/link'
import { skills } from '../../lib/skills'
import { JakartaRegular, JakartaMedium } from '../../lib/localNextFonts'

// could add modularity by passing in a prop for the skills instead of importing them.
// this would allow for the tray to be used in other places, and not just in the about section.

const SkillsTray = () => {

    return(
        <div className={JakartaRegular.className}>
            <h1 className="text-sandstone text-xl mt-5 font-semibold md:text-3xl">Tools</h1>
            <div className="flex flex-row flex-wrap w-11/12 md:mt-1 gap-x-7 gap-y-8 self-end pt-3.5 mb-[8.75rem] 2xl:mb-16">
                {Array.from(skills.entries()).map(([programmingLanguage, documentation], index) => {
                    return(
                        <div key={index} className="flex flex-col group items-center">
                            <Link href={documentation} target="_blank">
                                <Image src ={`/icons/skills/${programmingLanguage}.svg`} width="0" height="0" alt="language/library/framework icon" className="select-none md:w-9 md:h-9 w-6 h-6 hover:scale-[101.5%] duration-700"></Image>
                            </Link>
                            <h1 className="absolute mt-6 md:mt-10 opacity-0 group-hover:opacity-100 animation-fade duration-700 text-dusty leading-relaxed pt-2 font-semibold 2xl:text-sm md:text-xs text-xxs">{programmingLanguage}</h1>
                        </div>
                )})}
            </div>
        </div>
    );
}

export default SkillsTray;