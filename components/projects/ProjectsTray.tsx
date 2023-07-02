import { PROJECTS } from '../../lib/projects'
import ProjectCard from './ProjectCard'

const ProjectsTray = () => {
    return(
        <div className="flex flex-col md:max-2xl:flex-row gap-y-12 md:max-2xl:gap-x-12 flex-wrap"> 
            {Array.from(PROJECTS.entries()).map(([projectName, projectDetails]) => {
                return(
                    <ProjectCard name={projectName} description={projectDetails.description} imageUrl={projectDetails.imageUrl} techStack={projectDetails.techStack} hostLink={projectDetails.hostLink} gitHubLink={projectDetails.gitHubLink}></ProjectCard>
                )
            })}
        </div>
    );
}

export default ProjectsTray;