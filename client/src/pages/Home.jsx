import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import SectionTitle from "../components/SectionTitle";
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TopicIcon,
} from "../components/Icons";
import "../styles/home.css";

// small "code" card shown in the hero when there's no profile photo
function CodeCard({ profile }) {
  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-card-bar">
        <span></span>
        <span></span>
        <span></span>
        <p>hari.js</p>
      </div>
      <pre>
        <code>
          <span className="c-key">const</span> hari = {"{"}
          {"\n"}  role: <span className="c-str">"Software Engineer"</span>,
          {"\n"}  experience: <span className="c-str">"3+ years"</span>,
          {"\n"}  location: <span className="c-str">"Kozhikode, Kerala"</span>,
          {"\n"}  focus: [
          {profile.focus.map((item, i) => (
            <span key={item}>
              <span className="c-str">"{item}"</span>
              {i < profile.focus.length - 1 ? ", " : ""}
            </span>
          ))}
          ],
          {"\n"}  openToWork: <span className="c-bool">{String(profile.available)}</span>,
          {"\n"}{"}"};
        </code>
      </pre>
    </div>
  );
}

function Home() {
  const profile = useFetch("/profile");
  const projects = useFetch("/projects");

  if (profile.loading) return <Loader />;
  if (profile.error) return <p className="error-text">{profile.error}</p>;

  const me = profile.data;
  const featured = projects.data ? projects.data.filter((p) => p.featured) : [];

  return (
    <div className="page-fade">
      <section className="hero container">
        <div className="hero-text">
          {me.available && (
            <span className="status-pill">
              <span className="status-dot"></span>
              Open to new opportunities
            </span>
          )}

          <p className="hero-name">{me.name} · {me.role}</p>
          <h1>{me.headline}</h1>
          <p className="hero-intro">{me.intro}</p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn">
              View Projects <ArrowRightIcon size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
            {me.resumeUrl && (
              <a href={me.resumeUrl} className="btn btn-outline" download>
                <DownloadIcon size={16} /> Download Resume
              </a>
            )}
          </div>

          <div className="hero-socials">
            {me.links.github && (
              <a href={me.links.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
                <GithubIcon />
              </a>
            )}
            {me.links.linkedin && (
              <a href={me.links.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            )}
            <a href={`mailto:${me.email}`} className="icon-btn" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          {me.photoUrl ? (
            <img src={me.photoUrl} alt={`Photo of ${me.name}`} className="hero-photo" width="320" height="320" />
          ) : (
            <CodeCard profile={me} />
          )}
        </div>
      </section>

      <section className="container" aria-label="Highlights">
        <div className="stats">
          {me.stats.map((stat) => (
            <div key={stat.label} className="stat">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionTitle
          label="What I do"
          title="Where I add the most value"
          subtitle="Comfortable on both sides of the stack and owning a feature end to end."
        />

        <div className="services-grid">
          {me.services.map((service) => (
            <div key={service.title} className="card service-card">
              <div className="icon-box">
                <TopicIcon name={service.icon} size={22} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {featured.length > 0 && (
        <section className="container section">
          <SectionTitle label="Featured work" title="Selected projects" />

          <div className="featured-grid">
            {featured.map((project) => (
              <Link key={project._id} to="/projects" className="card featured-mini">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="text-btn">
                  Read more <ArrowRightIcon size={15} />
                </span>
              </Link>
            ))}
          </div>

          <div className="center">
            <Link to="/projects" className="btn btn-outline">
              View all projects <ArrowRightIcon size={16} />
            </Link>
          </div>
        </section>
      )}

      <section className="container section">
        <div className="cta-box">
          <h2>Hiring a full-stack developer?</h2>
          <p>I'm open to Full Stack Developer, Frontend Developer and Software Engineer positions. I'd be glad to talk.</p>
          <div className="cta-buttons">
            <a href={`mailto:${me.email}`} className="btn">
              <MailIcon size={16} /> Email me
            </a>
            <Link to="/contact" className="btn btn-outline">
              Contact details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
