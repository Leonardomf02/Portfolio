import { projects } from "../data/content";

function Arrow() {
  return (
    <svg className="card__arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="section__head" data-reveal>
        <span className="section__index">01</span>
        <h2 className="section__title">Selected work</h2>
        <p className="section__note">Things I've built end-to-end.</p>
      </div>

      <div className="projects">
        {projects.map((p, idx) => (
          <a
            key={p.name}
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className={`card ${p.highlight ? "card--wide" : ""}`}
            data-reveal
            style={{ transitionDelay: `${idx * 70}ms` }}
          >
            <div className="card__top">
              <span className="card__year">{p.year}</span>
              <Arrow />
            </div>
            <h3 className="card__name">{p.name}</h3>
            <p className="card__tagline">{p.tagline}</p>
            <p className="card__desc">{p.description}</p>
            <ul className="card__stack">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
