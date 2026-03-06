import { useEffect } from "react";
import { work } from "../data/work";
import Tools from "../components/Tools";

export default function Work() {
  useEffect(() => { document.title = "Work — Rodvin"; }, []);
  return (
    <section className="work-page">
      <div className="work-page-inner">
        <h1 className="work-page-title">Work</h1>
        <p className="work-page-intro">Projects and things I&apos;ve built.</p>
        <ul className="work-list">
          {work.map((item) => (
            <li key={item.title} className="work-item">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="work-link">
                <strong>{item.title}</strong>
                <span className="work-desc">{item.description}</span>
              </a>
            </li>
          ))}
        </ul>
        <h2 className="work-section-title">Tech stack</h2>
        <Tools />
      </div>
    </section>
  );
}
