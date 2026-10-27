import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Figure from '@/components/common/Figure/Figure';
import { images } from '@/assets/images/manifest';
import styles from './CustomOrdersPage.module.scss';

/**
 * The five groupings the real site lists under Specialtillverkning on its
 * start page. Kept in that order — it is the owner's own grouping, not ours.
 */
const categories = [
  'Delar till veteranbilar',
  'Båtar',
  'Möbler',
  'Skyltar',
  'Konstverk',
];

export default function CustomOrdersPage() {
  return (
    <>
      <Helmet>
        <title>Specialtillverkning. Hyltans Metall</title>
      </Helmet>

      {/* Intro block */}
      <section className={`block custom-orders-block ${styles['custom-orders__intro']}`}>
        <div className="container container-sm page-intro">
          <h1 className={styles['custom-orders__h1']}>Specialtillverkning</h1>
          <p className="page-intro__lead">
            Vi tillverkar plaketter och skyltar. Beslag, låsdetaljer och handtag
            till dörrar och möbler. Delar till veteranbilar, båtar mm.
          </p>
        </div>
      </section>

      {/* What we cast */}
      <section className={`block block--paper custom-orders-list-block ${styles['custom-orders__list-block']}`}>
        <div className={`container ${styles['custom-orders__split']}`}>
          <div className={styles['custom-orders__split-text']}>
            <h2 className={styles['custom-orders__h2']}>Vad vi gjuter</h2>
            <ul className={styles['custom-orders__list']}>
              {categories.map((label) => (
                <li key={label} className={styles['custom-orders__list-item']}>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <Figure
            image={images['products/ovrigt']}
            alt="Nygjutna detaljer kvar i sandformen efter gjutning."
            ratio="landscape"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className={styles['custom-orders__split-media']}
          />
        </div>
      </section>

      {/* Working from a customer's own model */}
      <section className={`block custom-orders-model-block ${styles['custom-orders__model-block']}`}>
        <div className={`container ${styles['custom-orders__split']} ${styles['custom-orders__split--reverse']}`}>
          <div className={styles['custom-orders__split-text']}>
            <h2 className={styles['custom-orders__h2']}>Har ni en modell?</h2>
            <p className={styles['custom-orders__body']}>
              Har ni en modell kan vi undersöka möjligheten att tillverka en
              exakt kopia.
            </p>
          </div>

          <Figure
            image={images['process/01-modell']}
            alt="En modell läggs på plats i gjutlådan inför formningen."
            ratio="landscape"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className={styles['custom-orders__split-media']}
          />
        </div>
      </section>

      {/* CTA block */}
      <section className={`block block--dark custom-orders-cta-block ${styles['custom-orders__cta-block']}`}>
        <div className="container container-xs">
          <div className={styles['custom-orders__cta-inner']}>
            <h2 className={styles['custom-orders__cta-h2']}>
              Välkommen med en förfrågan!
            </h2>
            <Link to="/kontakt" className="btn btn--light">
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
