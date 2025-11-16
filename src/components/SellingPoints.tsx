import type { SellingCopy } from '../i18n';

type SellingPointsProps = {
  copy: SellingCopy;
};

const SellingPoints = ({ copy }: SellingPointsProps) => {
  return (
    <section className="section" id="selling">
      <h2 className="section-title">{copy.title}</h2>
      <p className="section-subtitle">{copy.subtitle}</p>
      <div className="selling-grid">
        {copy.cards.map((point) => (
          <article className="selling-card" key={point.title}>
            <div className="selling-icon">{point.icon}</div>
            <h3>{point.title}</h3>
            <p>{point.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SellingPoints;

