import Image from 'next/image'
import Link from 'next/link'
import { skills } from '../lib/skills'
import { ManropeRegular } from '../pages'

const SkillsTray = () => {

    return(
        <div className={ManropeRegular.className}>
              <div className="flex flex-row flex-wrap md:mt-0.5 md:max-2xl:gap-x-8 gap-x-3 self-end">
                {Array.from(skills.entries()).map(([programmingLanguage, description]) => {
                    return(
                        <div>
                            <div className="flex flex-col items-center">
                                <Image src ={`/${programmingLanguage}.svg`} width="0" height="0" alt="" className="select-none md:max-2xl:w-9 md:max-2xl:h-9 w-6 h-6"></Image>
                                <h1 className="text-dusty leading-relaxed pt-2 font-semibold md:max-2xl:text-base text-xxs">{programmingLanguage}</h1>
                            </div>
                        </div>
                )})}
            </div>
        </div>
    );
}

export default SkillsTray;