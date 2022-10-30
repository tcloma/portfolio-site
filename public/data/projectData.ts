export interface IProjData {
   title: string,
   stack: string[],
   description: string,
   previewLink: string,
   demoLink: string
}

export const projectData: Array<IProjData> = [
   {
      title: 'Hover Note',
      stack: ['TypeScript', 'React', 'Redux', 'Electron.js', 'ChakraUI'],
      description: 'Hover Note is a markdown sticky notes application designed to provide a more comprehensive and extensible experience when taking and refercing notes',
      previewLink: '',
      demoLink: ''
   },
   {
      title: 'Flypto Crypto',
      stack: ['JavaScript', 'React', 'Ruby', 'Rails', 'SASS'],
      description: 'A mock crypto trading platform built on the idea of simplicity and transparency',
      previewLink: '',
      demoLink: ''
   },
   {
      title: 'Kaijugochi',
      stack: ['Svelte', 'TailwindCSS', 'Go'],
      description: 'A simple browser game where you can create your own monster and keep it alive by feeding it other monsters as the game gets progressively harder',
      previewLink: '',
      demoLink: ''
   },
   {
      title: 'Cosmo Quizzer',
      stack: ['React', 'Firebase', 'SASS'],
      description: 'A thematic quiz game where your role is to test the intelligence of different species throughout your galaxy!',
      previewLink: '',
      demoLink: ''
   }
]