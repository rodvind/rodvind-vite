import { tools } from "../data/tools";

export default function Tools() {
  return (
    <div className="tools-grid">
      {tools.map((t) => (
        <a
          key={t.name}
          href={t.link}
          target="_blank"
          rel="noopener noreferrer"
          className="tool-link"
          title={t.name}
        >
          <img src={t.icon} alt={t.name} className="tool-icon" width="50" height="50" loading="lazy" />
        </a>
      ))}
    </div>
  );
}
