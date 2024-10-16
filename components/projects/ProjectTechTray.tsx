import Image from 'next/image'
import Link from 'next/link'
import { JakartaBold } from '../../lib/localNextFonts'

interface projectTechStack {
    techStack: string[]
    gitHubLink: string
    hostLink: string | null
}

const ProjectTechTray = (props: projectTechStack) => {
    const { techStack, gitHubLink, hostLink } = props

    return(
        <div className="project-tech-tray flex flex-row md:gap-x-3.5 gap-x-2.5 my-5 mb-3">
            {techStack.map((tool, index) => (
                <Image key={index} src={`/icons/skills/${tool}.svg`} width="0" height="0" alt="language/library/framework icon" className="md:w-6 md:h-6 w-6 h-6"/>
            ))}
            
            <div className={JakartaBold.className + " relative md:gap-x-3.5"}>
                <Link href={gitHubLink} className="group absolute align-middle justify-self-end text-dusty hover:text-mudbrick font-semibold md:text-sm text-xs pt-2 flex-none px-1.5" target="_blank">
                    GitHub
                    <span className="pl-0.5 group-hover:pl-1.5 duration-500">›</span>
                </Link>
                {hostLink &&
                    <Link href={hostLink} className="group absolute left-20 align-middle justify-self-end text-dusty hover:text-mudbrick font-semibold md:text-sm text-xs pt-2 flex-none" target="_blank">
                        Visit
                        <span className="pl-0.5 group-hover:pl-1.5 duration-500">›</span>
                    </Link>
                }
            </div>
        </div>
    );
}

export default ProjectTechTray;