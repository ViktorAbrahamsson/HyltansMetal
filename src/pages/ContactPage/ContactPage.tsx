import { Helmet } from 'react-helmet-async';
import { company } from '@/data/company';
import styles from './ContactPage.module.scss';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Kontakt – Hyltans Metall</title>
      </Helmet>

      <section className={`block contact-block ${styles['contact-page__section']}`}>
        <div className="container">
          <div className={styles['contact-page__layout']}>

            {/* Info column */}
            <div className={styles['contact-page__info']}>
              <p className="label">Kom i kontakt</p>
              <h1 className={styles['contact-page__h1']}>Kontakt</h1>
              <a
                href={`mailto:${company.email}`}
                className={styles['contact-page__email-link']}
              >
                {company.email}
              </a>
              <address className={styles['contact-page__address']}>
                <div className={styles['contact-page__address-item']}>
                  <span className={styles['contact-page__address-label']}>E-post</span>
                  <span className={styles['contact-page__address-value']}>{company.email}</span>
                </div>
                <div className={styles['contact-page__address-item']}>
                  <span className={styles['contact-page__address-label']}>Adress</span>
                  <span className={styles['contact-page__address-value']}>{company.name}</span>
                  <span className={styles['contact-page__address-value']}>{company.address}</span>
                </div>
              </address>
            </div>

            {/* Form column */}
            <div className={styles['contact-page__form-card']}>
              <form className={styles['contact-page__form']} noValidate>
                <h2 className={styles['contact-page__form-heading']}>Skicka ett meddelande</h2>

                <div className={styles['contact-page__form-group']}>
                  <label htmlFor="contact-name" className={styles['contact-page__form-label']}>
                    Namn
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    className={styles['contact-page__form-input']}
                    autoComplete="name"
                  />
                </div>

                <div className={styles['contact-page__form-group']}>
                  <label htmlFor="contact-email" className={styles['contact-page__form-label']}>
                    E-postadress
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className={styles['contact-page__form-input']}
                    autoComplete="email"
                  />
                </div>

                <div className={styles['contact-page__form-group']}>
                  <label htmlFor="contact-message" className={styles['contact-page__form-label']}>
                    Meddelande
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    className={styles['contact-page__form-textarea']}
                  />
                </div>

                <button
                  type="submit"
                  className={`btn ${styles['contact-page__form-submit']}`}
                >
                  Skicka meddelande
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
