import styles from './ProjectCard.module.css'

export default function ProjectCard({ name, description, color }) {
  return (
    <div className={styles.card_wrapper}>
      <h4>{name}</h4>
      <p>{description}</p>
      <a className={styles.card_link}>Read more</a>
    </div>
  );
}
