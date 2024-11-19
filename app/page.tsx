export const revalidate = 0

import { DomIconLink } from '@/components/DomIconLink'
import styles from './page.module.scss'
import { DomLink } from '@/components/DomLink'
import Link from 'next/link'
import Image from 'next/image'

const GITHUB_URL = 'https://github.com/itsjslee'
const LINKEDIN_URL = 'https://www.linkedin.com/in/mildjosh/'
const TWITTER_URL = 'https://twitter.com/mildfishX'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header>
          <div>
            <h1>Joshua Lee</h1>
            <h2>이서준</h2>

            <p className={styles.subtitle}>
              Day {getDay().toLocaleString()} on Earth
            </p>
          </div>

          <div className={styles.links}>
            <div className='flex gap-4 mt-4'>
              <DomLink href='https://github.com/itsjslee'>
                <Image
                  src='/icons/github.svg'
                  alt='GitHub'
                  width={36}
                  height={36}
                />
              </DomLink>
              <DomLink href='https://www.linkedin.com/in/mildjosh/'>
                <Image
                  src='/icons/linkedin.svg'
                  alt='LinkedIn'
                  width={36}
                  height={36}
                />
              </DomLink>
              <DomLink href='https://x.com/mildfishX'>
                <Image
                  src='/icons/twitter.svg'
                  alt='X'
                  width={36}
                  height={36}
                />
              </DomLink>
              <DomLink href='/resume.pdf'>
                <Image
                  src='/icons/resume.svg'
                  alt='Resume'
                  width={36}
                  height={36}
                />
              </DomLink>
            </div>
          </div>
        </header>

        <hr />
        <p>
          I am a hardware and firmware engineer at the{' '}
          <DomLink href='https://masa.engin.umich.edu/'>
           Michigan Aeronautical Science Association (MASA)
          </DomLink>{' '}
         working on the largest student built hybrid rocket{' '}
         <DomLink href='https://masa.engin.umich.edu/Limelight/'>
           Limelight
         </DomLink>. I am also a product studio engineer at{' '}
         <DomLink href='https://v1michigan.com/'>
           V1 Michigan
         </DomLink>. 
          I enjoy building and learning new things along the way.
        </p>

        <p>
          I attend the University of Michigan, studying electrical engineering and data science. I’m originally from the bay area but I currently live in Honolulu and Ann Arbor.
        </p>

        <p>
          <Link href='/projects'>Check out my projects</Link> or follow me on{' '}
          <DomLink href={GITHUB_URL}>GitHub</DomLink>,{' '}
          <DomLink href={LINKEDIN_URL}>LinkedIn</DomLink>, and{' '}
          <DomLink href={TWITTER_URL}>X</DomLink>.
        </p>
      </div>
    </div>
  )

  function getDay() {
    const start = new Date('2005-10-03T00:00:00-04:00')
    const ms = Date.now() - start.getTime()
    return Math.floor(ms / 1000 / 60 / 60 / 24)
  }
}
