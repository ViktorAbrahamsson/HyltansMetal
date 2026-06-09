import { Helmet } from 'react-helmet-async';
import { company } from '@/data/company';
import styles from './ContactPage.module.scss';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Kontakt – Hyltans Metall</title>
      </Helmet>

      <section className="block contact-block">
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.info}>
              <p className="label">Kom i kontakt</p>
              <h1 className={styles.page_title}>Kontakt</h1>

              <address className={styles.address}>
                <div className={styles.address__item}>
                  <span className={styles.address__label}>E-post</span>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
                <div className={styles.address__item}>
                  <span className={styles.address__label}>Adress</span>
                  <span>{company.name}</span>
                  <span>{company.address}</span>
                </div>
              </address>
            </div>

            <form className={styles.form} noValidate>
              <h2 className={styles.form__heading}>Skicka ett meddelande</h2>

              <div className={styles.form__group}>
                <label htmlFor="name" className={styles.form__label}>Namn</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className={styles.form__input}
                  autoComplete="name"
                />
              </div>

              <div className={styles.form__group}>
                <label htmlFor="email" className={styles.form__label}>E-postadress</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={styles.form__input}
                  autoComplete="email"
                />
              </div>

              <div className={styles.form__group}>
                <label htmlFor="message" className={styles.form__label}>Meddelande</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={styles.form__textarea}
                />
              </div>

              <button type="submit" className={styles.form__submit}>
                Skicka meddelande
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
