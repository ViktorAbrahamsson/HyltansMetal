import { Link } from 'react-router-dom';
import EmberField from './EmberField';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={`block--dark ${styles.hero}`} aria-label="Introduktion">
      {/* Molten glow pool */}
      <div className={styles['hero__glow']} aria-hidden="true" />

      {/* Rising foundry embers */}
      <EmberField />

      {/* Legibility scrim */}
      <div className={styles['hero__scrim']} aria-hidden="true" />

      {/* Ghost numeral */}
      <span className={`ghost-numeral ${styles['hero__ghost']}`} aria-hidden="true">1926</span>

      {/* Content */}
      <div className={`container ${styles['hero__content']}`}>
        <p className="label">Gjuteri · Gnosjö · Sedan 1926</p>
        <h1 className={styles['hero__heading']}>
          Hyltans <span className="molten">Metall</span>
        </h1>
        <p className={styles['hero__tagline']}>
          Sandgjutning i brons och mässing. Handgjort i Gnosjö sedan 1926.
        </p>
        <div className={styles['hero__actions']}>
          <Link to="/produkter" className="btn">Se våra produkter</Link>
          <Link to="/om-oss" className="btn btn--ghost">Om oss</Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className={styles['hero__scroll-cue']} aria-hidden="true">
        <span className={styles['hero__scroll-cue-label']}>Scrolla</span>
        <span className={styles['hero__scroll-cue-line']} />
      </div>
    </section>
  );
}
