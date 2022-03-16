// function ProjectCard({ name, avatar, description, progress, links }) {
function ProjectCard({ project }) {
  const { name, avatar, description, progress, links } = project;
  return (
    <div className="project-card">
      <div className="project-card__name">{name}</div>
      <div className="project-card__avatar">{avatar}</div>
      <div className="project-card__description">{description}</div>
      <div className="project-card__progress-bar">{progress}</div>
      <div className="project-card__links">
        {links.map(({ link, linkDescr }) => {
          return (
            <a key={link} href={link}>
              {linkDescr}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
