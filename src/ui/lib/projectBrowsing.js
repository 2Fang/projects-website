function filterProjects(projects, selectedTags) {
  if (selectedTags.length === 0) {
    return projects;
  }

  return projects.filter((project) =>
    selectedTags.every((tag) => project.tags.includes(tag))
  );
}

function toggleTag(selectedTags, tag) {
  return selectedTags.includes(tag)
    ? selectedTags.filter((selected) => selected !== tag)
    : [...selectedTags, tag];
}

function byName(a, b) {
  return a.title.localeCompare(b.title, undefined, { sensitivity: "base" });
}

function byRecent(a, b) {
  if (a.lastUpdated === b.lastUpdated) {
    return byName(a, b);
  }

  return a.lastUpdated < b.lastUpdated ? 1 : -1;
}

function sortProjects(projects, sortKey) {
  return [...projects].sort(sortKey === "name" ? byName : byRecent);
}

export { filterProjects, sortProjects, toggleTag };
