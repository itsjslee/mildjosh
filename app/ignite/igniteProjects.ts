import { Project } from '../projects/projects'

export const igniteProjects: Project[] = [
  {
    title: 'Example Ignite Project',
    about: 'Description of your first Ignite project.',
    image: 'ignite-example.jpg', // Make sure to add this image to public/projects/
    buttons: [
      {
        label: 'Learn More',
        link: 'https://example.com',
      },
    ],
    icons: ['Example Tech', 'Another Tech'],
  },
  // Add more Ignite projects here...
] 