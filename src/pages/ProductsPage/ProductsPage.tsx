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

      <section className="block products-page-block">
        <div className="container">
          <div className={styles.page_header}>
            <p className="label">Sortiment</p>
            <h1 className={styles.page_title}>Produkter</h1>
            <p className={styles.page_intro}>
              Alla våra produkter gjuts för hand i brons i vår verkstad i Gnosjö.
              Välj en kategori nedan eller kontakta oss för att beställa.
            </p>
          </div>

          <div className={styles.grid}>
            {productCategories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
