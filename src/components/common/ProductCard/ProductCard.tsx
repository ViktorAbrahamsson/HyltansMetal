import { Link } from 'react-router-dom';
import { ProductCategory } from '@/data/products';
import Figure from '@/components/common/Figure/Figure';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: ProductCategory;
  /** Load this card's photo eagerly — for the first card in view. */
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className={styles.card}>
      {/* The whole card is the target, so the link would otherwise be
          announced as the title and the description run together. */}
      <Link
        to={`/produkter/${product.slug}`}
        className={styles['card__link']}
        aria-label={product.title}
      >
        {product.image && (
          <Figure
            image={product.image}
            alt={product.imageAlt ?? product.title}
            ratio="landscape"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            priority={priority}
            className={styles['card__media']}
          />
        )}
        <div className={styles['card__body']}>
          <h3 className={styles.card__title}>{product.title}</h3>
          <div className={styles.card__bottom}>
            <p className={styles.card__desc}>{product.description}</p>
            <span className={styles.card__rule} aria-hidden="true" />
          </div>
        </div>
      </Link>
    </article>
  );
}
