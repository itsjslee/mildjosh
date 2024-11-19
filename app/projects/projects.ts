type ProjectButton = {
  label: string
  link: string
}

export type Project = {
  title: string
  about: string
  image: string
  link?: string
  buttons: ProjectButton[]
  icons: string[]
}

export const projects: Project[] = [
  {
    title: 'Mobius',
    about: 'A thrust vector powered rocket designed for low flights and precision landing.',
    image: 'duck.png',
    buttons: [],
    icons: [],
  },
  {
    title: 'Juggernaut',
    about: 'A custom designed and fabricated rocket reaching an altitude of 2,200 feet earning me Level 1 Certification from the National Association of Rocketry.',
    image: 'duck.png',
    buttons: [],
    icons: [],
  },
  {
    title: 'MQueue',
    about: 'An automated queueing system for badminton courts at the University of Michigan\'s North Campus Recreational Building (NCRB).',
    image: 'duck.png',
    buttons: [],
    icons: [],
  },
  {
    title: 'AFX',
    about: 'A platform that allows students to invest in and predict their peers\' academic achievements.',
    image: 'duck.png',
    buttons: [],
    icons: [],
  },
  {
    title: 'Barton',
    about: 'An ML-powered tool that detects pneumonia from lung scans with 85% accuracy.',
    image: 'duck.png',
    buttons: [],
    icons: [],
  },
]
