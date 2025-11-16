import type { BenefitsCopy } from '../i18n';

type BenefitsProps = {
  copy: BenefitsCopy;
};

const Benefits = ({ copy }: BenefitsProps) => {
  return (
    <section className="section" id="benefits">
      <h2 className="section-title">{copy.title}</h2>
      <ul className="benefits-list">
        {copy.items.map((benefit) => (
          <li key={benefit.title}>
            {benefit.title}
            <span>{benefit.desc}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Benefits;

