import photoImg from '/photo.png';
import styles from './LeadForm.module.css';

export default function LeadForm() {
  return (
    <section id={styles.bg_container}>
      <div className={styles.content_container}>
        <h1>Muse Group Frontend Academy</h1>
        <p>
          Our academy offers a transformative learning experience designed to
          empower you with the skills and knowledge needed to succeed in the
          ever-evolving field of frontend development.
        </p>
        <img id='photo' src={photoImg} />
        <p className='text_small'>
          Are you ready to turn your passion for technology into a thriving
          career?
        </p>
        <form className={styles.email_form}>
          <input type='email' name='email' placeholder='Email' required></input>
          <button>Join</button>
        </form>
      </div>
    </section>
  );
}
