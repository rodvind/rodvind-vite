import { Link } from "react-router-dom";

export default function HomeCTAs() {
  return (
    <section className="home-ctas fade-section">
      <div className="home-ctas-inner">
        <Link to="/resume" className="home-cta home-cta-primary">View full resume</Link>
        <Link to="/work" className="home-cta home-cta-secondary">See all work</Link>
        <a href="mailto:hello@rodvin.com" className="home-cta home-cta-secondary">Get in touch</a>
      </div>
    </section>
  );
}
