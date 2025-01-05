'use client'
import styles from './page.module.scss'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Project } from '../projects/Project'
import { igniteProjects } from './igniteProjects'

const inter = Inter({ subsets: ['latin'] })

export default function Ignite() {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <div className={styles.header}>
        <Link href='/' className='link'>
          &larr; Return to homepage
        </Link>
      </div>
      <div className={styles.content}>
        <h1>Ignite</h1>
        <div className={styles.projectsWrapper}>
          <div className={styles.projects}>
            {igniteProjects.map((project, i) => (
              <Project project={project} key={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        html,
        body {
          background-color: #fff;
          color: #000;
        }
      `}</style>
    </div>
  )
}