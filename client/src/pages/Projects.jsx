import { useCallback, useState } from "react";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import "../styles/projects.css";

function Projects() {
  const { data: projects, loading, error } = useFetch("/projects");
  const [selected, setSelected] = useState(null);

  // useCallback so the modal's effect doesn't re-run on every render
  const closeModal = useCallback(() => setSelected(null), []);

  if (loading) return <Loader />;
  if (error) return <p className="error-text">{error}</p>;

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="container page page-fade">
      <SectionTitle
        label="Projects"
        title="Things I've built"
        subtitle="Full-stack apps, automation projects and a few frontend builds from when I started out."
      />

      <div className="projects-featured">
        {featured.map((project, index) => (
          <ProjectCard key={project._id} project={project} index={index} onOpen={setSelected} />
        ))}
      </div>

      {others.length > 0 && (
        <>
          <h3 className="sub-heading">More projects</h3>
          <div className="projects-grid">
            {others.map((project, index) => (
              <ProjectCard
                key={project._id}
                project={project}
                index={featured.length + index}
                onOpen={setSelected}
              />
            ))}
          </div>
        </>
      )}

      {selected && <ProjectModal project={selected} onClose={closeModal} />}
    </section>
  );
}

export default Projects;
