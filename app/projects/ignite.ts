type IgniteButton = {
    label: string
    link: string
  }
  
  export type Ignite = {
    title: string
    about: string
    image: string
    link?: string
    buttons: IgniteButton[]
    icons: string[]
  }