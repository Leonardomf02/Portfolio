import { useEffect, useState } from "react";
import { profile } from "../data/content";

function RotatingRole({ roles }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);
  return (
    <span className="hero__role" key={i}>
      {roles[i]}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <p className="eyebrow" data-reveal>
          <span className="eyebrow__pulse" /> Available for work &amp; collaboration
        </p>

        <h1 className="hero__name" data-reveal>
          Leonardo <span className="hero__name-accent">Santos</span>
        </h1>

        <p className="hero__sub" data-reveal>
          <RotatingRole roles={profile.roles} />
        </p>

        <p className="hero__lede" data-reveal>
          I'm a developer from Portugal. I build full-stack web apps, and right now
          I'm at the HULTIG lab at UBI working on an AI algorithm for route
          optimization.
        </p>

        <div className="hero__actions" data-reveal>
          <a className="btn btn--primary" href="#work">
            View work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
        </div>

        <div className="hero__meta" data-reveal>
          <span>{profile.location}</span>
          <span className="hero__meta-sep" />
          <a href={profile.github} target="_blank" rel="noreferrer">
            github.com/Leonardomf02
          </a>
        </div>
      </div>

      <a href="#work" className="hero__scroll" aria-label="Scroll to work">
        <span>Scroll</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}
