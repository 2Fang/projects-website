function ProjectCard({ title, description, techTags = [], links = [] }) {
  return (
    <article className="project-card">
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

      {links.length > 0 && (
        <div className="project-links">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
