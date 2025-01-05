'use client'
import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import Link from 'next/link'

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