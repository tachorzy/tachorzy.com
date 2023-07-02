import Image from 'next/image'
import Link from 'next/link'
import { SKILLS } from '../lib/skills'
import { ManropeRegular } from '../lib/localNextFonts'

const SkillsTray = () => {

    return(
        <div className={ManropeRegular.className}>
              <div className="flex flex-row flex-wrap md:mt-1 gap-x-7 self-end pt-3 mb-[7.5rem]">
                {Array.from(SKILLS.entries()).map(([programmingLanguage, documentation]) => {
                    return(
                        <div>
                            <div className="flex flex-col group items-center">
                                <Link href={documentation} target="_blank">
                                    <Image src ={`/icons/${programmingLanguage}.svg`} width="0" height="0" alt="language/library/framework icon" className="select-none md:max-2xl:w-9 md:max-2xl:h-9 w-6 h-6"></Image>
                                </Link>
                                <h1 className="absolute mt-10 opacity-0 group-hover:opacity-100 animation-fade duration-700 text-dusty leading-relaxed pt-2 font-semibold md:max-2xl:text-sm text-xxs">{programmingLanguage}</h1>
                            </div>
                        </div>
                )})}
            </div>
        </div>
    );
}

export default SkillsTray;