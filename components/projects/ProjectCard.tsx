import Image from 'next/image'
import Link from 'next/link'
import ProjectTechTray from './ProjectTechTray'
import { JakartaRegular, JakartaMedium, JakartaSemibold, JakartaExtraBold } from '../../lib/localNextFonts'

interface project{
    name: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    hostLink: string | null;
    gitHubLink: string;
}

const ProjectCard = (props: project) => {
    const tempHostLink: string | null = props.hostLink
    return(
        <div className="snap-start mt-0.5 w-[17rem] lg:w-80 lg:h-[19.25rem] lg:scale-[85%] lg:hover:scale-90 xl:scale-100 bg-metal rounded-md shadow-2xl hover:scale-105 duration-500">
            <Link href={ tempHostLink != null ? tempHostLink : props.gitHubLink } target="_blank" className="w-full h-2/3">
                <Image src={`/projects/${props.imageUrl}`} height="0" width={350} alt="aesthetic gif" className="rounded-t-md h-[56%]"></Image>
            </Link>
            <div className={"justify-center content-center pt-4 px-6 pb-1"}>
                <p className={JakartaExtraBold.className + " text-dusty text-xl"}>{props.name}</p>
                <p className={JakartaSemibold.className + " text-mudbrick text-base"}>{props.description}</p>
                <ProjectTechTray techStack={props.techStack} gitHubLink={props.gitHubLink} hostLink={props.hostLink}/>
            </div>
        </div>
    );
}

export default ProjectCard;