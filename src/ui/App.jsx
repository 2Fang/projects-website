import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProjectList from "./components/ProjectList.jsx";
import Summary from "./components/Summary.jsx";

const projects = [
  {
    title: "Project A",
    description:
      "A placeholder project card for the portfolio. This will later describe the goal, the build process, and the outcome.",
    techTags: ["React", "CSS", "Node"],
    links: [
      {
        label: "Details",
        href: "#"
      }
    ]
  },
  {
    title: "Project B",
    description:
      "A second example card to shape the project list and test how repeated entries feel on the page.",
    techTags: ["JavaScript", "API"],
    links: []
  },
  {
    title: "Project C",
    description:
      "An older placeholder project, ready to become a real case study once the portfolio content is added.",
    techTags: ["HTML", "CSS"],
    links: []
  }
];

function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="page-content">
        <Hero />
        <Summary />
        <ProjectList projects={projects} />
      </main>
    </>
  );
}

export default App;
