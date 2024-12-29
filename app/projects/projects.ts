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
    title: 'Limelive',
    about: 'An onboard camera system for MASA\'s flagship rocket, Limelight.',
    image: 'limelive1.png',
    buttons: [
      {
        label: 'Schematic', 
        link: 'public/projects/JoshLimeliveMVP.kicad_pro',
      }
    ],
    icons: [],
  },
  {
    title: 'Courtline',
    about: 'An automated queueing system for badminton courts at the University of Michigan\'s North Campus Recreational Building (NCRB).',
    image: 'courtline.png',
    buttons: [
      {
        label: 'GitHub', 
        link: 'https://github.com/amyliiu/mqueue',
      },
      {
        label: 'Try it out', 
        link: 'https://mqueue-six.vercel.app',
      },
      {
        label: 'Pitch', 
        link: 'courtline.pdf',
      },
    ],
    icons: [
      'React',
      'Next.js',
      'Figma',
      'Vercel',
      'Twilio',
      'OnRender',
      'Python',
      'TypeScript'
    ],
  },
  {
    title: 'Juggernaut',
    about: 'A custom designed and fabricated rocket reaching an altitude of 2,200 feet earning me Level 1 Certification from the National Association of Rocketry.',
    image: 'juggernaut.jpg',
    buttons: [
      {
        label: 'GitHub', 
        link: 'https://github.com/itsjslee/Level.Rockets-Juggernaut',
      },
      {
        label: 'Docs', 
        link: '',
      },
      {
        label: 'Flight', 
        link: 'https://www.youtube.com/watch?v=XSKkyKsEFgg',
      },
      
    ],
    icons: [
      'C++',
      'LoRa',
      'OpenRocket',
      'OnShape',
    ],
  },
  {
    title: 'Mobius',
    about: 'A thrust vector powered rocket designed for low flights and precision landing.',
    image: 'level.png',
    buttons: [],
    icons: [],
  },
  {
    title: 'AFX',
    about: 'A platform that allows students to invest in and predict their peers\' academic achievements.',
    image: 'afx.jpeg',
    buttons: [],
    icons: [
      'React',
      'Next.js',
      'Figma',
      'Vercel',
      'Python',
      'TypeScript'
    ],
  },
  {
    title: 'Barton',
    about: 'An ML-powered tool that detects pneumonia from lung scans with 85% accuracy.',
    image: 'xray.jpg',
    buttons: [
      {
        label: 'GitHub', 
        link: 'https://github.com/itsjslee/2023Research',
      },
      {
        label: 'Research', 
        link: 'Barton.pdf',
      },
    ],
    icons: [
      'Jupyter',
      'Python',
      'Kaggle',
      'TensorFlow',
      'VGG-16'
    ],
  },
]
