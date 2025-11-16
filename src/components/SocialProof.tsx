import { useCallback, useEffect, useState } from 'react';
import type { SocialProofCopy } from '../i18n';

type SocialProofProps = {
  copy: SocialProofCopy;
};

const SocialProof = ({ copy }: SocialProofProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const currentCard = activeIndex !== null ? copy.cards[activeIndex] : null;
  const currentGallery = currentCard?.gallery ?? null;

  const openGallery = (cardIndex: number, assetIndex = 0) => {
    setActiveIndex(cardIndex);
    setSlideIndex(assetIndex);
  };

  const closeGallery = () => {
    setActiveIndex(null);
    setSlideIndex(0);
  };

  const nextSlide = useCallback(() => {
    if (!currentGallery) return;
    setSlideIndex((index) => (index + 1) % currentGallery.length);
  }, [currentGallery]);

  const prevSlide = useCallback(() => {
    if (!currentGallery) return;
    setSlideIndex((index) => (index - 1 + currentGallery.length) % currentGallery.length);
  }, [currentGallery]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const previous = document.body.style.overflow;
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = previous;
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeGallery();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeIndex, nextSlide, prevSlide]);

  const renderAsset = (assetIndex: number) => {
    if (!currentGallery) return null;
    const asset = currentGallery[assetIndex];
    if (asset.type === 'video') {
      return (
        <video
          key={asset.src}
          controls
          poster={asset.poster ?? currentCard?.cover}
          playsInline
          autoPlay
          style={{ borderRadius: 16 }}
        >
          <source src={asset.src} />
        </video>
      );
    }
    return <img key={asset.src} src={asset.src} alt={`${currentCard?.title} ${assetIndex + 1}`} />;
  };

  const renderThumb = (assetIndex: number) => {
    if (!currentGallery || !currentCard) return null;
    const asset = currentGallery[assetIndex];
    const thumbSrc = asset.type === 'image' ? asset.src : asset.poster ?? currentCard.cover;
    return (
      <button
        type="button"
        key={asset.src + assetIndex}
        className={`thumb${assetIndex === slideIndex ? ' active' : ''}${asset.type === 'video' ? ' video' : ''}`}
        onClick={() => setSlideIndex(assetIndex)}
        aria-label={`Preview ${assetIndex + 1}`}
      >
        <img src={thumbSrc} alt={`${currentCard.title} thumb ${assetIndex + 1}`} />
        {asset.type === 'video' && <span className="thumb-video-badge">▶</span>}
      </button>
    );
  };

  return (
    <section className="section" id="social-proof">
      <h2 className="section-title">{copy.title}</h2>
      <p className="section-subtitle">
        {copy.subtitleIntro}
        <strong>{copy.subtitleHighlight}</strong>
        {copy.subtitleOutro}
      </p>
      <div className="stat-line">
        {copy.stats.map((stat, index) => (
          <span key={stat}>
            {stat}
            {index < copy.stats.length - 1 && <span aria-hidden="true"> · </span>}
          </span>
        ))}
      </div>
      <div className="proof-grid">
        {copy.cards.map((item, index) => {
          const hasGallery = !!item.gallery?.length;
          const previewText = item.previewLabel ?? copy.previewLabel;
          return (
            <article className="proof-card" key={item.title}>
              {hasGallery ? (
                <button
                  type="button"
                  className="proof-cover"
                  onClick={() => openGallery(index)}
                  aria-label={`${item.title} ${previewText}`}
                >
                  <img
                    className={`proof-cover-image${item.fit === 'contain' ? ' contain' : ''}`}
                    src={item.cover}
                    alt={item.title}
                    loading="lazy"
                  />
                  <span className="preview-hint">{previewText}</span>
                </button>
              ) : (
                <img
                  className={`proof-cover-image${item.fit === 'contain' ? ' contain' : ''}`}
                  src={item.cover}
                  alt={item.title}
                  loading="lazy"
                />
              )}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          );
        })}
      </div>

      {activeIndex !== null && currentGallery && (
        <div className="gallery-modal" role="dialog" aria-modal="true" onClick={closeGallery}>
          <div className="gallery-dialog" onClick={(event) => event.stopPropagation()}>
            <button className="gallery-close" type="button" onClick={closeGallery} aria-label="Close gallery">
              ×
            </button>
            <div className="gallery-image-wrapper">{renderAsset(slideIndex)}</div>
            <div className="gallery-meta">
              <div>
                <strong>{currentCard?.title}</strong>
                <p>{currentCard?.desc}</p>
              </div>
              <span>
                {slideIndex + 1}/{currentGallery.length}
              </span>
            </div>
            {currentGallery.length > 1 && (
              <>
                <div className="gallery-thumbs">{currentGallery.map((_, idx) => renderThumb(idx))}</div>
              <>
                <button className="gallery-nav prev" type="button" onClick={prevSlide} aria-label="Previous">
                  ‹
                </button>
                <button className="gallery-nav next" type="button" onClick={nextSlide} aria-label="Next">
                  ›
                </button>
              </>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default SocialProof;

