import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import Figure from '@/components/common/Figure/Figure';
import { getCategoryBySlug, productCategories } from '@/data/products';
import styles from './ProductCategoryPage.module.scss';

const ITEM_SIZES = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw';

export default function ProductCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug);

  // An unknown slug is a bad link rather than a page — send it back to the
  // index without leaving a dead entry in the history stack.
  if (!category) return <Navigate to="/produkter" replace />;

  const others = productCategories.filter((c) => c.id !== category.id);

  return (
    <>
      <Helmet>
        <title>{`${category.title}. Hyltans Metall`}</title>
        <meta name="description" content={category.description} />
      </Helmet>

      {/* Intro block */}
      <section className="block product-category-block">
        <div className="container container-sm page-intro">
          <nav
            className={styles['product-category__crumbs']}
            aria-label="Brödsmulor"
          >
            <Link to="/produkter" className={styles['product-category__crumb-link']}>
              Produkter
            </Link>
            <span aria-hidden="true">·</span>
            <span>{category.title}</span>
          </nav>

          <h1 className={styles['product-category__h1']}>{category.title}</h1>
          <p className="page-intro__lead">{category.description}</p>
        </div>
      </section>

      {/* Items */}
      <section className={`block block--paper product-category-items-block ${styles['product-category__items-block']}`}>
        <div className="container">
          <ul className={styles['product-category__grid']}>
            {category.items.map((item, i) => (
              <li key={item.id} className={styles['product-category__item']}>
                {item.image ? (
                  <Figure
                    image={item.image}
                    alt={item.imageAlt ?? item.title ?? category.title}
                    ratio="landscape"
                    sizes={ITEM_SIZES}
                    priority={i === 0}
                    className={styles['product-category__item-media']}
                  />
                ) : (
                  // No photo yet. Reserve the same box the Figure would take so
                  // the grid keeps its shape and dropping a photo in later
                  // shifts nothing.
                  <div
                    className={styles['product-category__item-placeholder']}
                    aria-hidden="true"
                  >
                    <span className={styles['product-category__item-slot']}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={styles['product-category__item-pending']}>
                      Foto kommer
                    </span>
                  </div>
                )}

                <p className={styles['product-category__item-title']}>
                  {item.title ?? `${category.itemNoun} ${i + 1}`}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Enquiry block */}
      <section className={`block block--dark product-category-cta-block ${styles['product-category__cta-block']}`}>
        <div className="container container-xs">
          <div className={styles['product-category__cta-inner']}>
            <h2 className={styles['product-category__cta-h2']}>
              Intresserad av {category.title.toLowerCase()}?
            </h2>
            <p className={styles['product-category__cta-text']}>
              Vi tillverkar på beställning. Hör av dig så återkommer vi med pris
              och leveranstid.
            </p>
            <Link to="/kontakt" className="btn btn--light">
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>

      {/* Sibling categories */}
      <section className={`block product-category-more-block ${styles['product-category__more-block']}`}>
        <div className="container container-sm">
          <h2 className={styles['product-category__more-h2']}>Fler kategorier</h2>
          <ul className={styles['product-category__more-list']}>
            {others.map((other) => (
              <li key={other.id}>
                <Link
                  to={`/produkter/${other.slug}`}
                  className={styles['product-category__more-link']}
                >
                  {other.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
