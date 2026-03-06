import { Link, useLocation } from "react-router-dom";

export default function NavHeader() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isResume = pathname === "/resume";
  const isWork = pathname === "/work";

  return (
    <nav className="nav-header">
      <Link to="/" className="nav-brand">
        <img src="/logo.svg" alt="Rodvin — Home" width="50" height="50" />
      </Link>
      <div className="nav-links">
        <Link to="/" className={isHome ? "nav-link nav-link-active" : "nav-link"} aria-current={isHome ? "page" : undefined}>Home</Link>
        <Link to="/about" className={isAbout ? "nav-link nav-link-active" : "nav-link"} aria-current={isAbout ? "page" : undefined}>About</Link>
        <Link to="/resume" className={isResume ? "nav-link nav-link-active" : "nav-link"} aria-current={isResume ? "page" : undefined}>Resume</Link>
        <Link to="/work" className={isWork ? "nav-link nav-link-active" : "nav-link"} aria-current={isWork ? "page" : undefined}>Work</Link>
      </div>
    </nav>
  );
}
