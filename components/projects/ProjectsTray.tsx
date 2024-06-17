import { projects } from '../../lib/projects'
import ProjectCard from './ProjectCard'

const ProjectsTray = () => {
    return(
        <div className="flex flex-col md:flex-row gap-y-12 md:gap-x-12 mb-14 2xl:mb-9 overflow-hidden"> 
            {Array.from(projects.entries()).map(([projectName, projectDetails], index) => {
                return(
                    <ProjectCard key={index} name={projectName} description={projectDetails.description} imageUrl={projectDetails.imageUrl} techStack={projectDetails.techStack} hostLink={projectDetails.hostLink} gitHubLink={projectDetails.gitHubLink}></ProjectCard>
                )
            })}
        </div>
    );
}

export default ProjectsTray;