import { products } from '../data/data';
import ProjectCard from './ui/ProjectCard';
import styles from './Products.module.css';

export default function Products() {
  return (
    <section className={styles.content_container}>
      <h1>Our Products</h1>
      <div className={styles.products_wrapper}>
        {products.map((x) => (
          <ProjectCard
            key={x.name}
            name={x.name}
            description={x.description}
            color={x.color}
          />
        ))}
      </div>
    </section>
  );
}
