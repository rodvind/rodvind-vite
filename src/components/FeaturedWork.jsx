import { Link } from "react-router-dom";
import { work } from "../data/work";

const featured = work.slice(0, 3);

export default function FeaturedWork() {
  return (
    <section className="featured-work fade-section">
      <div className="featured-work-inner">
        <h2 className="featured-work-title">Featured work</h2>
        <ul className="featured-work-list">
          {featured.map((item) => (
            <li key={item.title} className="featured-work-item">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="featured-work-link">
                <strong>{item.title}</strong>
                <span className="featured-work-desc">{item.description}</span>
              </a>
            </li>
          ))}
        </ul>
        <Link to="/work" className="featured-work-cta">See all work →</Link>
      </div>
    </section>
  );
}
