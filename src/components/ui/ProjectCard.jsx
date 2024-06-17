import styles from './ProjectCard.module.css';

export default function ProjectCard({ name, description, color }) {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.cover} style={{ backgroundColor: color }} />
      <div className={styles.text_wrapper}>
        <div>
          <h2 className={styles.product_heading}>{name}</h2>
          <p>{description}</p>
        </div>
        <a className={styles.card_link}>Read more</a>
      </div>
    </div>
  );
}
