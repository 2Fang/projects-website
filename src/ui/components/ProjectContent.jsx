import { Grid, GridItem } from "./layout/Grid.jsx";

function TextBlock({ heading, paragraphs = [] }) {
  return (
    <section className="project-content-block">
      {heading && <h3>{heading}</h3>}
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}

function ImageBlock({ src, alt, caption, aspectRatio = "16 / 10" }) {
  return (
    <figure className="project-image-block" style={{ "--image-ratio": aspectRatio }}>
      <img src={src} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function renderContentNode(node) {
  if (node.type === "grid") {
    return (
      <Grid
        columns={node.columns}
        rows={node.rows}
        gap={node.gap}
        stackAt={node.stackAt}
      >
        {node.items.map((item, index) => (
          <GridItem
            key={item.id ?? index}
            column={item.column}
            row={item.row}
          >
            {renderContentNode(item.content)}
          </GridItem>
        ))}
      </Grid>
    );
  }

  if (node.type === "text") {
    return <TextBlock heading={node.heading} paragraphs={node.paragraphs} />;
  }

  if (node.type === "image") {
    return (
      <ImageBlock
        src={node.src}
        alt={node.alt}
        caption={node.caption}
        aspectRatio={node.aspectRatio}
      />
    );
  }

  return null;
}

function ProjectContent({ layout }) {
  if (!layout) {
    return null;
  }

  return <div className="project-content-layout">{renderContentNode(layout)}</div>;
}

export default ProjectContent;
