import Image from 'next/image'
import Link from 'next/link'
import { ManropeExtraBold } from '../pages'

interface project{
    name: string;
    imageUrl: string;
    hostLink: string | null;
    gitHubLink: string;
}

const ProjectCard = (props: project) => {
    return(
        <div className={ManropeExtraBold.className}>
            <Link href={props.hostLink != null ? props.hostLink : props.gitHubLink} target="_blank" className="w-full h-full">
                <Image src={props.imageUrl} height={370} width={370} alt="" className="rounded-3xl"></Image>
            </Link>
        </div>
    );
}

export default ProjectCard;