import Hero from "../components/Hero.jsx";
import ProjectList from "../components/ProjectList.jsx";
import Summary from "../components/Summary.jsx";

function HomePage({ projects }) {
  return (
    <>
      <Hero />
      <Summary />
      <ProjectList projects={projects} />
    </>
  );
}

export default HomePage;
