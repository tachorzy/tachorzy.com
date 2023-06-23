import Image from 'next/image'
import Link from 'next/link'
import { ManropeExtraBold } from '../lib/localNextFonts'

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
            <div className="mt-0.5 w-80  h-[19rem] bg-dusty rounded-xl">
                <Link href={props.hostLink != null ? props.hostLink : props.gitHubLink} target="_blank" className="w-full h-2/3">
                    <Image src={props.imageUrl} height={350} width={350} alt="" className="rounded-t-xl"></Image>
                </Link>
                <div className="justify-center content-center pt-6 px-6">
                    <p className="text-bark text-2xl">{props.name}</p>
                    <p className="text-walnut text-lg">{props.name}</p>
                </div>

            </div>

            {/* <Link href={props.hostLink != null ? props.hostLink : props.gitHubLink} target="_blank" className="w-full h-full">
                <Image src={props.imageUrl} height={350} width={350} alt="" className="rounded-3xl"></Image>
            </Link> */}
        </div>
    );
}

export default ProjectCard;