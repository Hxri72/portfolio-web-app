import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import "../styles/skills.css";

function Skills() {
  const { data: skills, loading, error } = useFetch("/skills");

  if (loading) return <Loader />;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <section className="container page page-fade">
      <SectionTitle
        label="Skills"
        title="My toolbox"
        subtitle="Languages, frameworks and tools I use to ship products"
      />

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
