import { Link } from "react-router-dom";

export default function ShortAbout() {
  return (
    <section id="about_me" className="short-about fade-section">
      <div className="short-about-inner">
        <p className="short-about-text">
          Full-stack developer, cloud advocate, and data scientist. Former geneticist who fell in love with code — now building reliable systems and learning every day.
        </p>
        <Link to="/about" className="short-about-link">More about me →</Link>
      </div>
    </section>
  );
}
