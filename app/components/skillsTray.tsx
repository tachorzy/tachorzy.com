import Image from 'next/image'
import Link from 'next/link'
import { skills } from '../lib/skills'
import { ManropeRegular } from '../pages'

const SkillsTray = () => {

    return(
        <div className={ManropeRegular.className}>
              <div className="flex flex-row flex-wrap gap-x-8">
                {Array.from(skills.entries()).map(([programmingLanguage, description]) => {
                    return(
                        <div>
                            <div className="flex flex-col items-center">
                                <Image src ={`/${programmingLanguage}.svg`} width={38} height={38} alt=""></Image>
                                <h1 className="text-dusty leading-relaxed pt-2 font-semibold select-none">{programmingLanguage}</h1>
                            </div>
                        </div>
                )})}
            </div>
        </div>
    );
}

export default SkillsTray;