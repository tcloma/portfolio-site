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
      stack: ['TypeScript', 'React', 'Electron.js', 'ChakraUI'],
      description: 'Hover Note is a markdown sticky notes application designed to provide a more comprehensive and extensible experience when taking and referencing notes',
      previewLink: '/images/previews/hover-preview.png',
      demoLink: 'https://github.com/tcloma/Hover-Note-FIS'
   },
   {
      title: 'Flypto Crypto',
      stack: ['JavaScript', 'React', 'Ruby', 'Rails', 'SASS'],
      description: 'A mock crypto trading platform built on the idea of simplicity and transparency, with up to date prices & visualized currencry graphs',
      previewLink: '/images/previews/flypto-preview.png',
      demoLink: 'https://github.com/tcloma/Flypto-Crypto-FIS'
   },
   {
      title: 'Cosmo Quizzer',
      stack: ['JavaScript', 'React', 'Firebase', 'SASS'],
      description: 'A thematic quiz game where your role is to test the knowledge of different species throughout your galaxy in JavaScript and React.js programming!',
      previewLink: '/images/previews/cosmo-quizzer-preview.png',
      demoLink: 'https://github.com/tcloma/Cosmo-Quizzer-FIS'
   },
   {
      title: 'Kaijugochi',
      stack: ['JavaScript', 'Svelte', 'TailwindCSS', 'Go'],
      description: 'A simple browser game where you can create your own monster and care for it by feeding it other monsters that appear on screen',
      previewLink: '/images/previews/kaijugochi-preview.png',
      demoLink: 'https://github.com/tcloma/Monster-Game-FIS'
   },
]