import Image from 'next/image'
import Link from 'next/link'
import { ManropeExtraBold, ManropeMedium, ManropeRegular } from '../pages'

interface projectTechStack {
    techStack: string[]
    gitHubLink: string
    hostingLink: string
}

const ProjectTechTray = (props: projectTechStack) => {
    return(
        <div className="flex flex-row gap-x-3.5">
            {props.techStack.map((tool, index) => (
                <Image src={`${tool}.svg`} width="0" height="0" alt="" className="md:lg:xl:2xl:w-8 md:lg:xl:2xl:h-8 w-6 h-6"/>
            ))}
            <div className="relative gap-x-3.5">
                <Link href={props.gitHubLink} className="group absolute align-bottom justify-self-end text-dusty hover:text-mudbrick font-semibold md:lg:xl:2xl:text-sm text-xxs pt-2 flex-none px-1.5" target="_blank">
                    GitHub
                    <span className="pl-0.5 group-hover:pl-1.5 duration-500">›</span>
                </Link>

                {props.hostingLink != "" ? <Link href={props.gitHubLink} className="group absolute left-20 align-bottom justify-self-end text-dusty hover:text-mudbrick font-semibold md:lg:xl:2xl:text-sm text-xxs pt-2 flex-none" target="_blank">
                    Visit
                    <span className="pl-0.5 group-hover:pl-1.5 duration-500">›</span>
                </Link>:<></>}
            </div>

        </div>
    );
}

export default ProjectTechTray;