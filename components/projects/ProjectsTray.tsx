import { projects } from '../../lib/projects'
import ProjectCard from './ProjectCard'

const ProjectsTray = () => {
    return(
        <div className="relative">
            <div className="absolute inset-0 z-10 w-1/4 ml-[85%] bg-[linear-gradient(to_left,#1c2324_25%,transparent)]"></div> 
            <div className="grid md:grid-flow-col gap-y-12 md:gap-x-12 mb-14 2xl:mb-9 md:overflow-x-scroll md:overflow-y-hidden overflow-y-scroll overflow-x-hidden scroll-ml-2 md:scroll-ml-0 scroll-pt-5 snap-x scroll-smooth pb-10"> 
                {Array.from(projects.entries()).map(([projectName, projectDetails], index) => {
                    return(
                        <ProjectCard key={index} name={projectName} description={projectDetails.description} imageUrl={projectDetails.imageUrl} techStack={projectDetails.techStack} hostLink={projectDetails.hostLink} gitHubLink={projectDetails.gitHubLink}></ProjectCard>
                    )
                })}
            </div>
        </div>
    );
}

export default ProjectsTray;