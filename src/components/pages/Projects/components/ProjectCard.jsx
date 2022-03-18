function ProjectCardLinkItem({
  link,
  linkDescr,
  linkIconScr,
  linkIconAlt,
  imgHeight,
  imgWidth,
}) {
  return (
    <div className="project-card__link-item">
      <div className="project-card__link-item__header">
        <img
          src={linkIconScr}
          alt={linkIconAlt}
          height={imgHeight || "16px"}
          width={imgWidth || "16px"}
        />
      </div>
      <div className="project-card__link-item__body">
        <a href={link}>{linkDescr}</a>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const { id, name, className, description, progress, links } = project;
  return (
    <div className={`project-card ${className}`}>
      <div className="project-card__header">{name}</div>

      <div className="project-card__progress-bar">
        <img src={progress.imgSrc} alt={progress.imgAlt} />
      </div>

      <div className="project-card__description">{description}</div>

      <div className="project-card__links">
        {links.map(
          ({
            link,
            linkDescr,
            linkIconScr,
            linkIconAlt,
            imgHeight,
            imgWidth,
          }) => {
            return (
              <ProjectCardLinkItem
                key={`${id}_${linkDescr}`}
                link={link}
                linkDescr={linkDescr}
                linkIconScr={linkIconScr}
                linkIconAlt={linkIconAlt}
                imgHeight={imgHeight}
                imgWidth={imgWidth}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
