import Image from 'next/image'
import { ManropeExtraBold, ManropeMedium, ManropeRegular } from '../pages'

interface projectTechStack {
    techStack: string[]
}

const ProjectTechTray = (props: projectTechStack) => {
    return(
        <div className="flex flex-row gap-x-3.5">
            {props.techStack.map((tool, index) => (
                <Image src={`${tool}.svg`} width={29} height={29} alt=""/>
            ))}
        </div>
    );
}

export default ProjectTechTray;