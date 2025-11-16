import type { FinalCtaCopy } from '../i18n';

type FinalCTAProps = {
  copy: FinalCtaCopy;
};

const FinalCTA = ({ copy }: FinalCTAProps) => {
  return (
    <section className="final-cta" id="cta">
      <h2>{copy.title}</h2>
      <p>{copy.body}</p>
      <div className="hero-cta" style={{ justifyContent: 'center' }}>
        <a
          className="btn btn-primary"
          href="https://zalo.me/0397131556"
          target="_blank"
          rel="noreferrer"
        >
          {copy.primaryCta}
        </a>
        <a
          className="btn btn-secondary"
          href="https://zalo.me/0397131556"
          target="_blank"
          rel="noreferrer"
        >
          {copy.secondaryCta}
        </a>
      </div>
      <p className="final-note">{copy.note}</p>
    </section>
  );
};

export default FinalCTA;

