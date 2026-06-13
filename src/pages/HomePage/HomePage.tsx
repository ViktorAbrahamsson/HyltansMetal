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

      {/* About section */}
      <section className={`block block--paper about-block ${styles['home-about']}`}>
        <div className="container">
          <div className={styles['home-about__inner']}>
            <div className={styles['home-about__meta']}>
              <span className="batch-stamp">01</span>
              <p className="label">Tre generationer</p>
            </div>
            <div>
              <h2 className={styles['home-about__heading']}>Hantverket lever vidare</h2>
              <p className={styles['home-about__text']}>
                Sedan 1926 har Hyltans Metall i Gnosjö bevarat konsten att gjuta brons för hand.
                Det som en gång startades av vår farfar förs idag vidare med samma stolthet och
                omsorg om detaljen. Varje föremål vi gjuter bär spår av mänskliga händer –
                precis som det ska vara.
              </p>
              <Link to="/om-oss" className="btn btn--ghost">Läs mer om oss</Link>
            </div>
            <span
              className={`ghost-numeral ${styles['home-about__ghost']}`}
              aria-hidden="true"
            >
              1926
            </span>
          </div>
        </div>
      </section>

      {/* Products section */}
      <section className="block products-block">
        <div className="container">
          <div className={styles['home-products__header']}>
            <div className={styles['home-products__meta']}>
              <span className="batch-stamp">02</span>
              <p className="label">Sortiment</p>
              <h2 className={styles['home-products__heading']}>Våra produkter</h2>
            </div>
            <Link to="/produkter" className="btn btn--ghost">Se alla produkter</Link>
          </div>
          <div className={styles['home-products__grid']}>
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} number={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="block block--dark craft-block">
        <div className="container container-sm">
          <span className={styles['home-quote__rule']} aria-hidden="true" />
          <blockquote className={styles['home-quote__blockquote']}>
            <p className={styles['home-quote__text']}>
              "Vi värmer metallen till 1200 grader, packar sanden för hand runt gjutformen –
              precis som vi alltid har gjort. Det finns inga genvägar när man gjuter brons."
            </p>
            <footer>
              <span className={styles['home-quote__attribution']}>Hyltans Metall, Gnosjö</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA section */}
      <section className="block block--alt cta-block">
        <div className="container container-sm">
          <div className={styles['home-cta__inner']}>
            <span className="batch-stamp">03</span>
            <h2 className={styles['home-cta__heading']}>Behöver du något specialgjutet?</h2>
            <p className={styles['home-cta__text']}>
              Vi tar emot beställningar för specialtillverkning – allt från reservdelar till
              veteranbilar till konstnärliga skulpturer.
            </p>
            <Link to="/specialtillverkning" className="btn">Berätta om ditt projekt</Link>
          </div>
        </div>
      </section>
    </>
  );
}
