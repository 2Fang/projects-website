import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import projects from "./data/projects.js";
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import UnknownProjectPage from "./pages/UnknownProjectPage.jsx";

function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getProjectSlugFromPath() {
  const match = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const projectSlug = getProjectSlugFromPath();
  const currentProject = projects.find((project) => project.slug === projectSlug);

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
        {projectSlug === null ? (
          <HomePage projects={projects} />
        ) : currentProject ? (
          <ProjectPage project={currentProject} />
        ) : (
          <UnknownProjectPage />
        )}
      </main>
    </>
  );
}

export default App;
