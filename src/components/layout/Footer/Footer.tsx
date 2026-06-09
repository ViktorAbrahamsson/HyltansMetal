import { NavLink } from 'react-router-dom';
import { company } from '@/data/company';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <div className={styles.footer__brand}>
            <span className={styles.footer__name}>{company.name}</span>
            <span className={styles.footer__tagline}>{company.tagline}</span>
          </div>

          <nav className={styles.footer__nav} aria-label="Sidfotslänkar">
            <NavLink to="/om-oss">Om oss</NavLink>
            <NavLink to="/tillverkning">Tillverkning</NavLink>
            <NavLink to="/produkter">Produkter</NavLink>
            <NavLink to="/specialtillverkning">Specialtillverkning</NavLink>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </nav>

          <address className={styles.footer__contact}>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span>{company.address}</span>
          </address>
        </div>

        <p className={styles.footer__copy}>
          © {new Date().getFullYear()} {company.name}
        </p>
      </div>
    </footer>
  );
}
