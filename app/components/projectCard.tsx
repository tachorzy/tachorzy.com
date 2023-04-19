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
            <Link href={props.hostLink != null ? props.hostLink : props.gitHubLink}>
                <Image src={props.imageUrl} height={300} width={300} alt=""></Image>
            </Link>
        </div>
    );
}

export default ProjectCard;