import type { HeroCopy } from '../i18n';

type HeroProps = {
  copy: HeroCopy;
};

const Hero = ({ copy }: HeroProps) => {
  return (
    <section className="section" id="hero">
      <div className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="hero-subtitle">{copy.subtitle}</p>
          <div className="hero-badges">
            {copy.badges.map((badge) => (
              <span className="hero-badge" key={badge}>
                {badge}
              </span>
            ))}
          </div>
          <div className="hero-cta">
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
          <p className="hero-hint">{copy.hint}</p>
        </div>
        <div className="hero-media" aria-hidden="true">
          <img src="/images/hero-main.jpg" alt={copy.mediaAlt} loading="lazy" />
          <span className="hero-media-tag">{copy.mediaTag}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

