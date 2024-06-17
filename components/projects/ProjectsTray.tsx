import { projects } from '../../lib/projects'
import ProjectCard from './ProjectCard'

const ProjectsTray = () => {
    return(
        <div className="grid md:grid-flow-col gap-y-12 md:gap-x-12 mb-14 2xl:mb-9 overflow-x-scroll scroll-y md:scroll-x"> 
            {Array.from(projects.entries()).map(([projectName, projectDetails], index) => {
                return(
                    <ProjectCard key={index} name={projectName} description={projectDetails.description} imageUrl={projectDetails.imageUrl} techStack={projectDetails.techStack} hostLink={projectDetails.hostLink} gitHubLink={projectDetails.gitHubLink}></ProjectCard>
                )
            })}
        </div>
    );
}

export default ProjectsTray;