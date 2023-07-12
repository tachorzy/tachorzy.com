import Image from 'next/image'
import Link from 'next/link'
import { ManropeExtraBold, ManropeMedium, ManropeRegular } from '../../lib/localNextFonts'

interface projectTechStack {
    techStack: string[]
    gitHubLink: string
    hostLink: string | null
}

const ProjectTechTray = (props: projectTechStack) => {
    console.log(props.hostLink)

    return(
        <div className="flex flex-row md:max-2xl:gap-x-3.5 gap-x-1 my-5 mb-3">
            {props.techStack.map((tool, index) => (
                <Image src={`/icons/${tool}.svg`} width="0" height="0" alt="language/library/framework icon" className="md:max-2xl:w-6 md:max-2xl:h-6 w-6 h-6"/>
            ))}
            
            <div className="relative md:max-2xl:gap-x-3.5">
                <Link href={props.gitHubLink} className="group absolute align-middle justify-self-end text-dusty hover:text-mudbrick font-semibold md:max-2xl:text-sm text-sm pt-2 flex-none px-1.5" target="_blank">
                    GitHub
                    <span className="pl-0.5 group-hover:pl-1.5 duration-500">›</span>
                </Link>
                {props.hostLink &&
                    <Link href={props.hostLink} className="group absolute left-20 align-middle justify-self-end text-dusty hover:text-mudbrick font-semibold md:max-2xl:text-sm text-sm pt-2 flex-none" target="_blank">
                        Visit
                        <span className="pl-0.5 group-hover:pl-1.5 duration-500">›</span>
                    </Link>
                }
            </div>
        </div>
    );
}

export default ProjectTechTray;