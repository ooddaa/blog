import ProjectCard from "./components/ProjectCard";
import projectList from "./components/projectList.js";
/**
 * Need a grid with tiles that briefly describe the project
 * ProjectCard
 *
 *
 */
function Projects() {
  return (
    <div className="projects">
      <div className="container">
        {projectList.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
