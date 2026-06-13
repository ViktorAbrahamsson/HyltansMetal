import { ProductCategory } from '@/data/products';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: ProductCategory;
  number: number;
}

export default function ProductCard({ product, number }: ProductCardProps) {
  const paddedNum = String(number).padStart(2, '0');

  return (
    <article className={styles.card}>
      <div className={styles.card__top}>
        <span className={`batch-stamp ${styles.card__stamp}`}>Nr {paddedNum}</span>
        <span className={styles.card__mark} aria-hidden="true" />
      </div>
      <h3 className={styles.card__title}>{product.title}</h3>
      <div className={styles.card__bottom}>
        <p className={styles.card__desc}>{product.description}</p>
        <span className={styles.card__rule} aria-hidden="true" />
      </div>
    </article>
  );
}
