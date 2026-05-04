function toTrackList(value) {
  return Array.isArray(value) ? value.join(" ") : value;
}

function Grid({
  as: Element = "div",
  columns = "1fr",
  rows = "auto",
  gap = "24px",
  stackAt = "tablet",
  className = "",
  children
}) {
  const style = {
    "--grid-columns": toTrackList(columns),
    "--grid-rows": toTrackList(rows),
    "--grid-gap": gap
  };

  return (
    <Element className={`layout-grid stack-${stackAt} ${className}`} style={style}>
      {children}
    </Element>
  );
}

function GridItem({
  as: Element = "div",
  column = "auto",
  row = "auto",
  className = "",
  children
}) {
  return (
    <Element
      className={`layout-grid-item ${className}`}
      style={{ gridColumn: column, gridRow: row }}
    >
      {children}
    </Element>
  );
}

function Row({ columns = "1fr", ...props }) {
  return <Grid columns={columns} {...props} />;
}

function Column({ rows = "auto", ...props }) {
  return <Grid columns="1fr" rows={rows} {...props} />;
}

export { Column, Grid, GridItem, Row };
