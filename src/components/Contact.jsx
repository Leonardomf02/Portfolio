import { profile } from "../data/content";

const socials = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "Leonardomf02", href: profile.github },
  { label: "LinkedIn", value: "Leonardo Santos", href: profile.linkedin },
];

export default function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <div className="contact" data-reveal>
        <span className="section__index">03</span>
        <h2 className="contact__title">
          Let's build<br />something.
        </h2>
        <p className="contact__lede">
          Open to internships, collaborations, or a good conversation about a project.
          The fastest way to reach me is email.
        </p>

        <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <ul className="contact__links">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">
                <span className="contact__links-label">{s.label}</span>
                <span className="contact__links-value">{s.value}</span>
              </a>
            </li>
          ))}
          <li>
            <a href={profile.cv} target="_blank" rel="noreferrer">
              <span className="contact__links-label">CV</span>
              <span className="contact__links-value">Download PDF</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
