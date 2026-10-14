import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

function Footer({ profile }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Hariprasad. All rights reserved.</p>

        {profile && (
          <div className="footer-links">
            {profile.links?.github && (
              <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
            )}
            {profile.links?.linkedin && (
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            )}
            {profile.email && (
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <MailIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
