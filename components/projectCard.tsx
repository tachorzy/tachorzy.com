import Image from 'next/image'
import Link from 'next/link'
import ProjectTechTray from './projectTechTray'
import { ManropeExtraBold, ManropeMedium } from '../lib/localNextFonts'

interface project{
    name: string;
    description: string;
    imageUrl: string;
    hostLink: string | null;
    gitHubLink: string;
}

const ProjectCard = (props: project) => {
    return(
        <div className={ManropeExtraBold.className}>
            <div className="mt-0.5 w-80  h-[19.25rem] bg-metal rounded-md shadow-2xl">
                <Link href={props.hostLink != null ? props.hostLink : props.gitHubLink} target="_blank" className="w-full h-2/3">
                    <Image src={props.imageUrl} height="0" width={350} alt="" className="rounded-t-md h-[56%]"></Image>
                </Link>
                <div className="justify-center content-center pt-4 px-6 pb-1">
                    <p className="text-dusty text-2xl">{props.name}</p>
                    <div className={ManropeExtraBold.className}>
                        <p className="text-mudbrick text-lg">{props.description}</p>
                    </div>
                    <div className="my-2 mb-3">
                        <ProjectTechTray techStack={["Next.js", "Javascript", "TailwindCSS"]} gitHubLink={"https://github.com/tachorzy/Gibraltr"} hostingLink={"https://www.gibraltr.com/"}/>
                    </div>
                </div>

            </div>

            {/* <Link href={props.hostLink != null ? props.hostLink : props.gitHubLink} target="_blank" className="w-full h-full">
                <Image src={props.imageUrl} height={350} width={350} alt="" className="rounded-3xl"></Image>
            </Link> */}
        </div>
    );
}

export default ProjectCard;