import { Helmet } from 'react-helmet-async';
import styles from './AboutPage.module.scss';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Om oss – Hyltans Metall</title>
      </Helmet>

      {/* Intro block */}
      <section className={`block about-page-block ${styles['about-page__intro']}`}>
        <div className="container">
          <div className={styles['about-page__intro-inner']}>
            <p className="label">Sedan 1926</p>
            <h1 className={styles['about-page__h1']}>Om oss</h1>
            <p className={styles['about-page__lead']}>
              Hyltans Metall AB grundades 1926 i Gnosjö – en stad känd för sin
              företagsamhet och hantverkstradition. Det som började som ett litet
              gjuteri har under tre generationer vuxit till ett familjeföretag med
              djupa rötter i bygden och ett unikt kunnande om sandgjutning i brons.
            </p>
          </div>
          <span
            className={`ghost-numeral ${styles['about-page__ghost']}`}
            aria-hidden="true"
          >
            1926
          </span>
        </div>
      </section>

      {/* Content block */}
      <section className={`block block--paper ${styles['about-page__content-block']}`}>
        <div className="container container-sm">

          <div className={styles['about-page__section']}>
            <div className={styles['about-page__section-meta']}>
              <span className="batch-stamp">01</span>
            </div>
            <h2 className={styles['about-page__section-h2']}>Tre generationer av stolthet</h2>
            <p className={styles['about-page__section-p']}>
              Hantverket har förts vidare från far till son, med respekt för de
              metoder som alltid fungerat. Vi gjuter brons precis som det gjordes
              när företaget startades – med noggrant packad sand, ett öga för
              detaljen och ett brinnande intresse för materialet.
            </p>
          </div>

          <div className={styles['about-page__section']}>
            <div className={styles['about-page__section-meta']}>
              <span className="batch-stamp">02</span>
            </div>
            <h2 className={styles['about-page__section-h2']}>Gnosjöandan i varje gjutning</h2>
            <p className={styles['about-page__section-p']}>
              Gnosjö är känt för sin industriella historia och sin anda av att
              lösa problem med egna händer. Den mentaliteten genomsyrar allt vi gör.
              Vi tar oss an utmaningar som andra hänvisar vidare, och vi hittar
              lösningar som håller i generationer.
            </p>
          </div>

          <div className={styles['about-page__section']}>
            <div className={styles['about-page__section-meta']}>
              <span className="batch-stamp">03</span>
            </div>
            <h2 className={styles['about-page__section-h2']}>Handgjort i Sverige</h2>
            <p className={styles['about-page__section-p']}>
              Varje föremål vi gjuter är unikt. Från det att sanden packas runt
              gjutformen till det att det färdiga bronsföremålet slipas och poleras –
              allt görs för hand, i vår verkstad i Gnosjö. Det är vår garanti för
              kvalitet och det är vad som skiljer oss från massproducerade alternativ.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
