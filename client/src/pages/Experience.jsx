import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import "../styles/experience.css";

function Experience() {
  const { data: experience, loading, error } = useFetch("/experience");

  if (loading) return <Loader />;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <section className="container page page-fade">
      <SectionTitle label="Experience" title="Where I've worked" subtitle="My professional journey so far" />

      <div className="timeline">
        {experience.map((item) => (
          <TimelineItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
