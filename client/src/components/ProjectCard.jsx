import { CodeIcon, GithubIcon, ExternalIcon, LockIcon, ArrowRightIcon } from "./Icons";

function ProjectLinks({ project }) {
  if (project.isPrivate && project.links.length === 0) {
    return (
      <span className="badge">
        <LockIcon size={12} /> Private repository
      </span>
    );
  }

  return (
    <div className="project-links">
      {project.links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} - ${link.label}`}
          title={link.label}
        >
          {link.type === "live" ? <ExternalIcon /> : <GithubIcon />}
        </a>
      ))}
    </div>
  );
}

function ProjectCard({ project, index, onOpen }) {
  // 01, 02, 03...
  const number = String(index + 1).padStart(2, "0");

  // featured cards show a few key features, small cards keep it short
  const showFeatures = project.featured && project.features.length > 0;

  return (
    <article className={project.featured ? "card project-card featured" : "card project-card"}>
      <div className="project-top">
        <div className="icon-box">
          <CodeIcon size={20} />
        </div>
        <ProjectLinks project={project} />
      </div>

      <div className="project-meta">
        <span className="project-number">{number}</span>
        <span className="project-category">{project.category}</span>
        {project.status && <span className="status-tag">{project.status}</span>}
        {project.aiAssisted && <span className="status-tag">Built with Claude Code</span>}
      </div>

      <h3>{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      {showFeatures && (
        <ul className="feature-list">
          {project.features.slice(0, 4).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}

      <div className="project-footer">
        <ul className="tech-list">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <button className="text-btn" onClick={() => onOpen(project)}>
          View details <ArrowRightIcon size={15} />
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;
