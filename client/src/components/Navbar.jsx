import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { MenuIcon, CloseIcon, DownloadIcon } from "./Icons";
import "../styles/navbar.css";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

function Navbar({ profile }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // add a stronger shadow to the bar once the page is scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="navbar-inner">
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-mark">H</span>
            <span className="logo-text">Hariprasad</span>
          </Link>

          <nav id="main-nav" className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} end={link.path === "/"} onClick={closeMenu}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <ThemeToggle />
            {/* only show the resume button once the file is added */}
            {profile?.resumeUrl && (
              <a href={profile.resumeUrl} className="btn btn-small nav-resume" download>
                <DownloadIcon size={15} /> Resume
              </a>
            )}
            <button
              className="icon-btn menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="main-nav"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
