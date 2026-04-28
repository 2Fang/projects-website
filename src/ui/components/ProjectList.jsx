import ProjectItem from "./ProjectItem.jsx";

function ProjectList({ projects }) {
  return (
    <section className="projects-section">
      <h2>Projects</h2>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            description={project.description}
            imageAlt={project.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
