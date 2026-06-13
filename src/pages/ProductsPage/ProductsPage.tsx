import { Helmet } from 'react-helmet-async';
import ProductCard from '@/components/common/ProductCard/ProductCard';
import { productCategories } from '@/data/products';
import styles from './ProductsPage.module.scss';

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>Produkter – Hyltans Metall</title>
      </Helmet>

      {/* Header block */}
      <section className="block products-page-block">
        <div className="container">
          <div className={styles['products-page__header']}>
            <div className={styles['products-page__meta']}>
              <p className="label">Sortiment</p>
              <h1 className={styles['products-page__h1']}>Produkter</h1>
            </div>
            <p className={styles['products-page__intro']}>
              Alla våra produkter gjuts för hand i brons i vår verkstad i Gnosjö.
              Välj en kategori nedan eller kontakta oss för att beställa.
            </p>
          </div>
        </div>
      </section>

      {/* Grid section */}
      <section className={`block block--paper ${styles['products-page__grid-section']}`}>
        <div className="container">
          <div className={styles['products-page__grid']}>
            {productCategories.map((product, i) => (
              <ProductCard key={product.id} product={product} number={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
