import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CloseIcon, GithubIcon, ExternalIcon, LockIcon } from "./Icons";

function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    // focus the close button, close on Escape and stop the page behind from scrolling
    closeBtnRef.current?.focus();

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // render into <body> so the page's fade animation (transform) can't trap the fixed overlay
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeBtnRef} className="icon-btn modal-close" onClick={onClose} aria-label="Close details">
          <CloseIcon />
        </button>

        <span className="project-category">{project.category}</span>
        <h2 id="modal-title">{project.title}</h2>
        {project.status && <span className="status-tag">{project.status}</span>}
        {project.aiAssisted && <span className="status-tag">Built with Claude Code</span>}

        <p className="modal-desc">{project.description}</p>

        {project.problem && (
          <>
            <h4>Problem it solves</h4>
            <p>{project.problem}</p>
          </>
        )}

        {project.features.length > 0 && (
          <>
            <h4>Main features</h4>
            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {project.aiAssisted && (
          <>
            <h4>How I built it</h4>
            <p>
              Built using AI-assisted development with Claude Code. I designed the architecture, directed the
              implementation, and debugged and tested it.
            </p>
          </>
        )}

        <h4>Tech stack</h4>
        <div className="tags">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        <div className="modal-actions">
          {project.links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="btn btn-outline btn-small">
              {link.type === "live" ? <ExternalIcon size={15} /> : <GithubIcon size={15} />}
              {link.label}
            </a>
          ))}
          {project.isPrivate && project.links.length === 0 && (
            <span className="badge">
              <LockIcon size={12} /> Code is in a private repository
            </span>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ProjectModal;
