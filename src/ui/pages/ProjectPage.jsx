import ProjectContent from "../components/ProjectContent.jsx";

function ProjectPage({ project }) {
  return (
    <section className="project-detail">
      <p className="hero-eyebrow">Project</p>
      <h2>{project.title}</h2>
      <p className="project-timeframe">{project.timeframe}</p>

      {project.techTags.length > 0 && (
        <ul className="tech-tags" aria-label={`${project.title} technologies`}>
          {project.techTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}

      {project.links.length > 0 && (
        <div className="project-links">
          {project.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <ProjectContent layout={project.contentLayout} />

      <a className="button button-secondary" href="/">
        Back Home
      </a>
    </section>
  );
}

export default ProjectPage;
