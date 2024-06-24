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
        <div className="snap-start w-[17rem] lg:w-80 lg:h-[19.25rem] lg:scale-[80%] lg:hover:scale-[85%] xl:scale-100 bg-metal rounded-md hover:scale-105 xl:hover:scale-105 duration-500 border-2 border-opacity-75 border-[#1C2B2D]">
            <Link href={ tempHostLink != null ? tempHostLink : props.gitHubLink } target="_blank" className="w-full h-2/3">
                <Image src={`/projects/${props.imageUrl}`} height={350} width={350} alt="aesthetic gif" className="rounded-t-md h-[56%]"></Image>
            </Link>
            <div className={"justify-center content-center pt-4 px-6 pb-1"}>
                <p className={JakartaExtraBold.className + `${props.name.length > 22 ? " text-lg " : " text-xl "} text-dusty`}>{props.name}</p>
                <p className={JakartaSemibold.className + ` ${props.description.length > 25 ? " text-sm " : " text-base "} text-mudbrick`}>{props.description}</p>
                <ProjectTechTray techStack={props.techStack} gitHubLink={props.gitHubLink} hostLink={props.hostLink}/>
            </div>
        </div>
    );
}

export default ProjectCard;