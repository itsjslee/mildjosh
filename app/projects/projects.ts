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
    title: 'Gridlime',
    about: 'The flight controller for MASA\'s flagship rocket, Limelight.',
    image: 'gridlime.png',
    buttons: [
      {
        label: 'GitHub', 
        link: 'https://github.com/masa-umich/Rocket-Avionics',
      },
    ],
    icons: [
      'Altium',
      'KiCAD',
      'DigiKey'
    ],
  },
  {
    title: 'Limelive',
    about: 'An onboard camera system for MASA\'s flagship rocket, Limelight.',
    image: 'limelive1.png',
    buttons: [
    ],
    icons: [
      'Altium',
      'KiCAD',
      'DigiKey'
    ],
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
    title: 'Timescape',
    about: 'Countdown site for Team 2438 events in the 2025 FRC season: REEFSCAPE',
    image: 'timescape.png',
    buttons: [
      {
        label: 'GitHub', 
        link: 'https://github.com/itsjslee/timescape',
      },
      {
        label: 'Check it out', 
        link: 'https://timescape-nu.vercel.app',
      },
      
    ],
    icons: [
      'JavaScript',
      'HTML/CSS',
      'Vercel',
    ],
  },
  {
    title: 'Poppy',
    about: 'YouTube ad-blocking script',
    image: '',
    buttons: [
    ],
    icons: [
      'Currently Building'
    ],
  },
  {
    title: 'Seymour',
    about: 'A web tool allowing users to analyze historal stock trends in order to make market predictions.',
    image: 'seymour.png',
    buttons: [
      {
        label: 'GitHub', 
        link: 'https://github.com/itsjslee/Seymour',
      },
      {
        label: 'Try it out', 
        link: 'https://seymour.streamlit.app/.',
      },
    ],
    icons: [
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'Streamlit',
      'YFinance',
      'TA-LIB',
      'Python',
    ],
  },
  {
    title: 'EECS280',
    about: 'University of Michigan\'s Data Structures and Algorithms Class',
    image: 'eecs280.png',
    buttons: [
      {
        label: 'GitHub', 
        link: 'https://github.com/itsjslee/eecs280',
      },
    ],
    icons: [
      'C++',
      'Linux',
    ],
  },
  {
    title: 'Mobius',
    about: 'A thrust vector powered rocket designed for low flights and precision landing.',
    image: 'level.png',
    buttons: [],
    icons: [
      'Currently Building'
    ],
  },
  {
    title: 'AFX',
    about: 'A platform that allows students to invest in and predict their peers\' academic achievements.',
    image: 'afx.jpeg',
    buttons: [],
    icons: [
      'Currently Building'
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
  {
    title: 'Brickmania',
    about: 'A classic Brick Breaker game. My first computer science project!',
    image: 'brickmania.png',
    buttons: [
      {
        label: 'GitHub', 
        link: 'https://github.com/itsjslee/brickmania',
      },
    ],
    icons: [
      'Java',
      'Processing',
    ],
  },
]
