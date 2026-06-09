import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { customOrderCategories } from '@/data/products';
import styles from './CustomOrdersPage.module.scss';

export default function CustomOrdersPage() {
  return (
    <>
      <Helmet>
        <title>Specialtillverkning – Hyltans Metall</title>
      </Helmet>

      <section className="block custom-orders-block">
        <div className="container container-sm">
          <p className="label">Skräddarsytt</p>
          <h1 className={styles.page_title}>Specialtillverkning</h1>
          <p className={styles.intro}>
            Har du ett projekt som kräver bronsgjutning? Vi tar oss an specialbeställningar
            av alla slag – från enskilda reservdelar till unika konstnärliga verk.
            Kontakta oss med din idé så berättar vi hur vi kan hjälpa dig.
          </p>
        </div>
      </section>

      <section className="block categories-block">
        <div className="container container-sm">
          <h2 className={styles.categories_heading}>Vad kan vi gjuta?</h2>
          <ul className={styles.categories}>
            {customOrderCategories.map((cat) => (
              <li key={cat.id} className={styles.category_item}>
                <span className={styles.category_bullet} aria-hidden="true">—</span>
                <span>{cat.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block contact-cta-block">
        <div className="container container-xs">
          <div className={styles.cta}>
            <h2 className={styles.cta__heading}>Berätta om ditt projekt</h2>
            <p className={styles.cta__text}>
              Skicka ett e-postmeddelande med en beskrivning av vad du behöver, så
              återkommer vi med mer information och prisuppgifter.
            </p>
            <Link to="/kontakt" className={styles.cta__button}>
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
