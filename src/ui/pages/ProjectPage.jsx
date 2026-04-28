function ProjectPage({ project }) {
  return (
    <section className="project-detail">
      <p className="hero-eyebrow">Project</p>
      <h2>{project.title}</h2>

      {project.techTags.length > 0 && (
        <ul className="tech-tags" aria-label={`${project.title} technologies`}>
          {project.techTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}

      <p>{project.description}</p>

      <a className="button button-secondary" href="/">
        Back Home
      </a>
    </section>
  );
}

export default ProjectPage;
