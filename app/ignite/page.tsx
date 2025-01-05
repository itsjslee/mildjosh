import { Project as ProjectType } from '../projects/projects'
import styles from '../page.module.scss'
import Link from 'next/link'

export const revalidate = 0

export default function Ignite() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header>
          <div>
            <h1>Ignite</h1>
            <p className={styles.subtitle}>
              Breaking barriers for entry into STEM education
            </p>
          </div>
        </header>

        <hr />

        <p>
          <Link href='/'>← Return to homepage</Link>
        </p>

        {/* Add your Ignite content here, following the same structure as your projects page */}
        <p>
          ...
          {/* Add more details about Ignite */}
        </p>

      </div>
    </div>
  )
}