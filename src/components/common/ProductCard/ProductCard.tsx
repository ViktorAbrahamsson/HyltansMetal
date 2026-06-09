import type { ProductCategory } from '@/data/products';
import styles from './ProductCard.module.scss';

interface Props {
  product: ProductCategory;
}

export default function ProductCard({ product }: Props) {
  return (
    <article className={styles.product_card}>
      <div className={styles.product_card__image_wrapper}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.product_card__image}
          loading="lazy"
        />
      </div>
      <div className={styles.product_card__body}>
        <h3 className={styles.product_card__title}>{product.title}</h3>
        <p className={styles.product_card__description}>{product.description}</p>
      </div>
    </article>
  );
}
