import { typeConfig } from '../data/projects.js'
import styles from '../styles/ProjectCard.module.css'

function LinkButton({ href, label, variant }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.btn} ${styles[variant]}`}
    >
      {label}
    </a>
  )
}

export default function ProjectCard({ project }) {
  const { name, description, type, tags, links, developer } = project
  const meta = typeConfig[type]

  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.typeBadge} style={{ background: meta.color }}>
          {meta.label}
        </span>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.cardBottom}>
        <p className={styles.developer}>by {developer}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.buttons}>
          {links.repo && (
            <LinkButton href={links.repo} label="GitHub" variant="btnRepo" />
          )}
          {links.webapp && (
            <LinkButton href={links.webapp} label="Open App" variant="btnWebapp" />
          )}
          {links.download && (
            <LinkButton href={links.download} label="Download" variant="btnDownload" />
          )}
          {links.docker && (
            <LinkButton href={links.docker} label="Docker" variant="btnDocker" />
          )}
        </div>
      </div>
    </article>
  )
}
