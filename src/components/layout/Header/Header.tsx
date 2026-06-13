import { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const navLinks = [
  { to: '/', label: 'Hem', index: '01' },
  { to: '/om-oss', label: 'Om oss', index: '02' },
  { to: '/tillverkning', label: 'Tillverkning', index: '03' },
  { to: '/produkter', label: 'Produkter', index: '04' },
  { to: '/specialtillverkning', label: 'Specialtillverkning', index: '05' },
  { to: '/kontakt', label: 'Kontakt', index: '06' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const toggleMenu = useCallback(() => setMenuOpen(o => !o), []);

  const isTransparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={[
        styles.header,
        isTransparent ? styles['header--transparent'] : styles['header--solid'],
        menuOpen ? styles['header--menu-open'] : '',
      ].join(' ')}
    >
      <div className={styles.header__inner}>
        <NavLink to="/" className={styles.logo} aria-label="Hyltans Metall – startsida">
          <span className={styles.logo__name}>Hyltans Metall</span>
          <span className={styles.logo__tagline}>Sedan 1926</span>
        </NavLink>

        <nav className={styles.nav} aria-label="Huvudnavigation">
          <ul className={styles.nav__list}>
            {navLinks.map(({ to, label }) => (
              <li key={to} className={styles.nav__item}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    [styles.nav__link, isActive ? styles['nav__link--active'] : ''].join(' ')
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.burger}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
        >
          <span className={styles.burger__bar} />
          <span className={styles.burger__bar} />
          <span className={styles.burger__bar} />
        </button>
      </div>

      {/* Mobile overlay */}
      <div className={[styles.overlay, menuOpen ? styles['overlay--open'] : ''].join(' ')} aria-hidden={!menuOpen}>
        <nav aria-label="Mobilnavigation">
          <ul className={styles.overlay__list}>
            {navLinks.map(({ to, label, index }, i) => (
              <li
                key={to}
                className={styles.overlay__item}
                style={{ '--delay': `${i * 60}ms` } as React.CSSProperties}
              >
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    [styles.overlay__link, isActive ? styles['overlay__link--active'] : ''].join(' ')
                  }
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <span className={styles.overlay__index}>{index}</span>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
