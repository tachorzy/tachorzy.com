import Image from 'next/image'
import Link from 'next/link'
import { ManropeExtraBold, ManropeMedium, ManropeRegular } from '../lib/localNextFonts'

interface projectTechStack {
    techStack: string[]
    gitHubLink: string
    hostingLink: string
}

const ProjectTechTray = (props: projectTechStack) => {
    return(
        <div className="flex flex-row gap-x-3.5 my-3">
            {props.techStack.map((tool, index) => (
                <Image src={`/icons/${tool}.svg`} width="0" height="0" alt="language/library/framework icon" className="md:max-2xl:w-6 md:max-2xl:h-6 w-6 h-6"/>
            ))}
            <div className="relative gap-x-3.5">
                <Link href={props.gitHubLink} className="group absolute align-middle justify-self-end text-dusty hover:text-mudbrick font-semibold md:max-2xl:text-sm text-xxs pt-2 flex-none px-1.5" target="_blank">
                    GitHub
                    <span className="pl-0.5 group-hover:pl-1.5 duration-500">›</span>
                </Link>

                {props.hostingLink != "" ? <Link href={props.gitHubLink} className="group absolute left-20 align-middle justify-self-end text-dusty hover:text-mudbrick font-semibold md:max-2xl:text-sm text-xxs pt-2 flex-none" target="_blank">
                    Visit
                    <span className="pl-0.5 group-hover:pl-1.5 duration-500">›</span>
                </Link>:<></>}
            </div>

        </div>
    );
}

export default ProjectTechTray;