import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const navLinks = [
  { to: '/', label: 'Hem' },
  { to: '/om-oss', label: 'Om oss' },
  { to: '/tillverkning', label: 'Tillverkning' },
  { to: '/produkter', label: 'Produkter' },
  { to: '/specialtillverkning', label: 'Specialtillverkning' },
  { to: '/kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHeroPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const transparent = isHeroPage && !scrolled && !menuOpen;

  return (
    <header className={`${styles.header} ${transparent ? '' : styles['header--solid']}`}>
      <div className="container">
        <div className={styles.header__inner}>

          <NavLink to="/" className={styles.header__logo}>
            <span className={styles.header__logo_name}>Hyltans Metall</span>
            <span className={styles.header__logo_year}>sedan 1926</span>
          </NavLink>

          <nav
            className={`${styles.header__nav} ${menuOpen ? styles['header__nav--open'] : ''}`}
            aria-label="Huvudnavigation"
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${styles.header__link} ${isActive ? styles['header__link--active'] : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.header__actions}>
            <button
              className={`${styles.header__burger} ${menuOpen ? styles['header__burger--open'] : ''}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
