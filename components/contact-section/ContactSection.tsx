import styles from './contact-section.module.scss';

export function ContactSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <h1>Contact</h1>
        <p>Feel free to reach out to me on any of the following platforms.</p>
      </div>
    </div>
  )
}