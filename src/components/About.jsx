import { about, journey, skills } from "../data/content";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section__head" data-reveal>
        <span className="section__index">02</span>
        <h2 className="section__title">About</h2>
        <p className="section__note">Who's behind the projects.</p>
      </div>

      <div className="about">
        <div className="about__bio" data-reveal>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="skills">
            {skills.map((s) => (
              <div className="skills__group" key={s.group}>
                <h4>{s.group}</h4>
                <ul>
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="about__timeline" data-reveal>
          <h4 className="timeline__label">Path so far</h4>
          <ol className="timeline">
            {journey.map((j) => (
              <li className="timeline__item" key={j.title}>
                <span className="timeline__period">{j.period}</span>
                <h5 className="timeline__title">{j.title}</h5>
                <span className="timeline__place">{j.place}</span>
                <p className="timeline__note">{j.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
