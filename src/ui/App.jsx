import Header from "./components/Header.jsx";
import ProjectList from "./components/ProjectList.jsx";
import Summary from "./components/Summary.jsx";

const projects = [
  {
    title: "Project A",
    description:
      "Some description about the project will go here. This can later include the goal, tech used, and what makes the project worth clicking into.",
    imageAlt: "Placeholder project image"
  },
  {
    title: "Project B",
    description:
      "Some description about the project will go here. This can later include the goal, tech used, and what makes the project worth clicking into.",
    imageAlt: "Placeholder project image"
  },
  {
    title: "Project C",
    description:
      "Some description about the project will go here. This can later include the goal, tech used, and what makes the project worth clicking into.",
    imageAlt: "Placeholder project image"
  },
];

function App() {
  return (
    <>
      <Header />
      <main className="page-content">
        <Summary />
        <ProjectList projects={projects} />
      </main>
    </>
  );
}

export default App;
