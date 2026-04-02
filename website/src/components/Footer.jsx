import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Built with ⚔️ for the <a href='https://l2reborn.org'>L2 Reborn</a> community &nbsp;·&nbsp;{' '}
        <a
          href="https://github.com/haswelldev/awesome-l2"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </p>
    </footer>
  )
}
