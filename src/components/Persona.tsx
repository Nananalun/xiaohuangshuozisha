import type { PersonaCopy } from '../i18n';

type PersonaProps = {
  copy: PersonaCopy;
};

const Persona = ({ copy }: PersonaProps) => {
  return (
    <section className="section persona" id="persona">
      <div className="persona-header">
        <span className="persona-badge">{copy.badge}</span>
        <h2 className="section-title">{copy.heading}</h2>
        <p className="persona-intro">{copy.intro}</p>
      </div>
      <ul className="persona-list">
        {copy.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="persona-note">
        <p>{copy.note}</p>
        <span className="persona-signature">{copy.signature}</span>
      </div>
    </section>
  );
};

export default Persona;

