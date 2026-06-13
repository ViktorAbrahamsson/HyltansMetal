import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { customOrderCategories } from '@/data/products';
import styles from './CustomOrdersPage.module.scss';

const stampNumbers = ['01', '02', '03', '04', '05'];

export default function CustomOrdersPage() {
  return (
    <>
      <Helmet>
        <title>Specialtillverkning – Hyltans Metall</title>
      </Helmet>

      {/* Intro block */}
      <section className={`block custom-orders-block ${styles['custom-orders__intro']}`}>
        <div className="container container-sm">
          <p className="label">Skräddarsytt</p>
          <h1 className={styles['custom-orders__h1']}>Specialtillverkning</h1>
          <p className={styles['custom-orders__lead']}>
            Har du ett projekt som kräver bronsgjutning? Vi tar oss an specialbeställningar
            av alla slag – från enskilda reservdelar till unika konstnärliga verk.
            Kontakta oss med din idé så berättar vi hur vi kan hjälpa dig.
          </p>
        </div>
      </section>

      {/* Categories section */}
      <section className={`block block--paper categories-block ${styles['custom-orders__categories-block']}`}>
        <div className="container container-sm">
          <h2 className={styles['custom-orders__categories-h2']}>Vad kan vi gjuta?</h2>
          <ul className={styles['custom-orders__index-list']}>
            {customOrderCategories.map((cat, i) => (
              <li key={cat.id}>
                <Link to="/kontakt" className={styles['custom-orders__index-row']}>
                  <span className={`batch-stamp ${styles['custom-orders__index-stamp']}`}>
                    {stampNumbers[i]}
                  </span>
                  <span className={styles['custom-orders__index-title']}>{cat.title}</span>
                  <span className={styles['custom-orders__index-arrow']} aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA block */}
      <section className={`block block--dark contact-cta-block ${styles['custom-orders__cta-block']}`}>
        <div className="container container-xs">
          <div className={styles['custom-orders__cta-inner']}>
            <h2 className={styles['custom-orders__cta-h2']}>Berätta om ditt projekt</h2>
            <p className={styles['custom-orders__cta-text']}>
              Skicka ett e-postmeddelande med en beskrivning av vad du behöver, så
              återkommer vi med mer information och prisuppgifter.
            </p>
            <Link to="/kontakt" className="btn btn--light">Kontakta oss</Link>
          </div>
        </div>
      </section>
    </>
  );
}
