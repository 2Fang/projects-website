function ProjectCard({ title, description, techTags = [], slug }) {
  return (
    <a
      className="project-card"
      href={`/projects/${slug}`}
      aria-label={`View ${title}`}
    >
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {techTags.length > 0 && (
        <ul className="tech-tags" aria-label={`${title} technologies`}>
          {techTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}

      <span className="project-card-cta">View project</span>
    </a>
  );
}

export default ProjectCard;
