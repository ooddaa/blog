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
    <div className="projects-grid">
      {projectList.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
}

export default Projects;
