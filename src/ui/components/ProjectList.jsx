import { useMemo, useState } from "react";
import { ALL_TAGS } from "../data/projects.js";
import {
  filterProjects,
  sortProjects,
  toggleTag
} from "../lib/projectBrowsing.js";
import ProjectCard from "./ProjectCard.jsx";
import ProjectControls from "./ProjectControls.jsx";

function ProjectList({ projects }) {
  const [sortKey, setSortKey] = useState("recent");
  const [selectedTags, setSelectedTags] = useState([]);

  const visibleProjects = useMemo(
    () => sortProjects(filterProjects(projects, selectedTags), sortKey),
    [projects, selectedTags, sortKey]
  );

  function handleToggleTag(tag) {
    setSelectedTags((currentTags) => toggleTag(currentTags, tag));
  }

  function handleClearTags() {
    setSelectedTags([]);
  }

  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>

      <ProjectControls
        sortKey={sortKey}
        onSortChange={setSortKey}
        tags={ALL_TAGS}
        selectedTags={selectedTags}
        onToggleTag={handleToggleTag}
        onClearTags={handleClearTags}
        resultCount={visibleProjects.length}
        totalCount={projects.length}
      />

      {visibleProjects.length === 0 ? (
        <div className="projects-empty-state">
          <p>No projects match every tag you have selected.</p>
          <button type="button" className="button button-secondary" onClick={handleClearTags}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="project-list">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techTags={project.techTags}
              slug={project.slug}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProjectList;
