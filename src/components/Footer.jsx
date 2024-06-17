import styles from './Footer.module.css';
import fbLogo from '/social_logos/facebook.svg';
import tgLogo from '/social_logos/telegramm.svg';
import instaLogo from '/social_logos/instagramm.svg';
import linkedInLogo from '/social_logos/linkedIn.svg';

export default function Footer() {
  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.socials_list}>
        <a className={styles.social_icon}>
          <img src={instaLogo} alt='instagramm icon link' />
        </a>
        <a className={styles.social_icon}>
          <img src={tgLogo} alt='telegramm icon link' />
        </a>
        <a className={styles.social_icon}>
          <img src={linkedInLogo} alt='linkedIn icon link' />
        </a>
        <a className={styles.social_icon}>
          <img src={fbLogo} alt='facebook icon link' />
        </a>
      </div>
      <p className={styles.footer_text}>
        You&apos;re not just a student - you&apos;re part of a vibrant community
        of like-minded individuals united by a passion for frontend development.
        Collaborate, innovate, and grow alongside fellow learners and industry
        professionals as you embark on this exciting journey together.
      </p>
      <div className={styles.links_list}>
        <a className={styles.footer_link}>Help Center</a>
        <a className={styles.footer_link}>Privacy Policy</a>
        <a className={styles.footer_link}>Terms of Service</a>
      </div>
    </footer>
  );
}
