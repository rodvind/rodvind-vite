import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavHeader from "./NavHeader";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');
    if (!sections.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <NavHeader />
      <main id="main-content" className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
