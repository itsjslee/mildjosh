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
    title: 'Coming Soon!',
    about: 'Thank you for your patience',
    image: 'duck.png',
    buttons: [],
    icons: [],
  },
]
