function ProjectItem({ title, description, imageAlt }) {
  return (
    <article className="project-card">
      <div className="project-image" aria-label={imageAlt}></div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default ProjectItem;
