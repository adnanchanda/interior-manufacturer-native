import { useState, useRef, useEffect } from 'react';

/**
 * OptimizedImage — Lazy-loads images with a blur-up placeholder effect.
 *
 * Props:
 *  - src: optimized image source (WebP)
 *  - placeholder: tiny blur placeholder image
 *  - alt: alt text
 *  - className: CSS class(es)
 *  - style: inline styles
 *  - onClick: click handler
 *  - rootMargin: IntersectionObserver rootMargin (default '200px')
 */
export default function OptimizedImage({
  src,
  placeholder,
  alt = '',
  className = '',
  style = {},
  onClick,
  rootMargin = '200px',
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={imgRef}
      className={`optimized-image-wrapper ${className}`}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
      onClick={onClick}
    >
      {/* Blur placeholder — always rendered, fades out once full image loads */}
      {placeholder && (
        <img
          src={placeholder}
          alt=""
          aria-hidden="true"
          className="optimized-image-placeholder"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
            transition: 'opacity 0.4s ease',
            opacity: loaded ? 0 : 1,
            zIndex: 1,
          }}
        />
      )}

      {/* Full image — only starts loading when in viewport */}
      {inView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className="optimized-image-full"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.4s ease',
            opacity: loaded ? 1 : 0,
          }}
          {...rest}
        />
      )}
    </div>
  );
}
