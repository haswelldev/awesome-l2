import Header from './components/Header.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import Footer from './components/Footer.jsx'
import { projects } from './data/projects.js'
import styles from './styles/App.module.css'

export default function App() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <p className={styles.subtitle}>
          A curated collection of tools and utilities for{' '}
          <span className={styles.highlight}>Lineage II</span> players and communities.
        </p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
