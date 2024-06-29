import { projects } from '../../lib/projects'
import ProjectCard from './ProjectCard'

const ProjectsTray = () => {
    return(
        <div className="flex md:flex-row flex-wrap mt-1 lg:-ml-7 xl:ml-0 xl:mt-7 lg:gap-y-0 lg:gap-x-0 gap-y-8 xl:gap-y-12 xl:gap-x-12 lg:-mb-48 mb-14 2xl:mb-9"> 
            {Array.from(projects.entries()).map(([projectName, projectDetails], index) => {
                return(
                    <ProjectCard key={index} name={projectName} description={projectDetails.description} imageUrl={projectDetails.imageUrl} techStack={projectDetails.techStack} hostLink={projectDetails.hostLink} gitHubLink={projectDetails.gitHubLink}></ProjectCard>
                )
            })}
        </div>
    );
}

export default ProjectsTray;