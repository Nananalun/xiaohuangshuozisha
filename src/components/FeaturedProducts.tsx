import { useCallback, useEffect, useState } from 'react';
import type { FeaturedCopy } from '../i18n';

type FeaturedProductsProps = {
  copy: FeaturedCopy;
};

const FeaturedProducts = ({ copy }: FeaturedProductsProps) => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const currentProduct = activeProduct !== null ? copy.products[activeProduct] : null;
  const currentGallery = currentProduct?.gallery ?? null;

  const openGallery = (productIndex: number, imageIndex = 0) => {
    setActiveProduct(productIndex);
    setSlideIndex(imageIndex);
  };

  const closeGallery = () => {
    setActiveProduct(null);
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
    if (activeProduct !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = previous;
    };
  }, [activeProduct]);

  useEffect(() => {
    if (activeProduct === null) return;
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
  }, [activeProduct, nextSlide, prevSlide]);

  return (
    <section className="section" id="featured">
      <h2 className="section-title">{copy.title}</h2>
      <p className="section-subtitle">{copy.subtitle}</p>
      <div className="featured-grid">
        {copy.products.map((product, index) => (
          <article className="featured-card" key={product.name}>
            <button
              type="button"
              className="featured-preview"
              onClick={() => openGallery(index, 0)}
              aria-label={`${product.name} ${copy.previewLabel}`}
            >
              <img src={product.cover} alt={product.name} loading="lazy" />
              <span className="preview-hint">{copy.previewLabel}</span>
            </button>
            <div className="featured-body">
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <div className="product-tags">
                {product.highlights.map((tag) => (
                  <span className="product-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                className="btn btn-secondary"
                href="https://zalo.me/0397131556"
                target="_blank"
                rel="noreferrer"
              >
                {copy.cta}
              </a>
            </div>
          </article>
        ))}
      </div>

      {activeProduct !== null && currentGallery && (
        <div className="gallery-modal" role="dialog" aria-modal="true" onClick={closeGallery}>
          <div className="gallery-dialog" onClick={(event) => event.stopPropagation()}>
            <button className="gallery-close" type='button' onClick={closeGallery} aria-label="Close gallery">
              ×
            </button>
            <div className="gallery-image-wrapper">
              <img src={currentGallery[slideIndex]} alt={`${currentProduct?.name} preview`} />
              {currentGallery.length > 1 && (
                <>
                  <button className="gallery-nav prev" type='button' onClick={prevSlide} aria-label="Previous image">
                    ‹
                  </button>
                  <button className="gallery-nav next" type='button' onClick={nextSlide} aria-label="Next image">
                    ›
                  </button>
                </>
              )}
            </div>
            <div className="gallery-meta">
              <div>
                <strong>{currentProduct?.name}</strong>
                <p>{currentProduct?.desc}</p>
              </div>
              <span>
                {slideIndex + 1}/{currentGallery.length}
              </span>
            </div>
            <div className="gallery-thumbs">
              {currentGallery.map((image, thumbIndex) => (
                <button
                  type="button"
                  key={image + thumbIndex}
                  className={`thumb${thumbIndex === slideIndex ? ' active' : ''}`}
                  onClick={() => setSlideIndex(thumbIndex)}
                  aria-label={`Preview ${thumbIndex + 1}`}
                >
                  <img src={image} alt={`${currentProduct?.name} thumb ${thumbIndex + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;

