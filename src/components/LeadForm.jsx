import photoImg from '/photo.png';
import photoImgMobile from '/photo-mobile.png';
import styles from './LeadForm.module.css';

export default function LeadForm() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    if (!emailRegex.test(email)) {
      alert('Email is invalid');
      return;
    }
    alert('Welcome to the team!');
  };

  return (
    <section id={styles.bg_container}>
      <div className={styles.content_container}>
        <h1>Muse Group Frontend Academy</h1>
        <p>
          Our academy offers a transformative learning experience designed to
          empower you with the skills and knowledge needed to succeed in the
          ever-evolving field of frontend development.
        </p>

        <picture>
          <source media='(max-width: 386px)' srcSet={photoImgMobile} />
          <source media='(min-width: 385px)' srcSet={photoImg} />
          <img
            className={styles.photo}
            src={photoImg}
            alt='a photo of person playing guitar on a bed with posters and plants'
          />
        </picture>

        <p className='text_small'>
          Are you ready to turn your passion for technology into a thriving
          career?
        </p>
        <form className={styles.email_form} onSubmit={handleSubmit}>
          <input
            className={styles.form_input}
            type='email'
            name='email'
            placeholder='Email'
            required
          ></input>
          <button className={styles.form_button} type='submit'>
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
