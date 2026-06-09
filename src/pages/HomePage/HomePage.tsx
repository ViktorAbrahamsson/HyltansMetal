import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Hero from '@/components/common/Hero/Hero';
import ProductCard from '@/components/common/ProductCard/ProductCard';
import { productCategories } from '@/data/products';
import styles from './HomePage.module.scss';

export default function HomePage() {
  const featuredProducts = productCategories.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Hyltans Metall – Sandgjutning i brons sedan 1926</title>
      </Helmet>

      <Hero />

      <section className="block block--surface about-block">
        <div className={`container container-sm ${styles.about_container}`}>
          <svg className={styles.about_year} viewBox="0 0 340 120" aria-hidden="true">
            <text x="0" y="110" fontFamily="Cormorant Garamond, serif" fontSize="110" fill="#8B6914" fillOpacity="0.055">1926</text>
          </svg>
          <p className="label">Tre generationer</p>
          <h2 className={styles.about_heading}>Hantverket lever vidare</h2>
          <p className={styles.about_text}>
            Sedan 1926 har Hyltans Metall i Gnosjö bevarat konsten att gjuta brons för hand.
            Det som en gång startades av vår farfar förs idag vidare med samma stolthet och
            omsorg om detaljen. Varje föremål vi gjuter bär spår av mänskliga händer –
            precis som det ska vara.
          </p>
          <Link to="/om-oss" className={styles.about_link}>
            Läs mer om oss
          </Link>
        </div>
      </section>

      <section className="block block--alt products-block">
        <div className="container">
          <div className={styles.products_header}>
            <div>
              <p className="label">Sortiment</p>
              <h2>Våra produkter</h2>
            </div>
            <Link to="/produkter" className={styles.products_all_link}>
              Se alla produkter
            </Link>
          </div>
          <div className={styles.products_grid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="block block--dark craft-block">
        <div className="container container-sm">
          <blockquote className={styles.craft_quote}>
            <p>
              "Vi värmer metallen till 1200 grader, packar sanden för hand runt gjutformen –
              precis som vi alltid har gjort. Det finns inga genvägar när man gjuter brons."
            </p>
            <footer className={styles.craft_quote_footer}>
              <span>Hyltans Metall, Gnosjö</span>
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="block block--surface cta-block">
        <div className="container container-sm">
          <div className={styles.cta_inner}>
            <h2 className={styles.cta_heading}>Behöver du något specialgjutet?</h2>
            <p className={styles.cta_text}>
              Vi tar emot beställningar för specialtillverkning – allt från reservdelar till
              veteranbilar till konstnärliga skulpturer.
            </p>
            <Link to="/specialtillverkning" className={styles.cta_button}>
              Berätta om ditt projekt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
