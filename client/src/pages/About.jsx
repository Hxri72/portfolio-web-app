import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import SectionTitle from "../components/SectionTitle";
import { BookIcon } from "../components/Icons";
import "../styles/about.css";

function About() {
  const profile = useFetch("/profile");
  const education = useFetch("/education");

  if (profile.loading || education.loading) return <Loader />;
  if (profile.error || education.error) {
    return <p className="error-text">{profile.error || education.error}</p>;
  }

  return (
    <section className="container page page-fade">
      <SectionTitle label="About me" title="A bit about who I am" />

      <div className="about-grid">
        <div className="card about-bio">
          <h3>Hello there 👋</h3>
          {profile.data.bio.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <div className="card about-facts">
          <h3>Quick facts</h3>
          <ul>
            {profile.data.facts.map((fact) => (
              <li key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="sub-heading">Education</h3>
      <div className="education-grid">
        {education.data.map((edu) => (
          <div key={edu._id} className="card education-card">
            <div className="icon-box">
              <BookIcon size={20} />
            </div>
            <div>
              <span className="edu-year">{edu.year}</span>
              <h4>{edu.course}</h4>
              <p>{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
