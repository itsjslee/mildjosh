import styles from '../../page.module.scss'
import { DomLink } from '@/components/DomLink'

export default function IgnitePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header>
          <h1>Ignite</h1>
          <p className={styles.subtitle}>Breaking barriers for entry into STEM education</p>
        </header>

        <hr />

        <p>
          As the technical lead and head of global partnerships at Ignite, I led a team
          focused on making STEM education more accessible to students worldwide.
        </p>

        {/* Add more content about the Ignite project here */}

        <p>
          <DomLink href="/">← Back to home</DomLink>
        </p>
      </div>
    </div>
  )
} 