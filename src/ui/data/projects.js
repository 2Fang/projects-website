const projects = [
  {
    title: "Project A",
    slug: "project-a",
    description:
      "A placeholder project card for the portfolio. This will later describe the goal, the build process, and the outcome.",
    techTags: ["React", "CSS", "Node"],
    contentLayout: {
      type: "grid",
      columns: ["1.15fr", "1fr"],
      rows: ["auto", "auto"],
      gap: "28px",
      stackAt: "tablet",
      items: [
        {
          id: "overview",
          column: "1",
          row: "1 / span 2",
          content: {
            type: "text",
            heading: "Overview",
            paragraphs: [
              "This is the main narrative space for the project. It can stay wide, span multiple rows, or sit beside supporting sections depending on what the project needs.",
              "The layout is driven by project data, so changing the proportions or nesting does not require writing new CSS for every project."
            ]
          }
        },
        {
          id: "build",
          column: "2",
          row: "1",
          content: {
            type: "grid",
            columns: "1fr",
            rows: ["auto", "auto"],
            gap: "18px",
            items: [
              {
                id: "problem",
                content: {
                  type: "text",
                  heading: "Problem",
                  paragraphs: [
                    "A compact block for the problem statement, design constraints, or a supporting visual later on."
                  ]
                }
              },
              {
                id: "solution",
                content: {
                  type: "text",
                  heading: "Solution",
                  paragraphs: [
                    "Nested grids let a column split into smaller rows without changing the outer layout."
                  ]
                }
              }
            ]
          }
        },
        {
          id: "outcome",
          column: "2",
          row: "2",
          content: {
            type: "text",
            heading: "Outcome",
            paragraphs: [
              "Use this area for metrics, lessons, links, or follow-up work once the real project write-up is ready."
            ]
          }
        },
        {
          id: "bottom-row",
          column: "1 / -1",
          row: "3",
          content: {
            type: "grid",
            columns: ["1fr", "1.35fr", "0.85fr"],
            gap: "22px",
            items: [
              {
                id: "role",
                content: {
                  type: "text",
                  heading: "Role",
                  paragraphs: ["What I owned, explored, or shipped."]
                }
              },
              {
                id: "process",
                content: {
                  type: "text",
                  heading: "Process",
                  paragraphs: ["A larger middle column for notes, iterations, or implementation details."]
                }
              },
              {
                id: "next",
                content: {
                  type: "text",
                  heading: "Next",
                  paragraphs: ["Future improvements and ideas."]
                }
              }
            ]
          }
        }
      ]
    },
    links: [
      {
        label: "Details",
        href: "#"
      }
    ]
  },
  {
    title: "Project B",
    slug: "project-b",
    description:
      "A second example card to shape the project list and test how repeated entries feel on the page.",
    techTags: ["JavaScript", "API"],
    contentLayout: {
      type: "grid",
      columns: ["2fr", "1fr"],
      gap: "28px",
      items: [
        {
          id: "story",
          content: {
            type: "text",
            heading: "What it does",
            paragraphs: [
              "This layout favors a wider story column with a narrower notes column beside it."
            ]
          }
        },
        {
          id: "notes",
          content: {
            type: "text",
            heading: "Notes",
            paragraphs: [
              "Swap the fractions to change emphasis, or nest another grid here when the page needs more structure."
            ]
          }
        }
      ]
    },
    links: []
  },
  {
    title: "Project C",
    slug: "project-c",
    description:
      "An older placeholder project, ready to become a real case study once the portfolio content is added.",
    techTags: ["HTML", "CSS"],
    contentLayout: {
      type: "grid",
      columns: "1fr",
      gap: "24px",
      items: [
        {
          id: "writeup",
          content: {
            type: "text",
            heading: "Write-up",
            paragraphs: [
              "A single-column project can use the same renderer. Add columns, row spans, or nested grids later without changing the page component."
            ]
          }
        }
      ]
    },
    links: []
  }
];

export default projects;
