import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.titleRow}>
          <span className={styles.icon}>⚔️</span>
          <h1 className={styles.title}>Awesome Lineage II</h1>
          <span className={styles.icon}>🛡️</span>
        </div>
        <a
          href="https://awesome.re"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.awesomeBadge}
        >
          <img src="https://awesome.re/badge.svg" alt="Awesome" />
        </a>
      </div>
    </header>
  )
}
