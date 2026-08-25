function ProjectControls({
  sortKey,
  onSortChange,
  tags,
  selectedTags,
  onToggleTag,
  onClearTags,
  resultCount,
  totalCount
}) {
  const hasFilters = selectedTags.length > 0;

  return (
    <div className="project-controls">
      <div className="project-sort">
        <label htmlFor="project-sort-select">Sort</label>
        <select
          id="project-sort-select"
          value={sortKey}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <option value="recent">Most recent</option>
          <option value="name">Name (A–Z)</option>
        </select>
      </div>

      <div className="project-controls-group" role="group" aria-label="Filter by tag">
        <ul className="tag-filter">
          {tags.map((tag) => (
            <li key={tag}>
              <button
                type="button"
                className="tag-filter-button"
                aria-pressed={selectedTags.includes(tag)}
                onClick={() => onToggleTag(tag)}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>

        {hasFilters && (
          <button type="button" className="tag-filter-clear" onClick={onClearTags}>
            Clear filters
          </button>
        )}
      </div>

      <p className="project-results-count" aria-live="polite">
        {hasFilters ? `${resultCount} of ${totalCount} projects` : ""}
      </p>
    </div>
  );
}

export default ProjectControls;
