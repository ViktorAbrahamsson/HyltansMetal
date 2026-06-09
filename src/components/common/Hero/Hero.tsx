import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <svg
          className={styles.hero__decoration}
          viewBox="0 0 600 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M 320 -80 C 560 -130 660 200 560 450 C 460 700 140 720 60 520 C -20 340 40 30 320 -80 Z"
            fill="#8B6914"
            fillOpacity="0.04"
          />
          <path
            d="M -40 680 C 60 480 220 220 480 20"
            stroke="#8B6914"
            strokeWidth="1.5"
            strokeOpacity="0.12"
            strokeLinecap="round"
          />
          <path
            d="M 60 730 C 140 530 290 300 520 120"
            stroke="#8B6914"
            strokeWidth="1"
            strokeOpacity="0.07"
            strokeLinecap="round"
          />
          <path
            d="M -80 640 C 30 420 180 160 420 -40"
            stroke="#8B6914"
            strokeWidth="0.75"
            strokeOpacity="0.05"
            strokeLinecap="round"
          />
        </svg>

        <p className={`label ${styles.hero__label}`}>Gnosjö, Sverige</p>
        <h1 className={styles.hero__title}>
          Hyltans<br />Metall
        </h1>
        <p className={styles.hero__tagline}>Handgjord sandgjutning i brons sedan 1926</p>
        <div className={styles.hero__actions}>
          <Link to="/produkter" className={styles.hero__cta}>
            Se våra produkter
          </Link>
          <Link to="/om-oss" className={styles.hero__link}>
            Om oss
          </Link>
        </div>
      </div>

      <div className={styles.hero__media}>
        <video
          className={styles.hero__video}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
          <source src="/video/hero.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
}
