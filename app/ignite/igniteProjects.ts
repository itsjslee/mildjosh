import { Project } from '../projects/projects'

export const igniteProjects: Project[] = [
  {
    title: 'Ho\'okumu',
    about: '<i>Establishing</i> our roots both near and far',
    image: '', // Make sure to add this image to public/projects/
    buttons: [
      {
        label: 'See our work',
        link: 'https://youtu.be/2aDiVcGs7oU',
      },
    ],
    icons: ['2024', 'Waimānalo, HI'],
  },
  {
    title: 'Ho\'oku\'i',
    about: '<i>Connecting</i> communities through storytelling',
    image: '', // Make sure to add this image to public/projects/
    buttons: [
      {
        label: 'See our work',
        link: 'https://www.youtube.com./watch?v=zxPKAzMs6n8',
      },
    ],
    icons: ['2023', 'Dakwäkäda, CA'],
  },
  {
    title: 'Holomua',
    about: 'Pushing <i>onward</i> and breaking barriers',
    image: '', // Make sure to add this image to public/projects/
    buttons: [
      {
        label: 'See our work',
        link: 'https://www.youtube.com./watch?v=vyHpaJ-se2M',
      },
    ],
    icons: ['2022', 'Rotorua, NZ'],
  },
] 

// Add a CSS class to ensure full width and centering
const igniteProjectsStyle = {
  width: '100%', // Ensure full width
  display: 'flex',
  justifyContent: 'center', // Center the content
  // Add any additional styles as needed
};

// Use this style in your component rendering
// <div style={igniteProjectsStyle}>
//   ... render your projects ...
// </div> 