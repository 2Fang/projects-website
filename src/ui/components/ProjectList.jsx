import ProjectCard from "./ProjectCard.jsx";

function ProjectList({ projects }) {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            techTags={project.techTags}
            slug={project.slug}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
